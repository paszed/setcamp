import { copyDirectory } from "../filesystem";
import { getTemplatePath } from "./get-template-path";
import { renderTemplates } from "./render-templates";

/**
 * Copies a template into the destination directory.
 */
export async function copyTemplate(
	template: string,
	destination: string,
	values: Record<string, string> = {},
): Promise<void> {
	const source = getTemplatePath(template);

	await copyDirectory(source, destination);

	if (Object.keys(values).length > 0) {
		await renderTemplates(destination, values);
	}
}
