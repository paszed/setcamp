import { findSetcampRoot } from "@paszed/devkit";

import { copyAssets } from "./copy-assets";

export async function init(): Promise<void> {
	const projectRoot = process.cwd();
	const setcampRoot = findSetcampRoot();

	await copyAssets(setcampRoot, projectRoot);

	console.log("✔ Project initialized");
}
