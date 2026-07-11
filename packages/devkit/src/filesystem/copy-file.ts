import { copyFile } from "node:fs/promises";

/**
 * Copies a file.
 */
export async function copyFileTo(
	source: string,
	destination: string,
): Promise<void> {
	await copyFile(source, destination);
}
