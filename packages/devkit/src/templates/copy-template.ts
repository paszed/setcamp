import { copyDirectory } from "../filesystem";
import { getTemplatePath } from "./get-template-path";

/**
 * Copies a template into the destination directory.
 */
export async function copyTemplate(
	root: string,
	template: string,
	destination: string,
): Promise<void> {
	const source = getTemplatePath(root, template);

	await copyDirectory(source, destination);
}
