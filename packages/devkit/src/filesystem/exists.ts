import { access } from "node:fs/promises";

/**
 * Returns true if a path exists.
 */
export async function exists(path: string): Promise<boolean> {
	try {
		await access(path);
		return true;
	} catch {
		return false;
	}
}
