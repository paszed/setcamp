import { resolve } from "node:path";

import { copyTemplate } from "@paszed/devkit";

/**
 * Initializes a new project.
 */
export async function initProject(name: string): Promise<void> {
	const destination = resolve(process.cwd(), name);

	await copyTemplate(
		process.cwd(),
		"next-app",
		destination,
	);

	console.log(`Initialized ${name}`);
}
