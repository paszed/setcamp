import { loadWorkspace } from "@paszed/devkit";

/**
 * Prints information about the current workspace.
 */
export async function workspaceInfo(): Promise<void> {
	const workspace = await loadWorkspace();

	console.log("");
	console.log(`Root: ${workspace.root}`);
	console.log(`Workspace: ${workspace.packageJson.name}`);

	console.log("");
	console.log("Package patterns:");

	for (const pattern of workspace.pnpmWorkspace.packages) {
		console.log(`  • ${pattern}`);
	}

	console.log("");
}
