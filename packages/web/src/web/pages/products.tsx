import { useMemo } from "react";
import { useLocation, useSearch } from "wouter";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { useContent } from "@/lib/use-content";
import type { CategoryId } from "@/lib/content";
import {
  ButtonLink,
  Container,
  Eyebrow,
  PageHero,
  Section,
} from "@/components/site/primitives";
import { ProductCard } from "@/components/site/product-card";

function Products() {
  const { t } = useTranslation();
  const { categories, products } = useContent(); // <-- First, get the data
  const search = useSearch();
  const [, navigate] = useLocation();

  const ACTIVE_CATEGORIES: CategoryId[] = ["beam-spot", "strobe"];

  const isCategoryId = (value: string | null): value is CategoryId =>
    categories.some((category) => category.id === value);
  
  // Filter categories to only show active ones
  const activeCategories = useMemo(
    () => categories.filter((c) => ACTIVE_CATEGORIES.includes(c.id)),
    []
  );

  const active = useMemo(() => {
    const value = new URLSearchParams(search).get("category");
    return isCategoryId(value) && ACTIVE_CATEGORIES.includes(value) ? value : null;
  }, [search]);

  // Filter products to only show active categories
  const visible = useMemo(() => {
    const filtered = products.filter((p) => ACTIVE_CATEGORIES.includes(p.category));
    return active ? filtered.filter((p) => p.category === active) : filtered;
  }, [active]);

  const activeCategory = activeCategories.find((c) => c.id === active);

  useReveal([active]);

  const setCategory = (id: CategoryId | null) => {
    navigate(id ? `/products?category=${id}` : "/products");
  };

  // Get catalog download URL (you can replace this with your actual catalog file)
  const catalogUrl = "/downloads/catalogue.pdf";

  return (
    <>
      <PageHero
        eyebrow={t('products.eyebrow')}
        title={t('products.title')}
        body={t('products.body')}
      >
        <div className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
          {[
            { label: t('products.stats.models'), value: String(visible.length) },
            { label: t('products.stats.platforms'), value: String(activeCategories.length) },
            { label: t('products.stats.warranty'), value: "12 months" },
            { label: t('products.stats.data'), value: "IES · GDTF" },
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
            <div className="flex flex-wrap gap-2" role="group" aria-label={t('products.filter_label')}>
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
                {t('products.filter_all')}
              </button>
              {activeCategories.map((category) => (
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
              {visible.length} {visible.length === 1 ? t('products.model_singular') : t('products.model_plural')}
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
              <Eyebrow>{t('products.config_eyebrow')}</Eyebrow>
              <h2 className="display-lg mt-6">
                {t('products.config_title')}
              </h2>
              <p className="mt-6 measure text-muted">
                {t('products.config_body')}
              </p>
              <div className="mt-6">
                <ButtonLink href={catalogUrl} size="lg" target="_blank" rel="noopener noreferrer">
                  {t('products.download_catalogue')}
                  <ArrowRight className="size-4" />
                </ButtonLink>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end" data-reveal data-reveal-delay={80}>
              <ButtonLink href="/contact" size="lg">
                {t('products.config_cta')}
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="/support" variant="outline" size="lg">
                {t('products.support_cta')}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Products;
