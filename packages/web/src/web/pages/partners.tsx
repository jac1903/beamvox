import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { partnerBenefits, partnerSteps, regions, site } from "@/lib/content";
import { useApplyPartner } from "@/queries/partners";
import {
  Button,
  Container,
  Eyebrow,
  NumberedItem,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/primitives";
import {
  Field,
  FormStatus,
  Select,
  TextArea,
  TextInput,
} from "@/components/site/form-fields";

const emptyForm = {
  company: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",
  region: "",
  country: "",
  sectors: "",
  currentBrands: "",
  message: "",
};

const sectorOptions = [
  "Rental & production",
  "Systems integration",
  "Retail & e-commerce",
  "Theatre & venue supply",
  "Broadcast supply",
  "Other",
];

function PartnerForm() {
  const [form, setForm] = useState(emptyForm);
  const apply = useApplyPartner();

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    apply.mutate(form, { onSuccess: () => setForm(emptyForm) });
  };

  const state = apply.isSuccess ? "success" : apply.isError ? "error" : "idle";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company" required>
          <TextInput
            required
            minLength={2}
            value={form.company}
            onChange={(e) => set("company")(e.target.value)}
            placeholder="Registered company name"
            autoComplete="organization"
          />
        </Field>
        <Field label="Contact name" required>
          <TextInput
            required
            minLength={2}
            value={form.contactName}
            onChange={(e) => set("contactName")(e.target.value)}
            placeholder="Who we should reply to"
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
        <Field label="Phone">
          <TextInput
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="Including country code"
            autoComplete="tel"
          />
        </Field>
        <Field label="Region" required>
          <Select
            required
            value={form.region}
            onChange={(e) => set("region")(e.target.value)}
          >
            <option value="">Select a region</option>
            {regions.map((region) => (
              <option key={region.id} value={region.name}>
                {region.name}
              </option>
            ))}
            <option value="Other">Other / not listed</option>
          </Select>
        </Field>
        <Field label="Country" required>
          <TextInput
            required
            minLength={2}
            value={form.country}
            onChange={(e) => set("country")(e.target.value)}
            placeholder="Territory you would cover"
            autoComplete="country-name"
          />
        </Field>
        <Field label="Website">
          <TextInput
            value={form.website}
            onChange={(e) => set("website")(e.target.value)}
            placeholder="company.com"
          />
        </Field>
        <Field label="Primary sector">
          <Select value={form.sectors} onChange={(e) => set("sectors")(e.target.value)}>
            <option value="">Select a sector</option>
            {sectorOptions.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Brands you currently carry" hint="Helps us judge portfolio fit.">
        <TextInput
          value={form.currentBrands}
          onChange={(e) => set("currentBrands")(e.target.value)}
          placeholder="Comma separated"
        />
      </Field>

      <Field
        label="Anything else"
        hint="Annual volume, warehouse capacity, service capability, target sectors."
      >
        <TextArea
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          placeholder="Tell us how you would sell and support the range."
        />
      </Field>

      <FormStatus
        state={state}
        successTitle="Application received"
        successBody="We check territory availability and respond within five working days."
        errorBody="The application did not send. Check the required fields, or email us directly."
      />

      <div className="flex flex-wrap items-center gap-5 pt-1">
        <Button type="submit" size="lg" disabled={apply.isPending}>
          {apply.isPending ? "Sending…" : "Submit application"}
          {!apply.isPending && <ArrowRight className="size-4" />}
        </Button>
        <p className="text-[0.8125rem] text-faint">
          Or email{" "}
          <a href={`mailto:${site.email}`} className="text-muted underline-offset-4 hover:text-ember hover:underline">
            {site.email}
          </a>
        </p>
      </div>
    </form>
  );
}

function Partners() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Partners & distribution"
        title="We do not compete with the people who sell for us."
        body="Beamvox sells through distributors and resellers only. Territories are defined, pricing tiers are published, and the accounts you build stay yours."
      />

      <Section tone="surface">
        <Container>
          <SectionHead
            eyebrow="What you get"
            title="A trade programme without the fine print"
          />
          <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {partnerBenefits.map((benefit, i) => (
              <NumberedItem
                key={benefit.code}
                code={benefit.code}
                title={benefit.title}
                body={benefit.body}
                delay={(i % 3) * 70}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <SectionHead eyebrow="Process" title="Four steps, five working days to a reply" />
              <ol className="mt-12 space-y-8">
                {partnerSteps.map((step, i) => (
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

            <div id="apply" className="scroll-mt-28 border border-line bg-surface p-7 md:p-10" data-reveal>
              <Eyebrow>Application</Eyebrow>
              <h2 className="display-md mt-5">Apply for a territory</h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                Placeholder form for review — submissions are stored and listed for the sales
                team.
              </p>
              <div className="mt-9">
                <PartnerForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="find" tone="surface" className="scroll-mt-20">
        <Container>
          <SectionHead
            eyebrow="Find a distributor"
            title="Where we are already represented"
            body="Distributor directory placeholder — contact us and we will route your enquiry to the nearest partner."
          />
          <ul className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
            {regions.map((region, i) => (
              <li
                key={region.id}
                className="bg-surface p-7"
                data-reveal
                data-reveal-delay={i * 70}
              >
                <p className="font-display text-xl font-semibold tracking-[-0.03em]">
                  {region.name}
                </p>
                <p className="mono-meta mt-2 text-ember">{region.detail}</p>
                <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
                  {region.note}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}

export default Partners;
