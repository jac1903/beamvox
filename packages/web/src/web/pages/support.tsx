import { ArrowRight, Download, Plus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { downloadGroups, faqs, site } from "@/lib/content";
import {
  ButtonLink,
  Container,
  Eyebrow,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/primitives";

const serviceSteps = [
  {
    code: "01",
    title: "Contact your distributor",
    body: "Warranty and service run through the partner that supplied the fixture. They hold the invoice, the stock and the authority to replace.",
  },
  {
    code: "02",
    title: "Send the fault detail",
    body: "Model, serial number, firmware version, operating hours and a short description of the fault. A phone video of the behaviour saves a week.",
  },
  {
    code: "03",
    title: "Receive an RMA reference",
    body: "Issued within two working days, with return instructions and, where stock allows, a replacement dispatched ahead of the return.",
  },
];

function Support() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Support & downloads"
        title="Documentation on the shelf, not on request."
        body="Manuals, DMX charts, GDTF profiles, photometric files and firmware for every model in the range. Placeholder files for review — links resolve once the document library is connected."
      >
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
          {downloadGroups.map((group) => (
            <a
              key={group.name}
              href={`#${group.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-faint transition-colors hover:text-ember"
            >
              {group.name}
            </a>
          ))}
          <a
            href="#faq"
            className="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-faint transition-colors hover:text-ember"
          >
            FAQ
          </a>
        </div>
      </PageHero>

      {/* ── Downloads ───────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="space-y-16">
            {downloadGroups.map((group, groupIndex) => (
              <div
                key={group.name}
                id={group.name.toLowerCase().replace(/[^a-z]+/g, "-")}
                className="scroll-mt-28"
              >
                <div
                  className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line-strong pb-5"
                  data-reveal
                >
                  <h2 className="display-md text-xl md:text-2xl">
                    <span className="mr-4 font-mono text-xs tracking-[0.18em] text-ember">
                      {String(groupIndex + 1).padStart(2, "0")}
                    </span>
                    {group.name}
                  </h2>
                  <p className="text-[0.875rem] text-faint">{group.note}</p>
                </div>

                <ul className="divide-y divide-line">
                  {group.items.map((item, i) => (
                    <li key={item.title} data-reveal data-reveal-delay={i * 50}>
                      <button
                        type="button"
                        className="group flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-300 hover:bg-surface"
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-[0.9375rem] text-ink">
                            {item.title}
                          </span>
                          <span className="mt-1 block font-mono text-[0.75rem] tracking-[0.06em] text-faint">
                            {item.meta}
                          </span>
                        </span>
                        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-[4px] border border-line text-faint transition-colors duration-300 group-hover:border-ember group-hover:text-ember">
                          <Download className="size-4" />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Service ─────────────────────────────────────────────────────── */}
      <Section tone="surface" className="beam-edge">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div data-reveal>
              <Eyebrow>Warranty & service</Eyebrow>
              <h2 className="display-lg mt-6">If a fixture fails, this is the path.</h2>
              <p className="mt-6 measure text-muted">
                48 months on parts and labour, handled regionally. Common wear parts are held in
                all three served regions, and certified partners carry out warranty work
                locally.
              </p>
              <div className="mt-9">
                <ButtonLink href="/contact" variant="outline">
                  Open a service enquiry
                  <ArrowRight className="size-4" />
                </ButtonLink>
              </div>
            </div>

            <ol className="space-y-8">
              {serviceSteps.map((step, i) => (
                <li
                  key={step.code}
                  className="grid gap-4 border-t border-line pt-6 sm:grid-cols-[3rem_1fr] sm:gap-6"
                  data-reveal
                  data-reveal-delay={i * 70}
                >
                  <span className="font-mono text-xs tracking-[0.18em] text-ember">
                    {step.code}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-[-0.03em]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <Section id="faq" className="scroll-mt-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHead eyebrow="FAQ" title="Questions we answer weekly" />
              <p className="mt-8 text-[0.9375rem] leading-relaxed text-faint">
                Something not covered here? Technical questions reach an engineer, not a
                ticket queue —{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-muted underline-offset-4 hover:text-ember hover:underline"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>

            <div className="divide-y divide-line border-y border-line">
              {faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  className="group py-5"
                  data-reveal
                  data-reveal-delay={i * 50}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.0625rem] font-medium text-ink transition-colors hover:text-ember [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <Plus
                      className="size-4 shrink-0 text-faint transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Support;
