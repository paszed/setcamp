import { mkdir } from "node:fs/promises";

/**
 * Ensures that a directory exists.
 * Creates it recursively if necessary.
 */
export async function ensureDirectory(path: string): Promise<void> {
	await mkdir(path, { recursive: true });
}
