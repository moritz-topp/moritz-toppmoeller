import antfu from "@antfu/eslint-config"
import { globalIgnores } from "eslint/config"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
	antfu(
		{
			formatters: true,
			stylistic: {
				indent: "tab",
				quotes: "double",
			},
			typescript: true,
			vue: {
				overrides: {
					"no-alert": "off",
					"no-console": "off",
					"vue/script-indent": ["error", "tab", {
						baseIndent: 1,
					}],
					"style/indent": "off",
					"vue/block-order": ["error", {
						order: ["template", "script", "style"],
					}],
				},
			},
		},
	),
	globalIgnores([".pnpm-store/**", ".nuxt/**", ".output/**", "node_modules/**"]),
	{
		rules: {
			"no-console": "off",
		},
	},
)
