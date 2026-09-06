/**
 * All site copy and product data.
 * PLACEHOLDER CONTENT — written in the final brand voice, ready to be replaced
 * with real specifications, certifications and distributor details.
 */

export const site = {
  name: "Beamvox",
  tagline: "Professional stage lighting",
  legalName: "Beamvox Lighting Industries",
  founded: 2016,
  email: "sales@beamvox.example",
  phone: "+00 000 000 0000",
  address: {
    line1: "Unit 14, Northgate Industrial Park",
    line2: "Guangzhou",
    country: "China",
  },
  hours: "Mon–Fri, 08:00–18:00 CET",
} as const;

export const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Why Beamvox", href: "/why-beamvox" },
  { label: "Partners", href: "/partners" },
  { label: "Support", href: "/support" },
  { label: "About", href: "/about" },
] as const;

export const regions = [
  {
    id: "europe",
    name: "Europe",
    detail: "24 distributors · 18 countries",
    note: "Stocked warehouse, 48-hour dispatch on catalogue lines.",
  },
  {
    id: "americas",
    name: "Americas",
    detail: "16 distributors · 9 countries",
    note: "ETL-listed variants, 120 V configurations available on request.",
  },
  {
    id: "africa",
    name: "Africa",
    detail: "11 distributors · 8 countries",
    note: "Regional service partners for warranty work and spare parts.",
  },
] as const;

/* ── Product taxonomy ───────────────────────────────────────────────────── */

export type CategoryId =
  | "beam-spot"
  | "wash-profile"
  | "effect"
  | "strobe"
  | "static"
  | "control";

export const categories: {
  id: CategoryId;
  name: string;
  code: string;
  summary: string;
  image: string;
}[] = [
  {
    id: "beam-spot",
    name: "Beam & Spot",
    code: "01",
    summary:
      "Narrow-angle moving heads for long-throw work. Hard-edged output, fast optics, full gobo and prism paths.",
    image: "/images/fixtures/beam.jpg",
  },
  {
    id: "wash-profile",
    name: "Wash & Profile",
    code: "02",
    summary:
      "Even-field LED wash and framing profile heads with CMY colour mixing and variable CTO.",
    image: "/images/fixtures/wash.jpg",
  },
  {
    id: "effect",
    name: "Effect & Matrix",
    code: "03",
    summary:
      "Pixel-mappable matrix and hybrid heads for texture, aerial effect and audience interaction.",
    image: "/images/fixtures/movinghead.jpg",
  },
  {
    id: "strobe",
    name: "Strobe & Blinder",
    code: "04",
    summary:
      "High-output strobe and blinder bars with segmented control and calibrated white points.",
    image: "/images/fixtures/strobe.jpg",
  },
  {
    id: "static",
    name: "Static & Architectural",
    code: "05",
    summary:
      "IP65 battens and arc washes for permanent installation, façades and touring set dressing.",
    image: "/images/fixtures/batten.jpg",
  },
  {
    id: "control",
    name: "Control & Distribution",
    code: "06",
    summary:
      "Consoles, nodes and splitters. Art-Net, sACN and wired DMX across the whole rig.",
    image: "/images/fixtures/control.jpg",
  },
];

/* ── Products ───────────────────────────────────────────────────────────── */

export type SpecGroup = { group: string; rows: [string, string][] };

export type Product = {
  slug: string;
  model: string;
  name: string;
  category: CategoryId;
  featured?: boolean;
  status: "In production" | "New" | "Pre-release";
  tagline: string;
  intro: string;
  image: string;
  keySpecs: { label: string; value: string }[];
  highlights: { title: string; body: string }[];
  specs: SpecGroup[];
  dmxModes: { mode: string; channels: string; use: string }[];
};

const commonElectrical: SpecGroup = {
  group: "Power & connection",
  rows: [
    ["Input voltage", "100–240 V AC, 50/60 Hz"],
    ["Power connection", "Locking power in/out, 16 A"],
    ["Data connection", "5-pin DMX in/out, RJ45 in/out"],
    ["Protocols", "DMX512-A, RDM, Art-Net, sACN"],
  ],
};

const commonWarranty: SpecGroup = {
  group: "Compliance & warranty",
  rows: [
    ["Certification", "CE, RoHS, EMC (placeholder)"],
    ["Warranty", "48 months, parts and labour"],
    ["Service interval", "1,500 operating hours"],
    ["Country of manufacture", "Placeholder"],
  ],
};

