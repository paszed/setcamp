import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import type { Config } from "eslint/config";

export function base(): Config[] {
  return [
    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",

        globals: {
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
