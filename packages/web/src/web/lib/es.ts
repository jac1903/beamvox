/**
 * Spanish (Latin America) content overlay.
 * Product names remain in English.
 * Taglines and all descriptive text are translated.
 */

export const site = {
  name: "Beamvox",
  tagline: "Iluminación escénica profesional",
  legalName: "Beamvox Lighting Industries",
  founded: 2016,
  email: "beamvox@zoho.com",
  phone: "English: +86 180 2641 3254 | Spanish: +57 323 899 8025",
  whatsappPhoneEn: "+86 159 7646 3744",   
  whatsappPhoneEs: "+57 323 899 8025", 
  address: {
    line1: "Distrito de Baiyun",
    line2: "Guangzhou",
    country: "China",
  },
  hours: "Lun–Vie, 08:00–18:00 CET",
} as const;

export const nav = [
  { label: "Productos", href: "/products" },
  { label: "Aplicaciones", href: "/applications" },
  { label: "Por qué Beamvox", href: "/why-beamvox" },
 // { label: "Socios", href: "/partners" }, //
  { label: "Soporte", href: "/support" },
  { label: "Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
] as const;

export const regions = [
  {
    id: "europe",
    name: "Europa",
    note: "Almacén con stock, despacho en 48 horas en líneas de catálogo.",
  },
  {
    id: "americas",
    name: "Américas",
    note: "Variantes con certificación ETL, configuraciones de 120 V disponibles bajo pedido.",
  },
  {
    id: "africa",
    name: "África",
    note: "Socios de servicio regional para trabajos de garantía y repuestos.",
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
      "Cabezas móviles de ángulo estrecho para trabajos de largo alcance. Salida de borde duro, óptica rápida, rutas completas de gobos y prismas.",
    image: "/images/fixtures/beam.jpg",
  },
  {
    id: "wash-profile",
    name: "Wash & Profile",
    code: "02",
    summary:
      "Cabezas LED de lavado y perfil con mezcla de color CMY y CTO variable.",
    image: "/images/fixtures/wash.jpg",
  },
  {
    id: "effect",
    name: "Effect & Matrix",
    code: "03",
    summary:
      "Cabezas híbridas y matrices mapeables por píxeles para textura, efecto aéreo e interacción con el público.",
    image: "/images/fixtures/movinghead.jpg",
  },
  {
    id: "strobe",
    name: "Strobe & Blinder",
    code: "04",
    summary:
      "Barras de strobe y blinder de alta salida con control segmentado y puntos blancos calibrados.",
    image: "/images/fixtures/strobe.jpg",
  },
  {
    id: "static",
    name: "Static & Architectural",
    code: "05",
    summary:
      "Battenes IP65 y lavados de arco para instalación permanente, fachadas y decoración de giras.",
    image: "/images/fixtures/batten.jpg",
  },
  {
    id: "control",
    name: "Control & Distribution",
    code: "06",
    summary:
      "Consolas, nodos y divisores. Art-Net, sACN y DMX cableado en todo el rig.",
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
  group: "Alimentación y conexión",
  rows: [
    ["Voltaje de entrada", "100–240 V AC, 50/60 Hz"],
    ["Conexión de alimentación", "Locking power in/out, 16 A"],
    ["Conexión de datos", "5-pin DMX in/out, RJ45 in/out"],
    ["Protocolos", "DMX512-A, RDM, Art-Net, sACN"],
  ],
};

const commonWarranty: SpecGroup = {
  group: "Cumplimiento y garantía",
  rows: [
    ["Certificación", "CE, RoHS, EMC"],
    ["Garantía", "12 meses, piezas y mano de obra"],
    ["Intervalo de servicio", "+ 3,000 horas de operación"],
    ["País de fabricación", "China"],
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
    tagline: "Un motor de haz de 550 W con óptica frontal de 160 mm y paneo infinito.",
    intro:
      "El 380W Beam Light está diseñado para trabajos de haz de largo alcance donde el borde de la luz es clave. Una lente frontal recubierta de 160 mm, un motor de descarga de 550 W y una cabeza sellada lo hacen igualmente adecuado para giras en arenas e instalaciones permanentes en exteriores.",
    image: "/images/fixtures/380w.jpg",
    keySpecs: [
      { label: "Fuente", value: "450 W discharge" },
      { label: "Zoom", value: "0 – 3.9°" },
      { label: "Protección", value: "IP65" },
      { label: "Peso", value: "18.7 kg" },
    ],
    highlights: [
      {
        title: "Óptica frontal de 160 mm",
        body: "Una lente frontal amplia mantiene la densidad del haz a distancia. El haz se mantiene paralelo a través de la neblina en lugar de dispersarse en el campo lejano.",
      },
      {
        title: "CMY más CTO lineal",
        body: "Mezcla de color sustractiva con un filtro CTO lineal para igualar fuentes de tungsteno en rigs mixtos.",
      },
      {
        title: "Quince combinaciones de prismas",
        body: "Dos prismas giratorios, indexables y superponibles de forma independiente, para textura aérea sin necesidad de un segundo equipo.",
      },
      {
        title: "Sellado para exteriores",
        body: "Cabeza, base y horquilla. Enfriado por convección sin filtros externos que limpiar entre espectáculos.",
      },
    ],
    specs: [
      {
        group: "Óptica y salida",
        rows: [
          ["Fuente de luz", "550 W short-arc discharge, 8,000 h rated"],
          ["Temperatura de color", "7,600 K ±300 K"],
          ["Flujo luminoso", "23,400 lm"],
          ["Iluminancia a 20 m", "18,900 lux"],
          ["Rango de zoom", "0.8° – 8.4° linear"],
          ["Lente frontal", "160 mm multi-coated"],
        ],
      },
      {
        group: "Color y efectos",
        rows: [
          ["Mezcla de color", "CMY subtractive + linear CTO"],
          ["Rueda de colores", "13 colores + blanco, con efecto arcoíris bidireccional"],
          ["Rueda de gobos", "14 gobos + 1 gobo de animación + 1 blanco"],
          ["Prismas", "8-facet linear + 8-facet circular, rotating"],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Atenuación", "0 – 100 % electronic, 18-bit"],
          ["Estroboscópico", "1 – 13 Hz, random and pulse modes"],
        ],
      },
      {
        group: "Movimiento",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolución", "16-bit pan and tilt"],
          ["Retroalimentación", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Dimensiones físicas",
        rows: [
          ["Dimensiones", "58 × 48 × 42 cm"],
          ["Peso", "18.7 kg"],
          ["Protección", "IP65"],
          ["Temperatura de operación", "−20 °C to 45 °C"],
          ["Montaje", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "38", use: "Conjunto completo de funciones, movimiento de 16 bits" },
      { mode: "Extended", channels: "44", use: "Añade control fino de prismas y CTO" },
      { mode: "Compact", channels: "24", use: "Huella reducida para rigs grandes" },
    ],
  },
  {
    slug: "MINI295 Beam Light",
    model: "MINI295 Beam Light",
    name: "MINI295 Beam Light",
    category: "beam-spot",
    featured: true,
    status: "In production",
    tagline: "Un motor de haz mini con todas las características de un equipo de alta calidad.",
    intro:
      "El MINI295 Beam Light está diseñado para trabajos de haz de largo alcance donde el borde de la luz es clave. Una lente frontal recubierta de 160 mm, un motor de descarga de 550 W y una cabeza sellada lo hacen igualmente adecuado para giras en arenas e instalaciones permanentes en exteriores.",
    image: "/images/fixtures/295mini.jpg",
    keySpecs: [
      { label: "Fuente", value: "450 W discharge" },
      { label: "Zoom", value: "0 – 3.9°" },
      { label: "Protección", value: "IP65" },
      { label: "Peso", value: "9 kg" },
    ],
    highlights: [
      {
        title: "Óptica frontal de 160 mm",
        body: "Una lente frontal amplia mantiene la densidad del haz a distancia. El haz se mantiene paralelo a través de la neblina en lugar de dispersarse en el campo lejano.",
      },
      {
        title: "CMY más CTO lineal",
        body: "Mezcla de color sustractiva con un filtro CTO lineal para igualar fuentes de tungsteno en rigs mixtos.",
      },
      {
        title: "Quince combinaciones de prismas",
        body: "Dos prismas giratorios, indexables y superponibles de forma independiente, para textura aérea sin necesidad de un segundo equipo.",
      },
      {
        title: "Sellado para exteriores",
        body: "Cabeza, base y horquilla. Enfriado por convección sin filtros externos que limpiar entre espectáculos.",
      },
    ],
    specs: [
      {
        group: "Óptica y salida",
        rows: [
          ["Fuente de luz", "230 W short-arc discharge, 8,000 h rated"],
          ["Temperatura de color", "7,600 K ±300 K"],
          ["Flujo luminoso", "23,400 lm"],
          ["Iluminancia a 20 m", "18,900 lux"],
          ["Rango de zoom", "0.8° – 8.4° linear"],
          ["Lente frontal", "160 mm multi-coated"],
        ],
      },
      {
        group: "Color y efectos",
        rows: [
          ["Mezcla de color", "CMY subtractive + linear CTO"],
          ["Rueda de colores", "13 colores + blanco, con efecto arcoíris bidireccional"],
          ["Rueda de gobos", "14 gobos + 1 gobo de animación + 1 blanco"],
          ["Prismas", "8-facet linear + 8-facet circular, rotating"],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Atenuación", "0 – 100 % electronic, 18-bit"],
          ["Estroboscópico", "1 – 13 Hz, random and pulse modes"],
        ],
      },
      {
        group: "Movimiento",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolución", "16-bit pan and tilt"],
          ["Retroalimentación", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Dimensiones físicas",
        rows: [
          ["Dimensiones", "47 × 29 × 22.6 cm"],
          ["Peso", "9 kg"],
          ["Protección", "IP65"],
          ["Temperatura de operación", "−20 °C to 45 °C"],
          ["Montaje", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "38", use: "Conjunto completo de funciones, movimiento de 16 bits" },
      { mode: "Extended", channels: "44", use: "Añade control fino de prismas y CTO" },
      { mode: "Compact", channels: "24", use: "Huella reducida para rigs grandes" },
    ],
  },
  {
    slug: "LED400W Beam Light",
    model: "LED400W Beam Light",
    name: "LED400W Beam Light",
    category: "beam-spot",
    featured: true,
    status: "In production",
    tagline: "Cabezal móvil LED de 400 W con enfoque lineal de 4–50 m y sistema de color CMY+CTO completo.",
    intro:
      "El LED400W es una fuente de potencia versátil para escenarios modernos. Su motor LED de 400 W, enfoque lineal de 4–50 m, mezcla CMY+CTO, prismas giratorios duales y gobos fijos/giratorios ofrecen efectos ricos y dinámicos. Con refrigeración robusta y soporte RDM, destaca en giras, teatros e instalaciones fijas en interiores.",
    image: "/images/fixtures/400w.jpg",
    keySpecs: [
      { label: "Fuente", value: "550 W discharge" },
      { label: "Zoom", value: "4° – 50°" },
      { label: "Protección", value: "IP20" },
      { label: "Peso", value: "25 kg" },
    ],
    highlights: [
      {
        title: "Óptica frontal de 180 mm",
        body: "Una lente frontal amplia mantiene la densidad del haz a distancia. El haz se mantiene paralelo a través de la neblina en lugar de dispersarse en el campo lejano.",
      },
      {
        title: "CMY más CTO lineal",
        body: "Mezcla de color sustractiva con un filtro CTO lineal para igualar fuentes de tungsteno en rigs mixtos.",
      },
      {
        title: "Catorce combinaciones de prismas",
        body: "Dos prismas giratorios, indexables y superponibles de forma independiente, para textura aérea sin necesidad de un segundo equipo.",
      },
      {
        title: "Sellado para exteriores",
        body: "Cabeza, base y horquilla. Enfriado por convección sin filtros externos que limpiar entre espectáculos.",
      },
    ],
    specs: [
      {
        group: "Óptica y salida",
        rows: [
          ["Fuente de luz", "550 W short-arc discharge, 20,000 h rated"],
          ["Temperatura de color", "7,600 K ±300 K"],
          ["Flujo luminoso", "23,400 lm"],
          ["Iluminancia a 20 m", "18,900 lux"],
          ["Rango de zoom", "0.8° – 8.4° linear"],
          ["Lente frontal", "160 mm multi-coated"],
        ],
      },
      {
        group: "Color y efectos",
        rows: [
          ["Mezcla de color", "CMY subtractive + linear CTO"],
          ["Rueda de colores", "8 colores + blanco + blanco, con efecto arcoíris bidireccional"],
          ["Rueda de gobos giratorios", "7 gobos giratorios + luz blanca, cada gobo puede girar independientemente"],
          ["Rueda de gobos fijos", "8 gobos fijos + luz blanca + efecto de fuego dinámico"],
          ["Prismas", "8-facet linear + 8-facet circular, rotating"],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Atenuación", "0 – 100 % electronic, 18-bit"],
          ["Estroboscópico", "0 - 30 flashes per second, adjustable speed and strobe effect"],
        ],
      },
      {
        group: "Movimiento",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolución", "16-bit pan and tilt"],
          ["Retroalimentación", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Dimensiones físicas",
        rows: [
          ["Dimensiones", "63 × 53 × 67 cm"],
          ["Peso", "25 kg"],
          ["Protección", "IP20"],
          ["Temperatura de operación", "−20 °C to 40 °C"],
          ["Montaje", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "23", use: "Conjunto completo de funciones, movimiento de 16 bits" },
      { mode: "Extended", channels: "44", use: "Añade control fino de prismas y CTO" },
      { mode: "Compact", channels: "25", use: "Huella reducida para rigs grandes" },
    ],
  },
  {
    slug: "380W Prism King",
    model: "380W Prism King",
    name: "380W Prism King",
    category: "beam-spot",
    featured: true,
    status: "In production",
    tagline: "Cabezal móvil de haz de 380 W con apertura de 165 mm y sistema de 4 ruedas de prismas que ofrece docenas de efectos dinámicos.",
    intro:
      "El 380W Prism King combina una lámpara Philips de 380 W y un conjunto óptico de 165 mm en un haz ajustado (0°–3.9°). Sus cuatro ruedas de prismas —apilables y bidireccionales— crean innumerables efectos multifacéticos, mientras que 14 gobos, 13 colores y un estroboscópico variable lo convierten en la opción ideal para conciertos de alta energía, programas de televisión y producciones en gira.",
    image: "/images/fixtures/prismk.jpg",
    keySpecs: [
      { label: "Fuente", value: "550 W discharge" },
      { label: "Zoom", value: "0° – 3.9°" },
      { label: "Protección", value: "IP20" },
      { label: "Peso", value: "27 kg" },
    ],
    highlights: [
      {
        title: "Óptica frontal de 165 mm",
        body: "Una lente frontal amplia mantiene la densidad del haz a distancia. El haz se mantiene paralelo a través de la neblina en lugar de dispersarse en el campo lejano.",
      },
      {
        title: "CMY más CTO lineal",
        body: "Mezcla de color sustractiva con un filtro CTO lineal para igualar fuentes de tungsteno en rigs mixtos.",
      },
      {
        title: "Catorce combinaciones de prismas",
        body: "Dos prismas giratorios, indexables y superponibles de forma independiente, para textura aérea sin necesidad de un segundo equipo.",
      },
      {
        title: "Sellado para exteriores",
        body: "Cabeza, base y horquilla. Enfriado por convección sin filtros externos que limpiar entre espectáculos.",
      },
    ],
    specs: [
      {
        group: "Óptica y salida",
        rows: [
          ["Fuente de luz", "550 W short-arc discharge, 20,000 h rated"],
          ["Temperatura de color", "7,600 K ±300 K"],
          ["Flujo luminoso", "23,400 lm"],
          ["Iluminancia a 20 m", "18,900 lux"],
          ["Rango de zoom", "0° – 3.9° linear"],
          ["Lente frontal", "165 mm multi-coated"],
        ],
      },
      {
        group: "Color y efectos",
        rows: [
          ["Mezcla de color", "CMY subtractive + linear CTO"],
          ["Rueda de colores", "8 colores + blanco + blanco, con efecto arcoíris bidireccional"],
          ["Rueda de gobos giratorios", "13 colores + blanco, con efecto arcoíris y rotación bidireccional"],
          ["Rueda de gobos fijos", "14 gobos estáticos + abierto, con efectos de animación y gobo shake, indexación y rotación de gobos"],
          ["Prisma 1", ": 6-facet prism, 24-facet prism (optional), bidirectional rotation, stackable, with prism positioning function"],
          ["Prisma 2", "8+16+24 prism, 8+16-facet prism (optional), bidirectional rotation, with prism positioning function; A total of 4 prism wheels, capable of creating dozens of prism effects"],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Atenuación", "0 – 100 % electronic, 18-bit"],
          ["Estroboscópico", "0 - 30 flashes per second, adjustable speed and strobe effect"],
        ],
      },
      {
        group: "Movimiento",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolución", "16-bit pan and tilt"],
          ["Retroalimentación", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Dimensiones físicas",
        rows: [
          ["Dimensiones", "65 × 55 × 70 cm"],
          ["Peso", "27 kg"],
          ["Protección", "IP20"],
          ["Temperatura de operación", "−20 °C to 40 °C"],
          ["Montaje", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "23", use: "Conjunto completo de funciones, movimiento de 16 bits" },
      { mode: "Extended", channels: "44", use: "Añade control fino de prismas y CTO" },
      { mode: "Compact", channels: "25", use: "Huella reducida para rigs grandes" },
    ],
  },
  {
    slug: "LED600W Beam Light",
    model: "LED600W Beam Light",
    name: "LED600W Beam Light",
    category: "beam-spot",
    featured: true,
    status: "In production",
    tagline: "Cabezal móvil LED 3-en-1 de 600 W con zoom lineal de 4°–50° y mezcla de color CMY+CTO completa.",
    intro:
      "El LED 600W 3-in-1 es un verdadero todoterreno, ofreciendo proyección nítida en un amplio rango de zoom de 4°–50°. Su motor LED de 600 W, mezcla CMY+CTO lineal, prismas duales independientes y gobos de vidrio fijos y giratorios ofrecen una creatividad sin límites para conciertos, producciones teatrales y giras de alto nivel, respaldados por soporte RDM y refrigeración forzada robusta.",
    image: "/images/fixtures/600w.jpg",
    keySpecs: [
      { label: "Fuente", value: "600 W discharge" },
      { label: "Zoom", value: "4° – 50°" },
      { label: "Protección", value: "IP20" },
      { label: "Peso", value: "76 kg" },
    ],
    highlights: [
      {
        title: "Óptica frontal de 165 mm",
        body: "Una lente frontal amplia mantiene la densidad del haz a distancia. El haz se mantiene paralelo a través de la neblina en lugar de dispersarse en el campo lejano.",
      },
      {
        title: "CMY más CTO lineal",
        body: "Mezcla de color sustractiva con un filtro CTO lineal para igualar fuentes de tungsteno en rigs mixtos.",
      },
      {
        title: "Catorce combinaciones de prismas",
        body: "Dos prismas giratorios, indexables y superponibles de forma independiente, para textura aérea sin necesidad de un segundo equipo.",
      },
      {
        title: "Sellado para exteriores",
        body: "Cabeza, base y horquilla. Enfriado por convección sin filtros externos que limpiar entre espectáculos.",
      },
    ],
    specs: [
      {
        group: "Óptica y salida",
        rows: [
          ["Fuente de luz", "600 W LED Module, 20,000 h rated"],
          ["Temperatura de color", "7,600 K ±300 K"],
          ["Flujo luminoso", "23,400 lm"],
          ["Iluminancia a 20 m", "18,900 lux"],
          ["Rango de zoom", "4° – 50° linear"],
          ["Lente frontal", "165 mm multi-coated"],
        ],
      },
      {
        group: "Color y efectos",
        rows: [
          ["Mezcla de color", "CMY subtractive + linear CTO"],
          ["Rueda de colores", "8 colores + blanco"],
          ["Rueda de gobos giratorios", "7 gobos giratorios + luz blanca, cada gobo puede girar independientemente"],
          ["Rueda de gobos fijos", "8 gobos fijos + luz blanca + efecto de fuego dinámico"],
          ["Prismas", "1 x 8-facet prism + 1 x 6-facet prism, each prism can rotate independently in both directions"],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Atenuación", "0 – 100 % electronic, 18-bit"],
          ["Estroboscópico", "0 - 30 flashes per second, adjustable speed and strobe effect"],
        ],
      },
      {
        group: "Movimiento",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolución", "16-bit pan and tilt"],
          ["Retroalimentación", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Dimensiones físicas",
        rows: [
          ["Dimensiones", "63 × 53 × 67 cm"],
          ["Peso", "76 kg"],
          ["Protección", "IP20"],
          ["Temperatura de operación", "−20 °C to 40 °C"],
          ["Montaje", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "23", use: "Conjunto completo de funciones, movimiento de 16 bits" },
      { mode: "Extended", channels: "44", use: "Añade control fino de prismas y CTO" },
      { mode: "Compact", channels: "25", use: "Huella reducida para rigs grandes" },
    ],
  },
  {
    slug: "IP66 550W Moving Head Light",
    model: "IP66 550W Moving Head Light",
    name: "IP66 550W Moving Head Light",
    category: "beam-spot",
    status: "In production",
    tagline: "Cabezal móvil de haz de 550 W con clasificación IP66, apertura masiva de 200 mm, mezcla CMY y un haz nítido de 1.5°.",
    intro:
      "Diseñado para soportar los elementos, este cabezal móvil de 550 W con clasificación IP66 combina una apertura colosal de 200 mm con un haz de 1.5° y una salida de 355,500 Lux. Su sistema CMY independiente, 17 gobos, 14 colores y tres prismas apilables desbloquean una creatividad infinita, mientras que una carcasa de aleación de magnesio-aluminio, conexiones impermeables y refrigeración silenciosa lo convierten en una potencia robusta para estadios al aire libre, festivales e instalaciones costeras.",
    image: "/images/fixtures/ip66550w.jpg",
    keySpecs: [
      { label: "Fuente", value: "Ushio 520W Long-Life" },
      { label: "Segmentos", value: "8 independent" },
      { label: "Frecuencia", value: "0 – 20 Hz" },
      { label: "Peso", value: "30 kg" },
    ],
    highlights: [
      {
        title: "Óptica frontal de 200 mm",
        body: "Una lente frontal amplia mantiene la densidad del haz a distancia. El haz se mantiene paralelo a través de la neblina en lugar de dispersarse en el campo lejano.",
      },
      {
        title: "CMY más CTO lineal",
        body: "Mezcla de color sustractiva con un filtro CTO lineal para igualar fuentes de tungsteno en rigs mixtos.",
      },
      {
        title: "Catorce combinaciones de prismas",
        body: "Dos prismas giratorios, indexables y superponibles de forma independiente, para textura aérea sin necesidad de un segundo equipo.",
      },
      {
        title: "Sellado para exteriores",
        body: "Cabeza, base y horquilla. Enfriado por convección sin filtros externos que limpiar entre espectáculos.",
      },
    ],
    specs: [
      {
        group: "Óptica y salida",
        rows: [
          ["Fuente de luz", "Ushio 520W Long-Life Gas, 3,000 h rated"],
          ["Temperatura de color", "7,600 K ±300 K"],
          ["Flujo luminoso", "27,400 lm"],
          ["Iluminancia a 15 m", "355,500 lux"],
          ["Rango de zoom", "4° – 50° linear"],
          ["Lente frontal", "200 mm multi-coated"],
        ],
      },
      {
        group: "Color y efectos",
        rows: [
          ["Mezcla de color", "CMY subtractive + linear CTO"],
          ["Rueda de colores", "14 colores + luz blanca"],
          ["Gobo", "17 gobos + círculos blancos"],
          ["Prismas", "One 16-prism, one 8+8+8 triple prism, and one 6-row prism, can be stacked."],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Atenuación", "0 – 100 % electronic, 18-bit"],
          ["Estroboscópico", "0-20Hz, selectable random strobe and pulse strobe"],
        ],
      },
      {
        group: "Movimiento",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolución", "16-bit pan and tilt"],
          ["Retroalimentación", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Dimensiones físicas",
        rows: [
          ["Dimensiones", "42 × 25 × 75 cm"],
          ["Peso", "30 kg"],
          ["Protección", "IP66"],
          ["Temperatura de operación", "−20 °C to 45 °C"],
          ["Montaje", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "24", use: "Conjunto completo de funciones, movimiento de 16 bits" },
      { mode: "Extended", channels: "44", use: "Añade control fino de prismas y CTO" },
      { mode: "Compact", channels: "27", use: "Huella reducida para rigs grandes" },
    ],
  },
  {
    slug: "LED 7x60W BEE EYE Moving Light",
    model: "LED 7x60W BEE EYE Moving Light",
    name: "LED 7x60W BEE EYE Moving Light",
    category: "beam-spot",
    status: "In production",
    tagline: "Cabezal móvil RGBW de 7x60 W con clasificación IP65, zoom de 4°–60° y anillo de píxeles de 210 LEDs para efectos visuales ilimitados.",
    intro:
      "El LED BEE EYE impermeable combina un potente motor RGBW de 7x60 W con un anillo de píxeles de 210 LEDs y control de píxel individual para ofrecer impresionantes efectos de vórtice, caleidoscopio y cintura en un amplio rango de zoom de 4°–60°. Con un espejo frontal infinitamente giratorio, múltiples modos de canal y construcción con clasificación IP65, está diseñado para dominar festivales al aire libre, producciones en gira e instalaciones arquitectónicas —llueva o truene.",
    image: "/images/fixtures/led660wbee.jpg",
    keySpecs: [
      { label: "Fuente", value: "High power TX 4x1 RGBW 7x60W" },
      { label: "Pantalla", value: "OLED Touch Display" },
      { label: "Zoom", value: "4° - 60°" },
      { label: "Peso", value: "20 kg" },
    ],
    highlights: [
      {
        title: "Efecto de píxeles",
        body: "Cada LED y color se puede controlar individualmente.",
      },
      {
        title: "CMY más CTO lineal",
        body: "Mezcla de color sustractiva con un filtro CTO lineal para igualar fuentes de tungsteno en rigs mixtos.",
      },
      {
        title: "Catorce combinaciones de prismas",
        body: "Dos prismas giratorios, indexables y superponibles de forma independiente, para textura aérea sin necesidad de un segundo equipo.",
      },
      {
        title: "Sellado para exteriores",
        body: "Cabeza, base y horquilla. Enfriado por convección sin filtros externos que limpiar entre espectáculos.",
      },
    ],
    specs: [
      {
        group: "Óptica y salida",
        rows: [
          ["Fuente de luz", "High power TX 4in1 RGBW 7Pcs 60W LEDs + 210pcs 0.3W 50503in1 RGB LEDs, 50,000 h rated"],
          ["Temperatura de color", "7,600 K ±300 K"],
          ["Flujo luminoso", "27,400 lm"],
          ["Iluminancia a 15 m", "355,500 lux"],
          ["Rango de zoom", "4° – 50° linear"],
          ["Lente frontal", "180 mm multi-coated"],
        ],
      },
      {
        group: "Color y efectos",
        rows: [
          ["Mezcla de color", "Uniform RGBW Color Mixing"],
          ["Rueda de colores", "14 colores + luz blanca"],
          ["Gobo", "17 gobos + círculos blancos"],
          ["Prismas", "One 16-prism, one 8+8+8 triple prism, and one 6-row prism, can be stacked."],
          ["Frost", "Two-stage, variable 0–100 %"],
          ["Iris", "Motorised, 5 % – 100 %"],
          ["Atenuación", "0 - 100% linear adjustment"],
          ["Estroboscópico", "1 - 30 times per second electronic strobe and random strobe"],
        ],
      },
      {
        group: "Movimiento",
        rows: [
          ["Pan", "Infinite, continuous rotation"],
          ["Tilt", "280°"],
          ["Resolución", "16-bit pan and tilt"],
          ["Retroalimentación", "Absolute encoders with auto-recovery"],
        ],
      },
      commonElectrical,
      {
        group: "Dimensiones físicas",
        rows: [
          ["Dimensiones", "39.2 × 28.3 × 51.1 cm"],
          ["Peso", "30 kg"],
          ["Protección", "IP65"],
          ["Temperatura de operación", "−20 °C to 45 °C"],
          ["Montaje", "Two quarter-turn omega brackets"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Standard", channels: "20", use: "Conjunto completo de funciones, movimiento de 16 bits" },
      { mode: "Extended", channels: "57", use: "Añade control fino de prismas y CTO" },
      { mode: "Compact", channels: "36", use: "Huella reducida para rigs grandes" },
    ],
  },
  {
    slug: "IP65 Strike V",
    model: "IP65 Strike V",
    name: "IP65 Strike V",
    category: "strobe",
    status: "In production",
    tagline: "Cabezal móvil de matriz de píxeles de 1000 W con clasificación IP65, dispersión de haz de 12°–110° y control completo Art‑Net.",
    intro:
      "El IP65 Strike V es una potencia de matriz de píxeles de alta salida, con 24 LEDs principales de 40 W y 24 LEDs auxiliares de 6 W con control de píxel individual para efectos visuales ilimitados. Su amplia dispersión de haz (12°–110° con opciones de E-frost), carcasa de aluminio fundido a presión con clasificación IP65 y soporte Art-Net lo convierten en una opción versátil para festivales al aire libre, giras en estadios y proyecciones arquitectónicas a gran escala —diseñado para funcionar en cualquier clima.",
    image: "/images/fixtures/strikev.jpg",
    keySpecs: [
      { label: "Píxeles", value: "40 per metre" },
      { label: "Fuente", value: "TX high quality 4 in 1 RGBW" },
      { label: "Protección", value: "IP65" },
      { label: "Peso", value: "16.5 kg" },
    ],
    highlights: [
      {
        title: "Matriz de píxeles",
        body: "El LED principal y el LED auxiliar se pueden controlar individualmente.",
      },
      {
        title: "IP65 con conectores clasificados",
        body: "Carcasa sellada con conectores de alimentación y datos con clasificación IP en ambos extremos.",
      },
      {
        title: "Direccionamiento en largas distancias",
        body: "Auto-direccionamiento en cadena de hasta 20 unidades por línea de datos.",
      },
    ],
    specs: [
      {
        group: "Salida",
        rows: [
          ["Fuente de luz", "RGBW 5060 40W × 24 + 24 × 6W RGBW 4 in 1 LEDs"],
          ["Ángulo de haz", "Main LED 12°, Main LED with E-frost 48°"],
          ["Temperatura de color", "2,800 K – 8,000 K"],
          ["Flujo luminoso", "4,900 lm"],
        ],
      },
      {
        group: "Control",
        rows: [
          ["Control de píxeles", "40 individually addressable"],
          ["Protocolos", "DMX512-A, RDM, Art-Net, sACN"],
          ["Auto-direccionamiento", "Up to 20 units per run"],
        ],
      },
      commonElectrical,
      {
        group: "Dimensiones físicas",
        rows: [
          ["Dimensiones", "40.4 × 20.2 × 35 mm"],
          ["Peso", "16.5 kg"],
          ["Protección", "IP65"],
          ["Temperatura de operación", "−25 °C to 45 °C"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Basic", channels: "29", use: "Control de color de toda la unidad" },
      { mode: "Pixel", channels: "222", use: "RGBW por píxel" },
    ],
  },
  {
    slug: "LED 48 + 24 LONG STROBE LIGHT",
    model: "LED 48 + 24 LONG STROBE LIGHT",
    name: "LED 48 + 24 LONG STROBE LIGHT",
    category: "strobe",
    status: "In production",
    tagline: "Estroboscópico de formato largo de 200 W con LED y control de píxeles de 48 segmentos.",
    intro:
      "El LED 48+24 Long Strobe Light ofrece efectos de mapeo de píxeles en un diseño de barra elegante. Con 720 LEDs RGB y blancos fríos y atenuación suave de 0–100%, crea secuencias de colores dinámicas, efectos de flujo de agua y secuencias estroboscópicas variables —perfecto para conciertos, estudios de televisión y clubes.",
    image: "/images/fixtures/4824strobe.jpg",
    keySpecs: [
      { label: "Fuente", value: "200 W RGBW" },
      { label: "Óptica", value: "10° – 45° field-changeable" },
      { label: "Protección", value: "IP65" },
      { label: "Peso", value: "7 kg" },
    ],
    highlights: [
      {
        title: "Agarre que mantiene",
        body: "Horquilla de bloqueo dentada clasificada para vibración continua en exteriores, con escala de referencia para re-ajuste después del servicio.",
      },
      {
        title: "Óptica intercambiable en campo",
        body: "Cuatro juegos de lentes de inserción que cubren de 10° a 45°, intercambiables sin romper el sello IP.",
      },
    ],
    specs: [
      {
        group: "Salida",
        rows: [
          ["Fuente de luz", "200 W RGBW LED"],
          ["Ángulo de haz", "135°"],
          ["Temperatura de color", "3,500 K – 6,500 K"],
          ["Flujo luminoso", "7,200 lm"],
        ],
      },
      commonElectrical,
      {
        group: "Dimensiones físicas",
        rows: [
          ["Dimensiones", "97 × 7 × 12 cm"],
          ["Peso", "7 kg"],
          ["Protección", "IP65"],
          ["Temperatura de operación", "−25 °C to 50 °C"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Basic", channels: "4", use: "RGBW" },
      { mode: "Extended", channels: "16", use: "Añade CCT, curvas y estroboscópico" },
    ],
  },
  {
    slug: "960 RGBW LEDs 8 + 8 Segment Strobe Light",
    model: "960 RGBW LEDs 8 + 8 Segment Strobe Light",
    name: "960 RGBW LEDs 8 + 8 Segment Strobe Light",
    category: "strobe",
    status: "In production",
    tagline: "Estroboscópico de mapeo de píxeles de 250 W con 960 LEDs RGBW y control de segmentos 8+8.",
    intro:
      "El 960 RGBW Strobe Light contiene 864 LEDs RGB y 96 LEDs blancos de alta potencia en una barra compacta de 8+8 segmentos con control de píxel individual. Su atenuación de 32 bits sin parpadeo, estroboscópico variable de 1–30 Hz y múltiples modos de canal ofrecen secuencias dinámicas, lavados de color y efectos de ráfaga —ideal para conciertos, clubes y producciones en gira.",
    image: "/images/fixtures/900pc.jpg",
    keySpecs: [
      { label: "Fuente", value: "960 pieces of 0.2W" },
      { label: "Óptica", value: "120°" },
      { label: "Protección", value: "IP65" },
      { label: "Peso", value: "5 kg" },
    ],
    highlights: [
      {
        title: "Agarre sólido",
        body: "Horquilla de bloqueo dentada mantiene la posición bajo vibración continua en exteriores, con escala de referencia incorporada para un re-ajuste rápido y preciso después del mantenimiento.",
      },
      {
        title: "Refrigeración duradera",
        body: "Conducción de calor por tubo de cobre combinada con ventiladores silenciosos impermeables mantiene las temperaturas internas estables durante sets al aire libre exigentes y largas temporadas de festivales.",
      },
    ],
    specs: [
      {
        group: "Salida",
        rows: [
          ["Fuente de luz", "960 pieces of 0.2W"],
          ["Ángulo de haz", "120°"],
          ["Temperatura de color", "2,700 K – 8,000 K"],
          ["Flujo luminoso", "7,200 lm"],
        ],
      },
      commonElectrical,
      {
        group: "Dimensiones físicas",
        rows: [
          ["Dimensiones", "45 × 23 × 19 cm"],
          ["Peso", "5 kg"],
          ["Protección", "IP65"],
          ["Temperatura de operación", "−30 °C to 50 °C"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Basic", channels: "4", use: "RGBW" },
      { mode: "Extended", channels: "16", use: "Añade CCT, curvas y estroboscópico" },
    ],
  },
  {
    slug: "10 x 40W BEAM LIGHT",
    model: "10 x 40W BEAM LIGHT",
    name: "10 x 40W BEAM LIGHT",
    category: "strobe",
    status: "In production",
    tagline: "Luz de haz de 10 cabezales de 400 W con control individual de LEDs y soporte RDM.",
    intro:
      "El 10×40W Beam Light combina diez cabezales LED 4-en-1 en una barra compacta con control de píxel individual. Su atenuación de 32 bits, estroboscópico variable y modos de canal flexibles ofrecen efectos aéreos dinámicos y secuencias —perfecto para clubes, DJs móviles y giras.",
    image: "/images/fixtures/1040w.jpg",
    keySpecs: [
      { label: "Fuente", value: "10 × 40W 4‑in‑1 RGBW LEDs" },
      { label: "Óptica", value: "3.5° to 55°" },
      { label: "Protección", value: "IP20" },
      { label: "Peso", value: "8 kg" },
    ],
    highlights: [
      {
        title: "Control individual de cabezales",
        body: "Cada uno de los 10 cabezales de haz es direccionable de forma independiente, permitiendo secuencias de persecución dinámicas, efectos de mapeo de píxeles y displays aéreos sincronizados que transforman cualquier escenario o pista de baile.",
      },
      {
        title: "Programación flexible",
        body: "Con múltiples modos de canal (hasta 43 CH), soporte RDM y atenuación de 32 bits, esta barra compacta se adapta a cualquier rig —desde configuraciones autónomas simples hasta producciones DMX complejas.",
      },
    ],
    specs: [
      {
        group: "Salida",
        rows: [
          ["Fuente de luz", "10 × 40W 4‑in‑1 RGBW LEDs"],
          ["Ángulo de haz", "3.5° to 55°"],
          ["Temperatura de color", "2,700 K – 8,000 K"],
          ["Flujo luminoso", "15,364 lm"],
        ],
      },
      commonElectrical,
      {
        group: "Dimensiones físicas",
        rows: [
          ["Dimensiones", "115 × 16 × 27 cm"],
          ["Peso", "8 kg"],
          ["Protección", "IP20"],
          ["Temperatura de operación", "−30 °C to 50 °C"],
        ],
      },
      commonWarranty,
    ],
    dmxModes: [
      { mode: "Basic", channels: "7", use: "RGBW" },
      { mode: "Extended", channels: "43", use: "Añade CCT, curvas y estroboscópico" },
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const categoryById = (id: CategoryId) => categories.find((c) => c.id === id);

/* ── Applications ───────────────────────────────────────────────────────── */

export const applications = [
  {
    id: "touring",
    name: "Conciertos y giras",
    image: "/images/applications/concerts.jpg",
    summary: "Equipos que sobreviven a una carga de camión cada noche y mantienen la calibración al final de una gira.",
    points: [
      "Cabezales de haz e híbridos para trabajo de largo alcance en arenas",
      "Color consistente entre lotes de producción",
      "Repuestos disponibles en tres almacenes regionales",
    ],
    recommended: ["380W Beam Light", "380W Prism King", "IP66 550W Moving Head Light"],
  },
  {
    id: "theatre",
    name: "Teatro y artes escénicas",
    image: "/images/applications/theatre.jpg",
    summary: "Equipos silenciosos con control de enmarcado, especificados para rigs de repertorio que permanecen años en su lugar.",
    points: [
      "Modo teatro de 32 dB(A) en cabezales de perfil",
      "Enmarcado de cuatro cuchillas con rotación de ±60°",
      "Largos intervalos de servicio y acceso sin herramientas",
    ],
    recommended: ["380W Prism King", "LED600W Beam Light"],
  },
  {
    id: "broadcast",
    name: "Televisión y broadcast",
    image: "/images/applications/broadcast.jpg",
    summary: "Salida sin parpadeo con alta fidelidad de color para entornos de estudio con múltiples cámaras.",
    points: [
      "PWM seleccionable hasta 25 kHz",
      "CRI ≥ 92 con puntos blancos calibrados",
      "Ajuste de tinte sobre RDM para coincidencia de cámaras",
    ],
    recommended: ["LED600W Beam Light", "LED400W Beam Light"],
  },
  {
    id: "clubs",
    name: "Clubes y vida nocturna",
    image: "/images/applications/club.jpg",
    summary: "Cabezales compactos y equipos de efectos diseñados para largas horas nocturnas en espacios cálidos y cerrados.",
    points: [
      "Cabezales de efectos y matriz con rotación continua",
      "Carcasas enfriadas por convección sin filtros que limpiar",
      "Modos autónomos y sensibles al sonido para espacios pequeños",
    ],
    recommended: ["IP65 Strike V", "LED 48 + 24 LONG STROBE LIGHT", "10 x 40W BEAM LIGHT"],
  },
  {
    id: "corporate",
    name: "Corporativo y casas de culto",
    image: "/images/applications/corporate.jpg",
    summary: "Iluminación discreta y silenciosa para espacios donde el equipo no debe llamar la atención.",
    points: [
      "Operación de bajo ruido para programas hablados",
      "Equipos arquitectónicos estáticos para instalación permanente",
      "Control sencillo desde una superficie de control pequeña",
    ],
    recommended: ["380W Prism King", "LED600W Beam Light"],
  },
];

/* ── Proof ──────────────────────────────────────────────────────────────── */

export const stats = [
  { value: "2016", label: "Fabricando desde" },
  { value: "4,100 m²", label: "Superficie de producción" },
  { value: "12 meses", label: "Garantía estándar" },
];

export const capabilities = [
  {
    code: "01",
    title: "Diseño óptico interno",
    body: "Los sistemas de lentes, reflectores y rutas de gobos se diseñan y simulan internamente, y luego se verifican con prototipos físicos antes de fabricar las herramientas.",
  },
  {
    code: "02",
    title: "Verificación fotométrica",
    body: "Cada modelo se mide en un goniofotómetro y se publica con los datos que produce esa medición. Sin estimaciones, sin cifras de lúmenes redondeadas.",
  },
  {
    code: "03",
    title: "Calibración de color por lote",
    body: "Los equipos LED se calibran en el ensamblaje contra una unidad de referencia, para que un equipo comprado en el tercer año siga coincidiendo con uno comprado en el primero.",
  },
  {
    code: "04",
    title: "Prueba de quemado y vibración",
    body: "Cada unidad pasa por un quemado controlado con ciclos de movimiento, más un perfil de vibración que simula el transporte por carretera, antes de ser empaquetada.",
  },
];

export const certifications = [
  { code: "CE", note: "Conformidad europea" },
  { code: "RoHS", note: "Sustancias restringidas" },
  { code: "EMC", note: "Compatibilidad electromagnética" },
  { code: "ETL", note: "Certificación para Norteamérica" },
  { code: "IP65", note: "Protección contra ingreso, modelos clasificados" },
  { code: "ISO 9001", note: "Gestión de calidad" },
];

export const timeline = [
  { year: "2016", title: "Fundada", body: "Beamvox comienza como un taller óptico de seis personas que construye equipos personalizados para compañías de gira regionales." },
  { year: "2017", title: "Primer catálogo", body: "Se lanza la primera gama de productos estandarizada, junto con un conjunto de datos fotométricos publicados para cada modelo." },
  { year: "2018", title: "Distribución nacional", body: "Se abre un almacén chino con stock, la operación comienza a crecer dentro del país." },
  { year: "2022", title: "Plataforma IP65", body: "La plataforma de cabeza sellada entra en producción, llevando equipos de gira a instalaciones permanentes en exteriores." },
  { year: "2024", title: "Catálogo expandido", body: "Se desarrollan nuevos productos para cubrir diferentes escenarios." },
  { year: "2026", title: "Comienza a operar en el extranjero", body: "La empresa se prepara para iniciar operaciones en América, África y Europa." },
];

/* ── Support ────────────────────────────────────────────────────────────── */

export const downloadGroups = [
  {
    name: "Manuales de usuario",
    note: "Documentación de instalación, operación y seguridad.",
    items: [
      { title: "BVX-B450 IP — Manual de usuario", meta: "PDF · 4.2 MB · rev 3.1 · EN / DE / FR / ES" },
      { title: "BVX-W760 IP — Manual de usuario", meta: "PDF · 3.8 MB · rev 2.4 · EN / DE / FR / ES" },
      { title: "BVX-S700 — Manual de usuario", meta: "PDF · 4.6 MB · rev 1.2 · EN / DE / FR / ES" },
      { title: "BVX-C24 — Guía del operador", meta: "PDF · 8.1 MB · rev 1.0 · EN" },
    ],
  },
  {
    name: "Tablas DMX y perfiles",
    note: "Mapas de canales, archivos GDTF y personalidades de consola.",
    items: [
      { title: "Gama completa — Tablas DMX", meta: "ZIP · 1.1 MB" },
      { title: "Gama completa — Biblioteca GDTF", meta: "ZIP · 2.7 MB · GDTF 1.2" },
      { title: "Gama completa — Escena de referencia MVR", meta: "ZIP · 5.4 MB" },
    ],
  },
  {
    name: "Datos fotométricos",
    note: "Archivos de salida medidos para software de plots y simulación.",
    items: [
      { title: "Gama completa — Archivos IES", meta: "ZIP · 3.2 MB" },
      { title: "Gama completa — Informe fotométrico", meta: "PDF · 6.7 MB" },
    ],
  },
  {
    name: "Firmware",
    note: "Versiones actuales con registros de cambios. Versiones anteriores bajo solicitud.",
    items: [
      { title: "BVX-B450 IP — Firmware 3.4.1", meta: "BIN · 2.1 MB · change log included" },
      { title: "BVX-W760 IP — Firmware 2.9.0", meta: "BIN · 1.8 MB · change log included" },
      { title: "BVX-C24 — Software 1.2.3", meta: "PKG · 412 MB · release notes included" },
    ],
  },
  {
    name: "Documentos comerciales",
    note: "Para distribuidores y especificadores.",
    items: [
      { title: "Catálogo de productos", meta: "PDF · 22 MB" },
      { title: "Declaración de conformidad — gama completa", meta: "PDF · 1.4 MB" },
      { title: "Términos de garantía", meta: "PDF · 240 KB" },
    ],
  },
];

export const faqs = [
  {
    q: "¿Qué cubre la garantía de 12 meses?",
    a: "Piezas y mano de obra en defectos de fabricación durante 12 meses desde la fecha de factura, gestionado a través del distribuidor que suministró el equipo. Los consumibles como lámparas y gobos están cubiertos por 12 meses.",
  },
  {
    q: "¿Cuáles son los plazos de entrega típicos?",
    a: "Los pedidos configurados u OEM se cotizan con una ventana de producción confirmada en el momento del pedido.",
  },
  {
    q: "¿Ofrecen configuraciones OEM y ODM?",
    a: "Sí. El color de la carcasa, la distribución de conectores, la configuración de voltaje y el branding se pueden especificar a partir de una cantidad mínima de pedido acordada. Las modificaciones ópticas se evalúan caso por caso.",
  },
  {
    q: "¿Son compatibles los equipos con mi consola?",
    a: "Cada modelo incluye un perfil GDTF y una tabla DMX publicada. Las personalidades para las principales plataformas de consola están disponibles en la sección de descargas.",
  },
  {
    q: "¿Puedo solicitar una unidad de demostración?",
    a: "Hay stock de demostración disponible a través de distribuidores regionales para evaluación. Contáctanos y dirigiremos la solicitud al socio más cercano.",
  },
];

export const partnerBenefits = [
  {
    code: "01",
    title: "Protección de territorio",
    body: "Territorios definidos con compromisos de volumen acordados, para que tu inversión en la marca no sea afectada por el próximo revendedor.",
  },
  {
    code: "02",
    title: "Niveles de precios comerciales",
    body: "Precios basados en volumen con umbrales de nivel publicados. Sin negociación caso por caso en líneas de catálogo.",
  },
  {
    code: "03",
    title: "Stock mantenido regionalmente",
    body: "Almacenes en las tres regiones atendidas, para que puedas cotizar desde la disponibilidad en lugar de un programa de producción.",
  },
  {
    code: "04",
    title: "Capacitación técnica",
    body: "Capacitación en productos y servicios para tu equipo, impartida de forma remota o en tus instalaciones, con certificación para trabajos de garantía.",
  },
  {
    code: "05",
    title: "Stock de demostración",
    body: "Unidades de demostración con descuento y equipos en préstamo para licitaciones y ferias comerciales.",
  },
  {
    code: "06",
    title: "Activos de marketing",
    body: "Fotografía de productos, hojas de especificaciones y copias localizadas, suministradas sin restricciones de licencia en tu territorio.",
  },
];

export const partnerSteps = [
  { code: "01", title: "Consulta", body: "Envía el formulario con tu territorio, sectores atendidos y portafolio actual." },
  { code: "02", title: "Revisión", body: "Verificamos la disponibilidad del territorio y respondemos en un plazo de cinco días hábiles." },
  { code: "03", title: "Términos", body: "El nivel de precios, el compromiso de volumen y el alcance del soporte se acuerdan por escrito." },
  { code: "04", title: "Incorporación", body: "Se programan la capacitación, los activos y tu primer pedido de stock." },
];

export const values = [
  {
    code: "01",
    title: "Innovación",
    body: "Constantemente superamos los límites de la tecnología de iluminación escénica para ofrecer soluciones más confiables y eficientes.",
  },
  {
    code: "02",
    title: "Calidad",
    body: "Cada producto está construido para soportar las exigencias de las giras y el uso intensivo, sin comprometer el rendimiento.",
  },
  {
    code: "03",
    title: "El cliente primero",
    body: "Nuestros clientes son nuestros socios, y su éxito es nuestro éxito. Trabajamos junto a ellos para lograr los mejores resultados.",
  },
];

/* ── Why Beamvox ────────────────────────────────────────────────────────── */

export const claims = [
  {
    claim: "Salida de lúmenes",
    ours: "Flujo total medido, indicado en la apertura con el modo nombrado",
    common: "Clasificación máxima del chip LED citada como salida del equipo",
  },
  {
    claim: "Consistencia de color",
    ours: "Calibrado contra una unidad de referencia en el ensamblaje, lote a lote",
    common: "Clasificado una vez y luego dejado a la deriva entre corridas de producción",
  },
  {
    claim: "Figuras de ruido",
    ours: "dB(A) a 1 m, por modo de operación, en una sala silenciosa",
    common: "Citado solo para el modo de ventilador más bajo, distancia no especificada",
  },
  {
    claim: "Protección contra ingreso",
    ours: "Clasificado por modelo, con la cabeza y la base probadas ensambladas",
    common: "Una clasificación aplicada a toda una familia de productos",
  },
  {
    claim: "Vida útil",
    ours: "Intervalos de servicio publicados y lista de piezas que se mantiene disponible",
    common: "Ensamblajes sellados reemplazados completos, piezas retiradas después de dos años",
  },
] as const;

export const commitments = [
  {
    code: "01",
    title: "Garantía de 12 meses, piezas y mano de obra",
    body: "Gestionada por el distribuidor que suministró el equipo, con stock regional para que una unidad fallida sea reemplazada en lugar de esperar detrás de un envío.",
  },
  {
    code: "02",
    title: "Diez años de repuestos",
    body: "Las piezas de desgaste, ópticas, placas y motores están disponibles durante diez años desde el final de la producción.",
  },
  {
    code: "03",
    title: "Documentación disponible",
    body: "El manual, la tabla DMX, el perfil GDTF, los archivos IES y la declaración de conformidad se publican para cada modelo, no se envían bajo solicitud.",
  },
  {
    code: "04",
    title: "Sin revisiones sorpresa",
    body: "Los cambios a mitad de vida que afectan la fotometría, el peso o el control obtienen una nueva designación de modelo. Lo que especificas es lo que llega.",
  },
];
