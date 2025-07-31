import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Cloudflare Pages configuration
			// This will output to .svelte-kit/cloudflare
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),
		// Ensure the app.base is set correctly for Cloudflare Pages
		paths: {
			base: process.env.NODE_ENV === 'production' ? '' : ''
		}
	}
};

export default config;
