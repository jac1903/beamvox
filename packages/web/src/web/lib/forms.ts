import { site } from "./content";

/**
 * Static-hosting mode (GitHub Pages and friends).
 *
 * On a static host there is no Hono/oRPC server and no database, so the two
 * forms cannot POST to /api/rpc. Set VITE_STATIC=true at build time and they
 * switch transport:
 *
 *   1. VITE_FORM_ENDPOINT set  → POST the form as JSON to that URL
 *                                (Formspree, Basin, Web3Forms, a Worker, …)
 *   2. VITE_FORM_ENDPOINT unset → fall back to opening the visitor's mail client
 *                                with the enquiry pre-filled
 *
 * Leaving VITE_STATIC unset keeps the real API path, unchanged.
 */
export const isStaticBuild = import.meta.env.VITE_STATIC === "true";

const endpoint = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? "";

export type FormValues = Record<string, string>;
export type FormResult = { id: number | null; received: boolean };

const labels: Record<string, string> = {
  name: "Name",
  email: "Email",
  company: "Company",
  contactName: "Contact name",
  country: "Country",
  phone: "Phone",
  enquiryType: "Enquiry type",
  productInterest: "Product of interest",
  region: "Region",
  website: "Website",
  sectors: "Primary sector",
  currentBrands: "Brands currently carried",
  message: "Message",
};

function asPlainText(values: FormValues) {
  return Object.entries(values)
    .filter(([, value]) => value.trim() !== "")
    .map(([key, value]) => `${labels[key] ?? key}: ${value}`)
    .join("\n");
}

/** Sends a form without the API — configured endpoint first, mailto as fallback. */
export async function submitStatic(
  subject: string,
  values: FormValues,
): Promise<FormResult> {
  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, ...values }),
    });
    if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`);
    return { id: null, received: true };
  }

  const href = `mailto:${site.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(asPlainText(values))}`;
  window.location.href = href;
  return { id: null, received: true };
}
