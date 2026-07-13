import { Command } from "commander";

import { registerInitCommand } from "./commands/init";
import { registerWorkspaceCommand } from "./commands/workspace";

const program = new Command();

program
	.name("setcamp")
	.description("Developer platform CLI")
	.version("0.1.0");

registerInitCommand(program);
registerWorkspaceCommand(program);

await program.parseAsync(process.argv);
