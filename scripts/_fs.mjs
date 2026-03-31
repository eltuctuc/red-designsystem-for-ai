import fs from "node:fs/promises";
import path from "node:path";

export async function listFilesRecursive(rootDir, { ext } = {}) {
  const out = [];

  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.isFile()) {
        if (!ext || full.endsWith(ext)) out.push(full);
      }
    }
  }

  await walk(rootDir);
  return out;
}

export async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

export function toPosixPath(p) {
  return p.split(path.sep).join(path.posix.sep);
}

