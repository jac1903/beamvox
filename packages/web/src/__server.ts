import app from "./api";
import { existsSync } from "fs";
import { join } from "path";

const port = Number(process.env.PORT ?? 3000);
const distDir = join(import.meta.dir, "..", "dist");
const indexPath = join(distDir, "index.html");

console.log(`🚀 Starting server with:
   Port: ${port}
   Dist dir: ${distDir}
   Index path: ${indexPath}
`);

// Ensure the dist directory exists
if (!existsSync(distDir)) {
  console.error(`❌ Dist directory does not exist: ${distDir}`);
  console.error(`   Please run 'bun run build' first.`);
  process.exit(1);
}

try {
  const server = Bun.serve({
    hostname: "0.0.0.0", // Important for Render
    port,
    async fetch(request) {
      const url = new URL(request.url);

      // Log each request (for debugging)
      console.log(`📨 ${request.method} ${url.pathname}`);

      // API requests
      if (url.pathname.startsWith("/api")) {
        return app.fetch(request);
      }

      // Static file serving
      const filePath = getStaticFilePath(url.pathname, distDir);
      const file = Bun.file(filePath);
      if (await file.exists()) {
        return new Response(file);
      }

      // SPA fallback – serve index.html
      const index = Bun.file(indexPath);
      if (await index.exists()) {
        return new Response(index, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      }

      // Not found
      return new Response("Not found", { status: 404 });
    },
  });

  console.log(`✅ Server listening on http://0.0.0.0:${server.port}`);
} catch (error) {
  console.error("❌ Failed to start server:", error);
  process.exit(1);
}

function getStaticFilePath(pathname: string, distDir: string) {
  const cleanPath = decodeURIComponent(pathname)
    .replace(/^\/+/, "")
    .replaceAll("..", "");
  return cleanPath ? join(distDir, cleanPath) : "";
}
