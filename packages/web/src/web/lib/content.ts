/**
 * All site copy and product data.
 * PLACEHOLDER CONTENT — written in the final brand voice, ready to be replaced
 * with real specifications, certifications and distributor details.
 */

export const site = {
  name: "Beamvox",
  tagline: "Professional stage lighting",
  legalName: "Beamvox Lighting Industries",
  founded: 2014,
  email: "sales@beamvox.example",
  phone: "+00 000 000 0000",
  address: {
    line1: "Unit 14, Northgate Industrial Park",
    line2: "Placeholder City",
    country: "Placeholder Country",
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
    slug: "bvx-b450-ip",
    model: "BVX-B450 IP",
    name: "Beam 450 IP",
    category: "beam-spot",
    featured: true,
    status: "In production",
    tagline: "A 450 W beam engine with a 180 mm front optic and infinite pan.",
    intro:
      "The B450 IP is built for long-throw beam work where the edge of the light matters. A 180 mm coated front lens, a 450 W discharge engine and a sealed IP65 head make it equally suited to arena tours and permanent outdoor installation.",
    image: "/images/fixtures/beam.jpg",
    keySpecs: [
      { label: "Source", value: "450 W discharge" },
      { label: "Zoom", value: "0.8° – 8.4°" },
      { label: "Ingress", value: "IP65" },
      { label: "Weight", value: "31.4 kg" },
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
        title: "Fifteen prism combinations",
        body: "Two rotating prisms, independently indexable and overlayable, for aerial texture without a second fixture.",
      },
      {
        title: "Sealed for the outdoors",
        body: "IP65 head, base and yoke. Convection-cooled with no external filters to clean between shows.",
      },
    ],
    specs: [
      {
        group: "Optics & output",
        rows: [
          ["Light source", "450 W short-arc discharge, 8,000 h rated"],
          ["Colour temperature", "7,600 K ±300 K"],
          ["Luminous flux", "23,400 lm (placeholder)"],
          ["Illuminance at 20 m", "18,900 lux (placeholder)"],
          ["Zoom range", "0.8° – 8.4° linear"],
          ["Front lens", "180 mm multi-coated"],
        ],
      },
      {
        group: "Colour & effects",
        rows: [
          ["Colour mixing", "CMY subtractive + linear CTO"],
          ["Colour wheel", "14 dichroic filters + open"],
          ["Gobo wheel 1", "17 rotating, indexable, replaceable"],
          ["Gobo wheel 2", "18 static, replaceable"],
          ["Prisms", "8-facet linear + 6-facet circular, rotating"],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Dimming", "0 – 100 % electronic, 18-bit"],
          ["Strobe", "1 – 25 Hz, random and pulse modes"],
        ],
      },
      {
        group: "Movement",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "270°"],
          ["Resolution", "16-bit pan and tilt"],
          ["Feedback", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "440 × 330 × 720 mm"],
          ["Weight", "31.4 kg"],
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
    slug: "bvx-w760-ip",
    model: "BVX-W760 IP",
    name: "Wash 760 IP",
    category: "wash-profile",
    featured: true,
    status: "In production",
    tagline: "Nineteen 60 W cells, 4° to 56° zoom, individually addressable.",
    intro:
      "A wash head that holds an even field at the narrow end and still opens wide enough to cover a stage from a downstage truss. Each of the nineteen cells is individually addressable for pixel effects without a dedicated effect fixture.",
    image: "/images/fixtures/wash.jpg",
    keySpecs: [
      { label: "Source", value: "19 × 60 W RGBW" },
      { label: "Zoom", value: "4° – 56°" },
      { label: "Ingress", value: "IP65" },
      { label: "Weight", value: "27.8 kg" },
    ],
    highlights: [
      {
        title: "Even field, narrow to wide",
        body: "Cell-level optics are matched at assembly so the beam edge stays consistent across the zoom range.",
      },
      {
        title: "Pixel control per cell",
        body: "Nineteen addressable cells with a ring layout, plus a built-in macro library for common chases.",
      },
      {
        title: "Calibrated white points",
        body: "Factory-calibrated 2,700 K to 8,000 K with tint correction, so fixtures match across production batches.",
      },
      {
        title: "Flicker-free capture",
        body: "Selectable PWM frequencies for broadcast and high-frame-rate camera work.",
      },
    ],
    specs: [
      {
        group: "Optics & output",
        rows: [
          ["Light source", "19 × 60 W RGBW LED, 50,000 h rated"],
          ["Luminous flux", "19,800 lm (placeholder)"],
          ["Zoom range", "4° – 56° motorised"],
          ["Colour temperature", "2,700 K – 8,000 K calibrated"],
          ["CRI", "≥ 92 at 3,200 K (placeholder)"],
          ["PWM frequency", "1.2 / 3.6 / 9.6 / 25 kHz selectable"],
        ],
      },
      {
        group: "Colour & control",
        rows: [
          ["Colour mixing", "RGBW additive + virtual CTO"],
          ["Pixel control", "19 cells, individually addressable"],
          ["Dimming curves", "Linear, square, inverse square, S-curve"],
          ["Dimming resolution", "18-bit"],
          ["Strobe", "1 – 25 Hz with pulse and random"],
          ["Macros", "38 built-in cell effects"],
        ],
      },
      {
        group: "Movement",
        rows: [
          ["Pan", "540°"],
          ["Tilt", "265°"],
          ["Resolution", "16-bit pan and tilt"],
          ["Feedback", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "420 × 310 × 640 mm"],
          ["Weight", "27.8 kg"],
          ["Ingress protection", "IP65"],
          ["Operating temperature", "−20 °C to 45 °C"],
          ["Rigging", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Basic", channels: "26", use: "Head control only, no pixel mapping" },
      { mode: "Standard", channels: "44", use: "Head plus ring-level control" },
      { mode: "Pixel", channels: "112", use: "Full per-cell RGBW addressing" },
    ],
  },
  {
    slug: "bvx-s700",
    model: "BVX-S700",
    name: "Profile 700",
    category: "wash-profile",
    featured: true,
    status: "New",
    tagline: "A 700 W framing profile with a four-blade shutter module.",
    intro:
      "A framing profile for theatre and broadcast, built around a quiet 700 W LED engine and a full four-blade shutter module that rotates ±60°. Designed to sit in a repertory rig for years without drifting out of calibration.",
    image: "/images/fixtures/movinghead.jpg",
    keySpecs: [
      { label: "Source", value: "700 W LED engine" },
      { label: "Zoom", value: "7° – 52°" },
      { label: "Noise", value: "32 dB(A) theatre mode" },
      { label: "Weight", value: "34.2 kg" },
    ],
    highlights: [
      {
        title: "Four-blade framing",
        body: "Each blade moves independently across the full aperture; the whole module rotates ±60° for angled cuts.",
      },
      {
        title: "32 dB(A) in theatre mode",
        body: "Staged fan curves and a decoupled optical train keep the fixture quiet enough for spoken word.",
      },
      {
        title: "Animation wheel",
        body: "Replaceable animation disc with variable speed and indexing for water, foliage and fire textures.",
      },
      {
        title: "Long-interval service",
        body: "Tool-free access to the gobo and shutter modules for maintenance between productions.",
      },
    ],
    specs: [
      {
        group: "Optics & output",
        rows: [
          ["Light source", "700 W white LED engine, 60,000 h rated"],
          ["Colour temperature", "6,500 K native, 2,700 K – 8,000 K via CTO"],
          ["Luminous flux", "26,100 lm (placeholder)"],
          ["Zoom range", "7° – 52° motorised"],
          ["CRI", "≥ 94 (placeholder)"],
        ],
      },
      {
        group: "Colour & effects",
        rows: [
          ["Colour mixing", "CMY + linear CTO"],
          ["Colour wheel", "7 dichroic filters + open"],
          ["Framing", "4 blades, full aperture, ±60° rotation"],
          ["Gobo wheel 1", "9 rotating, indexable"],
          ["Gobo wheel 2", "12 static"],
          ["Animation", "Replaceable disc, bidirectional"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Frost", "Light and heavy, independent"],
        ],
      },
      {
        group: "Movement",
        rows: [
          ["Pan", "540°"],
          ["Tilt", "270°"],
          ["Resolution", "16-bit pan and tilt"],
          ["Noise level", "32 dB(A) theatre / 41 dB(A) standard"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "460 × 340 × 780 mm"],
          ["Weight", "34.2 kg"],
          ["Ingress protection", "IP20"],
          ["Operating temperature", "0 °C to 40 °C"],
          ["Rigging", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "42", use: "Full feature set" },
      { mode: "Extended", channels: "51", use: "Adds fine channels on framing blades" },
    ],
  },
  {
    slug: "bvx-h380",
    model: "BVX-H380",
    name: "Hybrid 380",
    category: "effect",
    status: "In production",
    tagline: "Beam, spot and wash in one head, without a compromise mode.",
    intro:
      "A hybrid head for rigs that need three fixtures' worth of behaviour from one hanging position. Optical path switches cleanly between a hard 1.2° beam and a 42° wash field.",
    image: "/images/fixtures/beam.jpg",
    keySpecs: [
      { label: "Source", value: "380 W discharge" },
      { label: "Zoom", value: "1.2° – 42°" },
      { label: "Modes", value: "Beam / spot / wash" },
      { label: "Weight", value: "26.9 kg" },
    ],
    highlights: [
      {
        title: "Three behaviours, one position",
        body: "Optical switching rather than a fixed compromise lens, so beam mode stays tight and wash mode stays even.",
      },
      {
        title: "Fast frame movement",
        body: "540° pan in 2.1 s with an eight-position colour wheel that snaps between adjacent filters in 90 ms.",
      },
      {
        title: "Two rotating prisms",
        body: "Overlayable linear and circular prisms with independent indexing.",
      },
    ],
    specs: [
      {
        group: "Optics & output",
        rows: [
          ["Light source", "380 W short-arc discharge"],
          ["Colour temperature", "7,200 K ±300 K"],
          ["Zoom range", "1.2° – 42°"],
          ["Luminous flux", "17,600 lm (placeholder)"],
        ],
      },
      {
        group: "Colour & effects",
        rows: [
          ["Colour mixing", "CMY + CTO"],
          ["Colour wheel", "8 dichroic filters + open"],
          ["Gobos", "13 rotating, 15 static"],
          ["Prisms", "Linear + circular, rotating"],
          ["Frost", "Two-stage variable"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "400 × 300 × 620 mm"],
          ["Weight", "26.9 kg"],
          ["Ingress protection", "IP20"],
          ["Rigging", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "34", use: "Full feature set" },
      { mode: "Compact", channels: "22", use: "Reduced footprint" },
    ],
  },
  {
    slug: "bvx-m19",
    model: "BVX-M19",
    name: "Matrix 19",
    category: "effect",
    status: "In production",
    tagline: "A nineteen-cell effect head with continuous rotation.",
    intro:
      "Built for audience-facing texture: nineteen addressable RGBW cells behind a continuously rotating front plate, with a wide zoom for blinder duty in the same cue stack.",
    image: "/images/fixtures/wash.jpg",
    keySpecs: [
      { label: "Source", value: "19 × 40 W RGBW" },
      { label: "Zoom", value: "4° – 60°" },
      { label: "Rotation", value: "Continuous" },
      { label: "Weight", value: "22.4 kg" },
    ],
    highlights: [
      {
        title: "Continuous front rotation",
        body: "The whole cell array rotates without limit in both directions, at speeds from a crawl to a strobe blur.",
      },
      {
        title: "Blinder in the same fixture",
        body: "Full-array white output at 60° covers audience blinder cues without a dedicated bar.",
      },
      {
        title: "Effect library",
        body: "64 built-in cell macros with speed, offset and direction control from four channels.",
      },
    ],
    specs: [
      {
        group: "Optics & output",
        rows: [
          ["Light source", "19 × 40 W RGBW LED"],
          ["Zoom range", "4° – 60°"],
          ["Luminous flux", "13,700 lm (placeholder)"],
          ["PWM frequency", "1.2 / 3.6 / 9.6 / 25 kHz"],
        ],
      },
      {
        group: "Colour & control",
        rows: [
          ["Pixel control", "19 cells, individually addressable"],
          ["Front rotation", "Continuous, bidirectional"],
          ["Macros", "64 cell effects"],
          ["Strobe", "1 – 25 Hz"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "380 × 290 × 560 mm"],
          ["Weight", "22.4 kg"],
          ["Ingress protection", "IP20"],
          ["Rigging", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Basic", channels: "24", use: "Head and array control" },
      { mode: "Pixel", channels: "104", use: "Per-cell RGBW" },
    ],
  },
  {
    slug: "bvx-st1200",
    model: "BVX-ST1200",
    name: "Strobe 1200",
    category: "strobe",
    status: "In production",
    tagline: "A segmented LED strobe with a calibrated 6,500 K white point.",
    intro:
      "A high-output strobe with eight independently controlled segments, tuned so that batches match across a rig and stay matched over the life of the fixture.",
    image: "/images/fixtures/strobe.jpg",
    keySpecs: [
      { label: "Source", value: "1,200 W LED array" },
      { label: "Segments", value: "8 independent" },
      { label: "Rate", value: "0.5 – 30 Hz" },
      { label: "Weight", value: "14.8 kg" },
    ],
    highlights: [
      {
        title: "Eight segments",
        body: "Chase, sweep and split the bar from the console without pixel-mapping software.",
      },
      {
        title: "Calibrated white",
        body: "6,500 K ±150 K measured at assembly, with tint trim available over RDM.",
      },
      {
        title: "Camera-safe modes",
        body: "Selectable PWM and a broadcast mode that suppresses banding on high-frame-rate capture.",
      },
    ],
    specs: [
      {
        group: "Output",
        rows: [
          ["Light source", "1,200 W white LED array"],
          ["Colour temperature", "6,500 K ±150 K calibrated"],
          ["Beam angle", "110° diffused"],
          ["Strobe rate", "0.5 – 30 Hz"],
          ["Duration control", "10 – 500 ms per flash"],
        ],
      },
      {
        group: "Control",
        rows: [
          ["Segments", "8 independently addressable"],
          ["Dimming resolution", "16-bit"],
          ["Effects", "Random, ramp, pulse, lightning"],
          ["PWM frequency", "1.2 / 3.6 / 9.6 / 25 kHz"],
        ],
      },
      commonElectrical,
      {
        group: "Physical",
        rows: [
          ["Dimensions", "1,040 × 180 × 210 mm"],
          ["Weight", "14.8 kg"],
          ["Ingress protection", "IP20"],
          ["Rigging", "Double bracket with safety points"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Basic", channels: "4", use: "Master intensity and rate" },
      { mode: "Segment", channels: "12", use: "Per-segment intensity" },
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
      { label: "Source", value: "8 × 120 W warm LED" },
      { label: "Colour", value: "2,200 K – 3,200 K" },
      { label: "Cells", value: "8 independent" },
      { label: "Weight", value: "11.2 kg" },
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
      { label: "Source", value: "RGBW LED" },
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
    image: "/images/applications/concert.jpg",
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
