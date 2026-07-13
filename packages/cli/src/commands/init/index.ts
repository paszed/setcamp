import type { Command } from "commander";

import { initProject } from "@paszed/core";

export function registerInitCommand(program: Command): void {
	program
		.command("init")
		.argument("<name>", "Project name")
		.description("Initialize a new Setcamp project")
		.action(initProject);
}
