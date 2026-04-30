// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://ebelleon.de",
	integrations: [sitemap()],
	i18n: {
		defaultLocale: "de",
		locales: ["de", "en"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	server: {
		headers: {
			"Content-Security-Policy":
				"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' 'unsafe-hashes';",
		},
	},
	build: {
		// Enable CSS inlining for smaller files to reduce requests
		inlineStylesheets: "auto",
		// Optimize assets
		assets: "_astro",
	},
	// For production builds
	vite: {
		server: {
			headers: {
				"Content-Security-Policy": "default-src 'self'; script-src 'self'",
			},
		},
		build: {
			// Enable CSS code splitting
			cssCodeSplit: true,
			// Optimize chunks
			rollupOptions: {
				output: {
					manualChunks: undefined,
				},
			},
		},
	},
});
