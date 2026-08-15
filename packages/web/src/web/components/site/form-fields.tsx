import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 w-full rounded-[4px] border border-line bg-void px-4 text-[0.9375rem] text-ink transition-colors duration-300 placeholder:text-faint focus:border-ember focus:outline-none";

export function Field({
  label,
  hint,
  required,
  error,
  children,
  className,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mono-meta flex items-baseline gap-1.5 text-faint">
        {label}
        {required && <span className="text-ember">*</span>}
      </span>
      <span className="mt-2.5 block">{children}</span>
      {hint && !error && <span className="mt-2 block text-[0.8125rem] text-faint">{hint}</span>}
      {error && <span className="mt-2 block text-[0.8125rem] text-ember">{error}</span>}
    </label>
  );
}

export function TextInput(props: React.ComponentProps<"input">) {
  return <input {...props} className={cn(fieldClass, props.className)} />;
}

export function TextArea(props: React.ComponentProps<"textarea">) {
  return (
    <textarea
      rows={5}
      {...props}
      className={cn(fieldClass, "h-auto resize-y py-3.5 leading-relaxed", props.className)}
    />
  );
}

export function Select(props: React.ComponentProps<"select">) {
  return (
    <select
      {...props}
      className={cn(
        fieldClass,
        "appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10",
        props.className,
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236a6b73' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

export function FormStatus({
  state,
  successTitle,
  successBody,
  errorBody,
}: {
  state: "idle" | "success" | "error";
  successTitle: string;
  successBody: string;
  errorBody: string;
}) {
  if (state === "idle") return null;

  const isSuccess = state === "success";
  return (
    <div
      role="status"
      className={cn(
        "border-l-2 bg-elevated p-5",
        isSuccess ? "border-ember" : "border-red-500",
      )}
    >
      <p className="font-display text-base font-semibold text-ink">
        {isSuccess ? successTitle : "Something went wrong"}
      </p>
      <p className="mt-1.5 text-[0.9375rem] text-muted">
        {isSuccess ? successBody : errorBody}
      </p>
    </div>
  );
}
