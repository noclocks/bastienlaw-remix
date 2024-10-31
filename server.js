import { createRequestHandler } from "@remix-run/express";
import { installGlobals } from "@remix-run/node";
import compression from "compression";
import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

installGlobals();

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? undefined
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

const app = express();

// Add health check endpoint
app.get('/_health', (req, res) => {
  res.status(200).send('OK');
});

app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

// handle asset requests
if (viteDevServer) {
  app.use(viteDevServer.middlewares);
} else {
  app.use(
    "/assets",
    express.static(join(__dirname, "build/client/assets"), { immutable: true, maxAge: "1y" })
  );
}
app.use(express.static(join(__dirname, "build/client"), { maxAge: "1h" }));

// Log build directory contents for debugging
console.log('Build directory contents:');
try {
  console.log('Client directory:', fs.readdirSync(join(__dirname, 'build/client')));
} catch (error) {
  console.error('Error reading build directory:', error);
}

// handle SSR requests
app.all(
  "*",
  createRequestHandler({
    build: viteDevServer
      ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
      : { default: { default: { handler: (req, res) => res.sendFile(join(__dirname, 'build/client/index.html')) } } },
  })
);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
}); 