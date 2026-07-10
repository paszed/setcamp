import { dirname, join } from "node:path";

import { exists } from "@paszed/shared";

export async function findWorkspaceRoot(
  start = process.cwd(),
): Promise<string> {
  let current = start;

  while (true) {
    if (await exists(join(current, "pnpm-workspace.yaml"))) {
      return current;
    }

    const parent = dirname(current);

    if (parent === current) {
      throw new Error("Unable to locate pnpm-workspace.yaml.");
    }

    current = parent;
  }
}
