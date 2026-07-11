import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Finds the root directory of the installed Setcamp package.
 */
export function findSetcampRoot(): string {
	let current = dirname(fileURLToPath(import.meta.url));

	while (true) {
		if (existsSync(join(current, "assets"))) {
			return current;
		}

		const parent = dirname(current);

		if (parent === current) {
			throw new Error("Unable to locate Setcamp root.");
		}

		current = parent;
	}
}
