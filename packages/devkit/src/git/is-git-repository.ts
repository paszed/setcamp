import { exists } from "../filesystem/index.js";
/**
 * Returns true if the directory is a Git repository.
 */
export async function isGitRepository(
	path: string = process.cwd(),
): Promise<boolean> {
	return exists(`${path}/.git`);
}

