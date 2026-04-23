"use client";
import { useState, useEffect, useCallback } from "react";

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div style={{
      position: "fixed",
      top: 16,
      right: 16,
      left: 16,
      zIndex: 200,
      backgroundColor: "#fff",
      border: "1px solid var(--gp-green-border)",
      borderLeft: "4px solid var(--gp-green)",
      borderRadius: 10,
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      maxWidth: 400,
      marginLeft: "auto",
      marginRight: "auto",
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: "50%",
        backgroundColor: "var(--gp-green-light)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
          stroke="var(--gp-green)" strokeWidth={2.5}
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <div style={{ flexGrow: 1 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 2px" }}>
          Message sent!
        </p>
        <p style={{ fontSize: 12, color: "var(--gp-text-muted)", margin: 0 }}>
          {message}
        </p>
      </div>
      <button
        onClick={onClose}
        style={{
          background: "none", border: "none", cursor: "pointer",
          color: "var(--gp-text-subtle)", padding: 4, flexShrink: 0,
          display: "flex", alignItems: "center",
        }}
      >
        <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={2.5}
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

const EMPTY_FORM = { name: "", email: "", phone: "", service: "", message: "" };

function validatePhone(value: string): string {
  if (!value.trim()) return "";
  const numbers = value.split(",").map(n => n.trim()).filter(Boolean);
  const invalid = numbers.filter(n => !/^\+\d/.test(n));
  if (invalid.length > 0) {
    return "Each number must start with a country code (e.g. +265994459714). Separate multiple numbers with a comma.";
  }
  return "";
}

export default function Contact() {
  const [toast, setToast]           = useState(false);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [form, setForm]             = useState(EMPTY_FORM);

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (name === "phone") setPhoneError(validatePhone(value));
  };

  const closeToast = useCallback(() => setToast(false), []);

  const handleSubmit = async () => {
    const phoneErr = validatePhone(form.phone);
    setPhoneError(phoneErr);
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (phoneErr) {
      setError("Please fix the phone number before submitting.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/routes/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setForm(EMPTY_FORM);
        setPhoneError("");
        setToast(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    fontSize: 14,
    color: "var(--gp-text-primary)",
    backgroundColor: "var(--gp-bg-card)",
    border: "1.5px solid var(--gp-border)",
    borderRadius: 8,
    outline: "none",
    transition: "border-color 0.15s",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const inputErrorStyle: React.CSSProperties = {
    ...inputStyle,
    border: "1.5px solid #c0392b",
  };

  const contactItems = [
    {
      icon: "M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z",
      label: "Call us",
      value: "+265 999 534 304",
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z",
      label: "Email us",
      value: "greenpowersystemsltd@gmail.com",
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
      label: "Visit us",
      value: "QuickTrip Complex, Area 25, Lilongwe",
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
      label: "Hours",
      value: "Mon–Sat · 8am to 5pm",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)" }}>

      {toast && (
        <Toast
          message="We'll get back to you within working days."
          onClose={closeToast}
        />
      )}

      {/* ── Hero ── */}
      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">Get in touch</span>
          <h1 className="gp-section-title" style={{ maxWidth: 500 }}>
            We'd love to hear from you
          </h1>
          <p className="gp-section-sub" style={{ marginTop: 14 }}>
            Free consultation, no commitment. Our team usually responds within working days.
          </p>
        </div>
      </div>

      {/* ── Quick contact info bar ── */}
      <section style={{
        backgroundColor: "var(--gp-bg-card)",
        borderBottom: "1px solid var(--gp-border)",
        padding: "20px 0",
      }}>
        <div className="gp-container">
          {/* Stack all 4 items in a 2×2 grid on mobile, single row on desktop */}
          <div className="gp-contact-bar">
            {contactItems.map(({ icon, label, value }) => (
              <div key={label} className="gp-contact-bar-item">
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  backgroundColor: "var(--gp-green-light)",
                  border: "1px solid var(--gp-green-border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
                    stroke="var(--gp-green)" strokeWidth={2}
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon} />
                  </svg>
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{
                    fontSize: 11, fontWeight: 600, color: "var(--gp-text-subtle)",
                    margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.05em",
                  }}>
                    {label}
                  </p>
                  {/* word-break so long emails/numbers wrap gracefully instead of overflowing */}
                  <p style={{
                    fontSize: 13, fontWeight: 600, color: "var(--gp-text-primary)",
                    margin: 0, wordBreak: "break-all", lineHeight: 1.4,
                  }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section style={{ padding: "clamp(40px, 7vw, 72px) 0" }}>
        <div className="gp-container">
          <div className="gp-contact-grid">

            {/* Form */}
            <div className="gp-card" style={{ padding: "clamp(20px, 4vw, 32px)" }}>
              <h2 style={{ fontSize: "clamp(16px, 2.5vw, 18px)", fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 22px" }}>
                Send us a message
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                {/* Name + Email row */}
                <div className="gp-form-row">
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "var(--gp-text-muted)", display: "block", marginBottom: 6 }}>
                      Full name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handle}
                      placeholder="Your name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "var(--gp-text-muted)", display: "block", marginBottom: 6 }}>
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="you@example.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "var(--gp-text-muted)", display: "block", marginBottom: 6 }}>
                    Phone number
                    <span style={{ fontSize: 11, fontWeight: 400, color: "var(--gp-text-subtle)", marginLeft: 6 }}>
                      — include country code e.g. +265990000000
                    </span>
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="+265990000000, +265880000000"
                    style={phoneError ? inputErrorStyle : inputStyle}
                  />
                  {phoneError ? (
                    <p style={{ fontSize: 12, color: "#c0392b", margin: "5px 0 0", lineHeight: 1.5 }}>
                      {phoneError}
                    </p>
                  ) : (
                    <p style={{ fontSize: 11, color: "var(--gp-text-subtle)", margin: "5px 0 0" }}>
                      Multiple numbers? Separate with a comma.
                    </p>
                  )}
                </div>

                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "var(--gp-text-muted)", display: "block", marginBottom: 6 }}>
                    Service interested in
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handle}
                    style={inputStyle}
                  >
                    <option value="">Select a service...</option>
                    <option>Solar panel installation</option>
                    <option>System maintenance</option>
                    <option>Repairs and diagnostics</option>
                    <option>Battery storage</option>
                    <option>Commercial / industrial</option>
                    <option>General enquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "var(--gp-text-muted)", display: "block", marginBottom: 6 }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    placeholder="Tell us about your project or question..."
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
                  />
                </div>

                {error && (
                  <p style={{
                    fontSize: 13, color: "#c0392b",
                    backgroundColor: "#fdf0ef",
                    border: "1px solid #f5c6c2",
                    borderRadius: 8, padding: "10px 14px",
                    margin: 0,
                  }}>
                    {error}
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="gp-btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? "Sending..." : "Send message"}
                </button>

              </div>
            </div>

            {/* Map */}
            <div className="gp-card" style={{ overflow: "hidden", padding: 0, display: "flex", flexDirection: "column" }}>
              <div style={{
                padding: "16px 20px",
                borderBottom: "1px solid var(--gp-border)",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
                  stroke="var(--gp-green)" strokeWidth={2.2}
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                  <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
                <p style={{ fontSize: 13, fontWeight: 700, color: "var(--gp-text-primary)", margin: 0 }}>
                  QuickTrip Shopping Complex, Area 25 Sungwi, Lilongwe
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/QuickTrip+Shopping+Complex+Area+25+Sungwi+Lilongwe+Malawi/@-13.9032,33.7595,15z"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", flexDirection: "column", flexGrow: 1, position: "relative", textDecoration: "none" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7725.4!2d33.7545!3d-13.9032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d500431ff5a5%3A0xba44ac1f1f86553!2sArea+25%2C+Lilongwe%2C+Malawi!5e0!3m2!1sen!2smw!4v1"
                  width="100%"
                  style={{ border: 0, display: "block", minHeight: 280, flexGrow: 1, pointerEvents: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Green Power Systems — Area 25 Sungwi, Lilongwe"
                />
                <div style={{
                  position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)",
                  backgroundColor: "var(--gp-green)", color: "#fff",
                  fontSize: 13, fontWeight: 600,
                  padding: "10px 22px", borderRadius: 100,
                  display: "flex", alignItems: "center", gap: 8,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.22)",
                  whiteSpace: "nowrap",
                }}>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
                    stroke="white" strokeWidth={2.5}
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                  Tap to open in Google Maps
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Responsive styles ── */}
      <style>{`
        /* Contact bar: single column on very small screens */
        .gp-contact-bar {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        /* 2-column grid from 480px */
        @media (min-width: 480px) {
          .gp-contact-bar {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Full 4-column row from 900px */
        @media (min-width: 900px) {
          .gp-contact-bar {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .gp-contact-bar-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-width: 0;
        }

        .gp-contact-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr;
        }

        .gp-form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        @media (min-width: 600px) {
          .gp-form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 900px) {
          .gp-contact-grid {
            grid-template-columns: 1fr 1fr;
            align-items: stretch;
          }
        }
      `}</style>

    </div>
  );
}