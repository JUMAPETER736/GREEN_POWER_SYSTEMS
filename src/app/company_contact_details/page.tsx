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
      boxSizing: "border-box",
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
      <div style={{ flexGrow: 1, minWidth: 0 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 2px", wordBreak: "break-word" }}>
          Message sent!
        </p>
        <p style={{ fontSize: 12, color: "var(--gp-text-muted)", margin: 0, wordBreak: "break-word" }}>
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

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)", overflowX: "hidden", width: "100%" }}>

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
          <h1 className="gp-section-title" style={{ width: "100%", wordBreak: "break-word" }}>
            We'd love to hear from you
          </h1>
          <p className="gp-section-sub" style={{ marginTop: 14, wordBreak: "break-word" }}>
            Free consultation, no commitment. Our team usually responds within working days.
          </p>
        </div>
      </div>

      {/* ── Form + Map ── */}
      <section style={{ padding: "clamp(40px, 7vw, 72px) 0" }}>
        <div className="gp-container">
          <div className="gp-contact-grid">

            {/* Form */}
            <div className="gp-card" style={{ padding: "clamp(20px, 4vw, 32px)", minWidth: 0 }}>
              <h2 style={{
                fontSize: "clamp(16px, 2.5vw, 18px)", fontWeight: 700,
                color: "var(--gp-text-primary)", margin: "0 0 22px",
                wordBreak: "break-word",
              }}>
                Send us a message
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                <div className="gp-form-row">
                  <div style={{ minWidth: 0 }}>
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
                  <div style={{ minWidth: 0 }}>
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

                <div style={{ minWidth: 0 }}>
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
                    <p style={{ fontSize: 12, color: "#c0392b", margin: "5px 0 0", lineHeight: 1.5, wordBreak: "break-word" }}>
                      {phoneError}
                    </p>
                  ) : (
                    <p style={{ fontSize: 11, color: "var(--gp-text-subtle)", margin: "5px 0 0" }}>
                      Multiple numbers? Separate with a comma.
                    </p>
                  )}
                </div>

                <div style={{ minWidth: 0 }}>
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

                <div style={{ minWidth: 0 }}>
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
                    margin: 0, wordBreak: "break-word",
                    boxSizing: "border-box",
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
                    boxSizing: "border-box",
                  }}
                >
                  {loading ? "Sending..." : "Send message"}
                </button>

              </div>
            </div>

            {/* Map */}
            <div className="gp-card" style={{ overflow: "hidden", padding: 0, display: "flex", flexDirection: "column", minWidth: 0 }}>
              <div style={{
                padding: "16px 20px",
                borderBottom: "1px solid var(--gp-border)",
                display: "flex", alignItems: "flex-start", gap: 10,
                boxSizing: "border-box",
              }}>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}
                  stroke="var(--gp-green)" strokeWidth={2.2}
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                  <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
                <p style={{ fontSize: 13, fontWeight: 700, color: "var(--gp-text-primary)", margin: 0, wordBreak: "break-word", minWidth: 0 }}>
                  QuickTrip Shopping Complex, Area 25 Sungwi, Lilongwe
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/QuickTrip+Shopping+Complex+Area+25+Sungwi+Lilongwe+Malawi/@-13.9032,33.7595,15z"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  position: "relative",
                  textDecoration: "none",
                }}
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

      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }
        .gp-container {
          width: 100%;
          max-width: 100%;
          padding-left: clamp(1rem, 4vw, 1.5rem);
          padding-right: clamp(1rem, 4vw, 1.5rem);
        }
        .gp-contact-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr;
          width: 100%;
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
        @media (max-width: 480px) {
          .gp-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

    </div>
  );
}