import { useRef, useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useReveal } from "@/hooks/use-reveal";
import { products, regions, site } from "@/lib/content";
import { ContactSubmissionError, useSubmitContact } from "@/queries/contact";
import {
  Container,
  Button,
  ButtonLink,
  Eyebrow,
  PageHero,
  Section,
} from "@/components/site/primitives";
import {
  Field,
  FormStatus,
  Select,
  TextArea,
  TextInput,
} from "@/components/site/form-fields";

const emptyForm = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  enquiryType: "",
  productInterest: "",
  message: "",
};

const enquiryTypes = [
  { value: "Product or specification question", label: "contact.enquiry_types.product_specification" },
  { value: "Quotation request", label: "contact.enquiry_types.quotation" },
  { value: "Distribution enquiry", label: "contact.enquiry_types.distribution" },
  { value: "Technical support", label: "contact.enquiry_types.technical_support" },
  { value: "Warranty or service", label: "contact.enquiry_types.warranty_service" },
  { value: "Other", label: "contact.enquiry_types.other" },
];

function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState(emptyForm);
  const submit = useSubmitContact();
  const submissionInProgress = useRef(false);

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionInProgress.current) return;

    submissionInProgress.current = true;
    submit.mutate(new FormData(event.currentTarget), {
      onSuccess: () => setForm(emptyForm),
      onSettled: () => {
        submissionInProgress.current = false;
      },
    });
  };

  const state = submit.isSuccess ? "success" : submit.isError ? "error" : "idle";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t("contact.fields.name")} required>
          <TextInput
            required
            minLength={2}
            name="name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder={t("contact.placeholders.name")}
            autoComplete="name"
          />
        </Field>
        <Field label={t("contact.fields.email")} required>
          <TextInput
            required
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder={t("contact.placeholders.email")}
            autoComplete="email"
          />
        </Field>
        <Field label={t("contact.fields.company")}>
          <TextInput
            name="company"
            value={form.company}
            onChange={(e) => set("company")(e.target.value)}
            placeholder={t("contact.placeholders.company")}
            autoComplete="organization"
          />
        </Field>
        <Field label={t("contact.fields.country")}>
          <TextInput
            name="country"
            value={form.country}
            onChange={(e) => set("country")(e.target.value)}
            placeholder={t("contact.placeholders.country")}
            autoComplete="country-name"
          />
        </Field>
        <Field label={t("contact.fields.phone")}>
          <TextInput
            name="phone"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder={t("contact.placeholders.phone")}
            autoComplete="tel"
          />
        </Field>
        <Field label={t("contact.fields.enquiry_type")} required>
          <Select
            required
            name="enquiry_type"
            value={form.enquiryType}
            onChange={(e) => set("enquiryType")(e.target.value)}
          >
            <option value="">{t("contact.placeholders.enquiry_type")}</option>
            {enquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {t(type.label)}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field
        label={t("contact.fields.product_interest")}
        hint={t("contact.hints.product_interest")}
      >
        <Select
          name="product_interest"
          value={form.productInterest}
          onChange={(e) => set("productInterest")(e.target.value)}
        >
          <option value="">{t("contact.placeholders.product_interest")}</option>
          {products.map((product) => (
            <option key={product.slug} value={product.model}>
              {product.model} — {product.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field
        label={t("contact.fields.message")}
        required
        hint={t("contact.hints.message")}
      >
        <TextArea
          required
          minLength={10}
          name="message"
          rows={6}
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          placeholder={t("contact.placeholders.message")}
        />
      </Field>

      <FormStatus
        state={state}
        successTitle={t("contact.form_status.success_title")}
        successBody={t("contact.form_status.success_body")}
        errorTitle={t("contact.form_status.error_title")}
        errorBody={
          submit.error instanceof ContactSubmissionError && submit.error.providerMessage
            ? submit.error.providerMessage
            : t("contact.form_status.error_body")
        }
      />

      <div className="flex flex-wrap items-center gap-5 pt-1">
        <Button type="submit" size="lg" disabled={submit.isPending}>
          {submit.isPending ? t("contact.form_status.sending") : t("contact.form_status.submit")}
          {!submit.isPending && <ArrowRight className="size-4" />}
        </Button>
        <p className="text-[0.8125rem] text-faint">
          {t("contact.form_status.privacy_note")}
        </p>
      </div>
    </form>
  );
}

function Contact() {
  const { t, i18n } = useTranslation();
  useReveal();

  // Choose the WhatsApp number based on the current language
  const phoneRaw = i18n.language === 'es' ? site.whatsappPhoneEs : site.whatsappPhoneEn;
  const phoneDigits = phoneRaw.replace(/\D/g, "");

  const whatsappMessage = t('contact.whatsapp_message', { defaultValue: "Hello, I'm interested in your stage lighting products." });
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <PageHero
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        body={t('contact.body')}
      />

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div
              className="border border-line bg-surface p-7 md:p-10"
              data-reveal
            >
              <Eyebrow>{t('contact.form_eyebrow')}</Eyebrow>
              <h2 className="display-md mt-5">{t('contact.form_title')}</h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                {t('contact.form_body')}
              </p>
              <div className="mt-9">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-12">
              <div data-reveal data-reveal-delay={80}>
                <Eyebrow>{t('contact.direct_eyebrow')}</Eyebrow>

                {/* WhatsApp button */}
                <div className="mt-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-[4px] bg-[#25D366] px-6 py-4 font-medium text-white transition-colors hover:bg-[#1ebe5c]"
                  >
                    <MessageCircle className="size-6" />
                    {t('contact.whatsapp_button')}
                  </a>
                </div>

                <ul className="mt-7 border-t border-line">
                  {[
                    { icon: Mail, label: t('contact.email_label'), value: site.email, href: `mailto:${site.email}` },
                    { icon: Phone, label: t('contact.phone_label'), value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
                    { icon: Clock, label: t('contact.hours_label'), value: site.hours },
                    {
                      icon: MapPin,
                      label: t('contact.address_label'),
                      value: `${site.address.line1}, ${site.address.line2}, ${site.address.country}`,
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex gap-4 border-b border-line py-5">
                      <Icon className="mt-0.5 size-4 shrink-0 text-ember" aria-hidden="true" />
                      <div>
                        <p className="mono-meta text-faint">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="mt-1.5 block text-[0.9375rem] text-ink underline-offset-4 transition-colors hover:text-ember hover:underline"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="mt-1.5 text-[0.9375rem] text-ink">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[0.8125rem] text-faint">
                  {t('contact.placeholder_note')}
                </p>
              </div>

              <div data-reveal data-reveal-delay={140}>
                <Eyebrow>{t('contact.regions_eyebrow')}</Eyebrow>
                <ul className="mt-7 space-y-6">
                  {regions.map((region) => (
                    <li key={region.id} className="border-l-2 border-line pl-5">
                      <p className="font-display text-base font-semibold tracking-[-0.02em]">
                        {t(`contact.regions.${region.id}.name`)}
                      </p>
                      <p className="mono-meta mt-1.5 text-ember">{region.detail}</p>
                      <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
                        {t(`contact.regions.${region.id}.note`)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
