import { join } from "node:path";

import { copyDirectory } from "../filesystem";
import { getTemplatePath } from "./get-template-path";

export async function copyTemplate(
	name: string,
	destination: string,
): Promise<void> {
	const source = getTemplatePath(name);

	await copyDirectory(source, destination);
}
