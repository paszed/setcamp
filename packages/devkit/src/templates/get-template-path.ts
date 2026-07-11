import { join } from "node:path";

import { findSetcampRoot } from "../project";

export function getTemplatePath(name: string): string {
	return join(findSetcampRoot(), "templates", name);
}
