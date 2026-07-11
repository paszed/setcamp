import { findWorkspaceRoot } from "./find-workspace-root";
import { readPackageJson } from "./read-package-json";
import { readPnpmWorkspace } from "./read-pnpm-workspace";
import { readTurboConfig } from "./read-turbo-config";

/**
 * Loads the current workspace.
 */
export async function loadWorkspace(cwd: string = process.cwd()) {
	const root = await findWorkspaceRoot(cwd);

	const [packageJson, pnpmWorkspace, turbo] = await Promise.all([
		readPackageJson(root),
		readPnpmWorkspace(root),
		readTurboConfig(root),
	]);

	return {
		root,
		packageJson,
		pnpmWorkspace,
		turbo,
	};
}
