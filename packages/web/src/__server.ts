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

    // ✅ If it's an API request, forward to the Hono app
    if (url.pathname.startsWith("/api")) {
      // Strip the /api prefix
      const newPath = url.pathname.replace(/^\/api/, "");
      const newUrl = new URL(newPath, url.origin);
      const newRequest = new Request(newUrl.toString(), request);
      return app.fetch(newRequest);
    }

    // For non-API requests, return 404 (or serve static files if needed)
    return new Response("Not found", { status: 404 });
  },
});

console.log(`✅ Server listening on http://0.0.0.0:${server.port}`);
