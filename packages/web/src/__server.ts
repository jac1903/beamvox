import app from "./api";

const port = Number(process.env.PORT ?? 3000);
const distDir = `${import.meta.dir}/../dist`;
const indexPath = `${distDir}/index.html`;

console.log("🚀 Starting server with:");
console.log(`   Port: ${port}`);
console.log(`   Dist directory: ${distDir}`);
console.log(`   Index path: ${indexPath}`);

// Check if dist exists
try {
  const distExists = await Bun.file(distDir).exists();
  console.log(`   Dist exists: ${distExists}`);
} catch (e) {
  console.log("   Dist directory check failed:", e);
}

const server = Bun.serve({
  port,
  async fetch(request) {
    const url = new URL(request.url);
    console.log(`📨 ${request.method} ${url.pathname}`);

    if (url.pathname.startsWith("/api")) {
      return app.fetch(request);
    }

    const filePath = getStaticFilePath(url.pathname);
    const file = Bun.file(filePath);

    if (await file.exists()) {
      return new Response(file);
    }

    const index = Bun.file(indexPath);
    if (await index.exists()) {
      return new Response(index, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    console.log(`❌ Not found: ${url.pathname}`);
    return new Response("Not found", { status: 404 });
  },
});

console.log(`✅ Server listening on http://localhost:${server.port}`);
console.log(`   (process.env.PORT = ${process.env.PORT})`);

function getStaticFilePath(pathname: string) {
  const cleanPath = decodeURIComponent(pathname)
    .replace(/^\/+/, "")
    .replaceAll("..", "");
  return cleanPath ? `${distDir}/${cleanPath}` : indexPath;
}
