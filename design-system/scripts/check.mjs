import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);

async function run(script) {
  const scriptPath = typeof script === "string" ? script : fileURLToPath(script);
  const { stdout } = await execFileAsync(process.execPath, [scriptPath], { stdio: "pipe" });
  if (stdout?.trim()) process.stdout.write(stdout);
}

async function main() {
  await run(new URL("./check-schemas.mjs", import.meta.url));
  await run(new URL("./check-refs.mjs", import.meta.url));
  await run(new URL("./check-tokens.mjs", import.meta.url));
  process.stdout.write("OK: all checks passed.\n");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
