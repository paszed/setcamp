import { copyDirectory } from "../filesystem/index.js";
import { getTemplatePath } from "./get-template-path.js";
import { renderTemplates } from "./render-templates.js";

/**
 * Copies a template into the destination directory.
 */
export async function copyTemplate(
	template: string,
	destination: string,
	values: Record<string, string>,
): Promise<void> {
	const source = getTemplatePath(template);

	await copyDirectory(source, destination);
	await renderTemplates(destination, values);
}
