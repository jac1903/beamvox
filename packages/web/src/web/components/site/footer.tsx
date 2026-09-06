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
    <footer className="relative overflow-hidden border-t border-line" style={{ minHeight: '400px' }}>
      {/* 🏢 Background image - Company facade */}
      <img
        src="/beamvox/images/factoryentrc.jpg"
        alt="Our company entrance"
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
        style={{ opacity: 0.3, border: '5px solid red' }}
      />
      
      <Container className="relative z-10">
        <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-10">
          {/* ... keep your existing content here ... */}
          <div>
            <p className="text-white">Test content</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
