import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import {
  capabilities,
  certifications,
  claims,
  commitments,
  stats,
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

function WhyBeamvox() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Why Beamvox"
        title="The quiet argument: our numbers survive scrutiny."
        body="Anyone can print a bigger figure on a spec sheet. The test is whether the fixture still measures that way after a season on the road, and whether the next batch matches the last one."
      />

      <Section tone="surface" className="py-14 md:py-16">
        <Container>
          <StatRow items={stats.map((s) => ({ value: s.value, label: s.label }))} />
        </Container>
      </Section>

      {/* ── Specification honesty ───────────────────────────────────────── */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="Specification honesty"
            title="How we state a figure, and how it is usually stated"
            body="Not a competitor comparison — a description of the two conventions you will meet while comparing quotes."
          />

          <div className="mt-14 overflow-x-auto" data-reveal>
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-line-strong">
                  <th className="w-[16rem] pb-4 font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">
                    Figure
                  </th>
                  <th className="pb-4 font-mono text-[0.625rem] tracking-[0.16em] uppercase text-ember">
                    How Beamvox states it
                  </th>
                  <th className="pb-4 font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">
                    Commonly stated as
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {claims.map((row) => (
                  <tr key={row.claim}>
                    <td className="py-5 pr-8 font-mono text-[0.875rem] text-ink">
                      {row.claim}
                    </td>
                    <td className="py-5 pr-8 text-[0.9375rem] leading-relaxed text-ink">
                      {row.ours}
                    </td>
                    <td className="py-5 text-[0.9375rem] leading-relaxed text-faint">
                      {row.common}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* ── Manufacturing ───────────────────────────────────────────────── */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div>
              <SectionHead
                eyebrow="Manufacturing"
                title="Four steps between the board and the box"
              />
              <div className="relative mt-12" data-reveal>
                <img
                  src={asset("/images/factory-qa.jpg")}
                  alt="Technician verifying output on the Beamvox quality control bench"
                  loading="lazy"
                  className="w-full border border-line object-cover"
                />
              </div>
            </div>

            <div className="grid gap-9 sm:grid-cols-2 lg:pt-4">
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
          </div>
        </Container>
      </Section>

      {/* ── Commitments ─────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="After the sale"
            title="Most of a fixture's life happens after the invoice"
            body="Purchase price is a small part of what a rig costs over ten years. These are the commitments that decide the rest."
          />
          <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {commitments.map((commitment, i) => (
              <NumberedItem
                key={commitment.code}
                code={commitment.code}
                title={commitment.title}
                body={commitment.body}
                delay={(i % 2) * 70}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Values + certifications ─────────────────────────────────────── */}
      <Section tone="surface" className="beam-edge">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <Eyebrow>What we hold to</Eyebrow>
              <div className="mt-10 space-y-10">
                {values.map((value, i) => (
                  <div key={value.code} data-reveal data-reveal-delay={i * 70}>
                    <h3 className="display-md text-xl md:text-[1.35rem]">{value.title}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                      {value.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Eyebrow>Compliance</Eyebrow>
              <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
                {certifications.map((certification, i) => (
                  <li
                    key={certification.code}
                    className="bg-surface px-5 py-6"
                    data-reveal
                    data-reveal-delay={i * 50}
                  >
                    <p className="font-mono text-sm tracking-[0.08em] text-ink">
                      {certification.code}
                    </p>
                    <p className="mt-1.5 text-[0.8125rem] text-faint">{certification.note}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.8125rem] leading-relaxed text-faint">
                Certification scope varies by model and market. Declarations of conformity are
                published for every fixture in the downloads section. Placeholder listing
                pending final certification records.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="grain beam-top overflow-hidden">
        <span className="grain-layer" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <h2 className="display-lg">Test the claims with a demo unit.</h2>
            <p className="mt-6 text-muted">
              Evaluation stock is available through regional distributors. Measure it yourself
              against the published data.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" size="lg">
                Request a demonstration
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="/support" variant="outline" size="lg">
                Photometric data
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default WhyBeamvox;
