import { afterEach, describe, expect, it, mock } from "bun:test";
import { submitContact } from "./contact";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

describe("submitContact", () => {
  it("sends the form fields to Basin and accepts any successful HTTP response", async () => {
    const fetchMock = mock(async () => new Response(null, { status: 204 }));
    globalThis.fetch = fetchMock as unknown as typeof fetch;

    const formData = new FormData();
    formData.set("name", "Test Sender");
    formData.set("email", "sender@example.com");
    formData.set("company", "Test Company");
    formData.set("country", "Colombia");
    formData.set("phone", "+57 300 000 0000");
    formData.set("enquiry_type", "Quotation request");
    formData.set("product_interest", "BVX-100");
    formData.set("message", "This is a test enquiry message.");

    await expect(submitContact(formData)).resolves.toBeUndefined();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, options] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://usebasin.com/f/84864f7345a0");
    expect(options.method).toBe("POST");
    expect(new Headers(options.headers).get("Accept")).toBe("application/json");
    expect(options.body).toBe(formData);
    expect((options.body as FormData).get("email")).toBe("sender@example.com");
    expect((options.body as FormData).get("message")).toBe("This is a test enquiry message.");
  });

  it("rejects an HTTP error response", async () => {
    globalThis.fetch = mock(async () =>
      new Response(JSON.stringify({ error: "The form is temporarily unavailable." }), {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }),
    ) as unknown as typeof fetch;

    await expect(submitContact(new FormData())).rejects.toMatchObject({
      message: "Contact request failed (HTTP 503).",
      providerMessage: "The form is temporarily unavailable.",
    });
  });

  it("rejects a network failure", async () => {
    globalThis.fetch = mock(async () => {
      throw new TypeError("Failed to fetch");
    }) as unknown as typeof fetch;

    await expect(submitContact(new FormData())).rejects.toThrow(
      "Contact request could not be submitted.",
    );
  });
});
