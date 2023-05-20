import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
		pages: 'build',
		assets: 'build',
		fallback: null,
		precompress: false,
		strict: false
	}),
	paths: {
		base: dev ? '' : process.env.BASE_PATH,
	},
  },
  preprocess: vitePreprocess(),
  trailingSlash: 'always'
};
export default config;