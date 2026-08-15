import { useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { products, regions, site } from "@/lib/content";
import { useSubmitContact } from "@/queries/contact";
import {
  Container,
  Button,
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
  "Product or specification question",
  "Quotation request",
  "Distribution enquiry",
  "Technical support",
  "Warranty or service",
  "Other",
];

function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const submit = useSubmitContact();

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit.mutate(form, { onSuccess: () => setForm(emptyForm) });
  };

  const state = submit.isSuccess ? "success" : submit.isError ? "error" : "idle";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" required>
          <TextInput
            required
            minLength={2}
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Your full name"
            autoComplete="name"
          />
        </Field>
        <Field label="Work email" required>
          <TextInput
            required
            type="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="name@company.com"
            autoComplete="email"
          />
        </Field>
        <Field label="Company">
          <TextInput
            value={form.company}
            onChange={(e) => set("company")(e.target.value)}
            placeholder="Organisation or venue"
            autoComplete="organization"
          />
        </Field>
        <Field label="Country">
          <TextInput
            value={form.country}
            onChange={(e) => set("country")(e.target.value)}
            placeholder="Where the fixtures will be used"
            autoComplete="country-name"
          />
        </Field>
        <Field label="Phone">
          <TextInput
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="Including country code"
            autoComplete="tel"
          />
        </Field>
        <Field label="Enquiry type" required>
          <Select
            required
            value={form.enquiryType}
            onChange={(e) => set("enquiryType")(e.target.value)}
          >
            <option value="">Select a type</option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Product of interest" hint="Optional — helps us route the enquiry.">
        <Select
          value={form.productInterest}
          onChange={(e) => set("productInterest")(e.target.value)}
        >
          <option value="">No specific model</option>
          {products.map((product) => (
            <option key={product.slug} value={product.model}>
              {product.model} — {product.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field
        label="Message"
        required
        hint="Throw distance, venue size, quantities and timeline get you a faster answer."
      >
        <TextArea
          required
          minLength={10}
          rows={6}
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          placeholder="Tell us what you are lighting."
        />
      </Field>

      <FormStatus
        state={state}
        successTitle="Message received"
        successBody="We reply within one working day, in the timezone of your region."
        errorBody="The message did not send. Check the required fields, or email us directly."
      />

      <div className="flex flex-wrap items-center gap-5 pt-1">
        <Button type="submit" size="lg" disabled={submit.isPending}>
          {submit.isPending ? "Sending…" : "Send enquiry"}
          {!submit.isPending && <ArrowRight className="size-4" />}
        </Button>
        <p className="text-[0.8125rem] text-faint">
          We use your details to answer this enquiry only.
        </p>
      </div>
    </form>
  );
}

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: Clock, label: "Hours", value: site.hours },
  {
    icon: MapPin,
    label: "Works",
    value: `${site.address.line1}, ${site.address.line2}, ${site.address.country}`,
  },
];

function Contact() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send the rig, not just the model number."
        body="Sales, technical and distribution enquiries all arrive here. Tell us the throw, the venue and the quantity, and the reply will be specific."
      />

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div
              className="border border-line bg-surface p-7 md:p-10"
              data-reveal
            >
              <Eyebrow>Enquiry form</Eyebrow>
              <h2 className="display-md mt-5">Tell us what you need</h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                Placeholder form for review — submissions are stored and listed for the sales
                team.
              </p>
              <div className="mt-9">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-12">
              <div data-reveal data-reveal-delay={80}>
                <Eyebrow>Direct</Eyebrow>
                <ul className="mt-7 border-t border-line">
                  {details.map(({ icon: Icon, label, value, href }) => (
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
                  Placeholder contact details — replace before launch.
                </p>
              </div>

              <div data-reveal data-reveal-delay={140}>
                <Eyebrow>Regional routing</Eyebrow>
                <ul className="mt-7 space-y-6">
                  {regions.map((region) => (
                    <li key={region.id} className="border-l-2 border-line pl-5">
                      <p className="font-display text-base font-semibold tracking-[-0.02em]">
                        {region.name}
                      </p>
                      <p className="mono-meta mt-1.5 text-ember">{region.detail}</p>
                      <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
                        {region.note}
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
