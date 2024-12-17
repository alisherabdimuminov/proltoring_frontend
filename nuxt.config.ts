// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/color-mode'
	],

	colorMode: {
		classSuffix: "",
		classPrefix: "",
	},

	app: {
		head: {
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
				{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
				{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
				{ rel: "manifest", href: "/site.webaminifiest" }
			]
		}
	}
});