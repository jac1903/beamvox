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

const server = Bun.serve({
  hostname: "0.0.0.0",
  port,
  async fetch(request) {
    const url = new URL(request.url);
    console.log(`📨 ${request.method} ${url.pathname}`);

    // ✅ Forward ALL requests to the Hono app (it will handle routing)
    // Your Hono app expects /contact/submit, not /api/contact/submit
    // So we strip the /api prefix
    if (url.pathname.startsWith("/api")) {
      const newPath = url.pathname.replace(/^\/api/, "");
      const newUrl = new URL(newPath, url.origin);
      const newRequest = new Request(newUrl.toString(), request);
      return apiApp.fetch(newRequest);
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`✅ Server listening on http://0.0.0.0:${server.port}`);
