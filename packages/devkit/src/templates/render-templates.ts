import fg from "fast-glob";

import { renderTemplate } from "./render-template";

/**
 * Renders every text file inside a template.
 */
export async function renderTemplates(
	root: string,
	values: Record<string, string>,
): Promise<void> {
	const files = await fg("**/*", {
		cwd: root,
		absolute: true,
		onlyFiles: true,
		dot: true,
	});

	for (const file of files) {
		await renderTemplate(file, values);
	}
}