export const products: Product[] = [
  {
    slug: "380W Beam Light",
    model: "380W Beam Light",
    name: "380W Beam Light",
    category: "beam-spot",
    featured: true,
    status: "In production",
    tagline: "A 550 W beam engine with a 160 mm front optic and infinite pan.",
    intro:
      "The 380W Beam Light is built for long-throw beam work where the edge of the light matters. A 160 mm coated front lens, a 550 W discharge engine and a sealed head make it equally suited to arena tours and permanent outdoor installation.",
    image: "/images/fixtures/380w.jpg",
    keySpecs: [
      { label: "Source", value: "450 W discharge" },
      { label: "Zoom", value: "0 – 3.9°" },
      { label: "Ingress", value: "IP65" },
      { label: "Weight", value: "18.7 kg" },
    ],
    highlights: [
      {
        title: "160 mm front optic",
        body: "A wide front lens holds beam density at distance. Column stays parallel through haze rather than spreading at the far field.",
      },
      {
        title: "CMY plus linear CTO",
        body: "Subtractive colour mixing with a linear CTO flag for matching tungsten sources in mixed rigs.",
      },
      {
        title: "Fifteen prism combinations",
        body: "Two rotating prisms, independently indexable and overlayable, for aerial texture without a second fixture.",
      },
      {
        title: "Sealed for the outdoors",
        body: "Head, base and yoke. Convection-cooled with no external filters to clean between shows.",
      },
    ],
    specs: [
      {
        group: "Optics & output",
        rows: [
          ["Light source", "550 W short-arc discharge, 8,000 h rated"],
          ["Colour temperature", "7,600 K ±300 K"],
          ["Luminous flux", "23,400 lm (placeholder)"],
          ["Illuminance at 20 m", "18,900 lux (placeholder)"],
          ["Zoom range", "0.8° – 8.4° linear"],
          ["Front lens", "160 mm multi-coated"],
        ],
      },
      {
        group: "Colour & effects",
        rows: [
          ["Colour mixing", "CMY subtractive + linear CTO"],
          ["Colour wheel", "13 colors + white, with bidirectional rainbow effect"],
          ["Gobo wheel", "14 gobos + 1 animation gobo + 1 white"],
          ["Prisms", "8-facet linear + 8-facet circular, rotating"],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Dimming", "0 – 100 % electronic, 18-bit"],
          ["Strobe", "1 – 13 Hz, random and pulse modes"],
        ],
      },
      {
        group: "Movement",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolution", "16-bit pan and tilt"],
          ["Feedback", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "58 × 48 × 42 cm"],
          ["Weight", "18.7 kg"],
          ["Ingress protection", "IP65"],
          ["Operating temperature", "−20 °C to 45 °C"],
          ["Rigging", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "38", use: "Full feature set, 16-bit movement" },
      { mode: "Extended", channels: "44", use: "Adds per-prism and CTO fine control" },
      { mode: "Compact", channels: "24", use: "Reduced footprint for large rigs" },
    ],
  },
  {
    slug: "MINI295 Beam Light",
    model: "MINI295 Beam Light",
    name: "MINI295 Beam Light",
    category: "beam-spot",
    featured: true,
    status: "In production",
    tagline: "A mini beam engine with a all the features of a high quality light.",
    intro:
      "MINI295 Beam Light is built for long-throw beam work where the edge of the light matters. A 160 mm coated front lens, a 550 W discharge engine and a sealed head make it equally suited to arena tours and permanent outdoor installation.",
    image: "/images/fixtures/295mini.jpg",
    keySpecs: [
      { label: "Source", value: "450 W discharge" },
      { label: "Zoom", value: "0 – 3.9°" },
      { label: "Ingress", value: "IP65" },
      { label: "Weight", value: "9 kg" },
    ],
    highlights: [
      {
        title: "160 mm front optic",
        body: "A wide front lens holds beam density at distance. Column stays parallel through haze rather than spreading at the far field.",
      },
      {
        title: "CMY plus linear CTO",
        body: "Subtractive colour mixing with a linear CTO flag for matching tungsten sources in mixed rigs.",
      },
      {
        title: "Fifteen prism combinations",
        body: "Two rotating prisms, independently indexable and overlayable, for aerial texture without a second fixture.",
      },
      {
        title: "Sealed for the outdoors",
        body: "Head, base and yoke. Convection-cooled with no external filters to clean between shows.",
      },
    ],
    specs: [
      {
        group: "Optics & output",
        rows: [
          ["Light source", "230 W short-arc discharge, 8,000 h rated"],
          ["Colour temperature", "7,600 K ±300 K"],
          ["Luminous flux", "23,400 lm (placeholder)"],
          ["Illuminance at 20 m", "18,900 lux (placeholder)"],
          ["Zoom range", "0.8° – 8.4° linear"],
          ["Front lens", "160 mm multi-coated"],
        ],
      },
      {
        group: "Colour & effects",
        rows: [
          ["Colour mixing", "CMY subtractive + linear CTO"],
          ["Colour wheel", "13 colors + white, with bidirectional rainbow effect"],
          ["Gobo wheel", "14 gobos + 1 animation gobo + 1 white"],
          ["Prisms", "8-facet linear + 8-facet circular, rotating"],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Dimming", "0 – 100 % electronic, 18-bit"],
          ["Strobe", "1 – 13 Hz, random and pulse modes"],
        ],
      },
      {
        group: "Movement",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolution", "16-bit pan and tilt"],
          ["Feedback", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "47 × 29 × 22.6 cm"],
          ["Weight", "9 kg"],
          ["Ingress protection", "IP65"],
          ["Operating temperature", "−20 °C to 45 °C"],
          ["Rigging", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "38", use: "Full feature set, 16-bit movement" },
      { mode: "Extended", channels: "44", use: "Adds per-prism and CTO fine control" },
      { mode: "Compact", channels: "24", use: "Reduced footprint for large rigs" },
    ],
  },
  {
    slug: "LED400W Beam Light",
    model: "LED400W Beam Light",
    name: "LED400W Beam Light",
    category: "beam-spot",
    featured: true,
    status: "In production",
    tagline: "A 400W LED moving head with a 4–50 m linear focus and full CMY+CTO color system.",
    intro:
      "The LED400W is a versatile powerhouse for modern stages. Its 400 W LED engine, linear 4–50 m focus, CMY+CTO mixing, dual rotating prisms, and fixed/rotating gobos deliver rich, dynamic effects. With robust cooling and RDM support, it excels in tours, theaters, and indoor fixed installations.",
    image: "/images/fixtures/400w.jpg",
    keySpecs: [
      { label: "Source", value: "550 W discharge" },
      { label: "Zoom", value: "4° – 50°" },
      { label: "Ingress", value: "IP20" },
      { label: "Weight", value: "25 kg" },
    ],
    highlights: [
      {
        title: "180 mm front optic",
        body: "A wide front lens holds beam density at distance. Column stays parallel through haze rather than spreading at the far field.",
      },
      {
        title: "CMY plus linear CTO",
        body: "Subtractive colour mixing with a linear CTO flag for matching tungsten sources in mixed rigs.",
      },
      {
        title: "Fourteen prism combinations",
        body: "Two rotating prisms, independently indexable and overlayable, for aerial texture without a second fixture.",
      },
      {
        title: "Sealed for the outdoors",
        body: "Head, base and yoke. Convection-cooled with no external filters to clean between shows.",
      },
    ],
    specs: [
      {
        group: "Optics & output",
        rows: [
          ["Light source", "550 W short-arc discharge, 20,000 h rated"],
          ["Colour temperature", "7,600 K ±300 K"],
          ["Luminous flux", "23,400 lm (placeholder)"],
          ["Illuminance at 20 m", "18,900 lux (placeholder)"],
          ["Zoom range", "0.8° – 8.4° linear"],
          ["Front lens", "160 mm multi-coated"],
        ],
      },
      {
        group: "Colour & effects",
        rows: [
          ["Colour mixing", "CMY subtractive + linear CTO"],
          ["Colour wheel", "8 colors + white + white, with bidirectional rainbow effect"],
          ["Rotating Gobo wheel", "7 rotating gobos + white light, each gobo can rotate independently"],
          ["Fixed Gobo wheel", "8 fixed gobos + white light + dynamic fire effect"],
          ["Prisms", "8-facet linear + 8-facet circular, rotating"],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Dimming", "0 – 100 % electronic, 18-bit"],
          ["Strobe", " 0 - 30 flashes per second, adjustable speed and strobe effect"],
        ],
      },
      {
        group: "Movement",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolution", "16-bit pan and tilt"],
          ["Feedback", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "63 × 53 × 67 cm"],
          ["Weight", "25 kg"],
          ["Ingress protection", "IP20"],
          ["Operating temperature", "−20 °C to 40 °C"],
          ["Rigging", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "23", use: "Full feature set, 16-bit movement" },
      { mode: "Extended", channels: "44", use: "Adds per-prism and CTO fine control" },
      { mode: "Compact", channels: "25", use: "Reduced footprint for large rigs" },
    ],
  },
  {
    slug: "380W Prism King",
    model: "380W Prism King",
    name: "380W Prism King",
    category: "beam-spot",
    featured: true,
    status: "In production",
    tagline: "A 380 W beam moving head with a 165 mm aperture and a 4‑prism wheel system delivering dozens of dynamic effects.",
    intro:
      "The 380W Prism King packs a Philips 380 W lamp and a 165 mm optical assembly into a tight beam (0°–3.9°). Its four prism wheels—stackable and bi‑directional—create countless multi‑faceted looks, while 14 gobos, 13 colors, and variable strobe make it a go‑to for high‑energy concerts, TV shows, and touring productions.",
    image: "/images/fixtures/prismk.jpg",
    keySpecs: [
      { label: "Source", value: "550 W discharge" },
      { label: "Zoom", value: "0° – 3.9°" },
      { label: "Ingress", value: "IP20" },
      { label: "Weight", value: "27 kg" },
    ],
    highlights: [
      {
        title: "165 mm front optic",
        body: "A wide front lens holds beam density at distance. Column stays parallel through haze rather than spreading at the far field.",
      },
      {
        title: "CMY plus linear CTO",
        body: "Subtractive colour mixing with a linear CTO flag for matching tungsten sources in mixed rigs.",
      },
      {
        title: "Fourteen prism combinations",
        body: "Two rotating prisms, independently indexable and overlayable, for aerial texture without a second fixture.",
      },
      {
        title: "Sealed for the outdoors",
        body: "Head, base and yoke. Convection-cooled with no external filters to clean between shows.",
      },
    ],
    specs: [
      {
        group: "Optics & output",
        rows: [
          ["Light source", "550 W short-arc discharge, 20,000 h rated"],
          ["Colour temperature", "7,600 K ±300 K"],
          ["Luminous flux", "23,400 lm (placeholder)"],
          ["Illuminance at 20 m", "18,900 lux (placeholder)"],
          ["Zoom range", "0° – 3.9° linear"],
          ["Front lens", "165 mm multi-coated"],
        ],
      },
      {
        group: "Colour & effects",
        rows: [
          ["Colour mixing", "CMY subtractive + linear CTO"],
          ["Colour wheel", "8 colors + white + white, with bidirectional rainbow effect"],
          ["Rotating Gobo wheel", "13 colors + white, with rainbow effect and bidirectional rotation"],
          ["Fixed Gobo wheel", "14 static gobos + open, with animation effects and gobo shake, gobo indexing and rotation"],
          ["Prism 1", ": 6-facet prism, 24-facet prism (optional), bidirectional rotation, stackable, with prism positioning function"],
          ["Prism 2", "8+16+24 prism, 8+16-facet prism (optional), bidirectional rotation, with prism positioning function; A total of 4 prism wheels, capable of creating dozens of prism effects"],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Dimming", "0 – 100 % electronic, 18-bit"],
          ["Strobe", " 0 - 30 flashes per second, adjustable speed and strobe effect"],
        ],
      },
      {
        group: "Movement",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolution", "16-bit pan and tilt"],
          ["Feedback", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "65 × 55 × 70 cm"],
          ["Weight", "27 kg"],
          ["Ingress protection", "IP20"],
          ["Operating temperature", "−20 °C to 40 °C"],
          ["Rigging", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "23", use: "Full feature set, 16-bit movement" },
      { mode: "Extended", channels: "44", use: "Adds per-prism and CTO fine control" },
      { mode: "Compact", channels: "25", use: "Reduced footprint for large rigs" },
    ],
  },
  {
    slug: "LED600W Beam Light",
    model: "LED600W Beam Light",
    name: "LED600W Beam Light",
    category: "beam-spot",
    featured: true,
    status: "In production",
    tagline: "A 600 W LED 3-in-1 moving head with 4°–50° linear zoom and full CMY+CTO color mixing.",
    intro:
      "The LED 600W 3-in-1 is a true all-rounder, delivering crisp projection across a massive 4°–50° zoom range. Its 600 W LED engine, linear CMY+CTO mixing, dual independent prisms, and both fixed and rotating glass gobos offer limitless creativity for concerts, theatrical productions, and high-end touring—all backed by RDM support and robust forced-air cooling.",
    image: "/images/fixtures/600w.jpg",
    keySpecs: [
      { label: "Source", value: "600 W discharge" },
      { label: "Zoom", value: "4° – 50°" },
      { label: "Ingress", value: "IP20" },
      { label: "Weight", value: "76 kg" },
    ],
    highlights: [
      {
        title: "165 mm front optic",
        body: "A wide front lens holds beam density at distance. Column stays parallel through haze rather than spreading at the far field.",
      },
      {
        title: "CMY plus linear CTO",
        body: "Subtractive colour mixing with a linear CTO flag for matching tungsten sources in mixed rigs.",
      },
      {
        title: "Fourteen prism combinations",
        body: "Two rotating prisms, independently indexable and overlayable, for aerial texture without a second fixture.",
      },
      {
        title: "Sealed for the outdoors",
        body: "Head, base and yoke. Convection-cooled with no external filters to clean between shows.",
      },
    ],
    specs: [
      {
        group: "Optics & output",
        rows: [
          ["Light source", "600 W LED Module, , 20,000 h rated"],
          ["Colour temperature", "7,600 K ±300 K"],
          ["Luminous flux", "23,400 lm (placeholder)"],
          ["Illuminance at 20 m", "18,900 lux (placeholder)"],
          ["Zoom range", "4° – 50° linear"],
          ["Front lens", "165 mm multi-coated"],
        ],
      },
      {
        group: "Colour & effects",
        rows: [
          ["Colour mixing", "CMY subtractive + linear CTO"],
          ["Colour wheel", "8 colors + white"],
          ["Rotating Gobo wheel", "7 rotating gobos + white light, each gobo can rotate independently"],
          ["Fixed Gobo wheel", "8 fixed gobos + white light + dynamic fire effect"],
          ["Prisms", "1 x 8-facet prism + 1 x 6-facet prism, each prism can rotate independently in both directions"],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Dimming", "0 – 100 % electronic, 18-bit"],
          ["Strobe", " 0 - 30 flashes per second, adjustable speed and strobe effect"],
        ],
      },
      {
        group: "Movement",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolution", "16-bit pan and tilt"],
          ["Feedback", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "63 × 53 × 67 cm"],
          ["Weight", "76 kg"],
          ["Ingress protection", "IP20"],
          ["Operating temperature", "−20 °C to 40 °C"],
          ["Rigging", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "23", use: "Full feature set, 16-bit movement" },
      { mode: "Extended", channels: "44", use: "Adds per-prism and CTO fine control" },
      { mode: "Compact", channels: "25", use: "Reduced footprint for large rigs" },
    ],
  },
  {
    slug: "IP66 550W Moving Head Light",
    model: "IP66 550W Moving Head Light",
    name: "IP66 550W Moving Head Light",
    category: "beam-spot",
    status: "In production",
    tagline: "An IP66-rated 550 W beam moving head with a massive 200 mm aperture, CMY mixing, and a razor-sharp 1.5° beam.",
    intro:
      "Built to withstand the elements, this IP66-rated 550 W moving head pairs a colossal 200 mm aperture with a searing 1.5° beam and 355,500 Lux output. Its independent CMY system, 17 gobos, 14 colors, and three stackable prisms unlock endless creativity, while a magnesium-aluminum alloy casing, waterproof connections, and silent cooling make it a rugged powerhouse for outdoor stadiums, festivals, and coastal installations.",
    image: "/images/fixtures/ip66550w.jpg",
    keySpecs: [
      { label: "Source", value: "Ushio 520W Long-Life " },
      { label: "Segments", value: "8 independent" },
      { label: "Rate", value: "0 – 20 Hz" },
      { label: "Weight", value: "30 kg" },
    ],
    highlights: [
      {
        title: "200 mm front optic",
        body: "A wide front lens holds beam density at distance. Column stays parallel through haze rather than spreading at the far field.",
      },
      {
        title: "CMY plus linear CTO",
        body: "Subtractive colour mixing with a linear CTO flag for matching tungsten sources in mixed rigs.",
      },
      {
        title: "Fourteen prism combinations",
        body: "Two rotating prisms, independently indexable and overlayable, for aerial texture without a second fixture.",
      },
      {
        title: "Sealed for the outdoors",
        body: "Head, base and yoke. Convection-cooled with no external filters to clean between shows.",
      },
    ],
    specs: [
      {
        group: "Optics & output",
        rows: [
          ["Light source", "Ushio 520W Long-Life Gas, 3,000 h rated"],
          ["Colour temperature", "7,600 K ±300 K"],
          ["Luminous flux", "27,400 lm (placeholder)"],
          ["Illuminance at 15 m", "355500 lux (placeholder)"],
          ["Zoom range", "4° – 50° linear"],
          ["Front lens", "200 mm multi-coated"],
        ],
      },
      {
        group: "Colour & effects",
        rows: [
          ["Colour mixing", "CMY subtractive + linear CTO"],
          ["Colour wheel", "14 colors + white light"],
          ["Gobo", "17 gobos + white circles"],
          ["Prisms", "One 16-prism, one 8+8+8 triple prism, and one 6-row prism, can be stacked."],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Dimming", "0 – 100 % electronic, 18-bit"],
          ["Strobe", " 0-20Hz, selectable random strobe and pulse strobe"],
        ],
      },
      {
        group: "Movement",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolution", "16-bit pan and tilt"],
          ["Feedback", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "42 × 25 × 75 cm"],
          ["Weight", "30 kg"],
          ["Ingress protection", "IP66"],
          ["Operating temperature", "−20 °C to 45 °C"],
          ["Rigging", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "24", use: "Full feature set, 16-bit movement" },
      { mode: "Extended", channels: "44", use: "Adds per-prism and CTO fine control" },
      { mode: "Compact", channels: "27", use: "Reduced footprint for large rigs" },
    ],
  },
  {
    slug: "bvx-bl8",
    model: "BVX-BL8",
    name: "Blinder Bar 8",
    category: "strobe",
    status: "In production",
    tagline: "Eight tungsten-emulating cells with true incandescent decay.",
    intro:
      "A warm blinder bar with a decay curve modelled on a 650 W tungsten lamp, for rigs that need audience blinders that read as warm rather than as white LED.",
    image: "/images/fixtures/strobe.jpg",
    keySpecs: [
      { label: "Source", value: "600 W discharge" },
      { label: "Zoom", value: "4° – 50°" },
      { label: "Ingress", value: "IP66" },
      { label: "Weight", value: "30 kg" },
    ],
    highlights: [
      {
        title: "Tungsten decay emulation",
        body: "Amber shift and lag on fade-down, matched to a 650 W lamp so it cuts into a tungsten rig unnoticed.",
      },
      {
        title: "Per-cell control",
        body: "Eight cells with independent intensity and colour temperature.",
      },
      {
        title: "Interchangeable optics",
        body: "Snap-in 15°, 30° and 60° lens sets, replaceable without tools.",
      },
    ],
    specs: [
      {
        group: "Output",
        rows: [
          ["Light source", "8 × 120 W warm white LED"],
          ["Colour temperature", "2,200 K – 3,200 K variable"],
          ["Beam angle", "15° / 30° / 60° interchangeable"],
          ["Dimming curves", "Tungsten emulation, linear, square"],
        ],
      },
      {
        group: "Control",
        rows: [
          ["Cells", "8 independently addressable"],
          ["Dimming resolution", "16-bit"],
          ["Strobe", "1 – 20 Hz"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "1,020 × 170 × 190 mm"],
          ["Weight", "11.2 kg"],
          ["Ingress protection", "IP20"],
          ["Rigging", "Double bracket with safety points"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Basic", channels: "3", use: "Master intensity and CCT" },
      { mode: "Cell", channels: "16", use: "Per-cell intensity and CCT" },
    ],
  },
  {
    slug: "bvx-px1000-ip",
    model: "BVX-PX1000 IP",
    name: "Pixel Batten 1000 IP",
    category: "static",
    status: "In production",
    tagline: "A one-metre IP65 batten with 40 addressable pixels.",
    intro:
      "A slim outdoor-rated batten for set dressing, façades and permanent architectural work. Forty pixels per metre, with fixtures that align end-to-end without a visible gap.",
    image: "/images/fixtures/batten.jpg",
    keySpecs: [
      { label: "Pixels", value: "40 per metre" },
      { label: "Source", value: "Ushio 520W" },
      { label: "Ingress", value: "IP65" },
      { label: "Weight", value: "5.4 kg" },
    ],
    highlights: [
      {
        title: "Gapless alignment",
        body: "End caps are designed so adjacent units keep pixel pitch constant across a run.",
      },
      {
        title: "IP65 with rated glands",
        body: "Sealed housing with locking IP-rated power and data connectors on both ends.",
      },
      {
        title: "Long-run addressing",
        body: "Auto-addressing across a daisy chain of up to 20 units per data run.",
      },
    ],
    specs: [
      {
        group: "Output",
        rows: [
          ["Light source", "40 × 5 W RGBW LED"],
          ["Beam angle", "25° standard, 15°/40° optional"],
          ["Colour temperature", "2,700 K – 8,000 K"],
          ["Luminous flux", "4,900 lm (placeholder)"],
        ],
      },
      {
        group: "Control",
        rows: [
          ["Pixel control", "40 individually addressable"],
          ["Protocols", "DMX512-A, RDM, Art-Net, sACN"],
          ["Auto-addressing", "Up to 20 units per run"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "1,000 × 90 × 110 mm"],
          ["Weight", "5.4 kg"],
          ["Ingress protection", "IP65"],
          ["Operating temperature", "−25 °C to 50 °C"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Basic", channels: "5", use: "Whole-unit colour" },
      { mode: "Pixel", channels: "160", use: "Per-pixel RGBW" },
    ],
  },
  {
    slug: "bvx-ar200-ip",
    model: "BVX-AR200 IP",
    name: "Arc Wash 200 IP",
    category: "static",
    status: "Pre-release",
    tagline: "A compact IP65 static wash for façades and permanent rigs.",
    intro:
      "A static wash for installation work where a moving head is neither needed nor welcome. Field-changeable optics and a locking yoke that holds its aim through weather and vibration.",
    image: "/images/fixtures/batten.jpg",
    keySpecs: [
      { label: "Source", value: "200 W RGBW" },
      { label: "Optics", value: "10° – 45° field-changeable" },
      { label: "Ingress", value: "IP65" },
      { label: "Weight", value: "7.8 kg" },
    ],
    highlights: [
      {
        title: "Aim that holds",
        body: "Toothed locking yoke rated for continuous outdoor vibration, with a witness scale for re-aiming after service.",
      },
      {
        title: "Field-changeable optics",
        body: "Four snap-in lens sets covering 10° to 45°, swapped without breaking the IP seal.",
      },
    ],
    specs: [
      {
        group: "Output",
        rows: [
          ["Light source", "200 W RGBW LED"],
          ["Beam angle", "10° / 20° / 30° / 45° snap-in"],
          ["Colour temperature", "2,700 K – 8,000 K"],
          ["Luminous flux", "7,200 lm (placeholder)"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "290 × 250 × 340 mm"],
          ["Weight", "7.8 kg"],
          ["Ingress protection", "IP65"],
          ["Operating temperature", "−25 °C to 50 °C"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Basic", channels: "4", use: "RGBW" },
      { mode: "Extended", channels: "9", use: "Adds CCT, curves and strobe" },
    ],
  },
  {
    slug: "bvx-c24",
    model: "BVX-C24",
    name: "Command 24",
    category: "control",
    status: "New",
    tagline: "A 24-fader console with 16 universes and dual touchscreens.",
    intro:
      "A control surface for touring and installation: 24 motorised faders, two 15-inch touchscreens and 16 universes of output over Art-Net, sACN and eight physical DMX ports.",
    image: "/images/fixtures/control.jpg",
    keySpecs: [
      { label: "Universes", value: "16" },
      { label: "Faders", value: "24 motorised" },
      { label: "Screens", value: "2 × 15\" touch" },
      { label: "Weight", value: "18.6 kg" },
    ],
    highlights: [
      {
        title: "Sixteen universes",
        body: "Eight physical DMX outputs plus Art-Net and sACN, with per-universe patching and merge control.",
      },
      {
        title: "Redundant show storage",
        body: "Internal SSD with automatic mirroring to removable media, and session takeover from a second console.",
      },
      {
        title: "Open fixture library",
        body: "GDTF and MVR import, with an on-console editor for one-off fixtures.",
      },
    ],
    specs: [
      {
        group: "Control",
        rows: [
          ["Universes", "16 (8,192 parameters)"],
          ["Physical outputs", "8 × 5-pin DMX"],
          ["Network", "2 × Gigabit Ethernet, Art-Net, sACN"],
          ["Playback faders", "24 motorised, 100 mm"],
          ["Encoders", "6 endless with displays"],
          ["Fixture library", "GDTF, MVR, on-board editor"],
        ],
      },
      {
        group: "System",
        rows: [
          ["Displays", "2 × 15\" multi-touch, 1,920 × 1,080"],
          ["External displays", "2 × DisplayPort"],
          ["Storage", "512 GB SSD with mirrored backup"],
          ["Ports", "4 × USB-A, 1 × USB-C, MIDI, LTC"],
        ],
      },
      {
        group: "Power & physical",
        rows: [
          ["Input voltage", "100–240 V AC, 50/60 Hz"],
          ["Dimensions", "780 × 520 × 210 mm"],
          ["Weight", "18.6 kg"],
          ["Case", "Fitted flight case included"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Console", channels: "—", use: "Control surface, not a DMX sink" },
    ],
  },
  {
    slug: "bvx-n8",
    model: "BVX-N8",
    name: "Node 8",
    category: "control",
    status: "In production",
    tagline: "An eight-port Art-Net and sACN node with isolated outputs.",
    intro:
      "Eight optically isolated DMX ports in a 1U rack frame, with per-port protocol, merge and RDM configuration from the front panel or a browser.",
    image: "/images/fixtures/control.jpg",
    keySpecs: [
      { label: "Ports", value: "8 isolated" },
      { label: "Protocols", value: "Art-Net, sACN" },
      { label: "Format", value: "1U rack" },
      { label: "Weight", value: "3.1 kg" },
    ],
    highlights: [
      {
        title: "Isolated per port",
        body: "Each output is optically isolated so a fault on one run cannot propagate through the node.",
      },
      {
        title: "Configure without a laptop",
        body: "Front-panel display and encoder for addressing, plus a browser interface for bulk configuration.",
      },
      {
        title: "Redundant power",
        body: "Dual inputs with automatic failover and PoE support on both network ports.",
      },
    ],
    specs: [
      {
        group: "Control",
        rows: [
          ["Ports", "8 × 5-pin DMX, optically isolated"],
          ["Protocols", "Art-Net 4, sACN, RDM"],
          ["Merge modes", "HTP, LTP, priority per port"],
          ["Network", "2 × Gigabit Ethernet with PoE"],
        ],
      },
      {
        group: "Power & physical",
        rows: [
          ["Input voltage", "100–240 V AC, dual redundant"],
          ["Dimensions", "483 × 180 × 44 mm (1U)"],
          ["Weight", "3.1 kg"],
          ["Ingress protection", "IP20"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [{ mode: "Node", channels: "—", use: "Protocol conversion device" }],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const categoryById = (id: CategoryId) => categories.find((c) => c.id === id);

/* ── Applications ───────────────────────────────────────────────────────── */

export const applications = [
  {
    id: "touring",
    name: "Concerts & touring",
    image: "/images/applications/concerts.jpg",
    summary:
      "Fixtures that survive a truck pack every night and still hold calibration at the end of a run.",
    points: [
      "Beam and hybrid heads for long-throw arena work",
      "Consistent colour across production batches",
      "Spare parts held in three regional warehouses",
    ],
    recommended: ["bvx-b450-ip", "bvx-h380", "bvx-st1200"],
  },
  {
    id: "theatre",
    name: "Theatre & performing arts",
    image: "/images/applications/theatre.jpg",
    summary:
      "Quiet fixtures with framing control, specified for repertory rigs that stay up for years.",
    points: [
      "32 dB(A) theatre mode on profile heads",
      "Four-blade framing with ±60° rotation",
      "Long service intervals and tool-free access",
    ],
    recommended: ["bvx-s700", "bvx-w760-ip", "bvx-bl8"],
  },
  {
    id: "broadcast",
    name: "Television & broadcast",
    image: "/images/applications/broadcast.jpg",
    summary:
      "Flicker-free output with high colour fidelity for multi-camera studio environments.",
    points: [
      "Selectable PWM up to 25 kHz",
      "CRI ≥ 92 with calibrated white points",
      "Tint trim over RDM for camera matching",
    ],
    recommended: ["bvx-w760-ip", "bvx-s700", "bvx-px1000-ip"],
  },
  {
    id: "clubs",
    name: "Clubs & nightlife",
    image: "/images/applications/club.jpg",
    summary:
      "Compact heads and effect fixtures rated for long nightly hours in warm, enclosed rooms.",
    points: [
      "Effect and matrix heads with continuous rotation",
      "Convection-cooled housings with no filters to clean",
      "Standalone and sound-active modes for small venues",
    ],
    recommended: ["bvx-m19", "bvx-h380", "bvx-st1200"],
  },
  {
    id: "corporate",
    name: "Corporate & houses of worship",
    image: "/images/applications/corporate.jpg",
    summary:
      "Restrained, quiet lighting for rooms where the fixture should never draw attention.",
    points: [
      "Low-noise operation for spoken-word programmes",
      "Static architectural fixtures for permanent installation",
      "Simple recall from a small control surface",
    ],
    recommended: ["bvx-ar200-ip", "bvx-px1000-ip", "bvx-c24"],
  },
];

/* ── Proof ──────────────────────────────────────────────────────────────── */

export const stats = [
  { value: "2014", label: "Manufacturing since" },
  { value: "8,400 m²", label: "Production floor" },
  { value: "51", label: "Distributors" },
  { value: "48 mo", label: "Standard warranty" },
];

export const capabilities = [
  {
    code: "01",
    title: "In-house optical design",
    body: "Lens systems, reflectors and gobo paths are designed and simulated in-house, then verified against physical prototypes before tooling is cut.",
  },
  {
    code: "02",
    title: "Photometric verification",
    body: "Every model is measured on a goniophotometer and published with the data that measurement produced. No estimates, no rounded-up lumen figures.",
  },
  {
    code: "03",
    title: "Batch colour calibration",
    body: "LED fixtures are calibrated at assembly against a reference unit, so a fixture bought in year three still matches one bought in year one.",
  },
  {
    code: "04",
    title: "Burn-in and shake test",
    body: "Every unit runs a timed burn-in with movement cycling, plus a vibration profile that approximates road transport, before it is packed.",
  },
];

export const certifications = [
  { code: "CE", note: "European conformity" },
  { code: "RoHS", note: "Restricted substances" },
  { code: "EMC", note: "Electromagnetic compatibility" },
  { code: "ETL", note: "North American listing" },
  { code: "IP65", note: "Ingress protection, rated models" },
  { code: "ISO 9001", note: "Quality management" },
];

export const timeline = [
  { year: "2014", title: "Founded", body: "Beamvox begins as a six-person optical workshop building custom fixtures for regional touring companies." },
  { year: "2017", title: "First catalogue range", body: "The first standardised product range ships, alongside a published photometric dataset for every model." },
  { year: "2019", title: "European distribution", body: "A stocked European warehouse opens, moving lead times on catalogue lines from months to days." },
  { year: "2022", title: "IP65 platform", body: "The sealed head platform enters production, bringing touring-grade fixtures to permanent outdoor installation." },
  { year: "2024", title: "Americas and Africa", body: "Regional service partners are appointed, with local spare parts and warranty handling." },
  { year: "2026", title: "Control platform", body: "The Command console and Node range complete the rig, from fixture to control surface." },
];

/* ── Support ────────────────────────────────────────────────────────────── */

export const downloadGroups = [
  {
    name: "User manuals",
    note: "Installation, operation and safety documentation.",
    items: [
      { title: "BVX-B450 IP — User manual", meta: "PDF · 4.2 MB · rev 3.1 · EN / DE / FR / ES" },
      { title: "BVX-W760 IP — User manual", meta: "PDF · 3.8 MB · rev 2.4 · EN / DE / FR / ES" },
      { title: "BVX-S700 — User manual", meta: "PDF · 4.6 MB · rev 1.2 · EN / DE / FR / ES" },
      { title: "BVX-C24 — Operator guide", meta: "PDF · 8.1 MB · rev 1.0 · EN" },
    ],
  },
  {
    name: "DMX charts & profiles",
    note: "Channel maps, GDTF files and console personalities.",
    items: [
      { title: "Full range — DMX chart bundle", meta: "ZIP · 1.1 MB · updated placeholder date" },
      { title: "Full range — GDTF fixture library", meta: "ZIP · 2.7 MB · GDTF 1.2" },
      { title: "Full range — MVR reference scene", meta: "ZIP · 5.4 MB" },
    ],
  },
  {
    name: "Photometric data",
    note: "Measured output files for plot and simulation software.",
    items: [
      { title: "Full range — IES files", meta: "ZIP · 3.2 MB" },
      { title: "Full range — Photometric report", meta: "PDF · 6.7 MB" },
    ],
  },
  {
    name: "Firmware",
    note: "Current releases with change logs. Older releases on request.",
    items: [
      { title: "BVX-B450 IP — Firmware 3.4.1", meta: "BIN · 2.1 MB · change log included" },
      { title: "BVX-W760 IP — Firmware 2.9.0", meta: "BIN · 1.8 MB · change log included" },
      { title: "BVX-C24 — Software 1.2.3", meta: "PKG · 412 MB · release notes included" },
    ],
  },
  {
    name: "Commercial documents",
    note: "For distributors and specifiers.",
    items: [
      { title: "Product catalogue", meta: "PDF · 22 MB · placeholder edition" },
      { title: "Declaration of conformity — full range", meta: "PDF · 1.4 MB" },
      { title: "Warranty terms", meta: "PDF · 240 KB" },
    ],
  },
];

export const faqs = [
  {
    q: "What is covered by the 48-month warranty?",
    a: "Parts and labour on manufacturing defects for 48 months from the invoice date, handled through the distributor that supplied the fixture. Consumables such as lamps and gobos are covered for 12 months. Placeholder terms — replace with the final warranty text.",
  },
  {
    q: "What are typical lead times?",
    a: "Catalogue lines held in a regional warehouse dispatch within 48 hours. Configured or OEM orders are quoted with a confirmed production window at the time of order. Placeholder figures.",
  },
  {
    q: "Do you supply OEM and ODM configurations?",
    a: "Yes. Housing colour, connector layout, voltage configuration and branding can be specified from an agreed minimum order quantity. Optical modifications are assessed case by case.",
  },
  {
    q: "How do I get spare parts?",
    a: "Through your distributor, or directly from the regional service partner listed for your territory. Common wear parts are held in all three regional warehouses.",
  },
  {
    q: "Are fixtures compatible with my console?",
    a: "Every model ships with a GDTF profile and a published DMX chart. Personalities for major console platforms are available in the downloads section.",
  },
  {
    q: "Can I request a demonstration unit?",
    a: "Demonstration stock is available through regional distributors for evaluation. Contact us and we will route the request to the nearest partner.",
  },
];

export const partnerBenefits = [
  {
    code: "01",
    title: "Territory protection",
    body: "Defined territories with agreed volume commitments, so your investment in the brand is not undercut by the next reseller down the road.",
  },
  {
    code: "02",
    title: "Trade pricing tiers",
    body: "Volume-based pricing with published tier thresholds. No case-by-case negotiation on catalogue lines.",
  },
  {
    code: "03",
    title: "Stock held regionally",
    body: "Warehouses in all three served regions, so you quote from availability rather than from a production schedule.",
  },
  {
    code: "04",
    title: "Technical training",
    body: "Product and service training for your team, delivered remotely or at your premises, with certification for warranty work.",
  },
  {
    code: "05",
    title: "Demonstration stock",
    body: "Discounted demonstration units and loan fixtures for tenders and trade shows.",
  },
  {
    code: "06",
    title: "Marketing assets",
    body: "Product photography, specification sheets and localised copy, supplied without licensing restrictions in your territory.",
  },
];

export const partnerSteps = [
  { code: "01", title: "Enquiry", body: "Send the form with your territory, sectors served and current portfolio." },
  { code: "02", title: "Review", body: "We check territory availability and respond within five working days." },
  { code: "03", title: "Terms", body: "Pricing tier, volume commitment and support scope are agreed in writing." },
  { code: "04", title: "Onboarding", body: "Training, assets and your first stocking order are scheduled." },
];

export const values = [
  {
    code: "01",
    title: "Publish the measurement",
    body: "Every figure on this site comes from a measured unit, or it is marked as a placeholder. We would rather lose a comparison than win it with a number we cannot defend.",
  },
  {
    code: "02",
    title: "Build for the tenth year",
    body: "Fixtures are designed around service access and parts availability, because most of a fixture's life happens after the sale.",
  },
  {
    code: "03",
    title: "Sell through partners",
    body: "Our distributors own the customer relationship. We do not compete with them for the accounts they build.",
  },
];

/* ── Why Beamvox ────────────────────────────────────────────────────────── */

export const claims = [
  {
    claim: "Lumen output",
    ours: "Measured total flux, stated at the aperture with the mode named",
    common: "Peak LED chip rating quoted as fixture output",
  },
  {
    claim: "Colour consistency",
    ours: "Calibrated against a reference unit at assembly, batch to batch",
    common: "Binned once, then left to drift between production runs",
  },
  {
    claim: "Noise figures",
    ours: "dB(A) at 1 m, per operating mode, in a quiet room",
    common: "Quoted for the lowest fan mode only, distance unstated",
  },
  {
    claim: "Ingress protection",
    ours: "Rated per model, with the head and base tested as assembled",
    common: "One rating applied across a whole product family",
  },
  {
    claim: "Service life",
    ours: "Published service intervals and a parts list that stays available",
    common: "Sealed assemblies replaced whole, parts withdrawn after two years",
  },
] as const;

export const commitments = [
  {
    code: "01",
    title: "48-month warranty, parts and labour",
    body: "Handled by the distributor that supplied the fixture, with regional stock so a failed unit is replaced rather than queued behind a shipment.",
  },
  {
    code: "02",
    title: "Ten years of spare parts",
    body: "Wear parts, optics, boards and motors stay available for ten years from the end of production. Placeholder commitment pending final policy.",
  },
  {
    code: "03",
    title: "Documentation on the shelf",
    body: "Manual, DMX chart, GDTF profile, IES files and declaration of conformity are published for every model, not sent on request.",
  },
  {
    code: "04",
    title: "No surprise revisions",
    body: "Mid-life changes that affect photometrics, weight or control get a new model designation. What you specified is what arrives.",
  },
];
