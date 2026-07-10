import storybook from "eslint-plugin-storybook";

export function storybook() {
  return [...storybook.configs["flat/recommended"]];
}
