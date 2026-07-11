import { dirname } from "node:path";
import { copyFile as fsCopyFile } from "node:fs/promises";

import { ensureDirectory } from "./ensure-directory";

export async function copyFile(
	source: string,
	destination: string,
): Promise<void> {
	await ensureDirectory(dirname(destination));

	await fsCopyFile(source, destination);
}
