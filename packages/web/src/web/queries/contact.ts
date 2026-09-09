import { useMutation } from "@tanstack/react-query";

// ✅ Use your Render API URL
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
      console.log("📤 Sending to:", url);
      console.log("📦 Data:", data);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Error response:", errorText);
        throw new Error(errorText || "Failed to submit");
      }

      const result = await response.json();
      console.log("✅ Success:", result);
      return result;
    },
  });
}
