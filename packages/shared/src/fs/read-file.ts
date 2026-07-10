import { readFile as nodeReadFile } from "node:fs/promises";

export async function readFile(path: string): Promise<string> {
  return nodeReadFile(path, "utf8");
}
