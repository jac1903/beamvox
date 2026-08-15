import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { useReveal, useScrollTop } from "@/hooks/use-reveal";
import { categoryById, productBySlug, products } from "@/lib/content";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Section,
  SectionHead,
  TextLink,
} from "@/components/site/primitives";
import { ProductCard } from "@/components/site/product-card";
import { asset } from "@/lib/utils";

function NotFound({ slug }: { slug: string }) {
  return (
    <Section className="pt-40">
      <Container>
        <Eyebrow>Not found</Eyebrow>
        <h1 className="display-lg mt-6">No model matches “{slug}”.</h1>
        <p className="mt-6 measure text-muted">
          The model may have been renamed or withdrawn from the catalogue. The current range is
          listed on the products page, and superseded models are available on request.
        </p>
        <div className="mt-10">
          <ButtonLink href="/products">
            Back to the range
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

function ProductDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const product = productBySlug(slug);

  useScrollTop(slug);
  useReveal([slug]);

  if (!product) return <NotFound slug={slug} />;

  const category = categoryById(product.category);
  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .concat(products.filter((p) => p.slug !== product.slug && p.category !== product.category))
    .slice(0, 3);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <header className="grain relative overflow-hidden border-b border-line beam-top pt-32 pb-16 md:pt-40 md:pb-20">
        <span className="grain-layer" aria-hidden="true" />
        <Container className="relative">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-mono text-[0.75rem] tracking-[0.14em] uppercase text-faint transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-3.5" />
            {category ? `${category.code} — ${category.name}` : "All products"}
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <p className="font-mono text-[0.8125rem] tracking-[0.16em] uppercase text-ember">
                  {product.model}
                </p>
                <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
                <p className="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-faint">
                  {product.status}
                </p>
              </div>
              <h1 className="display-xl mt-5">{product.name}</h1>
              <p className="mt-6 max-w-xl text-lg text-muted">{product.tagline}</p>
              <p className="mt-6 max-w-xl leading-relaxed text-muted">{product.intro}</p>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href={`/contact?product=${product.slug}`} size="lg">
                  Request a quote
                  <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink href="/support" variant="outline" size="lg">
                  <Download className="size-4" />
                  Manual & DMX chart
                </ButtonLink>
              </div>
            </div>

            <div className="relative">
              <img
                src={asset(product.image)}
                alt={`${product.name} — ${product.model}`}
                className="w-full border border-line object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,106,26,0.12),transparent_70%)]"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Key specs strip */}
          <dl className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {product.keySpecs.map((spec) => (
              <div key={spec.label} className="bg-void px-5 py-6">
                <dt className="font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">
                  {spec.label}
                </dt>
                <dd className="mt-2.5 font-mono text-[0.9375rem] text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      {/* ── Highlights ──────────────────────────────────────────────────── */}
      <Section tone="surface">
        <Container>
          <SectionHead
            eyebrow="Design notes"
            title="What the engineering buys you"
            body="Written for the person who has to rig it, focus it and service it — not for the brochure."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {product.highlights.map((highlight, i) => (
              <div
                key={highlight.title}
                className="border-t border-line pt-6"
                data-reveal
                data-reveal-delay={i * 70}
              >
                <h3 className="font-display text-lg font-semibold tracking-[-0.03em]">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  {highlight.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Specifications ──────────────────────────────────────────────── */}
      <Section id="specifications">
        <Container>
          <SectionHead
            eyebrow="Specifications"
            title="Measured, not estimated"
            body="Output figures come from goniophotometer measurement of a production unit. Figures marked placeholder are for layout review only."
          />

          <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-2">
            {product.specs.map((group, i) => (
              <div key={group.group} data-reveal data-reveal-delay={(i % 2) * 70}>
                <h3 className="eyebrow flex items-center gap-3 text-ink">
                  <span className="h-px w-6 bg-ember" aria-hidden="true" />
                  {group.group}
                </h3>
                <dl className="mt-5 divide-y divide-line border-y border-line">
                  {group.rows.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid gap-1 py-3.5 sm:grid-cols-[13rem_1fr] sm:gap-6"
                    >
                      <dt className="text-[0.9375rem] text-faint">{label}</dt>
                      <dd className="font-mono text-[0.875rem] leading-relaxed text-ink">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── DMX modes ───────────────────────────────────────────────────── */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div data-reveal>
              <Eyebrow>Control</Eyebrow>
              <h2 className="display-md mt-6">DMX modes</h2>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
                Modes are selectable from the display or over RDM. The full channel map ships
                in the manual, with a GDTF profile for console import.
              </p>
              <div className="mt-8">
                <TextLink href="/support">Download DMX charts</TextLink>
              </div>
            </div>

            <div className="overflow-x-auto" data-reveal data-reveal-delay={80}>
              <table className="w-full min-w-[34rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line-strong">
                    <th className="pb-3 font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">
                      Mode
                    </th>
                    <th className="pb-3 font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">
                      Channels
                    </th>
                    <th className="pb-3 font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">
                      Intended use
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {product.dmxModes.map((mode) => (
                    <tr key={mode.mode}>
                      <td className="py-4 pr-6 font-mono text-[0.875rem] text-ink">
                        {mode.mode}
                      </td>
                      <td className="py-4 pr-6 font-mono text-[0.875rem] text-ember">
                        {mode.channels}
                      </td>
                      <td className="py-4 text-[0.9375rem] text-muted">{mode.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Related ─────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead eyebrow="Also consider" title="Fixtures specified alongside it" />
            <div className="pb-2" data-reveal>
              <TextLink href="/products">All models</TextLink>
            </div>
          </div>
          <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
            {related.map((item, i) => (
              <ProductCard
                key={item.slug}
                product={item}
                delay={i * 80}
                className="border-0"
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default ProductDetail;
