import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				_: './src/lib/components/DefaultLayout.svelte'
			}
		})
	]
});
