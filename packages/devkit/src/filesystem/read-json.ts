import { readFile } from "./read-file.js";

/**
 * Reads and parses a JSON file.
 */
export async function readJson<T>(path: string): Promise<T> {
	const content = await readFile(path);

	return JSON.parse(content) as T;
}
