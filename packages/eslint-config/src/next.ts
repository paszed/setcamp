import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

import { base } from "./base";

export function next() {
  return defineConfig([
    ...base(),

    ...nextVitals,
    ...nextTypescript,

    globalIgnores([
      ".next/**",
      "out/**",
      "build/**",
      "coverage/**",
      "playwright-report/**",
      "test-results/**",
      "next-env.d.ts",
    ]),
  ]);
}
