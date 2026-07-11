import { join } from "node:path";

/**
 * Returns the absolute path to a template.
 */
export function getTemplatePath(
	root: string,
	name: string,
): string {
	return join(root, "templates", name);
}
