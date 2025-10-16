import { defineOrganization } from "nuxt-schema-org/schema";
import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	colorMode: {
		preference: "system",
		storage: "sessionStorage",
		dataValue: "theme",
		storageKey: "nuxt-color-mode"
	},
	css: ["~/assets/tailwind.css"],
	i18n: {
		strategy: "prefix_except_default",
		defaultLocale: "de",
		baseUrl: "https://www.moritz-topp.de/",
		langDir: "locales",
		trailingSlash: true,
		customRoutes: "meta",
		detectBrowserLanguage: {
			useCookie: false,
			alwaysRedirect: true,
			fallbackLocale: "de"
		},
		locales: [
			{ code: "de", language: "de-DE", name: "Deutsch", file: "de.json" },
			{ code: "en", language: "en-US", name: "English", file: "en.json" }
		]
	},
	linkChecker: {
		skipInspections: ["link-text", "no-uppercase-chars", "no-underscores"]
	},
	modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxtjs/color-mode", "@nuxtjs/i18n", "@nuxtjs/seo"],
	ogImage: {
		enabled: false
	},
	robots: {
		blockNonSeoBots: true,
		credits: false,
		disallow: ["/_nuxt/*"]
	},
	runtimeConfig: {
		mail: {
			host: "",
			port: 465,
			user: "",
			pass: "",
			to: "",
			from: ""
		}
	},
	schemaOrg: {
		identity: defineOrganization({
			name: "Moritz Toppmöller",
			url: "https://www.moritz-topp.de/",
			logo: "/apple-touch-icon.png",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Nordhorner Str. 33",
				addressLocality: "Gütersloh",
				addressRegion: "NRW",
				postalCode: "33335",
				addressCountry: "DE"
			},
			email: "info@moritz-topp.de"
		})
	},
	site: {
		url: "https://www.moritz-topp.de",
		defaultLocale: "de",
		trailingSlash: true
	},
	sitemap: {
		cacheMaxAgeSeconds: 86400,
		credits: false,
		xslColumns: [{ label: "URL", width: "100%" }],
		xslTips: false
	},
	typescript: {
		typeCheck: true
	},
	vite: {
		plugins: [tailwindcss()]
	},
	compatibilityDate: "2025-10-16"
});
