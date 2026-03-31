import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { listFilesRecursive, readJson, toPosixPath } from "./_fs.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const CONTRACTS_DIR = path.join(ROOT, "contracts");
const PATTERNS_DIR = path.join(ROOT, "patterns");
const OUT_DIR = path.join(ROOT, "docs", "generated");

function mdEscape(s) {
  return String(s).replace(/\|/g, "\\|");
}

function renderContract(contract) {
  const lines = [];
  lines.push(`# ${contract.title} (\`${contract.id}\`)`);
  if (contract.description) lines.push(`\n${contract.description}`);
  lines.push("");

  lines.push("## Props");
  if (!contract.props?.length) lines.push("\n- (none)");
  else {
    lines.push("\n| Name | Type | Required | Default | Description |");
    lines.push("|---|---|---:|---|---|");
    for (const p of contract.props) {
      const t = typeof p.type === "string" ? p.type : JSON.stringify(p.type);
      lines.push(
        `| \`${mdEscape(p.name)}\` | \`${mdEscape(t)}\` | ${p.required ? "yes" : "no"} | ${
          p.default === undefined ? "" : `\`${mdEscape(JSON.stringify(p.default))}\``
        } | ${mdEscape(p.description ?? "")} |`
      );
    }
  }

  lines.push("\n## States");
  if (!contract.states?.length) lines.push("\n- (none)");
  else for (const s of contract.states) lines.push(`- \`${s.name}\`: ${s.description}`);

  lines.push("\n## A11y");
  lines.push("\n### Keyboard");
  for (const k of contract.a11y?.keyboard ?? []) lines.push(`- ${k}`);
  lines.push("\n### ARIA");
  for (const a of contract.a11y?.aria ?? []) lines.push(`- ${a}`);

  lines.push("\n## Invariants");
  lines.push("\n### Must");
  for (const m of contract.invariants?.must ?? []) lines.push(`- ${m}`);
  lines.push("\n### Should");
  for (const s of contract.invariants?.should ?? []) lines.push(`- ${s}`);
  lines.push("\n### Must not");
  for (const m of contract.invariants?.must_not ?? []) lines.push(`- ${m}`);

  lines.push("\n## Token usage");
  if (!contract.token_usage?.length) lines.push("\n- (none)");
  else for (const t of contract.token_usage) lines.push(`- \`${t.token}\` → ${t.maps_to} (${t.notes})`);

  if (contract.examples?.length) {
    lines.push("\n## Examples");
    for (const ex of contract.examples) {
      lines.push(`\n### ${ex.title}\n`);
      lines.push("```html");
      lines.push(ex.html.trim());
      lines.push("```");
    }
  }

  lines.push("");
  return lines.join("\n");
}

function renderPattern(pattern) {
  const lines = [];
  lines.push(`# ${pattern.title} (\`${pattern.id}\`)`);
  if (pattern.description) lines.push(`\n${pattern.description}`);
  lines.push("");

  lines.push("## Intent");
  for (const i of pattern.intent ?? []) lines.push(`- ${i}`);

  if (pattern.uses_contracts?.length) {
    lines.push("\n## Uses contracts");
    for (const c of pattern.uses_contracts) lines.push(`- \`${c}\``);
  }

  lines.push("\n## Structure");
  for (const s of pattern.structure ?? []) lines.push(`- ${s}`);

  lines.push("\n## A11y");
  lines.push("\n### Keyboard");
  for (const k of pattern.a11y?.keyboard ?? []) lines.push(`- ${k}`);
  lines.push("\n### ARIA");
  for (const a of pattern.a11y?.aria ?? []) lines.push(`- ${a}`);

  lines.push("\n## Validation");
  lines.push("\n### Rules");
  for (const r of pattern.validation?.rules ?? []) lines.push(`- ${r}`);
  lines.push("\n### Error messaging");
  for (const e of pattern.validation?.error_messaging ?? []) lines.push(`- ${e}`);

  lines.push("\n## Token usage");
  if (!pattern.token_usage?.length) lines.push("\n- (none)");
  else for (const t of pattern.token_usage) lines.push(`- \`${t.token}\` → ${t.maps_to} (${t.notes})`);

  if (pattern.examples?.length) {
    lines.push("\n## Examples");
    for (const ex of pattern.examples) {
      lines.push(`\n### ${ex.title}\n`);
      lines.push("```html");
      lines.push(ex.html.trim());
      lines.push("```");
    }
  }

  lines.push("");
  return lines.join("\n");
}

async function writeFile(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, "utf8");
}

async function main() {
  const contractFiles = (await listFilesRecursive(CONTRACTS_DIR, { ext: ".json" })).filter((f) =>
    toPosixPath(f).endsWith("/contract.json")
  );
  const patternFiles = (await listFilesRecursive(PATTERNS_DIR, { ext: ".json" })).filter((f) =>
    toPosixPath(f).endsWith("/pattern.json")
  );

  const contracts = [];
  for (const filePath of contractFiles) {
    const data = await readJson(filePath);
    contracts.push({ id: data.id, filePath, data });
    await writeFile(path.join(OUT_DIR, "contracts", `${data.id}.md`), renderContract(data));
  }

  const patterns = [];
  for (const filePath of patternFiles) {
    const data = await readJson(filePath);
    patterns.push({ id: data.id, filePath, data });
    await writeFile(path.join(OUT_DIR, "patterns", `${data.id}.md`), renderPattern(data));
  }

  contracts.sort((a, b) => a.id.localeCompare(b.id));
  patterns.sort((a, b) => a.id.localeCompare(b.id));

  const index = [];
  index.push("# Generated docs index");
  index.push("");
  index.push("## Contracts");
  for (const c of contracts) index.push(`- [${c.id}](contracts/${c.id}.md)`);
  index.push("");
  index.push("## Patterns");
  for (const p of patterns) index.push(`- [${p.id}](patterns/${p.id}.md)`);
  index.push("");

  await writeFile(path.join(OUT_DIR, "README.md"), index.join("\n"));
  process.stdout.write("OK: docs generated.\n");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

