import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import eslintPluginAstro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs["flat/recommended"],
  ...eslintPluginAstro.configs.recommended,
  prettier,
];
