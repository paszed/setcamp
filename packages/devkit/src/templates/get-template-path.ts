import { join } from "node:path";

import { findSetcampRoot } from "../project/index.js";
/**
 * Returns the absolute path to a template.
 */
export function getTemplatePath(name: string): string {
	return join(findSetcampRoot(), "templates", name);
}
