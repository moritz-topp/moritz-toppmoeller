import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt(
	{
		files: ["**/*.js", "**/*.ts", "**/*.vue"],
		rules: {
			"style/indent": "off",
			"prettier/prettier": [
				"error",
				{
					bracketSpacing: true,
					printWidth: 120,
					singleQuote: false,
					semi: true,
					tabWidth: 4,
					trailingComma: "none",
					vueIndentScriptAndStyle: true,
					plugins: ["prettier-plugin-tailwindcss"],
					tailwindStylesheet: "~/app/assets/tailwind.css",
				},
			],
		},
	},
	{
		files: ["**/*.yml", "**/*.yaml"],
		rules: {
			"prettier/prettier": [
				"error",
				{
					tabWidth: 2,
					useTabs: false,
				},
			],
		},
	},
	{
		ignores: ["*-lock.yaml", "node_modules/**", ".nuxt/**", ".output/**"],
	},
	eslintPluginPrettierRecommended,
);
