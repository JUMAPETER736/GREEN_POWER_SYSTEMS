

/**
 * about_our_company_route.ts
 *
 * Full typed data structure and route config for the About Our Company page.
 * Mirrors every section in app/about/page.tsx exactly:
 *   ① Page Hero
 *   ② Mission & Values
 *   ③ Stats Strip
 *   ④ Team Cards
 *   ⑤ Bottom CTA
 */

// ─────────────────────────────────────────────
// ① PAGE HERO
// ─────────────────────────────────────────────

export interface AboutHero {
  eyebrow: string;
  heading: string;
  /** maxWidth applied to the h1 element (px) */
  headingMaxWidth: number;
  subtitle: string;
}

export const aboutHero: AboutHero = {
  eyebrow: "Our story",
  heading: "Bringing reliable solar energy to every corner of Malawi",
  headingMaxWidth: 600,
  subtitle:
    "Founded in Lilongwe, Green Power Systems was built on a single belief: clean energy should be accessible to everyone. Since day one we've installed, maintained, and supported solar systems for homes, schools, and businesses.",
};

// ─────────────────────────────────────────────
// ② MISSION & VALUES
// ─────────────────────────────────────────────

export interface MissionBlock {
  eyebrow: string;
  heading: string;
  body: string;
}

export interface ValueCard {
  label: string;
  desc: string;
}

export interface MissionAndValues {
  mission: MissionBlock;
  values: ValueCard[];
}

export const missionAndValues: MissionAndValues = {
  mission: {
    eyebrow: "Our mission",
    heading: "Empowering Malawi through sustainable energy",
    body: "We exist to make solar affordable, reliable, and simple. Whether you're a family looking to cut electricity bills or a business aiming for energy independence, we design the right system and stand behind it for years.",
  },
  values: [
    {
      label: "Quality first",
      desc: "We never cut corners on components or workmanship.",
    },
    {
      label: "Local expertise",
      desc: "We know Malawi's grid, climate, and regulations deeply.",
    },
    {
      label: "Long-term partnership",
      desc: "Our relationship doesn't end at installation.",
    },
  ],
};

// ─────────────────────────────────────────────
// ③ STATS STRIP
// ─────────────────────────────────────────────

export interface StatItem {
  value: string;
  label: string;
}

export const stats: StatItem[] = [
  { value: "50+",  label: "Systems installed" },
  { value: "5+",   label: "Years operating" },
  { value: "3",    label: "Districts served" },
  { value: "100%", label: "Client satisfaction" },
];

// ─────────────────────────────────────────────
// ④ TEAM CARDS
// ─────────────────────────────────────────────

export interface TeamMember {
  /** Full display name */
  name: string;
  /** Job title shown in green beneath the name */
  role: string;
  /** Two-letter initials rendered inside the avatar circle */
  initials: string;
  /** Education credentials line */
  edu: string;
  /** Short italic note about experience or focus area */
  note: string;
}

export const team: TeamMember[] = [
  {
    name:     "Chikumbutso Bisani",
    role:     "CEO",
    initials: "CB",
    edu:      "MSc Construction Technology (UNZA) · BSc Renewable Energy (Mzuzu University)",
    note:     "10+ years in energy, irrigation & construction",
  },
  {
    name:     "Chisomo Chinkhande",
    role:     "Project Manager",
    initials: "CC",
    edu:      "BSc Renewable Energy Technologies (Mzuzu University)",
    note:     "Team & client coordination · Business development",
  },
  {
    name:     "Andrew Henry",
    role:     "Marketing Officer",
    initials: "AH",
    edu:      "Professional Certificate in Marketing (Lilongwe Technical College)",
    note:     "1+ year in renewable energy · Brand & marketing strategy",
  },
  {
    name:     "Felix Chinkhande",
    role:     "Finance & Administration Officer",
    initials: "FC",
    edu:      "Management Certificate (Lilongwe Technical College)",
    note:     "Finance, admin & organisational operations",
  },
];

// ─────────────────────────────────────────────
// ⑤ BOTTOM CTA
// ─────────────────────────────────────────────

export interface AboutCTA {
  heading: string;
  subtitle: string;
  buttonLabel: string;
  /** Internal Next.js href for the button */
  buttonHref: string;
}

export const aboutCTA: AboutCTA = {
  heading:     "Come visit us in Lilongwe",
  subtitle:    "QuickTrip Shopping Complex, Area 25 Sungwi — open Mon–Sat 8am to 5pm",
  buttonLabel: "Get in touch",
  buttonHref:  "/company_contact_details",
};

// ─────────────────────────────────────────────
// ROUTE CONFIG
// Full page data assembled in one export so the
// page component can import a single object.
// ─────────────────────────────────────────────

export interface AboutPageData {
  hero:             AboutHero;
  missionAndValues: MissionAndValues;
  stats:            StatItem[];
  team:             TeamMember[];
  cta:              AboutCTA;
}

export const aboutPageData: AboutPageData = {
  hero:             aboutHero,
  missionAndValues: missionAndValues,
  stats:            stats,
  team:             team,
  cta:              aboutCTA,
};

// ─────────────────────────────────────────────
// ROUTE METADATA
// Used by Next.js generateMetadata() or a shared
// metadata helper at the route level.
// ─────────────────────────────────────────────

export interface RouteMetadata {
  /** <title> tag value */
  title: string;
  /** <meta name="description"> value */
  description: string;
  /** Canonical path */
  path: string;
  /** Open Graph image path (relative to /public) */
  ogImage: string;
}

export const aboutRouteMetadata: RouteMetadata = {
  title:       "About Us | Green Power Systems",
  description:
    "Learn about Green Power Systems — Malawi's trusted solar partner. Meet our team, our mission, and our values.",
  path:        "/about",
  ogImage:     "/images/og/about.jpg",
};

// ─────────────────────────────────────────────
// DEFAULT EXPORT
// Convenience default so callers can do:
//   import aboutRoute from "@/routes/about_our_company_route"
// ─────────────────────────────────────────────

const aboutRoute = {
  metadata: aboutRouteMetadata,
  data:     aboutPageData,
};

export default aboutRoute;