import type { Command } from "commander";

import { workspaceInfo } from "./info";

export function registerWorkspaceCommand(program: Command): void {
	const workspace = program
		.command("workspace")
		.description("Workspace commands");

	workspace
		.command("info")
		.description("Show workspace information")
		.action(workspaceInfo);
}
