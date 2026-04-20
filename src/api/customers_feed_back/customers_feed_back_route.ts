

/**
 * customer_feed_back_route.ts
 *
 * Full typed data structure and route config for the Testimonials /
 * Customer Feedback page.
 * Mirrors every section in app/testimonials/page.tsx exactly:
 *   ① Page Hero
 *   ② Rating Summary Bar
 *   ③ Reviews Grid
 *   ④ Bottom CTA
 *   ⑤ Derived statistics (computed from the reviews array)
 *   ⑥ Breakpoints
 *   ⑦ Route metadata
 */

// ─────────────────────────────────────────────
// ① PAGE HERO
// ─────────────────────────────────────────────

export interface TestimonialsHero {
  eyebrow:         string;
  heading:         string;
  headingMaxWidth: number;
  subtitle:        string;
}

export const testimonialsHero: TestimonialsHero = {
  eyebrow:         "What clients say",
  heading:         "Trusted by homes and businesses across Malawi",
  headingMaxWidth: 560,
  subtitle:        "Real experiences from our clients — their words, not ours.",
};

// ─────────────────────────────────────────────
// ② RATING SUMMARY BAR
// Left side: large average score + 5 gold stars +
//            "Based on N reviews" label.
// Right side: three stat cells separated by a
//             1px vertical divider (hidden on mobile).
// ─────────────────────────────────────────────

export interface RatingStat {
  value: string;
  label: string;
}

export interface RatingSummaryBar {
  /** Static stats shown to the right of the average score */
  stats: RatingStat[];
  /**
   * Label beneath the star row.
   * The actual number is injected at runtime from reviews.length.
   * Template: "Based on {count} reviews"
   */
  reviewCountLabel: string;
}

export const ratingSummaryBar: RatingSummaryBar = {
  stats: [
    { value: "{fiveStarCount}/{totalCount}", label: "5-star reviews" },
    { value: "100%",                         label: "Would recommend" },
    { value: "2 hrs",                        label: "Avg. response time" },
  ],
  reviewCountLabel: "Based on {count} reviews",
};

// ─────────────────────────────────────────────
// ③ REVIEWS
// Each review card renders:
//   • A row of 5 stars (filled amber up to `stars`, grey beyond)
//   • The quote text wrapped in curly quotes
//   • A footer with the avatar circle (initials), name, and location
// ─────────────────────────────────────────────

export type StarRating = 1 | 2 | 3 | 4 | 5;

export interface Review {
  /** Full display name (also used as React key) */
  name:      string;
  /** City / area shown beneath the name with a 📍 pin */
  location:  string;
  /** Two-letter initials rendered inside the avatar circle */
  initials:  string;
  /** Integer 1–5 */
  stars:     StarRating;
  /** The review body — rendered inside &ldquo; … &rdquo; */
  quote:     string;
}

export const reviews: Review[] = [
  {
    name:     "Chimwemwe Banda",
    location: "Lilongwe",
    initials: "CB",
    stars:    5,
    quote:
      "Green Power installed a 3kW system on our home. The team was professional and the panels have been running flawlessly for over a year. Our electricity bills dropped by 80%.",
  },
  {
    name:     "Dr. Grace Nyirenda",
    location: "Area 43, Lilongwe",
    initials: "GN",
    stars:    5,
    quote:
      "Excellent service from start to finish. They explained everything clearly, gave us a fair price, and the installation was completed in one day. Highly recommended.",
  },
  {
    name:     "James Mwale",
    location: "Blantyre",
    initials: "JM",
    stars:    5,
    quote:
      "We use their commercial system at our warehouse. 12 months in and zero issues. Their maintenance team is responsive and professional.",
  },
  {
    name:     "Faith Tembo",
    location: "Kasungu",
    initials: "FT",
    stars:    4,
    quote:
      "Very happy with the system. Installation took two days and the team cleaned up everything. The app monitoring is a great bonus — I can see output live.",
  },
  {
    name:     "Emmanuel Chirwa",
    location: "Mzuzu",
    initials: "EC",
    stars:    5,
    quote:
      "We had a faulty inverter from another supplier. Green Power diagnosed and fixed it the same day. Their technical knowledge is unmatched.",
  },
  {
    name:     "Mercy Phiri",
    location: "Zomba",
    initials: "MP",
    stars:    5,
    quote:
      "The consultation was free and genuinely helpful — no pressure at all. We ended up choosing a system that fits our budget perfectly.",
  },
];

