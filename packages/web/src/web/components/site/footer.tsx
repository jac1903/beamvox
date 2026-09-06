import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import { categories, regions, site } from "@/lib/content";
import { Container } from "./primitives";
import { asset } from "@/lib/utils";

const columns = [
  {
    title: "Products",
    links: categories.map((c) => ({
      label: c.name,
      href: `/products?category=${c.id}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About Beamvox", href: "/about" },
      { label: "Why Beamvox", href: "/why-beamvox" },
      { label: "Applications", href: "/applications" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Partners & support",
    links: [
      { label: "Become a distributor", href: "/partners" },
      { label: "Find a distributor", href: "/partners#find" },
      { label: "Manuals & downloads", href: "/support" },
      { label: "Frequently asked questions", href: "/support#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      {/* 🏢 Background image - Company facade */}
      <img
        src="/beamvox/images/factoryentrc.jpg"
        alt="Our company entrance"
        loading="lazy"
        className="absolute inset-0 -z-30 size-full object-cover opacity-30"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-20 bg-void/85" aria-hidden="true" />
      
      {/* Grain overlay */}
      <span className="grain-layer -z-10" aria-hidden="true" />
      
      <Container className="relative z-10">
        <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-10">
          <div>
            <img
              src={asset("/images/brand/logo.png")}
              alt="Beamvox"
              className="h-[22px] w-auto"
              width={720}
              height={116}
            />
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
              Professional stage lighting, manufactured for touring, theatre, broadcast and
              permanent installation. Supplied through distribution across Europe, the
              Americas and Africa.
            </p>
            <ul className="mt-7 space-y-3 text-[0.875rem] text-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-faint" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}, {site.address.country}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-faint" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-faint" />
                <span>{site.phone}</span>
              </li>
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="eyebrow" style={{ letterSpacing: "0.18em" }}>
                {column.title}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-[0.9375rem] text-muted transition-colors duration-300 hover:text-ember"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="grid gap-6 border-t border-line py-8 md:grid-cols-3">
          {regions.map((region) => (
            <div key={region.id}>
              <p className="font-mono text-[0.8125rem] tracking-[0.08em] text-ink">
                {region.name}
              </p>
              <p className="mt-1 text-[0.8125rem] text-faint">{region.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-7 text-[0.8125rem] text-faint md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved. Placeholder
            content for review.
          </p>
          <p className="font-mono tracking-[0.08em]">
            Specifications subject to change without notice
          </p>
        </div>
      </Container>
    </footer>
  );
}
