import { join } from "node:path";

import { readFile } from "@paszed/shared";

export async function readTurboConfig<T = unknown>(
  workspaceRoot: string,
): Promise<T> {
  const file = await readFile(join(workspaceRoot, "turbo.json"));

  return JSON.parse(file) as T;
}
