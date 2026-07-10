#!/usr/bin/env node

import { Command } from "commander";

import { workspaceInfo } from "./commands/workspace/info.js";

const program = new Command();

program
  .name("paszed")
  .description("Paszed Developer Platform")
  .version("0.1.0");

program
  .command("workspace")
  .description("Workspace commands")
  .command("info")
  .description("Display workspace information")
  .action(workspaceInfo);

await program.parseAsync();
