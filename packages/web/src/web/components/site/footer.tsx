import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";
import { categories, regions, site } from "@/lib/content";
import { Container } from "./primitives";
import { asset } from "@/lib/utils";

const columns = [
  {
    title: "footer.columns.products",
    links: categories.map((c) => ({
      label: `footer.categories.${c.id}`,
      href: `/products?category=${c.id}`,
    })),
  },
  {
    title: "footer.columns.company",
    links: [
      { label: "footer.links.about", href: "/about" },
      { label: "footer.links.why_beamvox", href: "/why-beamvox" },
      { label: "footer.links.applications", href: "/applications" },
      { label: "footer.links.contact", href: "/contact" },
    ],
  },
  {
    title: "footer.columns.partners_support",
    links: [
      { label: "footer.distribution_information", href: "/partners" },
      { label: "footer.links.manuals_downloads", href: "/support" },
      { label: "footer.links.faq", href: "/support#faq" },
    ],
  },
];

export function Footer() {
  const { t } = useTranslation();
  const localizedColumns = columns.map((column) => ({
    ...column,
    title: t(column.title),
    links: column.links.map((link) => ({
      ...link,
      label: t(link.label),
    })),
  }));

  return (
    <footer className="relative overflow-hidden border-t border-line" style={{ minHeight: '400px' }}>
      {/* 🏢 Background image - Company facade */}
      <img
        src="/beamvox/images/factoryentrc.jpg"
        alt={t("footer.factory_image_alt")}
        loading="lazy"
        className="absolute inset-0 size-full object-cover object-top"
        style={{ opacity: 0.3 }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-void/85" aria-hidden="true" />

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
              {t("footer.site_description")}
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

          {localizedColumns.map((column) => (
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
                {t(`footer.regions.${region.id}`)}
              </p>
              <p className="mt-1 text-[0.8125rem] text-faint">{region.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-7 text-[0.8125rem] text-faint md:flex-row md:items-center md:justify-between">
          <p>
            {t("footer.copyright", { year: new Date().getFullYear(), name: site.legalName })}{" "}
            {t("footer.placeholder_notice")}
            <Link to="/legal" className="ml-4 text-ink transition-colors hover:text-ember">
              {t("footer.legal")}
            </Link>
          </p>
          <p className="font-mono tracking-[0.08em]">
            {t("footer.specifications_notice")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
