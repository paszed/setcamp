import { readFile, writeFile } from "node:fs/promises";

export async function renderTemplate(
	file: string,
	values: Record<string, string>,
): Promise<void> {
	let content = await readFile(file, "utf8");

	for (const [key, value] of Object.entries(values)) {
		content = content.replaceAll(`{{${key}}}`, value);
	}

	await writeFile(file, content);
}
