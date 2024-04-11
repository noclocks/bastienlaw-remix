import {vitePlugin as remix} from '@remix-run/dev';
import {remixDevTools} from 'remix-development-tools';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // assetsInclude: [
  //   "assets/**",
  //   "wp-content/**",
  //   "app/wp-content/**",
  //   "google-fonts/**",
  //   "app/google-fonts/**",
  //   "wp-content/uploads/sites/1302270/2021/06/**",
  //   "wp-content/uploads/sites/1302270/2023/09/**",
  // ],
  // base: "/",
  appType: "spa",
  preview: {
    port: 8080,
    strictPort: true,
    host: "0.0.0.0",
    cors: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  },
  server: {
    cors: false,
    port: 8080,
    strictPort: true,
    host: "0.0.0.0",
    origin: "http://0.0.0.0:8080",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    // host: true,
    // open: true,
    // watch: {
    // 	alwaysStat: true,
    // 	persistent: true,
    // },
  },
  // 	},
  // },
  // css: ,
  // build: {
  //   watch: {
  //     include
  //   },
  // }
  // envPrefix: 'APP_',
  plugins: [
    remixDevTools({
      includeInProd: false,
    }),
    remix({
      ssr: false,
      // ignoredRouteFiles: [
      //   "app/assets/*",
      //   "app/wp-content/*",
      //   "app/wp-content/**",
      //   "app/google-fonts/*",
      //   "app/google-fonts/**",
      //   "app/wp-content/uploads/sites/1302270/2023/09/*",
      //   "app/wp-content/uploads/sites/1302270/2021/06/*",
      //   "app/wp-content/index-files/**",
      //   // "app/wp-content/index-files/cc40ba9a93e87e26f1018e89bcb019711766ec8043887571a4c9e737f74cf36c.css",
      // ],
    }),
    // !process.env.VITEST &&
    // 	remix({
    // 		// serverModuleFormat: ''
    // 		// appDirectory: 'app',
    // 		// basename: './',
    // 		ssr: false,
    // 		ignoredRouteFiles: [
    // 			'app/assets/*',
    // 			'app/wp-content/*',
    // 			'app/wp-content/**',
    // 			'app/google-fonts/*',
    // 			'app/google-fonts/**',
    // 			'app/wp-content/uploads/sites/1302270/2023/09/*',
    // 			'app/wp-content/uploads/sites/1302270/2021/06/*',
    // 			'app/wp-content/index-files/**',
    // 			// "app/wp-content/index-files/cc40ba9a93e87e26f1018e89bcb019711766ec8043887571a4c9e737f74cf36c.css",
    // 		],
    // 	}),
    tsconfigPaths(),
  ],
}); //=> {
// 	const env = loadEnv('', process.cwd(), '');
// 	return {
// 		define: {
// 			__APP_ENV__: JSON.stringify(env.APP_ENV),
// 		},
// 	}
// };
