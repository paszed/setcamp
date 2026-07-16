import { join } from "node:path";
import { exists } from "@paszed/shared";
import fg from "fast-glob";

export async function listPackages(
	workspaceRoot: string,
	patterns: string[],
): Promise<string[]> {
	const directories = await fg(patterns, {
		cwd: workspaceRoot,
		onlyDirectories: true,
		absolute: true,
	});

	const packages: string[] = [];

	for (const directory of directories) {
		if (await exists(join(directory, "package.json"))) {
			packages.push(directory);
		}
	}

	return packages;
}
