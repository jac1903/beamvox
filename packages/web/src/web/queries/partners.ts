import { useMutation } from "@tanstack/react-query";
import { orpc } from "../lib/api";
import { isStaticBuild, submitStatic, type FormResult, type FormValues } from "../lib/forms";

export function useApplyPartner() {
  const apiOptions = orpc.partners.apply.mutationOptions();

  return useMutation<FormResult, Error, FormValues>(
    isStaticBuild
      ? { mutationFn: (values) => submitStatic("Beamvox distributor application", values) }
      : (apiOptions as never),
  );
}
