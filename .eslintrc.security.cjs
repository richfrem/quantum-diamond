module.exports = {
  extends: ["eslint:recommended", "plugin:security/recommended"],
  plugins: ["security"],
  parserOptions: { ecmaVersion: 2022, sourceType: "module" },
  overrides: [{ files: ["**/*.ts","**/*.tsx"], parser: "@typescript-eslint/parser" }],
};