import { join } from "node:path";

import { readYaml } from "@paszed/shared";

import type { PnpmWorkspace } from "../types/index.js";

export async function readPnpmWorkspace(
  workspaceRoot: string,
): Promise<PnpmWorkspace> {
  return readYaml<PnpmWorkspace>(
    join(workspaceRoot, "pnpm-workspace.yaml"),
  );
}
