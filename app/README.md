# templates/spa

This template leverages [Remix SPA Mode](https://remix.run/docs/en/main/future/spa-mode) to build your app as a Single-Page Application using [Client Data](https://remix.run/docs/en/main/guides/client-data) for all of you data loads and mutations.

⚠️ This is built on top of the Remix Vite template. Remix support for Vite is currently unstable and not recommended for production.

📖 See the [Remix Vite docs][remix-vite-docs] for details on supported features.

## Docker

```shell
docker buildx build . -t bastienlaw:latest
docker run -d -p 8080 bastienlaw:latest
```

## Setup

```shellscript
pnpx create-remix@latest --template remix-run/remix/templates/spa
```

## Development

You can develop your SPA app just like you would a normal Remix app, via:

```shellscript
pnpm run dev
```

## Production

When you are ready to build a production version of your app, `pnpm run build` will generate your assets and an `index.html` for the SPA.

```shellscript
pnpm run build
```

### Preview

You can preview the build locally with [vite preview](https://vitejs.dev/guide/cli#vite-preview) to serve all routes via the single `index.html` file:

```shellscript
pnpm run preview
```

> ![WARNING] `vite preview` is not designed for use as a production server

### Deployment

You can then serve your app from any HTTP server of your choosing. The server should be configured to serve multiple paths from a single root `/index.html` file (commonly called "SPA fallback"). Other steps may be required if the server doesn't directly support this functionality.

For a simple example, you could use [sirv-cli](https://www.npmjs.com/package/sirv-cli):

```shellscript
pnpx sirv-cli build/client/ --single
```

[remix-vite-docs]: https://remix.run/docs/en/main/future/vite
