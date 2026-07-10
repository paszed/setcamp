import type { Workspace } from "../types/index.js";

import { findWorkspaceRoot } from "./find-workspace-root.js";

export async function loadWorkspace(): Promise<Workspace> {
  const root = await findWorkspaceRoot();

  return {
    root,
    packages: [],
  };
}
