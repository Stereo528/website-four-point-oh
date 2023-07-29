import adapter from '@sveltejs/adapter-netlify'
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
	paths: {
		base: dev ? '' : process.env.BASE_PATH,
	},
	prerender: {
		handleHttpError: "warn"
	}
  },
  preprocess: vitePreprocess(),
};
export default config;