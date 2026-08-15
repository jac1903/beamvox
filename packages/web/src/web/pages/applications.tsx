import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { asset, cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { applications, productBySlug } from "@/lib/content";
import {
  ButtonLink,
  Container,
  Eyebrow,
  PageHero,
  Section,
} from "@/components/site/primitives";

function Applications() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Every room punishes a different weakness."
        body="Touring kills connectors. Theatre hears fans. Broadcast sees flicker. Clubs cook housings. These are the fixtures we would put in front of each brief, and why."
      >
        <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8" aria-label="Applications">
          {applications.map((application) => (
            <a
              key={application.id}
              href={`#${application.id}`}
              className="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-faint transition-colors hover:text-ember"
            >
              {application.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {applications.map((application, index) => {
        const recommended = application.recommended
          .map((slug) => productBySlug(slug))
          .filter((p): p is NonNullable<typeof p> => Boolean(p));

        return (
          <Section
            key={application.id}
            id={application.id}
            tone={index % 2 === 0 ? "void" : "surface"}
            className="scroll-mt-20"
          >
            <Container>
              <div
                className={cn(
                  "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
                  index % 2 === 1 && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div className="relative" data-reveal>
                  <img
                    src={asset(application.image)}
                    alt={application.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full border border-line object-cover"
                  />
                  <span
                    className="absolute top-0 left-0 h-px w-16 bg-ember"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <Eyebrow>{String(index + 1).padStart(2, "0")} — Application</Eyebrow>
                  <h2 className="display-lg mt-6">{application.name}</h2>
                  <p className="mt-6 measure text-muted">{application.summary}</p>

                  <ul className="mt-9 space-y-4">
                    {application.points.map((point, i) => (
                      <li
                        key={point}
                        className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-muted"
                        data-reveal
                        data-reveal-delay={i * 60}
                      >
                        <Check className="mt-1 size-4 shrink-0 text-ember" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 border-t border-line pt-7">
                    <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">
                      Specified fixtures
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2.5">
                      {recommended.map((product) => (
                        <li key={product.slug}>
                          <Link
                            to={`/products/${product.slug}`}
                            className="inline-flex h-9 items-center gap-2 rounded-[4px] border border-line px-3.5 font-mono text-[0.75rem] tracking-[0.08em] text-muted transition-colors duration-300 hover:border-ember hover:text-ember"
                          >
                            {product.model}
                            <ArrowRight className="size-3" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      <Section className="grain beam-top overflow-hidden border-t border-line">
        <span className="grain-layer" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <Eyebrow className="justify-center" withRule={false}>
              Not sure what fits
            </Eyebrow>
            <h2 className="display-lg mt-6">Send the room and we will send the list.</h2>
            <p className="mt-6 text-muted">
              Plot, venue dimensions, throw distances or an existing fixture schedule — any of
              those is enough for us to propose a rig and the data behind it.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" size="lg">
                Talk to a specifier
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="/products" variant="outline" size="lg">
                Browse the range
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Applications;
