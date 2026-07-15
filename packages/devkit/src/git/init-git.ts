import { runCommand } from "../node/index.js";
/**
 * Initializes a Git repository.
 */
export async function initGit(path: string): Promise<void> {
	await runCommand("git", ["init"], path);
}
