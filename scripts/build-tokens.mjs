import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const TOKENS_SRC = path.join(ROOT, "tokens", "src");
const TOKENS_DIST = path.join(ROOT, "tokens", "dist");

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

function toKebab(input) {
  return String(input)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function pathToVarName(tokenPath) {
  const kebab = tokenPath.map(toKebab).join("-");
  return `--ds-${kebab}`;
}

function isTokenNode(node) {
  return isObject(node) && "$value" in node;
}

function getNodeAtPath(root, tokenPath) {
  let current = root;
  for (const segment of tokenPath) {
    if (!isObject(current) || !(segment in current)) return undefined;
    current = current[segment];
  }
  return current;
}

function parseReference(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) return null;
  const inner = trimmed.slice(1, -1).trim();
  if (!inner) return null;
  return inner.split(".").map((s) => s.trim()).filter(Boolean);
}

function resolveTokenValue(root, tokenPath, resolving = new Set()) {
  const key = tokenPath.join(".");
  if (resolving.has(key)) {
    throw new Error(`Cyclic token reference detected at "${key}".`);
  }
  resolving.add(key);

  const node = getNodeAtPath(root, tokenPath);
  if (!isTokenNode(node)) {
    throw new Error(`Token not found or invalid at "${key}".`);
  }

  const refPath = parseReference(node.$value);
  if (!refPath) {
    resolving.delete(key);
    return node.$value;
  }

  const resolved = resolveTokenValue(root, refPath, resolving);
  resolving.delete(key);
  return resolved;
}

function flattenTokens(root, { includePrimitives = true } = {}) {
  /** @type {Array<{tokenPath: string[], node: any}>} */
  const leaves = [];

  function walk(current, currentPath) {
    if (!isObject(current)) return;
    if (isTokenNode(current)) {
      leaves.push({ tokenPath: currentPath, node: current });
      return;
    }
    for (const [key, value] of Object.entries(current)) {
      if (key.startsWith("$")) continue;
      walk(value, [...currentPath, key]);
    }
  }

  const semantic = root.semantic ?? {};
  const primitives = root.primitives ?? {};

  walk(semantic, ["semantic"]);

  if (includePrimitives) walk(primitives, ["primitives"]);

  // De-duplicate (some themes might choose different top-level organization)
  const unique = new Map();
  for (const leaf of leaves) unique.set(leaf.tokenPath.join("."), leaf);
  return [...unique.values()];
}

function buildThemeCss({ rootTokens, themeName, selector }) {
  const leaves = flattenTokens(rootTokens, { includePrimitives: true });

  /** @type {Array<[string,string]>} */
  const vars = [];

  for (const { tokenPath } of leaves) {
    // Example outputs:
    // --ds-semantic-color-bg-surface
    // --ds-primitives-color-neutral-0
    const varName = pathToVarName(tokenPath);

    // tokenPath might start with "semantic" or "primitives". We resolve against merged token tree:
    // - "primitives.foo.bar" resolves to primitives.foo.bar
    // - "semantic.foo.bar" resolves to semantic.foo.bar
    // For convenience, map these prefixes.
    let lookupPath = tokenPath;
    if (tokenPath[0] === "primitives") lookupPath = ["primitives", ...tokenPath.slice(1)];
    else if (tokenPath[0] === "semantic") lookupPath = ["semantic", ...tokenPath.slice(1)];
    else if (tokenPath[0] === "color" && tokenPath[1] === "semantic") lookupPath = ["semantic", ...tokenPath.slice(2)];

    const value = resolveTokenValue(rootTokens, lookupPath);
    vars.push([varName, String(value)]);
  }

  vars.sort((a, b) => a[0].localeCompare(b[0]));

  const lines = [];
  lines.push(`/* Generated: ${new Date().toISOString()} */`);
  lines.push(`/* Theme: ${themeName} */`);
  lines.push(`${selector} {`);
  for (const [name, value] of vars) {
    lines.push(`  ${name}: ${value};`);
  }
  lines.push(`}`);
  lines.push("");

  return { css: lines.join("\n"), vars: Object.fromEntries(vars) };
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function writeFile(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, "utf8");
}

async function main() {
  const primitivesFile = await readJson(path.join(TOKENS_SRC, "primitives.json"));
  const light = await readJson(path.join(TOKENS_SRC, "themes", "light.json"));
  const dark = await readJson(path.join(TOKENS_SRC, "themes", "dark.json"));

  const primitives = primitivesFile.primitives ?? primitivesFile;

  // Build merged token trees per theme.
  const lightTokens = deepMerge({ primitives }, light);
  const darkTokens = deepMerge({ primitives }, dark);

  const lightOut = buildThemeCss({
    rootTokens: lightTokens,
    themeName: "light",
    selector: ':root[data-theme="light"]'
  });

  const darkOut = buildThemeCss({
    rootTokens: darkTokens,
    themeName: "dark",
    selector: ':root[data-theme="dark"]'
  });

  await fs.mkdir(TOKENS_DIST, { recursive: true });

  await writeFile(path.join(TOKENS_DIST, "theme.light.css"), lightOut.css);
  await writeFile(path.join(TOKENS_DIST, "theme.dark.css"), darkOut.css);
  await writeFile(path.join(TOKENS_DIST, "theme.css"), `${lightOut.css}\n${darkOut.css}`);

  await writeFile(path.join(TOKENS_DIST, "vars.light.json"), JSON.stringify(lightOut.vars, null, 2) + "\n");
  await writeFile(path.join(TOKENS_DIST, "vars.dark.json"), JSON.stringify(darkOut.vars, null, 2) + "\n");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
