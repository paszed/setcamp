import type { Workspace } from "../types/index.js";

import { findWorkspaceRoot } from "./find-workspace-root.js";
import { listPackages } from "./list-packages.js";
import { readPackageJson } from "./read-package-json.js";
import { readPnpmWorkspace } from "./read-pnpm-workspace.js";

export async function loadWorkspace(): Promise<Workspace> {
  const root = await findWorkspaceRoot();

  const pnpmWorkspace = await readPnpmWorkspace(root);

  const packagePaths = await listPackages(
    root,
    pnpmWorkspace.packages,
  );

  const packages = await Promise.all(
    packagePaths.map(readPackageJson),
  );

  return {
    root,
    packages,
  };
}
