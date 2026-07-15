import type { WorkspacePackage } from "./package.js";

export interface Workspace {
	root: string;
	packages: WorkspacePackage[];
}
