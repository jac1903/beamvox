import app from "./api";
import { cors } from "hono/cors";

const port = Number(process.env.PORT ?? 3000);

console.log(`🚀 Starting server on port ${port}`);

// ✅ Add CORS middleware
app.use("*", cors({
  origin: "https://jac1903.github.io",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type"],
}));

const server = Bun.serve({
  hostname: "0.0.0.0",
  port,
  async fetch(request) {
    const url = new URL(request.url);
    console.log(`📨 ${request.method} ${url.pathname}`);

    // ✅ Handle API requests
    if (url.pathname.startsWith("/api")) {
      return app.fetch(request);
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`✅ Server listening on http://0.0.0.0:${server.port}`);
