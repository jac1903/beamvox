# Beamvox — local setup

Monorepo: Bun workspaces + Turborepo. The web package serves the React frontend (`/*`)
and the Hono/oRPC API (`/api/*`) from a single Vite dev server.

> Hosting it free on GitHub Pages? See **DEPLOY-GITHUB.md** for the step-by-step.
> This file covers running the full version (API + database) locally.

## Requirements

- [Bun](https://bun.sh) 1.1+ (`curl -fsSL https://bun.sh/install | bash`)
- A Turso/libSQL database (or any local SQLite file — see below)

## 1. Install

```bash
bun install
```

## 2. Environment

Copy the template and fill it in:

```bash
cp .env.template .env
```

Only two variables matter for this site — everything else in the template belongs to
optional modules (auth, payments, AI gateway) that this site does not use:

```
DATABASE_URL=            # e.g. libsql://your-db.turso.io  — or  file:local.db
DATABASE_AUTH_TOKEN=     # Turso token; leave empty when using file:local.db
```

For a purely local database, `DATABASE_URL=file:local.db` with an empty auth token works.

Keep everything in the single root `.env`. Bun and Vite load it automatically — do not
create `.env.local` or `.env.production`; the lint rules reject them.

## 3. Database

Two tables back the forms: `contact_submissions` and `partner_applications`.

```bash
cd packages/web
bun run db:push        # push schema
# bun run db:generate  # write migration files instead
# bun run db:migrate   # apply migrations
```

## 4. Run

From the repo root:

```bash
bun run dev                 # http://localhost:5173
bun run dev --port 4200     # custom port
```

## 5. Verify

```bash
bun run typecheck
bun run build
```

Note: `bun run lint` reports one pre-existing error in `packages/mobile/app/_layout.tsx`
(a template convention rule about an ErrorBoundary import path). The mobile package is
untouched scaffolding and unused by this site — delete `packages/mobile` if you want a
clean lint run.

## Where things live

```
packages/web/
  index.html                      title, description, OG tags
  src/api/
    index.ts                      oRPC router composition
    database/schema.ts            contact_submissions, partner_applications
    routes/contact.ts             contact.submit, contact.list
    routes/partners.ts            partners.apply, partners.listApplications
  src/web/
    app.tsx                       routes + Header/Footer layout + 404
    styles.css                    design tokens, @font-face, custom utilities
    lib/content.ts                ALL site copy and product data
    queries/                      react-query hooks (contact.ts, partners.ts)
    hooks/use-reveal.ts           scroll reveal + scroll-to-top
    components/site/              primitives, header, footer, product-card, form-fields
    pages/                        index, products, product-detail, applications,
                                  why-beamvox, partners, support, about, contact
  public/
    images/                       hero, fixtures/, applications/, factory-qa, brand/
    fonts/                        Sora, Manrope, IBM Plex Mono (woff2, self-hosted)
design.md                         design system: voice, colour, type scale, motion
```

## Replacing the placeholder content

Nearly all copy lives in one module: `packages/web/src/web/lib/content.ts`. It exports
`site`, `nav`, `regions`, `categories`, `products`, `applications`, `stats`,
`capabilities`, `certifications`, `timeline`, `downloadGroups`, `faqs`,
`partnerBenefits`, `partnerSteps`, `values`, `claims`, `commitments`.

Invented figures are marked `(placeholder)` — grep for it to find every number that
needs a real source. Contact details in `site` (email, phone, address) are placeholders
too.

`products` is typed (`Product`, `SpecGroup`), so adding a model means adding one object;
the listing page, category filters and `/products/:slug` detail page pick it up
automatically. `productBySlug` and `categoryById` are the lookups.

## Design tokens

Defined as CSS variables in `packages/web/src/web/styles.css` and exposed to Tailwind:

- `void` `#08080A`, `surface`, `elevated`, `line`, `line-strong`
- `ink` `#F6F5F3`, `muted`, `faint`
- `ember` `#FF6A1A`, `ember-soft` — emphasis only, never large fills or body text
- utilities: `container-bv`, `display-xl/lg/md`, `eyebrow`, `mono-meta`, `measure`,
  `grain` / `grain-layer`, `beam-top`, `beam-edge`, `reveal` / `reveal-in`

## Deploying

The project was scaffolded from Runable's managed template, so publishing, custom
domains and hosted env vars are normally handled in the Runable UI. Self-hosting it
yourself: `bun run build` produces `packages/web/dist` (static frontend) plus the Hono
server entry at `packages/web/src/api/index.ts` — serve both from one process, point
`DATABASE_URL` at your database, and set `WEBSITE_URL` to the public origin.

Two things to do before going live:

1. Add a canonical link in `packages/web/index.html` once the domain is fixed.
2. Replace `public/og-image.png` and `public/favicon.ico` with Beamvox artwork.

To drop the "Made with Runable" badge, remove `<RunableBadge />` and its import from
`packages/web/src/web/app.tsx`.
