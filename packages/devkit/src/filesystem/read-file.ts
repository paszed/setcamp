import { readFile as fsReadFile } from "node:fs/promises";

/**
 * Reads a UTF-8 text file.
 */
export async function readFile(path: string): Promise<string> {
	return fsReadFile(path, "utf8");
}
