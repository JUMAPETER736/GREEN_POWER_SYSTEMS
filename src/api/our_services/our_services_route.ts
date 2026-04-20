

/**
 * our_services_route.ts
 *
 * Full typed data structure and route config for the Services page.
 * Mirrors every section in app/our_services/page.tsx exactly:
 *   ① Page Hero
 *   ② Service Cards Grid
 *   ③ Bottom CTA
 *   ④ Route metadata
 */

// ─────────────────────────────────────────────
// ① PAGE HERO
// ─────────────────────────────────────────────

export interface ServicesHero {
  eyebrow:         string;
  heading:         string;
  headingMaxWidth: number;
  subtitle:        string;
}

export const servicesHero: ServicesHero = {
  eyebrow:         "What we do",
  heading:         "Complete solar solutions for every need",
  headingMaxWidth: 560,
  subtitle:
    "From a single rooftop installation to a full commercial solar farm, we bring the expertise and hardware to get the job done right.",
};

// ─────────────────────────────────────────────
// ② SERVICE CARDS
// Grid: auto-fit · minmax(300px, 1fr) · gap 20px.
// Card 01 (installation) uses gp-card-featured;
// all others use gp-card.
// Each card has: num label · h2 title · desc · feature list.
// Feature list items each have a green checkmark circle icon.
// ─────────────────────────────────────────────

export type ServiceId =
  | "installation"
  | "maintenance"
  | "repairs"
  | "consultation"
  | "battery"
  | "commercial";

export interface ServiceCard {
  /** Used as the DOM id and React key */
  id:       ServiceId;
  /** Display number, e.g. "01" */
  num:      string;
  title:    string;
  desc:     string;
  features: string[];
  /**
   * true → renders with gp-card-featured (green accent).
   * false → renders with gp-card (neutral).
   * Only the first card (installation) is featured.
   */
  featured: boolean;
}

export const services: ServiceCard[] = [
  {
    id:       "installation",
    num:      "01",
    title:    "Solar panel installation",
    desc:     "We handle everything from site assessment and system sizing to mounting, wiring, and commissioning. Residential and commercial.",
    features: [
      "Free site survey",
      "Custom system design",
      "Certified installation",
      "Grid-tie or off-grid",
      "Warranty included",
    ],
    featured: true,
  },
  {
    id:       "maintenance",
    num:      "02",
    title:    "Preventive maintenance",
    desc:     "Keep your system performing at its best with scheduled cleaning, inspection, and performance reporting.",
    features: [
      "Bi-annual service visits",
      "Panel cleaning",
      "Inverter checks",
      "Performance report",
      "Priority response",
    ],
    featured: false,
  },
  {
    id:       "repairs",
    num:      "03",
    title:    "Repairs & diagnostics",
    desc:     "Fast fault-finding and repair for any solar system — whether we installed it or not.",
    features: [
      "Same-day diagnosis",
      "Inverter repair",
      "Panel replacement",
      "Wiring faults",
      "Battery checks",
    ],
    featured: false,
  },
  {
    id:       "consultation",
    num:      "04",
    title:    "Energy consultation",
    desc:     "Not sure where to start? Our experts assess your energy needs and recommend the right solution.",
    features: [
      "Load assessment",
      "ROI calculation",
      "Financing advice",
      "Brand comparison",
      "No obligation",
    ],
    featured: false,
  },
  {
    id:       "battery",
    num:      "05",
    title:    "Battery storage systems",
    desc:     "Store excess solar energy and power your home or business through the night or during outages.",
    features: [
      "Lithium-ion batteries",
      "LOADSHEDDING protection",
      "Smart monitoring",
      "Scalable capacity",
      "Remote alerts",
    ],
    featured: false,
  },
  {
    id:       "commercial",
    num:      "06",
    title:    "Commercial & industrial",
    desc:     "Large-scale solar solutions for businesses, farms, schools, and institutions across Malawi.",
    features: [
      "High-capacity systems",
      "Dedicated project manager",
      "3-phase installations",
      "Net metering support",
      "Annual audits",
    ],
    featured: false,
  },
];

/**
 * Grid config — mirrors the inline style on the services grid wrapper:
 * gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
 * gap: 20
 * padding: "72px 0"
 */
export const servicesGridConfig = {
  gridMinWidth:  300,
  gap:           20,
  sectionPaddingY: 72,
  cardPaddingAll: 32,
} as const;

// ─────────────────────────────────────────────
// ③ BOTTOM CTA
// Dark background (gp-bg-dark).
// flex-wrap: wrap · space-between at all sizes
// (no explicit breakpoint switch — relies on
//  flex-wrap collapsing naturally on narrow screens).
// ─────────────────────────────────────────────

export interface ServicesCTA {
  heading:     string;
  subtitle:    string;
  buttonLabel: string;
  buttonHref:  string;
  /** Section padding in px */
  sectionPaddingY: number;
}

export const servicesCTA: ServicesCTA = {
  heading:         "Need a custom solution?",
  subtitle:        "Tell us about your project and we'll design the perfect system.",
  buttonLabel:     "Request a Quote",
  buttonHref:      "/company_contact_details",
  sectionPaddingY: 64,
};

// ─────────────────────────────────────────────
// ROUTE METADATA
// ─────────────────────────────────────────────

export interface RouteMetadata {
  title:       string;
  description: string;
  path:        string;
  ogImage:     string;
}

export const servicesRouteMetadata: RouteMetadata = {
  title:
    "Our Services | Green Power Systems",
  description:
    "Solar panel installation, maintenance, repairs, battery storage, energy consultation, and commercial solutions across Malawi — by Green Power Systems.",
  path:    "/our_services",
  ogImage: "/images/og/services.jpg",
};

// ─────────────────────────────────────────────
// FULL PAGE DATA
// ─────────────────────────────────────────────

export interface ServicesPageData {
  hero:       ServicesHero;
  services:   ServiceCard[];
  gridConfig: typeof servicesGridConfig;
  cta:        ServicesCTA;
}

export const servicesPageData: ServicesPageData = {
  hero:       servicesHero,
  services:   services,
  gridConfig: servicesGridConfig,
  cta:        servicesCTA,
};

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

/** Returns the single featured service (always "installation"). */
export function getFeaturedService(): ServiceCard {
  const featured = services.find(s => s.featured);
  if (!featured) throw new Error("No featured service defined in our_services_route.ts");
  return featured;
}

/** Returns all non-featured services in order. */
export function getStandardServices(): ServiceCard[] {
  return services.filter(s => !s.featured);
}

/** Look up a service by its id — useful for anchor links and deep links. */
export function getServiceById(id: ServiceId): ServiceCard | undefined {
  return services.find(s => s.id === id);
}

// ─────────────────────────────────────────────
// DEFAULT EXPORT
// import servicesRoute from "@/routes/our_services_route"
// servicesRoute.data.services
// servicesRoute.data.cta.buttonHref
// ─────────────────────────────────────────────

const servicesRoute = {
  metadata: servicesRouteMetadata,
  data:     servicesPageData,
};

export default servicesRoute;