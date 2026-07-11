#!/usr/bin/env node

import { Command } from "commander";

import { registerWorkspaceCommand } from "./commands/workspace";

const program = new Command();

program
	.name("setcamp")
	.description("Opinionated developer platform bootstrapper")
	.version("0.1.0");

registerWorkspaceCommand(program);

program.parse();
