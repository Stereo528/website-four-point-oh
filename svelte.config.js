import adapter from '@sveltejs/adapter-static'
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
		handleHttpError: ({ path, referrer, message }) => {
			if(path === "/not-found" && referrer === undefined) {
				return {status: 404, html: "Not found"};
			};

			throw new Error(message);
		}
	}
  },
  preprocess: vitePreprocess(),
};
export default config;