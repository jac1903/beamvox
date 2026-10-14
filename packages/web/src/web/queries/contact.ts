import { useMutation } from "@tanstack/react-query";

const API_URL = "https://beamvox-api.onrender.com";

interface FormValues {
  name: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  enquiryType: string;
  productInterest?: string;
  message: string;
}

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: FormValues) => {
      const url = `${API_URL}/api/contact/submit`;
      let response: Response;
      try {
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch {
        throw new Error("Contact request could not be submitted. Please try again later.");
      }

      if (!response.ok) {
        throw new Error(`Contact request failed (HTTP ${response.status}). Please try again.`);
      }
    },
  });
}
