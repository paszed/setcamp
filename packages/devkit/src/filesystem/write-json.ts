import { writeFile } from "./write-file.js";

/**
 * Serializes and writes a JSON file.
 */
export async function writeJson<T>(path: string, data: T): Promise<void> {
	const content = `${JSON.stringify(data, null, "\t")}\n`;

	await writeFile(path, content);
}
