

/**
 * our_products_route.ts
 *
 * Full typed data structure and route config for the Products page.
 * Mirrors every section in app/our_products/page.tsx exactly:
 *   ① Page Hero
 *   ② Jump Nav
 *   ③ Product Categories (with items + badge styles)
 *   ④ Bottom CTA
 *   ⑤ Breakpoints
 *   ⑥ Route metadata
 */

// ─────────────────────────────────────────────
// ① PAGE HERO
// ─────────────────────────────────────────────

export interface ProductsHero {
  eyebrow:         string;
  heading:         string;
  headingMaxWidth: number;
  subtitle:        string;
}

export const productsHero: ProductsHero = {
  eyebrow:         "Our products",
  heading:         "Quality solar equipment, competitively priced",
  headingMaxWidth: 560,
  subtitle:
    "We stock and supply leading solar brands. All products come with manufacturer warranties and our full installation support.",
};

// ─────────────────────────────────────────────
// ② JUMP NAV
// Sticky horizontal scrollable tab strip.
// Anchor IDs are derived from category titles
// using: `cat-${title.toLowerCase().replace(/\s+&?\s*/g, "-")}`
// ─────────────────────────────────────────────

export interface JumpNavConfig {
  /**
   * CSS z-index of the sticky nav bar.
   * Must exceed any overlapping elements.
   */
  zIndex:          number;
  /** Height in px used as scroll-margin-top on each category block */
  scrollMarginTop: number;
}

export const jumpNavConfig: JumpNavConfig = {
  zIndex:          50,
  scrollMarginTop: 56,
};

/**
 * Utility that mirrors the anchor-id derivation in the page component.
 * Call this whenever you need the id/href for a category by title.
 */
export function categoryAnchorId(title: string): string {
  return `cat-${title.toLowerCase().replace(/\s+&?\s*/g, "-")}`;
}

// ─────────────────────────────────────────────
// ③ BADGE STYLES
// Keyed by badge label string — mirrors BADGE_STYLES
// in the component exactly.
// ─────────────────────────────────────────────

export interface BadgeStyle {
  bg:     string;
  color:  string;
  border: string;
}

export type BadgeKey =
  | "Best seller"
  | "Premium"
  | "Popular"
  | "Commercial"
  | "Best value"
  | "New";

export const badgeStyles: Record<BadgeKey, BadgeStyle> = {
  "Best seller": {
    bg:     "var(--gp-green-light)",
    color:  "var(--gp-green)",
    border: "var(--gp-green-border)",
  },
  "Premium": {
    bg:     "#fef3c7",
    color:  "#92400e",
    border: "#fde68a",
  },
  "Popular": {
    bg:     "var(--gp-green-light)",
    color:  "var(--gp-green)",
    border: "var(--gp-green-border)",
  },
  "Commercial": {
    bg:     "#dbeafe",
    color:  "#1d4ed8",
    border: "#bfdbfe",
  },
  "Best value": {
    bg:     "#f3e8ff",
    color:  "#7c3aed",
    border: "#e9d5ff",
  },
  "New": {
    bg:     "#fce7f3",
    color:  "#be185d",
    border: "#fbcfe8",
  },
};

// ─────────────────────────────────────────────
// PRODUCT ITEMS & CATEGORIES
// ─────────────────────────────────────────────

export interface ProductItem {
  name:  string;
  desc:  string;
  /**
   * Empty string means no badge is rendered.
   * Non-empty values must be keys of BadgeStyles.
   */
  badge: BadgeKey | "";
  /** Internal href — all products link to contact page */
  enquireHref: string;
}

export interface ProductCategory {
  title: string;
  /**
   * SVG markup descriptor — used to document the icon shape.
   * The actual JSX SVG is rendered inline in the component;
   * this field stores the icon semantics for reference/testing.
   */
  iconDescription: string;
  items: ProductItem[];
}

