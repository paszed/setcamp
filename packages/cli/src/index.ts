#!/usr/bin/env node

import { Command } from "commander";
import { loadWorkspace } from "@paszed/devkit";

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
  .action(async () => {
    const workspace = await loadWorkspace();

    console.log(`Workspace Root: ${workspace.root}`);
  });

await program.parseAsync();
