# Putting Beamvox live on GitHub Pages

This repo now ships a GitHub Actions workflow that builds the site and publishes it to
GitHub Pages on every push to `main`. No server, no database, no cost.

## What you get, and what you give up

GitHub Pages serves **static files only**. It cannot run the Hono/oRPC API, so:

| Feature | On GitHub Pages | Later, on a real host |
|---|---|---|
| All 9 pages, images, fonts, routing | Works | Works |
| Deep links (`/products/bvx-b450-ip`) | Works (via `404.html` fallback) | Works |
| Contact + partner forms | Sent by email or a form service | Saved to the database |
| Storing submissions in SQLite | Not available | Works |
| Online shop / checkout | Not available | Works |

The React code is identical either way. A build flag (`VITE_STATIC`) swaps how the two
forms send, and nothing else changes — so moving to a paid host later is a config change,
not a rewrite.

---

## Step 1 — Create the repository

On GitHub: **New repository** → name it `beamvox` → **Private** or **Public** (Pages works
on both for free accounts now) → do **not** add a README, .gitignore or licence, since the
project already has them.

## Step 2 — Push the code

From inside the unzipped project folder:

```bash
git init
git add .
git commit -m "Beamvox site"
git branch -M main
git remote add origin https://github.com/<your-username>/beamvox.git
git push -u origin main
```

Replace `<your-username>`. If GitHub asks for a password, it wants a
[personal access token](https://github.com/settings/tokens), not your account password —
or install the [GitHub CLI](https://cli.github.com) and run `gh auth login` first.

The `.gitignore` already excludes `node_modules`, `dist` and `.env`, so no secrets or
build junk get committed. Double-check with `git status` before the first commit.

## Step 3 — Turn on Pages

In the repository: **Settings → Pages → Build and deployment → Source** → choose
**GitHub Actions**.

That's the whole setting. Do not pick "Deploy from a branch" — the workflow uses the
Actions path.

## Step 4 — Let it build

Go to the **Actions** tab. The push from step 2 should already have started
*Deploy to GitHub Pages*. First run takes roughly 2–3 minutes.

When it goes green, your site is at:

```
https://<your-username>.github.io/beamvox/
```

Every later `git push` to `main` redeploys automatically.

---

## Making the forms work

Out of the box in static mode, submitting a form opens the visitor's email client with the
enquiry pre-filled and addressed to the `email` in
`packages/web/src/web/lib/content.ts`. That works with zero setup but is clumsy — many
visitors have no mail client configured.

Better: point the forms at a free form service.

1. Sign up at [Formspree](https://formspree.io) (free tier: 50 submissions/month) or
   [Web3Forms](https://web3forms.com). Create a form and copy its endpoint URL.
2. In your repo: **Settings → Secrets and variables → Actions → Variables → New
   repository variable**.
3. Name it `FORM_ENDPOINT`, paste the URL as the value.
4. Push any commit (or re-run the workflow) to rebuild.

Both forms will now POST their fields as JSON to that endpoint and you'll get an email per
submission. The workflow already reads this variable — nothing to edit in the code.

---

## Before you show it to anyone

The site is still carrying placeholder content:

- `packages/web/src/web/lib/content.ts` — every figure marked `(placeholder)` is invented.
  The `site` object holds the placeholder email, phone and address.
- `packages/web/public/og-image.png` and `favicon.ico` are template defaults — swap in
  Beamvox artwork.
- To drop the "Made with Runable" badge, delete `<RunableBadge />` and its import from
  `packages/web/src/web/app.tsx`.

## Using your own domain

Buy the domain, then in **Settings → Pages → Custom domain** enter it and save. Add these
DNS records at your registrar:

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  <your-username>.github.io
```

With a custom domain the site is served from the root, so the base path must change: in
`.github/workflows/deploy-pages.yml`, set `VITE_BASE: "/"` instead of the computed value.
Tick **Enforce HTTPS** once the certificate is issued (can take an hour).

---

## Running it locally

The full version with the API and database still works on your machine:

```bash
bun install
cp .env.template .env         # set DATABASE_URL=file:local.db
cd packages/web && bun run db:push && cd ../..
bun run dev                   # http://localhost:5173, forms save to the DB
```

To preview exactly what GitHub Pages will serve:

```bash
VITE_BASE=/beamvox/ VITE_STATIC=true bun run build:web
cd packages/web/dist && cp index.html 404.html && bunx serve -s .
```

## When you move to a paid host with a shop

Any host that runs Bun or Node works — Railway, Render, Fly.io, a VPS. Then you build
*without* `VITE_STATIC`, so the forms go back to the real API and submissions land in the
database. You'll need a Turso database (free tier is generous) or any libSQL/SQLite file,
set as `DATABASE_URL`. Serve with `bun run build && bun run start` from
`packages/web`. At that point the shop can be added as new oRPC routes and pages — the
existing structure doesn't have to move.
