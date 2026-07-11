import { loadWorkspace } from "@paszed/devkit";

/**
 * Prints information about the current workspace.
 */
export async function workspaceInfo(): Promise<void> {
	const workspace = await loadWorkspace();

	console.log("");
	console.log(`Root: ${workspace.root}`);
	console.log(`Packages: ${workspace.packages.length}`);

	for (const pkg of workspace.packages) {
		console.log(`  • ${pkg.name}`);
	}

	console.log("");
}
