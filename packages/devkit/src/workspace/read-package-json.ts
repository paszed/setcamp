import { join } from "node:path";

import { readFile } from "@paszed/shared";

export async function readPackageJson<T = unknown>(
  workspaceRoot: string,
): Promise<T> {
  const file = await readFile(join(workspaceRoot, "package.json"));

  return JSON.parse(file) as T;
}
