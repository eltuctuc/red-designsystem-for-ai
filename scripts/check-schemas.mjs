import path from "node:path";
import { fileURLToPath } from "node:url";
import { listFilesRecursive, readJson, toPosixPath } from "./_fs.mjs";

let Ajv;
try {
  ({ default: Ajv } = await import("ajv/dist/2020.js"));
} catch {
  console.error(
    "Missing dependency: ajv. Run `npm install` in the repo root to enable JSON Schema validation."
  );
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const SCHEMAS_DIR = path.join(ROOT, "schemas");
const CONTRACTS_DIR = path.join(ROOT, "contracts");
const PATTERNS_DIR = path.join(ROOT, "patterns");
const RULES_FILE = path.join(ROOT, "rules", "rules.json");
const TOKENS_DIR = path.join(ROOT, "tokens", "src");

function schemaNameForFile(filePath) {
  const p = toPosixPath(filePath);
  if (p.includes("/contracts/") && p.endsWith("/contract.json")) return "contract.schema.json";
  if (p.includes("/patterns/") && p.endsWith("/pattern.json")) return "pattern.schema.json";
  if (p.endsWith("/rules/rules.json")) return "rules.schema.json";
  if (p.includes("/tokens/src/") && p.endsWith(".json")) return "tokens.schema.json";
  return null;
}

async function main() {
  const ajv = new Ajv({ allErrors: true, strict: false });

  const schemas = {};
  for (const name of ["contract.schema.json", "pattern.schema.json", "rules.schema.json", "tokens.schema.json"]) {
    const schemaPath = path.join(SCHEMAS_DIR, name);
    schemas[name] = await readJson(schemaPath);
    ajv.addSchema(schemas[name], name);
  }

  const files = [
    ...(await listFilesRecursive(CONTRACTS_DIR, { ext: ".json" })),
    ...(await listFilesRecursive(PATTERNS_DIR, { ext: ".json" })),
    RULES_FILE,
    ...(await listFilesRecursive(TOKENS_DIR, { ext: ".json" }))
  ];

  const failures = [];
  for (const filePath of files) {
    const schemaName = schemaNameForFile(filePath);
    if (!schemaName) continue;
    const data = await readJson(filePath);
    const validate = ajv.getSchema(schemaName);
    if (!validate) throw new Error(`Schema not found in AJV: ${schemaName}`);
    const ok = validate(data);
    if (!ok) {
      failures.push({
        filePath,
        schemaName,
        errors: validate.errors ?? []
      });
    }
  }

  if (failures.length) {
    for (const f of failures) {
      console.error(`Schema validation failed: ${f.filePath} (schema: ${f.schemaName})`);
      for (const e of f.errors) {
        console.error(`  - ${e.instancePath || "/"}: ${e.message}`);
      }
    }
    process.exit(1);
  }

  process.stdout.write("OK: schema validation.\n");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
