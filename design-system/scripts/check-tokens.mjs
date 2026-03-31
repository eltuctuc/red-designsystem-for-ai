import path from "node:path";
import { fileURLToPath } from "node:url";
import { listFilesRecursive, readJson, toPosixPath } from "./_fs.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const CONTRACTS_DIR = path.join(ROOT, "contracts");
const PATTERNS_DIR = path.join(ROOT, "patterns");
const TOKENS_SRC = path.join(ROOT, "tokens", "src");

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function deepMerge(base, override) {
  if (!isObject(base) || !isObject(override)) return override ?? base;
  const result = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (key in base) result[key] = deepMerge(base[key], value);
    else result[key] = value;
  }
  return result;
}

function isTokenNode(node) {
  return isObject(node) && "$value" in node;
}

function collectTokenPaths(root, prefix = []) {
  const out = new Set();
  function walk(current, currentPath) {
    if (!isObject(current)) return;
    if (isTokenNode(current)) {
      out.add(currentPath.join("."));
      return;
    }
    for (const [key, value] of Object.entries(current)) {
      if (key.startsWith("$")) continue;
      walk(value, [...currentPath, key]);
    }
  }
  walk(root, prefix);
  return out;
}

function parseReference(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) return null;
  const inner = trimmed.slice(1, -1).trim();
  if (!inner) return null;
  return inner.split(".").map((s) => s.trim()).filter(Boolean);
}

function getNodeAtPath(root, tokenPath) {
  let current = root;
  for (const seg of tokenPath) {
    if (!isObject(current) || !(seg in current)) return undefined;
    current = current[seg];
  }
  return current;
}

function resolveTokenValue(root, tokenPath, resolving = new Set()) {
  const key = tokenPath.join(".");
  if (resolving.has(key)) throw new Error(`Cyclic token reference detected at "${key}".`);
  resolving.add(key);

  const node = getNodeAtPath(root, tokenPath);
  if (!isTokenNode(node)) throw new Error(`Token not found or invalid at "${key}".`);

  const refPath = parseReference(node.$value);
  if (!refPath) {
    resolving.delete(key);
    return node.$value;
  }

  const resolved = resolveTokenValue(root, refPath, resolving);
  resolving.delete(key);
  return resolved;
}

function extractTokenUsage(obj) {
  const tokens = [];
  if (Array.isArray(obj?.token_usage)) {
    for (const entry of obj.token_usage) {
      if (entry?.token) tokens.push(entry.token);
    }
  }
  return tokens;
}

async function main() {
  const primitivesFile = await readJson(path.join(TOKENS_SRC, "primitives.json"));
  const primitives = primitivesFile.primitives ?? primitivesFile;
  const light = await readJson(path.join(TOKENS_SRC, "themes", "light.json"));
  const dark = await readJson(path.join(TOKENS_SRC, "themes", "dark.json"));

  const lightTokens = deepMerge({ primitives }, light);
  const darkTokens = deepMerge({ primitives }, dark);

  // Ensure all token references are resolvable (both themes).
  for (const merged of [lightTokens, darkTokens]) {
    const semanticPaths = collectTokenPaths(merged.semantic ?? {}, ["semantic"]);
    const primitivePaths = collectTokenPaths(merged.primitives ?? {}, ["primitives"]);
    for (const p of [...semanticPaths, ...primitivePaths]) {
      resolveTokenValue(merged, p.split("."));
    }
  }

  const availableLight = new Set([
    ...collectTokenPaths(lightTokens.semantic ?? {}, ["semantic"]),
    ...collectTokenPaths(lightTokens.primitives ?? {}, ["primitives"])
  ]);
  const availableDark = new Set([
    ...collectTokenPaths(darkTokens.semantic ?? {}, ["semantic"]),
    ...collectTokenPaths(darkTokens.primitives ?? {}, ["primitives"])
  ]);

  const contractFiles = (await listFilesRecursive(CONTRACTS_DIR, { ext: ".json" })).filter((f) =>
    toPosixPath(f).endsWith("/contract.json")
  );
  const patternFiles = (await listFilesRecursive(PATTERNS_DIR, { ext: ".json" })).filter((f) =>
    toPosixPath(f).endsWith("/pattern.json")
  );

  const missing = [];
  for (const filePath of [...contractFiles, ...patternFiles]) {
    const data = await readJson(filePath);
    const used = extractTokenUsage(data);
    for (const token of used) {
      if (typeof token !== "string") continue;
      const normalized = token.startsWith("semantic.") || token.startsWith("primitives.") ? token : null;
      if (!normalized) continue;
      const inLight = availableLight.has(normalized);
      const inDark = availableDark.has(normalized);
      if (!inLight || !inDark) {
        missing.push({ filePath, token, inLight, inDark });
      }
    }
  }

  if (missing.length) {
    for (const m of missing) {
      console.error(
        `Missing token reference: ${m.token} in ${m.filePath} (light=${m.inLight}, dark=${m.inDark})`
      );
    }
    process.exit(1);
  }

  process.stdout.write("OK: token checks.\n");
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exitCode = 1;
});

