// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	base: '/poc-site/',
	site: 'https://company-poc-site.github.io',
	integrations: [mdx(), sitemap()],
});
