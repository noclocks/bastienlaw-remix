import {vitePlugin as remix} from '@remix-run/dev';
// import {remixDevTools} from 'remix-development-tools';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

declare module '@remix-run/node' {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  // appType: 'spa',
  // base: '/',
  // build: {
  //   outDir: 'build',
  //   sourcemap: true,
  //   rollupOptions: {
  //     cache: false,
  //   },
  // },
  // logLevel: 'info',
  plugins: [
    // remixDevTools({
    //   includeInProd: false,
    //   improvedConsole: true,
    // }),
    remix({
      // basename: '/',
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  // assetsInclude: ['assets/**'],
  server: {
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  },
});
