import tailwindcss from "@tailwindcss/vite"
import { defineOrganization } from "nuxt-schema-org/schema"
import { defineNuxtConfig } from "nuxt/config"
import deMessages from "./i18n/locales/de.json" with { type: "json" }

export default defineNuxtConfig({
	colorMode: {
		preference: "system",
		storage: "sessionStorage",
		dataValue: "theme",
		storageKey: "nuxt-color-mode",
	},
	css: ["~/assets/tailwind.css"],
	eslint: {
		config: {
			standalone: false,
		},
	},
	fonts: {
		families: [
			{ name: "Avenir Next", provider: "none" },
			{
				name: "Nunito Sans",
				provider: "bunny",
				global: true,
				preload: false,
				weights: [400, 500, 600, 700],
			},
		],
	},
	i18n: {
		strategy: "prefix_except_default",
		defaultLocale: "de",
		baseUrl: "https://www.moritz-topp.de",
		langDir: "locales",
		customRoutes: "meta",
		detectBrowserLanguage: {
			useCookie: false,
			alwaysRedirect: true,
			fallbackLocale: "de",
		},
		locales: [
			{ code: "de", language: "de-DE", name: "Deutsch", file: "de.json" },
			{ code: "en", language: "en-US", name: "English", file: "en.json" },
		],
	},
	icon: {
		clientBundle: {
			scan: true,
		},
	},
	modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxtjs/color-mode", "@nuxtjs/i18n", "@nuxtjs/seo"],
	ogImage: {
		enabled: false,
	},
	prerender: {
		routes: ["/", "/robots.txt"],
		crawlLinks: true,
	},
	robots: {
		blockNonSeoBots: true,
		credits: false,
	},
	runtimeConfig: {
		mail: {
			host: "",
			port: 465,
			user: "",
			pass: "",
			to: "",
			from: "",
		},
	},
	schemaOrg: {
		identity: defineOrganization({
			name: "Moritz Toppmöller",
			url: "https://www.moritz-topp.de",
			logo: "/apple-touch-icon.png",
			address: {
				"@type": "PostalAddress",
				"streetAddress": "Nordhorner Str. 31",
				"addressLocality": "Gütersloh",
				"addressRegion": "NRW",
				"postalCode": "33335",
				"addressCountry": "DE",
			},
			email: "info@moritz-topp.de",
		}),
	},
	site: {
		...deMessages.nuxtSiteConfig,
		defaultLocale: "de-DE",
		url: "https://www.moritz-topp.de",
		trailingSlash: false,
	},
	sitemap: {
		cacheMaxAgeSeconds: 86400,
		credits: false,
		xslColumns: [{ label: "URL", width: "100%" }],
		xslTips: false,
		zeroRuntime: true,
	},
	skewProtection: false,
	typescript: {
		typeCheck: "build",
	},
	vite: {
		plugins: [tailwindcss()],
	},
	compatibilityDate: "2026-08-28",
})
