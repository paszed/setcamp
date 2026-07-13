import { runCommand } from "../node";

/**
 * Initializes a Git repository.
 */
export async function initGit(
	path: string,
): Promise<void> {
	await runCommand("git", ["init"], path);
}
