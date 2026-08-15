import { useMemo } from "react";
import { useLocation, useSearch } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { categories, products, type CategoryId } from "@/lib/content";
import {
  ButtonLink,
  Container,
  Eyebrow,
  PageHero,
  Section,
} from "@/components/site/primitives";
import { ProductCard } from "@/components/site/product-card";

const isCategoryId = (value: string | null): value is CategoryId =>
  categories.some((category) => category.id === value);

function Products() {
  const search = useSearch();
  const [, navigate] = useLocation();

  const active = useMemo(() => {
    const value = new URLSearchParams(search).get("category");
    return isCategoryId(value) ? value : null;
  }, [search]);

  const visible = active ? products.filter((p) => p.category === active) : products;
  const activeCategory = categories.find((c) => c.id === active);

  useReveal([active]);

  const setCategory = (id: CategoryId | null) => {
    navigate(id ? `/products?category=${id}` : "/products");
  };

  return (
    <>
      <PageHero
        eyebrow="Product range"
        title="Eleven models, six platforms, one control language."
        body="Every fixture ships with a published DMX chart, a GDTF profile and measured photometric data. Configured and OEM variants are quoted on request."
      >
        <div className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
          {[
            { label: "Models", value: String(products.length) },
            { label: "Platforms", value: String(categories.length) },
            { label: "Warranty", value: "48 months" },
            { label: "Data", value: "IES · GDTF" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">
                {item.label}
              </p>
              <p className="mt-2 font-mono text-[0.9375rem] text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <Section tone="surface" className="py-12 md:py-14">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by platform">
              <button
                type="button"
                onClick={() => setCategory(null)}
                aria-pressed={!active}
                className={cn(
                  "h-10 rounded-[4px] border px-4 font-mono text-[0.75rem] tracking-[0.12em] uppercase transition-colors duration-300",
                  !active
                    ? "border-ember bg-ember/10 text-ember"
                    : "border-line text-muted hover:border-line-strong hover:text-ink",
                )}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setCategory(category.id)}
                  aria-pressed={active === category.id}
                  className={cn(
                    "h-10 rounded-[4px] border px-4 font-mono text-[0.75rem] tracking-[0.12em] uppercase transition-colors duration-300",
                    active === category.id
                      ? "border-ember bg-ember/10 text-ember"
                      : "border-line text-muted hover:border-line-strong hover:text-ink",
                  )}
                >
                  {category.code} {category.name}
                </button>
              ))}
            </div>
            <p className="mono-meta shrink-0 text-faint">
              {visible.length} {visible.length === 1 ? "model" : "models"}
            </p>
          </div>

          {activeCategory && (
            <p className="mt-8 max-w-2xl border-l-2 border-ember pl-5 text-[0.9375rem] leading-relaxed text-muted">
              {activeCategory.summary}
            </p>
          )}
        </Container>
      </Section>

      <Section className="pt-4 md:pt-6">
        <Container>
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                delay={(i % 3) * 80}
                className="border-0"
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface" className="beam-edge">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-20">
            <div data-reveal>
              <Eyebrow>Configured orders</Eyebrow>
              <h2 className="display-lg mt-6">
                Not in the catalogue? It is probably still buildable.
              </h2>
              <p className="mt-6 measure text-muted">
                Housing colour, connector layout, voltage configuration, firmware defaults and
                branding can be specified from an agreed minimum quantity. Optical changes are
                assessed case by case, with a sample before tooling.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end" data-reveal data-reveal-delay={80}>
              <ButtonLink href="/contact" size="lg">
                Discuss a configuration
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="/support" variant="outline" size="lg">
                Download the catalogue
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Products;
