import { parse } from "yaml";

import { readFile } from "../fs/read-file.js";

export async function readYaml<T>(path: string): Promise<T> {
  const contents = await readFile(path);

  return parse(contents) as T;
}
