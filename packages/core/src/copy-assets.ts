import { join } from "node:path";

import { copyDirectory } from "@paszed/devkit";

export async function copyAssets(
	setcampRoot: string,
	projectRoot: string,
): Promise<void> {
	await copyDirectory(join(setcampRoot, "assets"), projectRoot);
}
