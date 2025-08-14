import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://portfolio-agandara.vercel.app',
	base: '/',
	integrations: [
		mdx(),
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
		})
	],
	// Configuración adicional para SEO
	build: {
		assets: 'assets',
	},
	// Configuración de Vite para optimización
	vite: {
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						vendor: ['astro'],
					},
				},
			},
		},
	},
});
