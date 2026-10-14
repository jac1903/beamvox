import { useTranslation } from "react-i18next";
import { Container, PageHero, Section } from "@/components/site/primitives";

function Partners() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t("partners_page.eyebrow")}
        title={t("partners_page.title")}
        body={t("partners_page.body")}
      />
      <Section tone="surface">
        <Container>
          <div className="max-w-3xl border-l-2 border-ember pl-6">
            <p className="text-[0.9375rem] leading-relaxed text-muted">
              {t("partners_page.notice")}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Partners;
