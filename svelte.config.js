import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
	themes: ['github-light', 'github-dark'],
	langs: ['javascript', 'typescript', 'svelte', 'plain', 'html', 'tsx', 'yml', 'yaml'],
	langAlias: {
		js: 'javascript',
		ts: 'typescript'
	}
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			// layout: {
			// post: path.resolve('./src/lib/components/DefaultLayout.svelte')
			// },
			highlight: {
				highlighter: (code, lang = 'plain') => {
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'github-light' }));
					return `{@html \`${html}\` }`;
				}
			}
		})
	],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},
	extensions: ['.svelte', '.md', '.svx']
};

export default config;
