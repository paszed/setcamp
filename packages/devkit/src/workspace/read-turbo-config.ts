import { join } from "node:path";

import { readJson } from "@paszed/shared";

export async function readTurboConfig<T = unknown>(
	workspaceRoot: string,
): Promise<T> {
	return readJson<T>(join(workspaceRoot, "turbo.json"));
}
