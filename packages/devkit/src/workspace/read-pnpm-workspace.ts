import { join } from "node:path";

import { readFile } from "@paszed/shared";

export async function readPnpmWorkspace(
  workspaceRoot: string,
): Promise<string> {
  return readFile(join(workspaceRoot, "pnpm-workspace.yaml"));
}
