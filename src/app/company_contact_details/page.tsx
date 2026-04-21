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
 
/** Validate phone field:
 *  - Empty is allowed (optional field)
 *  - Each number (comma-separated) must start with a + country code
 *  - Returns an error string or "" if valid
 */
function validatePhone(value: string): string {
  if (!value.trim()) return ""; // optional
  const numbers = value.split(",").map(n => n.trim()).filter(Boolean);
  const invalid = numbers.filter(n => !/^\+\d/.test(n));
  if (invalid.length > 0) {
    return "Each number must start with a country code (e.g. +265994459714). Separate multiple numbers with a comma.";
  }
  return "";
}
 
export default function Contact() {
  const [toast, setToast]         = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [form, setForm]           = useState(EMPTY_FORM);
 
  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
 
    // Live-validate phone as user types
    if (name === "phone") {
      setPhoneError(validatePhone(value));
    }
  };
 
  const closeToast = useCallback(() => setToast(false), []);
 
  const handleSubmit = async () => {
    // Final validation before submit
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
      const res = await fetch("/api/contacts", {
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
          <div className="gp-contact-bar">
            {[
              {
                icon: "M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z",
                label: "Call us",
                value: "+265 991 234 567",
              },
              {
                icon: "M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z",
                label: "Email us",
                value: "info@greenpowermw.com",
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
            ].map(({ icon, label, value }) => (
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
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "var(--gp-text-subtle)", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "var(--gp-text-primary)", margin: 0 }}>{value}</p>
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
 
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}></div>