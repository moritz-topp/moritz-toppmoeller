import antfu from "@antfu/eslint-config"
import tailwind from "eslint-plugin-tailwindcss"

import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
	antfu({
		formatters: true,
		stylistic: {
			indent: "tab",
			quotes: "double",
		},
		vue: {
			a11y: false,
			overrides: {
				"no-alert": "off",
				"no-console": "off",
				"vue/script-indent": [
					"error",
					"tab",
					{
						baseIndent: 1,
					},
				],
				"style/indent": "off",
				"vue/block-order": [
					"error",
					{
						order: ["template", "script", "style"],
					},
				],
			},
		},
	}),
	...tailwind.configs["flat/recommended"],
	{
		settings: {
			tailwindcss: {
				config: `${import.meta.dirname}/app/assets/tailwind.css`,
			},
		},
	},
)
