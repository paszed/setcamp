import { writeFile as fsWriteFile } from "node:fs/promises";
import { dirname } from "node:path";

import { ensureDirectory } from "./ensure-directory";

/**
 * Writes a UTF-8 text file.
 * Creates parent directories if they don't exist.
 */
export async function writeFile(
	path: string,
	content: string,
): Promise<void> {
	await ensureDirectory(dirname(path));

	await fsWriteFile(path, content, "utf8");
}
