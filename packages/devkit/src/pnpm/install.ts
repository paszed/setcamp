import { runCommand } from "../node/index.js";
/**
 * Installs project dependencies using pnpm.
 */
export async function installDependencies(
	path: string,
): Promise<void> {
	await runCommand("pnpm", ["install"], path);
}
