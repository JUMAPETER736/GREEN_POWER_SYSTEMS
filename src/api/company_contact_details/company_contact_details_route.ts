
/**
 * company_contact_details_route.ts
 *
 * Full typed data structure and route config for the Contact / Company
 * Contact Details page.
 * Mirrors every section in app/company_contact_details/page.tsx exactly:
 *   ① Toast notification
 *   ② Page Hero
 *   ③ Quick Contact Info Bar
 *   ④ Contact Form
 *   ⑤ Map panel
 *   ⑥ Route metadata
 */

// ─────────────────────────────────────────────
// ① TOAST NOTIFICATION
// Auto-dismisses after 4 000 ms on successful
// form submission.
// ─────────────────────────────────────────────

export interface ToastConfig {
  /** Heading shown in bold inside the toast */
  title: string;
  /** Body copy shown beneath the heading */
  body: string;
  /** Duration in milliseconds before auto-dismiss */
  durationMs: number;
}

export const toastConfig: ToastConfig = {
  title:      "Message sent!",
  body:       "We'll get back to you within 2 business hours.",
  durationMs: 4000,
};

// ─────────────────────────────────────────────
// ② PAGE HERO
// ─────────────────────────────────────────────

export interface ContactHero {
  eyebrow: string;
  heading: string;
  /** maxWidth (px) applied to the h1 element */
  headingMaxWidth: number;
  subtitle: string;
}

export const contactHero: ContactHero = {
  eyebrow:         "Get in touch",
  heading:         "We'd love to hear from you",
  headingMaxWidth: 500,
  subtitle:
    "Free consultation, no commitment. Our team usually responds within 2 business hours.",
};

// ─────────────────────────────────────────────
// ③ QUICK CONTACT INFO BAR
// Four icon + label + value items rendered in an
// auto-fit grid (minmax 180px → 2 cols on mobile,
// 4 cols on desktop).
// ─────────────────────────────────────────────

export interface ContactBarItem {
  /** Short all-caps label, e.g. "Call us" */
  label: string;
  /** The displayed contact value */
  value: string;
  /**
   * SVG path `d` attribute drawn inside the icon circle.
   * All paths use viewBox="0 0 24 24", strokeWidth 2,
   * strokeLinecap/strokeLinejoin round.
   */
  iconPath: string;
}

