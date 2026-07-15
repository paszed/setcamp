import { readdir } from "node:fs/promises";

/**
 * Returns all available templates.
 */
export async function listTemplates(root: string): Promise<string[]> {
	return readdir(`${root}/templates`, {
		withFileTypes: true,
	}).then((entries) =>
		entries
			.filter((entry) => entry.isDirectory())
			.map((entry) => entry.name)
			.sort(),
	);
}
