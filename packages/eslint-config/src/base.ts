import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import type { Linter } from "eslint";

export function base(): Linter.Config[] {
  return [
    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2024,
        },
      },
    },

    {
      rules: {
        "no-console": "warn",
        "no-debugger": "error",
      },
    },
  ];
}
