import fg from "fast-glob";
import { join } from "node:path";

import { renderTemplate } from "./render-template";

export async function renderDirectory(
	directory: string,
	values: Record<string, string>,
): Promise<void> {
	const files = await fg("**/*", {
		cwd: directory,
		onlyFiles: true,
		dot: true,
	});

	for (const file of files) {
		await renderTemplate(join(directory, file), values);
	}
}
