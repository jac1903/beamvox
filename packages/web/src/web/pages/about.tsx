import { useTranslation } from 'react-i18next';
import { useReveal } from "@/hooks/use-reveal";
import { site, stats, values } from "@/lib/content";
import {
  ButtonLink,
  Container,
  Eyebrow,
  NumberedItem,
  PageHero,
  Section,
  SectionHead,
  StatRow,
} from "@/components/site/primitives";
import { asset } from "@/lib/utils";

function About() {
  useReveal();
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        body={t('about.body')}
      />

      <Section>
        <Container>
          <StatRow items={stats} />
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
            <div data-reveal>
              <Eyebrow>{t('about.company_eyebrow')}</Eyebrow>
              <h2 className="display-lg mt-5">
                {t('about.company_title')}
              </h2>
              <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-muted">
                <p>{t('about.company_body_1')}</p>
                <p>{t('about.company_body_2')}</p>
                <p>{t('about.company_body_3')}</p>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <ButtonLink href="/contact" size="lg">
                  {t('about.cta_contact')}
                </ButtonLink>
                <ButtonLink href="/why-beamvox" variant="outline" size="lg">
                  {t('about.cta_compare')}
                </ButtonLink>
              </div>
            </div>

            <figure
              className="relative overflow-hidden border border-line"
              data-reveal
              data-reveal-delay={90}
            >
              <img
                src={asset("/images/factorypl.jpg")}
                alt={t('about.factory_alt')}
                className="aspect-4/3 w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mono-meta border-t border-line bg-surface px-5 py-4 text-faint">
                {t('about.factory_caption')}
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead
            eyebrow={t('about.values_eyebrow')}
            title={t('about.values_title')}
          />
          <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-3">
            {values.map((value, i) => (
              <NumberedItem
                key={value.code}
                code={value.code}
                title={value.title}
                body={value.body}
                delay={i * 70}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
            <SectionHead
              eyebrow={t('about.manufacturing_eyebrow')}
              title={t('about.manufacturing_title')}
              body={t('about.manufacturing_body')}
            />
            <div className="grid gap-x-14 gap-y-10 sm:grid-cols-2">
              {(t('capabilities', { returnObjects: true }) || []).map((capability, i) => (
                <NumberedItem
                  key={capability.code}
                  code={capability.code}
                  title={capability.title}
                  body={capability.body}
                  delay={(i % 2) * 70}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead
            eyebrow={t('about.history_eyebrow')}
            title={t('about.history_title')}
          />
          <ol className="mt-14 border-t border-line">
            {(t('timeline', { returnObjects: true }) || []).map((entry, i) => (
              <li
                key={entry.year}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-[8rem_1fr] md:gap-10"
                data-reveal
                data-reveal-delay={(i % 3) * 60}
              >
                <span className="font-mono text-sm tracking-[0.16em] text-ember">
                  {entry.year}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">
                    {entry.title}
                  </h3>
                  <p className="mt-2.5 measure text-[0.9375rem] leading-relaxed text-muted">
                    {entry.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHead
                eyebrow={t('about.compliance_eyebrow')}
                title={t('about.compliance_title')}
                body={t('about.compliance_body')}
              />
              <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
                {(t('certifications', { returnObjects: true }) || []).map((cert, i) => (
                  <li
                    key={cert.code}
                    className="bg-surface px-5 py-6"
                    data-reveal
                    data-reveal-delay={(i % 2) * 60}
                  >
                    <p className="font-mono text-sm tracking-[0.12em] text-ink">{cert.code}</p>
                    <p className="mt-2 text-[0.8125rem] text-faint">{cert.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHead
                eyebrow={t('about.regions_eyebrow')}
                title={t('about.regions_title')}
                body={t('about.regions_body')}
              />
              <ul className="mt-12 border-t border-line">
                {(t('regions', { returnObjects: true }) || []).map((region, i) => (
                  <li
                    key={region.id}
                    className="border-b border-line py-7"
                    data-reveal
                    data-reveal-delay={i * 60}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <p className="font-display text-xl font-semibold tracking-[-0.03em]">
                        {region.name}
                      </p>
                      <p className="mono-meta text-ember">{region.detail}</p>
                    </div>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                      {region.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
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
                {t('about.cta_eyebrow')}
              </Eyebrow>
              <h2 className="display-lg mt-5">
                {t('about.cta_title')}
              </h2>
              <p className="mt-5 text-muted">
                {t('about.cta_body')}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <ButtonLink href="/contact" size="lg">
                  {t('about.cta_sales')}
                </ButtonLink>
                <ButtonLink href="/partners" variant="outline" size="lg">
                  {t('about.cta_partner')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default About;
