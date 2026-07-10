import { readFile } from "./read-file.js";

export async function readJson<T = unknown>(
  path: string,
): Promise<T> {
  const contents = await readFile(path);

  return JSON.parse(contents) as T;
}
