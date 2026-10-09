import { resetCookieConsentValue } from "react-cookie-consent";
import { useTranslation } from "react-i18next";
import { Button, Container, PageHero, Section } from "@/components/site/primitives";

const legalSections = ["privacy", "cookies", "disclaimer", "terms"] as const;

export default function Legal() {
  const { t } = useTranslation();

  const manageConsent = () => {
    resetCookieConsentValue("beamvox-consent");
    window.location.reload();
  };

  return (
    <>
      <PageHero
        eyebrow={t("legal.eyebrow")}
        title={t("legal.title")}
        body={t("legal.intro")}
      />
      <Section>
        <Container>
          <p className="mb-12 max-w-3xl border-l border-ember pl-5 text-sm leading-relaxed text-muted">
            {t("legal.generalNotice")}
          </p>
          <div className="space-y-5">
            {legalSections.map((section) => {
              const paragraphs = t(`legal.sections.${section}.paragraphs`, {
                returnObjects: true,
              }) as string[];

              return (
                <section
                  key={section}
                  id={`legal-${section}`}
                  className="border-t border-line py-8 md:py-10"
                  aria-labelledby={`legal-${section}-title`}
                >
                  <div className="grid gap-5 md:grid-cols-[15rem_1fr] md:gap-10">
                    <h2
                      id={`legal-${section}-title`}
                      className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink"
                    >
                      {t(`legal.sections.${section}.title`)}
                    </h2>
                    <div className="max-w-3xl space-y-4 text-[0.9375rem] leading-relaxed text-muted">
                      {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                      {section === "cookies" && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={manageConsent}
                        >
                          {t("legal.manageConsent")}
                        </Button>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
