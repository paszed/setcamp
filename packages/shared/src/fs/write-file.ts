import { writeFile as nodeWriteFile } from "node:fs/promises";

export async function writeFile(
  path: string,
  contents: string,
): Promise<void> {
  await nodeWriteFile(path, contents, "utf8");
}
