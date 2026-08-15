import { useMutation } from "@tanstack/react-query";
import { orpc } from "../lib/api";
import { isStaticBuild, submitStatic, type FormResult, type FormValues } from "../lib/forms";

// Data hooks live here, one file per feature.
export function useSubmitContact() {
  const apiOptions = orpc.contact.submit.mutationOptions();

  return useMutation<FormResult, Error, FormValues>(
    isStaticBuild
      ? { mutationFn: (values) => submitStatic("Beamvox enquiry", values) }
      : (apiOptions as never),
  );
}
