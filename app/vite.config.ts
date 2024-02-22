import {vitePlugin as remix} from '@remix-run/dev';
import {remixDevTools} from 'remix-development-tools/vite';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		remixDevTools(),
		remix({
			ignoredRouteFiles: ['app/assets/*', 'app/wp-content/*', 'app/google-fonts/*'],
			ssr: false,
		}),
		tsconfigPaths(),
	],
});
