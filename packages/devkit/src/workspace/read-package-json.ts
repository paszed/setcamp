import { join } from "node:path";

import { readJson } from "@paszed/shared";

import type { WorkspacePackage } from "../types/index.js";

interface PackageJson {
  name: string;
}

export async function readPackageJson(
  packagePath: string,
): Promise<WorkspacePackage> {
  const packageJsonPath = join(packagePath, "package.json");

  const packageJson = await readJson<PackageJson>(packageJsonPath);

  return {
    name: packageJson.name,
    path: packagePath,
    packageJsonPath,
  };
}
