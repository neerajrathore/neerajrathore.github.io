import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about 
	extensions: ['.svelte', '.svx'], // allow .svx (markdown with svelte)
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx'] })],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		// adapter: adapter(),
		adapter: adapter({
			// This is where the static site will be generated
			pages: 'build',
			assets: 'build',
			fallback: '404.html' // Required for SPA-style routing on GitHub Pages
		}),
		alias: {
			$lib: path.resolve('./src/lib'),
		},
		// paths: {
		// 	// 👇 If deploying to a subpath, e.g. https://username.github.io/repo-name/
		// 	base: process.env.NODE_ENV === 'production' ? '/neerajrathore.github.io' : '',
		// }
	},
	// preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
};

export default config;
