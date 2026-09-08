import { useMemo } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useReveal } from "@/hooks/use-reveal";
import { useContent } from "@/lib/use-content";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Section,
  SectionHead,
} from "@/components/site/primitives";
import { asset } from "@/lib/utils";

function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { products, categories } = useContent();

  const product = useMemo(() => products.find((p) => p.slug === slug), [slug, products]);
  const category = useMemo(
    () => (product ? categories.find((c) => c.id === product.category) : null),
    [product, categories]
  );

  useReveal();

  if (!product) {
    return (
      <Section>
        <Container>
          <div className="py-20 text-center">
            <h1 className="display-lg">{t('product.not_found')}</h1>
            <p className="mt-4 text-muted">{t('product.not_found_body')}</p>
            <ButtonLink href="/products" className="mt-8">
              {t('product.back_to_products')}
            </ButtonLink>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <Section className="grain relative overflow-hidden">
        <span className="grain-layer" aria-hidden="true" />
        <Container>
          <div className="mb-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" />
              {t('product.back_to_products')}
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-reveal>
              <img
                src={asset(product.image)}
                alt={product.name}
                className="w-full border border-line object-cover aspect-square"
                loading="lazy"
              />
            </div>
            <div data-reveal data-reveal-delay={80}>
              <Eyebrow>{category?.name}</Eyebrow>
              <h1 className="display-lg mt-4">{product.name}</h1>
              <p className="mt-4 text-xl font-medium text-ember">{product.tagline}</p>
              <p className="mt-6 text-muted">{product.intro}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-8">
                {product.keySpecs.map((spec) => (
                  <div key={spec.label}>
                    <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">
                      {spec.label}
                    </p>
                    <p className="mt-1 font-mono text-sm text-ink">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/contact" size="lg">
                  {t('product.request_quote')}
                  <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink href="/support" variant="outline" size="lg">
                  {t('product.downloads')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHead
            eyebrow={t('product.highlights_eyebrow')}
            title={t('product.highlights_title')}
            body={t('product.highlights_body')}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {product.highlights.map((highlight, i) => (
              <div
                key={highlight.title}
                className="border border-line bg-surface p-6"
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

      <Section>
        <Container>
          <SectionHead
            eyebrow={t('product.specs_eyebrow')}
            title={t('product.specs_title')}
          />
          <div className="mt-14 space-y-10">
            {product.specs.map((specGroup) => (
              <div key={specGroup.group}>
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">
                  {specGroup.group}
                </h3>
                <dl className="mt-4 grid gap-px bg-line sm:grid-cols-2">
                  {specGroup.rows.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between bg-surface px-5 py-4 text-[0.9375rem]"
                    >
                      <dt className="text-muted">{label}</dt>
                      <dd className="font-mono text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHead
            eyebrow={t('product.dmx_eyebrow')}
            title={t('product.dmx_title')}
          />
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-3">
            {product.dmxModes.map((mode) => (
              <div key={mode.mode} className="bg-surface p-6">
                <p className="font-mono text-sm tracking-[0.12em] text-ember">{mode.mode}</p>
                <p className="mt-1 font-mono text-sm text-faint">{mode.channels} {t('product.channels')}</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{mode.use}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div
            className="grain relative overflow-hidden border border-line bg-surface px-7 py-14 text-center md:px-16 md:py-20"
            data-reveal
          >
            <span className="grain-layer" aria-hidden="true" />
            <div className="relative mx-auto max-w-2xl">
              <Eyebrow className="justify-center" withRule={false}>
                {t('product.cta_eyebrow')}
              </Eyebrow>
              <h2 className="display-lg mt-5">
                {t('product.cta_title')}
              </h2>
              <p className="mt-5 text-muted">
                {t('product.cta_body')}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <ButtonLink href="/contact" size="lg">
                  {t('product.cta_quote')}
                  <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink href="/products" variant="outline" size="lg">
                  {t('product.cta_products')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default ProductDetail;
