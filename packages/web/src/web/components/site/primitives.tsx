import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("container-bv", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  tone = "void",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "void" | "surface";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28",
        tone === "surface" ? "bg-surface" : "bg-void",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  withRule = true,
}: {
  children: ReactNode;
  className?: string;
  withRule?: boolean;
}) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", className)}>
      {withRule && <span className="h-px w-8 bg-ember" aria-hidden="true" />}
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl",
        className,
      )}
      data-reveal
    >
      {eyebrow && (
        <Eyebrow
          className={align === "center" ? "justify-center" : undefined}
          withRule={align !== "center"}
        >
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className="display-lg mt-5">{title}</h2>
      {body && <p className="mt-5 measure text-muted">{body}</p>}
    </div>
  );
}

/* ── Buttons ────────────────────────────────────────────────────────────── */

const buttonBase =
  "group inline-flex items-center justify-center gap-2.5 rounded-[4px] font-medium transition-all duration-300 ease-[cubic-bezier(.2,.7,.2,1)] disabled:pointer-events-none disabled:opacity-50";

const buttonSizes = {
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-13 px-7 text-base",
  sm: "h-9 px-4 text-sm",
} as const;

const buttonVariants = {
  primary: "bg-ember text-void hover:bg-ember-soft",
  outline:
    "border border-line-strong text-ink hover:border-ember hover:text-ember bg-transparent",
  ghost: "text-muted hover:text-ink",
} as const;

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps & { href: string }) {
  return (
    <Link
      to={href}
      className={cn(buttonBase, buttonSizes[size], buttonVariants[variant], className)}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps & React.ComponentProps<"button">) {
  return (
    <button
      className={cn(buttonBase, buttonSizes[size], buttonVariants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={href}
      className={cn(
        "group inline-flex items-center gap-2 font-mono text-[0.8125rem] tracking-[0.08em] uppercase text-ink transition-colors hover:text-ember",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/* ── Data display ───────────────────────────────────────────────────────── */

export function StatRow({
  items,
  className,
}: {
  items: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 divide-x divide-line border-y border-line md:grid-cols-4",
        className,
      )}
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            "px-5 py-7 md:px-7",
            i > 1 && "border-t border-line md:border-t-0",
            i % 2 === 0 && "border-l-0 md:border-l",
          )}
          data-reveal
          data-reveal-delay={i * 70}
        >
          <dt className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink md:text-3xl">
            {item.value}
          </dt>
          <dd className="mono-meta mt-2 text-faint">{item.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function NumberedItem({
  code,
  title,
  body,
  delay = 0,
}: {
  code: string;
  title: string;
  body: string;
  delay?: number;
}) {
  return (
    <div
      className="group border-t border-line pt-6 transition-colors duration-500 hover:border-ember"
      data-reveal
      data-reveal-delay={delay}
    >
      <span className="font-mono text-xs tracking-[0.18em] text-ember">{code}</span>
      <h3 className="display-md mt-4 text-xl md:text-[1.35rem]">{title}</h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{body}</p>
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-faint">
      {children}
    </span>
  );
}

/* ── Page header ────────────────────────────────────────────────────────── */

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="grain relative overflow-hidden border-b border-line beam-top pt-36 pb-16 md:pt-44 md:pb-20">
      <span className="grain-layer" aria-hidden="true" />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-4xl">{title}</h1>
        {body && <p className="mt-7 max-w-2xl text-lg text-muted">{body}</p>}
        {children}
      </Container>
    </header>
  );
}
