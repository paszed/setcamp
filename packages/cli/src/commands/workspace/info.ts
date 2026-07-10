import { loadWorkspace } from "@paszed/devkit";

export async function workspaceInfo(): Promise<void> {
  const workspace = await loadWorkspace();

  console.log("Developer Platform");
  console.log();

  console.log("Workspace Root");
  console.log(`  ${workspace.root}`);
  console.log();

  console.log(`Packages (${workspace.packages.length})`);
  console.log();

  for (const pkg of workspace.packages) {
    console.log(`• ${pkg.name}`);
  }
}
