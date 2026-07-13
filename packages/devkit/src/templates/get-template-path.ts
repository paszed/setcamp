import { join } from "node:path";

import { findSetcampRoot } from "../project";

/**
 * Returns the absolute path to a template.
 */
export function getTemplatePath(name: string): string {
	return join(findSetcampRoot(), "templates", name);
}
