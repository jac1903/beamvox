import { LanguageSwitcher } from './language-switcher';
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { asset, cn } from "@/lib/utils";
import { nav } from "@/lib/content";
import { Container } from "./primitives";

export function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)]",
          scrolled || open
            ? "border-b border-line bg-void/85 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <Container className="flex h-20 items-center justify-between gap-8">
          <Link to="/" className="flex shrink-0 items-center" aria-label="Beamvox home">
            <img
              src={asset("/images/brand/logo.png")}
              alt="Beamvox"
              className="h-[22px] w-auto md:h-6"
              width={720}
              height={116}
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "relative px-3.5 py-2 text-[0.9375rem] transition-colors duration-300",
                  isActive(item.href) ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-ember transition-transform duration-300",
                    isActive(item.href) ? "scale-x-100" : "scale-x-0",
                  )}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="hidden h-10 items-center gap-2 rounded-[4px] bg-ember px-5 text-[0.9375rem] font-medium text-void transition-colors duration-300 hover:bg-ember-soft sm:inline-flex"
            >
              Request a quote
              <ArrowRight className="size-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-[4px] border border-line text-ink transition-colors hover:border-line-strong lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-void/97 backdrop-blur-xl transition-all duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col justify-between pt-28 pb-10">
          <nav className="container-bv flex flex-col" aria-label="Mobile">
            {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center justify-between border-b border-line py-5 font-display text-2xl font-medium tracking-[-0.03em] transition-all duration-500",
                  isActive(item.href) ? "text-ember" : "text-ink",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
              >
                {item.label}
                <ArrowRight className="size-4 text-faint" />
              </Link>
            ))}
          </nav>
          <div className="container-bv">
            {/* Language Switcher for mobile */}
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
            <Link
              to="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-ember font-medium text-void"
            >
              Request a quote
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
