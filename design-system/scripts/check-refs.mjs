import path from "node:path";
import { fileURLToPath } from "node:url";
import { listFilesRecursive, readJson, toPosixPath } from "./_fs.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const CONTRACTS_DIR = path.join(ROOT, "contracts");
const PATTERNS_DIR = path.join(ROOT, "patterns");

function collectIds(items) {
  const ids = new Map();
  for (const { id, filePath } of items) {
    if (ids.has(id)) {
      throw new Error(`Duplicate id "${id}" in:\n- ${ids.get(id)}\n- ${filePath}`);
    }
    ids.set(id, filePath);
  }
  return ids;
}

async function readContracts() {
  const contractFiles = (await listFilesRecursive(CONTRACTS_DIR, { ext: ".json" })).filter((f) =>
    toPosixPath(f).endsWith("/contract.json")
  );
  return Promise.all(
    contractFiles.map(async (filePath) => {
      const data = await readJson(filePath);
      const folder = path.basename(path.dirname(filePath));
      if (data.id !== folder) {
        throw new Error(`Contract id mismatch: ${filePath}\n  id="${data.id}" folder="${folder}"`);
      }
      return { id: data.id, filePath, data };
    })
  );
}

async function readPatterns() {
  const patternFiles = (await listFilesRecursive(PATTERNS_DIR, { ext: ".json" })).filter((f) =>
    toPosixPath(f).endsWith("/pattern.json")
  );
  return Promise.all(
    patternFiles.map(async (filePath) => {
      const data = await readJson(filePath);
      const folder = path.basename(path.dirname(filePath));
      if (data.id !== folder) {
        throw new Error(`Pattern id mismatch: ${filePath}\n  id="${data.id}" folder="${folder}"`);
      }
      return { id: data.id, filePath, data };
    })
  );
}

async function main() {
  const contracts = await readContracts();
  const patterns = await readPatterns();

  const contractIds = collectIds(contracts);
  collectIds(patterns);

  for (const p of patterns) {
    const used = p.data.uses_contracts ?? [];
    for (const id of used) {
      if (!contractIds.has(id)) {
        throw new Error(`Pattern references missing contract "${id}": ${p.filePath}`);
      }
    }
  }

  process.stdout.write("OK: reference checks.\n");
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exitCode = 1;
});