export const contactBarItems: ContactBarItem[] = [
  {
    label:    "Call us",
    value:    "+265 991 234 567",
    iconPath:
      "M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    label:    "Email us",
    value:    "info@greenpowermw.com",
    iconPath:
      "M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z",
  },
  {
    label:    "Visit us",
    value:    "QuickTrip Complex, Area 25, Lilongwe",
    iconPath:
      "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  },
  {
    label:    "Hours",
    value:    "Mon–Sat · 8am to 5pm",
    iconPath: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  },
];

// ─────────────────────────────────────────────
// ④ CONTACT FORM
// ─────────────────────────────────────────────

/** The shape of the form state object (mirrors EMPTY_FORM) */
export interface ContactFormFields {
  name:    string;
  email:   string;
  phone:   string;
  service: string;
  message: string;
}

/** Initial / reset state for the form */
export const emptyContactForm: ContactFormFields = {
  name:    "",
  email:   "",
  phone:   "",
  service: "",
  message: "",
};

/** Required fields — submission is blocked if any of these are empty */
export const requiredContactFields: Array<keyof ContactFormFields> = [
  "name",
  "email",
  "message",
];

export const contactFormConfig = {
  /** Card heading above the form */
  heading: "Send us a message",

  /** Label + placeholder for each field */
  fields: {
    name: {
      label:       "Full name *",
      placeholder: "Your name",
      type:        "text" as const,
    },
    email: {
      label:       "Email *",
      placeholder: "you@example.com",
      type:        "email" as const,
    },
    phone: {
      label:       "Phone number",
      placeholder: "+265 ...",
      type:        "tel" as const,
    },
    service: {
      label: "Service interested in",
      /** First option is the empty default prompt */
      options: [
        "",
        "Solar panel installation",
        "System maintenance",
        "Repairs and diagnostics",
        "Battery storage",
        "Commercial / industrial",
        "General enquiry",
      ],
    },
    message: {
      label:       "Message *",
      placeholder: "Tell us about your project or question...",
      rows:        5,
      minHeight:   110,
    },
  },

  /** Text shown on the submit button in each state */
  submitLabel: {
    idle:    "Send message",
    loading: "Sending...",
  },

  /** Validation error shown when required fields are missing */
  validationError: "Please fill in your name, email, and message.",

  /** Error shown when the server returns a non-OK response */
  serverError: "Something went wrong. Please try again.",

  /** Error shown on a network / fetch failure */
  networkError: "Network error. Please check your connection.",

  /** API endpoint the form POSTs to */
  apiEndpoint: "/api/contact",
} as const;

// ─────────────────────────────────────────────
// ⑤ MAP PANEL
// ─────────────────────────────────────────────

export interface MapPanel {
  /** One-line address shown in the card header */
  addressLabel: string;
  /** Full Google Maps search URL (used as the anchor href) */
  mapsSearchUrl: string;
  /** Google Maps embed src */
  embedSrc: string;
  /** Minimum height of the iframe in px */
  embedMinHeight: number;
  /** Label on the overlay "open in Maps" pill button */
  overlayButtonLabel: string;
  /** iframe title attribute (accessibility) */
  iframeTitle: string;
}

export const mapPanel: MapPanel = {
  addressLabel:
    "QuickTrip Shopping Complex, Area 25 Sungwi, Lilongwe",
  mapsSearchUrl:
    "https://www.google.com/maps/search/QuickTrip+Shopping+Complex+Area+25+Sungwi+Lilongwe+Malawi/@-13.9032,33.7595,15z",
  embedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7725.4!2d33.7545!3d-13.9032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d500431ff5a5%3A0xba44ac1f1f86553!2sArea+25%2C+Lilongwe%2C+Malawi!5e0!3m2!1sen!2smw!4v1",
  embedMinHeight:     280,
  overlayButtonLabel: "Tap to open in Google Maps",
  iframeTitle:        "Green Power Systems — Area 25 Sungwi, Lilongwe",
};

// ─────────────────────────────────────────────
// BREAKPOINTS
// Mirrors the @media rules in the <style> block
// so any non-CSS logic (e.g. SSR class toggling)
// can reference the same values.
// ─────────────────────────────────────────────

export const contactBreakpoints = {
  /** gp-form-row switches from 1-col to 2-col */
  formRowTwoCol:    600,
  /** gp-contact-grid switches from 1-col to 2-col (form + map side by side) */
  gridTwoCol:       900,
  /** gp-contact-bar forces 2 columns on narrow mobile */
  barTwoColMaxWidth: 480,
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

export const contactRouteMetadata: RouteMetadata = {
  title:
    "Contact Us | Green Power Systems",
  description:
    "Get in touch with Green Power Systems. Call, email, or visit us at QuickTrip Complex, Area 25, Lilongwe. Free solar consultation — no commitment.",
  path:    "/company_contact_details",
  ogImage: "/images/og/contact.jpg",
};

// ─────────────────────────────────────────────
// FULL PAGE DATA
// Single object that assembles every section.
// ─────────────────────────────────────────────

export interface ContactPageData {
  toast:       ToastConfig;
  hero:        ContactHero;
  contactBar:  ContactBarItem[];
  form:        typeof contactFormConfig;
  emptyForm:   ContactFormFields;
  required:    Array<keyof ContactFormFields>;
  map:         MapPanel;
  breakpoints: typeof contactBreakpoints;
}

export const contactPageData: ContactPageData = {
  toast:       toastConfig,
  hero:        contactHero,
  contactBar:  contactBarItems,
  form:        contactFormConfig,
  emptyForm:   emptyContactForm,
  required:    requiredContactFields,
  map:         mapPanel,
  breakpoints: contactBreakpoints,
};

// ─────────────────────────────────────────────
// DEFAULT EXPORT
// import contactRoute from "@/routes/company_contact_details_route"
// contactRoute.data.hero, contactRoute.data.form, etc.
// ─────────────────────────────────────────────

const contactRoute = {
  metadata: contactRouteMetadata,
  data:     contactPageData,
};

export default contactRoute;