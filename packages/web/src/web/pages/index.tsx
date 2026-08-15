import { useTranslation } from 'react-i18next';
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import {
  applications,
  capabilities,
  categories,
  certifications,
  products,
  regions,
  stats,
} from "@/lib/content";
import {
  ButtonLink,
  Container,
  Eyebrow,
  NumberedItem,
  Section,
  SectionHead,
  StatRow,
  TextLink,
} from "@/components/site/primitives";
import { ProductCard } from "@/components/site/product-card";
import { asset } from "@/lib/utils";

function Hero() {
  const { t } = useTranslation();
  const heroSpecs = [
  { label: t('hero.specs.platforms'), value: "06" },
  { label: t('hero.specs.warranty'), value: "48 months" },
  { label: t('hero.specs.photometrics'), value: "Measured, published" },
  { label: t('hero.specs.distribution'), value: "3 regions" },
];
  return (
    <section className="grain relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden pt-32 pb-14 md:pb-20">
      <img
        src={asset("/images/hero-stage.jpg")}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,#08080a_6%,rgba(8,8,10,0.86)_42%,rgba(8,8,10,0.42)_100%)]"
        aria-hidden="true"
      />
      <span className="grain-layer -z-10" aria-hidden="true" />

      <Container className="relative">
        <div className="max-w-4xl">
          <div data-reveal>
            <Eyebrow>{t('site.tagline')}</Eyebrow>
          </div>
          <h1 className="display-xl mt-7" data-reveal data-reveal-delay={80}>
            {t('hero.title')}
          </h1>
          <p
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
            data-reveal
            data-reveal-delay={160}
          >
            {t('hero.description')}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4" data-reveal data-reveal-delay={240}>
            <ButtonLink href="/products" size="lg">
              {t('hero.cta_products')}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">
              {t('hero.cta_quote')}
            </ButtonLink>
          </div>
        </div>

        <dl
          className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 md:grid-cols-4"
          data-reveal
          data-reveal-delay={320}
        >
          {heroSpecs.map((spec) => (
            <div key={spec.label}>
              <dt className="font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">
                {spec.label}
              </dt>
              <dd className="mt-2 font-mono text-[0.9375rem] text-ink">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Positioning() {
  const { t } = useTranslation();
  return (
    <Section tone="surface" className="beam-edge">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>What we make</Eyebrow>
            <h2 className="display-lg mt-6">{t('positioning.title')}
            </h2>
            <p className="mt-6 text-muted">{t('positioning.description')}
            </p>
            <div className="mt-9">
              <TextLink href="/products">{t('positioning.cta')}</TextLink>
            </div>
          </div>

          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
            t('categories', { returnObjects: true }).map((category, i) => (
              <li key={category.id} data-reveal data-reveal-delay={i * 60}>
                <Link
                  to={`/products?category=${category.id}`}
                  className="group flex h-full flex-col justify-between gap-8 bg-surface p-6 transition-colors duration-500 hover:bg-elevated"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-ember">
                      {category.code}
                    </span>
                    <ArrowUpRight className="size-4 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-[-0.03em]">
                      {category.name}
                    </h3>
                    <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted">
                      {category.summary}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

function Featured() {
  const { t } = useTranslation();
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <Section>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow={t('featured.eyebrow')}
            title={t('featured.title')}
            body={t('featured.body')}"
          />
          <div className="pb-2" data-reveal>
            <TextLink href="/products">{t('featured.cta')}</TextLink>
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
          {featured.map((product, i) => (
            <ProductCard
              key={product.slug}
              product={product}
              delay={i * 90}
              className="border-0"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Proof() {
  return (
    <Section tone="surface" className="py-16 md:py-20">
      <Container>
        <StatRow items={stats.map((s) => ({ value: s.value, label: s.label }))} />
      </Container>
    </Section>
  );
}

function Applications() {
  const { t } = useTranslation();
  return (
    <Section>
      <Container>
        <SectionHead
          eyebrow={t('applications.eyebrow')}
          title={t('applications.title')}
          body={t('applications.body')}
        />

        <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          t('applications', { returnObjects: true }).map((application, i) => (
            <Link
              key={application.id}
              to={`/applications#${application.id}`}
              className="group relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden bg-surface p-7"
              data-reveal
              data-reveal-delay={i * 70}
            >
              <img
                src={asset(application.image)}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 -z-20 size-full object-cover opacity-45 transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105 group-hover:opacity-60"
              />
              <div
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(8,8,10,0.96)_12%,rgba(8,8,10,0.55)_62%,rgba(8,8,10,0.25)_100%)]"
                aria-hidden="true"
              />
              <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">
                {application.name}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                {application.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.16em] uppercase text-ink transition-colors group-hover:text-ember">
                Read the brief
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Manufacturing() {
  const { t } = useTranslation();
  return (
    <Section tone="surface">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="relative" data-reveal>
            <img
              src={asset("/images/factory-qa.jpg")}
              alt="Quality control bench inside the Beamvox assembly hall"
              loading="lazy"
              className="w-full border border-line object-cover"
            />
            <div className="absolute -bottom-px right-0 border-t border-l border-line bg-void px-5 py-4">
              <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">
                Final QC — every unit
              </p>
              <p className="mt-1.5 font-mono text-sm text-ink">Burn-in · movement · vibration</p>
            </div>
          </div>

          <div>
            <SectionHead
              eyebrow={t('manufacturing.eyebrow')}
              title={t('manufacturing.title')}
              body={t('manufacturing.body')}
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {capabilities.map((capability, i) => (
                <NumberedItem
                  key={capability.code}
                  code={capability.code}
                  title={capability.title}
                  body={capability.body}
                  delay={i * 70}
                />
              ))}
            </div>
            <div className="mt-11">
              <TextLink href="/why-beamvox">Why Beamvox</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Distribution() {
  const { t } = useTranslation();
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>Distribution</Eyebrow>
            <h2 className="display-lg mt-6">{t('distribution.title')}</h2>
            <p className="mt-6 text-muted">
              {t('distribution.description')}
            </p>
            <div className="mt-9 flex flex-wrap gap-6">
              <TextLink href="/partners">{t('distribution.cta_partners')}</TextLink>
              <TextLink href="/contact">{t('distribution.cta_contact')}</TextLink>
            </div>
          </div>

          <ul className="divide-y divide-line border-y border-line">
            t('regions', { returnObjects: true }).map((region, i) => (
              <li
                key={region.id}
                className="grid gap-3 py-7 md:grid-cols-[10rem_1fr] md:gap-8"
                data-reveal
                data-reveal-delay={i * 70}
              >
                <div>
                  <p className="font-display text-lg font-semibold tracking-[-0.03em]">
                    {region.name}
                  </p>
                  <p className="mono-meta mt-1.5 text-faint">{region.detail}</p>
                </div>
                <p className="text-[0.9375rem] leading-relaxed text-muted">{region.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-8" data-reveal>
          {certifications.map((certification) => (
            <li key={certification.code}>
              <p className="font-mono text-sm tracking-[0.08em] text-ink">
                {certification.code}
              </p>
              <p className="mt-1 text-[0.8125rem] text-faint">{certification.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function ClosingCta() {
  const { t } = useTranslation();
  return (
    <Section tone="surface" className="grain beam-top overflow-hidden">
      <span className="grain-layer" aria-hidden="true" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <Eyebrow className="justify-center" withRule={false}>
            Next step
          </Eyebrow>
          <h2 className="display-lg mt-6">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted">
            {t('cta.description')}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" size="lg">
              {t('cta.quote')}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="/support" variant="outline" size="lg">
              	{t('cta.support')}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Index() {
  useReveal();
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <Positioning />
      <Featured />
      <Proof />
      <Applications />
      <Manufacturing />
      <Distribution />
      <ClosingCta />
    </>
  );
}

export default Index;
