import { execFile } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execFile);

/**
 * Executes a command.
 */
export async function runCommand(
	command: string,
	args: string[],
	cwd: string,
): Promise<void> {


 await exec(command, args, {
	cwd,
});

}
