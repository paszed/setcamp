import { initProject } from "@paszed/core";
import type { Command } from "commander";

export function registerInitCommand(program: Command): void {
	program
		.command("init")
		.argument("<name>", "Project name")
		.description("Initialize a new Setcamp project")
		.action(initProject);
}
