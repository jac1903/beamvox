import apiApp from "./api";
import { cors } from "hono/cors";

const port = Number(process.env.PORT ?? 3000);

console.log(`🚀 Starting server on port ${port}`);

// Add CORS middleware to the API app
apiApp.use("*", cors({
  origin: "https://jac1903.github.io",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type"],
}));

// ➕ Add a simple health check route
apiApp.get("/", (c) => c.text("OK"));
apiApp.get("/health", (c) => c.text("OK"));

const server = Bun.serve({
  hostname: "0.0.0.0",
  port,
  async fetch(request) {
    const url = new URL(request.url);
    console.log(`📨 ${request.method} ${url.pathname}`);

    // Forward all requests to the Hono app
    // The Hono app expects /contact/submit, not /api/contact/submit
    // So we strip the /api prefix if present
    let path = url.pathname;
    if (path.startsWith("/api")) {
      path = path.replace(/^\/api/, "");
    }
    const newUrl = new URL(path, url.origin);
    const newRequest = new Request(newUrl.toString(), request);
    return apiApp.fetch(newRequest);
  },
});

console.log(`✅ Server listening on http://0.0.0.0:${server.port}`);
