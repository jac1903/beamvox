import { Hono } from "hono";
import { cors } from "hono/cors";
import apiApp from "./api";

// Create a new Hono app to handle everything
const app = new Hono();

// Add CORS middleware
app.use("*", cors({
  origin: "https://jac1903.github.io",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type"],
}));

// Mount your API app under /api
app.route("/api", apiApp);

const port = Number(process.env.PORT ?? 3000);

const server = Bun.serve({
  hostname: "0.0.0.0",
  port,
  fetch: app.fetch,
});

console.log(`✅ Server listening on http://0.0.0.0:${port}`);