// ─────────────────────────────────────────────
// ⑤ DERIVED STATISTICS
// Computed from the reviews array at module load
// time — the same calculations the page component
// runs inline:
//   avgRating    → (sum of stars / count).toFixed(1)
//   fiveStarCount → reviews where stars === 5
// ─────────────────────────────────────────────

export interface DerivedReviewStats {
  /** e.g. "4.8" */
  avgRating:     string;
  /** Number of reviews with stars === 5 */
  fiveStarCount: number;
  /** Total review count */
  totalCount:    number;
}

export function computeReviewStats(reviewList: Review[]): DerivedReviewStats {
  const totalCount    = reviewList.length;
  const fiveStarCount = reviewList.filter(r => r.stars === 5).length;
  const avgRating     = (
    reviewList.reduce((sum, r) => sum + r.stars, 0) / totalCount
  ).toFixed(1);

  return { avgRating, fiveStarCount, totalCount };
}

/** Pre-computed from the default reviews array */
export const reviewStats: DerivedReviewStats = computeReviewStats(reviews);

// ─────────────────────────────────────────────
// ④ BOTTOM CTA
// Centred column at all screen sizes (no flex-
// direction switch). Light section background,
// border-top.
// ─────────────────────────────────────────────

export interface TestimonialsCTA {
  heading:          string;
  subtitle:         string;
  /** maxWidth (px) applied to the subtitle paragraph */
  subtitleMaxWidth: number;
  buttonLabel:      string;
  buttonHref:       string;
}

export const testimonialsCTA: TestimonialsCTA = {
  heading:          "Join hundreds of satisfied clients",
  subtitle:         "Ready to experience the Green Power difference?",
  subtitleMaxWidth: 460,
  buttonLabel:      "Get your free quote",
  buttonHref:       "/company_contact_details",
};

// ─────────────────────────────────────────────
// ⑥ BREAKPOINTS
// Mirrors the @media rules in the <style> block.
// ─────────────────────────────────────────────

export const testimonialsBreakpoints = {
  /** gp-reviews-grid: 1-col → 2-col */
  gridTwoCol:          600,
  /** gp-reviews-grid: 2-col → 3-col */
  gridThreeCol:        960,
  /** gp-rating-divider hidden, gp-rating-bar gap tightened */
  ratingBarStackMaxWidth: 480,
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

export const testimonialsRouteMetadata: RouteMetadata = {
  title:
    "Client Testimonials | Green Power Systems",
  description:
    "Read what our clients across Malawi say about Green Power Systems — professional solar installation, honest advice, and long-term support.",
  path:    "/testimonials",
  ogImage: "/images/og/testimonials.jpg",
};

// ─────────────────────────────────────────────
// FULL PAGE DATA
// ─────────────────────────────────────────────

export interface TestimonialsPageData {
  hero:            TestimonialsHero;
  ratingSummaryBar: RatingSummaryBar;
  reviews:         Review[];
  reviewStats:     DerivedReviewStats;
  cta:             TestimonialsCTA;
  breakpoints:     typeof testimonialsBreakpoints;
}

export const testimonialsPageData: TestimonialsPageData = {
  hero:             testimonialsHero,
  ratingSummaryBar: ratingSummaryBar,
  reviews:          reviews,
  reviewStats:      reviewStats,
  cta:              testimonialsCTA,
  breakpoints:      testimonialsBreakpoints,
};

// ─────────────────────────────────────────────
// DEFAULT EXPORT
// import customerFeedbackRoute from
//   "@/routes/customer_feed_back_route"
// customerFeedbackRoute.data.reviews
// customerFeedbackRoute.data.reviewStats
// ─────────────────────────────────────────────

const customerFeedbackRoute = {
  metadata: testimonialsRouteMetadata,
  data:     testimonialsPageData,
};

export default customerFeedbackRoute;