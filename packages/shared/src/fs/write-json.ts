import { writeFile } from "./write-file.js";

export async function writeJson(
  path: string,
  value: unknown,
): Promise<void> {
  const contents = JSON.stringify(value, null, 2);

  await writeFile(path, `${contents}\n`);
}
