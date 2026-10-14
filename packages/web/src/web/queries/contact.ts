import { useMutation } from "@tanstack/react-query";

const BASIN_ENDPOINT = "https://usebasin.com/f/84864f7345a0";

export class ContactSubmissionError extends Error {
  constructor(
    message: string,
    readonly providerMessage?: string,
  ) {
    super(message);
    this.name = "ContactSubmissionError";
  }
}

function safeProviderMessage(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;

  const message = value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim();
  if (!message || /<[^>]*>/.test(message)) return undefined;
  return message.slice(0, 300);
}

async function readProviderError(response: Response): Promise<string | undefined> {
  try {
    const payload: unknown = await response.clone().json();
    if (payload && typeof payload === "object") {
      const fields = payload as Record<string, unknown>;
      const directMessage = safeProviderMessage(fields.message) ?? safeProviderMessage(fields.error);
      if (directMessage) return directMessage;
      if (Array.isArray(fields.errors)) {
        const messages = fields.errors.map(safeProviderMessage).filter(Boolean);
        if (messages.length) return messages.join(" ").slice(0, 300);
      }
    }
  } catch {
    // Some providers return plain text for errors; try that format below.
  }

  try {
    return safeProviderMessage(await response.clone().text());
  } catch {
    return undefined;
  }
}

export async function submitContact(formData: FormData): Promise<void> {
  let response: Response;
  try {
    response = await fetch(BASIN_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });
  } catch {
    throw new ContactSubmissionError("Contact request could not be submitted.");
  }

  if (!response.ok) {
    const providerMessage = await readProviderError(response);
    throw new ContactSubmissionError(
      `Contact request failed (HTTP ${response.status}).`,
      providerMessage,
    );
  }
}

export function useSubmitContact() {
  return useMutation({
    mutationFn: submitContact,
  });
}
