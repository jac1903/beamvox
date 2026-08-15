import { useReveal } from "@/hooks/use-reveal";
import {
  capabilities,
  certifications,
  regions,
  site,
  stats,
  timeline,
  values,
} from "@/lib/content";
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

  return (
    <>
      <PageHero
        eyebrow="About Beamvox"
        title="A lighting manufacturer that publishes its numbers."
        body="Beamvox has built stage lighting since 2014 — first for regional touring companies, now for distributors and productions across Europe, the Americas and Africa. Placeholder company profile pending final approval."
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
              <Eyebrow>The company</Eyebrow>
              <h2 className="display-lg mt-5">
                Six people and one goniophotometer, to begin with
              </h2>
              <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-muted">
                <p>
                  {site.legalName} started in {site.founded} as an optical workshop, building
                  fixtures to order for touring companies who could not get the throw they
                  needed from catalogue products. Measuring every unit was a practical
                  necessity then. It became the way the company works.
                </p>
                <p>
                  Today the range spans beam, wash, effect, strobe, static and control
                  products, assembled on an {stats[1]?.value} floor with optical design,
                  photometric verification and final test kept in house. Placeholder copy —
                  replace with the approved company history.
                </p>
                <p>
                  We sell through distributors and resellers only. That keeps our attention on
                  the fixtures and keeps the customer relationship where it belongs.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <ButtonLink href="/contact" size="lg">
                  Talk to us
                </ButtonLink>
                <ButtonLink href="/why-beamvox" variant="outline" size="lg">
                  How we compare
                </ButtonLink>
              </div>
            </div>

            <figure
              className="relative overflow-hidden border border-line"
              data-reveal
              data-reveal-delay={90}
            >
              <img
                src={asset("/images/factory-qa.jpg")}
                alt="Final quality control and photometric verification on the Beamvox production floor"
                className="aspect-4/3 w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mono-meta border-t border-line bg-surface px-5 py-4 text-faint">
                Final test and photometric verification · production floor
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead
            eyebrow="What we hold to"
            title="Three positions we do not trade away"
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
              eyebrow="Manufacturing"
              title="Kept in house, on purpose"
              body="Design, verification and final assembly stay under one roof so a fault found in test reaches the engineer who drew the part."
            />
            <div className="grid gap-x-14 gap-y-10 sm:grid-cols-2">
              {capabilities.map((capability, i) => (
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
          <SectionHead eyebrow="History" title="Twelve years, in order" />
          <ol className="mt-14 border-t border-line">
            {timeline.map((entry, i) => (
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
                eyebrow="Compliance"
                title="Certifications and listings"
                body="Declarations of conformity are published per model. Placeholder list pending certificate audit."
              />
              <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
                {certifications.map((cert, i) => (
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
                eyebrow="Where we ship"
                title="Three regions, stocked locally"
                body="Distributor network placeholder — figures to be confirmed per territory."
              />
              <ul className="mt-12 border-t border-line">
                {regions.map((region, i) => (
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
                Next step
              </Eyebrow>
              <h2 className="display-lg mt-5">Ask us for the measured data</h2>
              <p className="mt-5 text-muted">
                Send a rig, a venue or a spec sheet. We will tell you which fixtures fit and
                which do not.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <ButtonLink href="/contact" size="lg">
                  Contact sales
                </ButtonLink>
                <ButtonLink href="/partners" variant="outline" size="lg">
                  Become a distributor
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
