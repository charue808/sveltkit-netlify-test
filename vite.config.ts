import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { NodePackageImporter } from 'sass-embedded';


export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern-compiler",
				importers: [new NodePackageImporter()]
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