export const productCategories: ProductCategory[] = [
  {
    title:           "Solar Panels",
    iconDescription: "Rectangle with plug shape — solar panel icon, 22×22, strokeWidth 1.8",
    items: [
      {
        name:        "Monocrystalline 400W",
        desc:        "High-efficiency panels ideal for limited roof space.",
        badge:       "Best seller",
        enquireHref: "/company_contact_details",
      },
      {
        name:        "Polycrystalline 330W",
        desc:        "Cost-effective option for larger installations.",
        badge:       "",
        enquireHref: "/company_contact_details",
      },
      {
        name:        "Bifacial 450W",
        desc:        "Captures light from both sides for maximum output.",
        badge:       "Premium",
        enquireHref: "/company_contact_details",
      },
    ],
  },
  {
    title:           "Inverters",
    iconDescription: "Polyline waveform — inverter/signal icon, 22×22, strokeWidth 1.8",
    items: [
      {
        name:        "Hybrid 5kW Inverter",
        desc:        "Grid-tie with battery backup — ideal for homes.",
        badge:       "Popular",
        enquireHref: "/company_contact_details",
      },
      {
        name:        "Off-grid 3kW Inverter",
        desc:        "Perfect for rural properties away from the grid.",
        badge:       "",
        enquireHref: "/company_contact_details",
      },
      {
        name:        "3-phase 10kW Inverter",
        desc:        "Commercial-grade, three-phase power management.",
        badge:       "Commercial",
        enquireHref: "/company_contact_details",
      },
    ],
  },
  {
    title:           "Battery Storage",
    iconDescription: "Rectangle battery body with terminal nub — battery icon, 22×22, strokeWidth 1.8",
    items: [
      {
        name:        "Lithium 5kWh Battery",
        desc:        "Compact lithium storage for overnight power.",
        badge:       "",
        enquireHref: "/company_contact_details",
      },
      {
        name:        "Lithium 10kWh Battery",
        desc:        "Extended storage for larger homes or businesses.",
        badge:       "Best value",
        enquireHref: "/company_contact_details",
      },
      {
        name:        "Lead-acid 200Ah",
        desc:        "Reliable and affordable deep-cycle battery bank.",
        badge:       "",
        enquireHref: "/company_contact_details",
      },
    ],
  },
  {
    title:           "Accessories & Mounting",
    iconDescription: "Circle with arc paths — settings/signal icon, 22×22, strokeWidth 1.8",
    items: [
      {
        name:        "Roof Mounting Kits",
        desc:        "Aluminium rail systems for tiled or metal roofs.",
        badge:       "",
        enquireHref: "/company_contact_details",
      },
      {
        name:        "Solar Charge Controllers",
        desc:        "MPPT controllers for off-grid systems.",
        badge:       "",
        enquireHref: "/company_contact_details",
      },
      {
        name:        "Monitoring Systems",
        desc:        "Real-time performance dashboards via app or web.",
        badge:       "New",
        enquireHref: "/company_contact_details",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// ④ BOTTOM CTA
// Dark background section — flex column on mobile,
// flex row (space-between) at ≥ 640px.
// Button is width:100% on mobile → width:auto on tablet+.
// ─────────────────────────────────────────────

export interface ProductsCTA {
  heading:     string;
  subtitle:    string;
  buttonLabel: string;
  buttonHref:  string;
}

export const productsCTA: ProductsCTA = {
  heading:     "Looking for a specific product?",
  subtitle:    "We can source and supply products not listed here. Contact us with your specs.",
  buttonLabel: "Contact our team",
  buttonHref:  "/company_contact_details",
};

// ─────────────────────────────────────────────
// ⑤ BREAKPOINTS
// Mirrors all @media rules in the <style> block.
// ─────────────────────────────────────────────

export const productsBreakpoints = {
  /** gp-products-grid: 1-col → 2-col */
  gridTwoCol:   560,
  /** gp-products-grid: 2-col → 3-col */
  gridThreeCol: 960,
  /** gp-cta-inner: column → row, button: 100% → auto */
  ctaRow:       640,
} as const;

// ─────────────────────────────────────────────
// ROUTE METADATA
// ─────────────────────────────────────────────

export interface RouteMetadata {
  title:       string;
  description: string;
  path:        string;
  ogImage:     string;
}

export const productsRouteMetadata: RouteMetadata = {
  title:
    "Our Products | Green Power Systems",
  description:
    "Browse solar panels, inverters, battery storage, and accessories from Green Power Systems — Malawi's trusted solar supplier. All products include manufacturer warranties.",
  path:    "/our_products",
  ogImage: "/images/og/products.jpg",
};

// ─────────────────────────────────────────────
// FULL PAGE DATA
// ─────────────────────────────────────────────

export interface ProductsPageData {
  hero:               ProductsHero;
  jumpNav:            JumpNavConfig;
  categories:         ProductCategory[];
  badgeStyles:        Record<BadgeKey, BadgeStyle>;
  cta:                ProductsCTA;
  breakpoints:        typeof productsBreakpoints;
}

export const productsPageData: ProductsPageData = {
  hero:        productsHero,
  jumpNav:     jumpNavConfig,
  categories:  productCategories,
  badgeStyles: badgeStyles,
  cta:         productsCTA,
  breakpoints: productsBreakpoints,
};

// ─────────────────────────────────────────────
// DEFAULT EXPORT
// import productsRoute from "@/routes/our_products_route"
// productsRoute.data.categories
// productsRoute.data.badgeStyles["Best seller"]
// ─────────────────────────────────────────────

const productsRoute = {
  metadata: productsRouteMetadata,
  data:     productsPageData,
};

export default productsRoute;