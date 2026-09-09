import { useMutation } from "@tanstack/react-query";

// ✅ Use your Render API URL
const API_URL = import.meta.env.VITE_API_URL || "https://beamvox-api.onrender.com";

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
      const response = await fetch(`${API_URL}/api/contact/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to submit");
      }

      return response.json();
    },
  });
}
