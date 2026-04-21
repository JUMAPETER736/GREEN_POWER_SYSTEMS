import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Counter file lives in the project root (outside src/) ──
const COUNTER_FILE = join(process.cwd(), "contact-counter.json");

/** Read the current counter from disk, or start at 0 if file doesn't exist yet */
function readCounter(): number {
  if (!existsSync(COUNTER_FILE)) return 0;
  try {
    const data = JSON.parse(readFileSync(COUNTER_FILE, "utf-8"));
    return typeof data.count === "number" ? data.count : 0;
  } catch {
    return 0;
  }
}

/** Increment the counter, save it to disk, and return the new padded ID e.g. "001" */
function nextRequestId(): string {
  const next = readCounter() + 1;
  writeFileSync(COUNTER_FILE, JSON.stringify({ count: next }), "utf-8");
  return String(next).padStart(3, "0"); // 001, 002 ... 999, 1000, 1001...
}

/** Format a Date in Malawi local time (Africa/Blantyre, UTC+2) */
function formatDate(date: Date): string {
  return date.toLocaleString("en-GB", {
    timeZone: "Africa/Blantyre",
    weekday:  "short",
    day:      "2-digit",
    month:    "short",
    year:     "numeric",
    hour:     "2-digit",
    minute:   "2-digit",
    second:   "2-digit",
    hour12:   false,
  }) + " (Malawi Time)";
}

interface ContactBody {
  name:     string;
  email:    string;
  phone?:   string;
  service?: string;
  message:  string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // ── Generate tracking info ──
    const requestId  = nextRequestId();   // "001", "002", "003" ...
    const receivedAt = new Date();
    const dateLabel  = formatDate(receivedAt);

    // ── Send email to the company ──
    await resend.emails.send({
      from:    "Green Power Website <onboarding@resend.dev>",
      to:      process.env.COMPANY_EMAIL!,
      replyTo: email,
      subject: `[#${requestId}] New enquiry from ${name}${body.service ? ` — ${body.service}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0f6e56; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">Green Power Systems Website</p>
          </div>

          <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">

            <!-- Tracking banner -->
            <div style="margin-bottom: 24px; padding: 14px 18px; background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0; display: flex; flex-wrap: wrap; gap: 20px;">
              <div>
                <p style="margin: 0 0 3px; font-size: 11px; font-weight: 700; color: #166534; text-transform: uppercase; letter-spacing: 0.06em;">Request ID</p>
                <p style="margin: 0; font-size: 22px; font-weight: 700; color: #0f6e56; font-family: monospace; letter-spacing: 0.06em;">#${requestId}</p>
              </div>
              <div>
                <p style="margin: 0 0 3px; font-size: 11px; font-weight: 700; color: #166534; text-transform: uppercase; letter-spacing: 0.06em;">Date &amp; Time Received</p>
                <p style="margin: 0; font-size: 13px; font-weight: 600; color: #166534;">${dateLabel}</p>
              </div>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; width: 120px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #0f6e56;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827; font-weight: 600;">${body.phone || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827; font-weight: 600;">${body.service || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; font-size: 14px; color: #111827; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>

            <div style="margin-top: 28px; padding: 16px 20px; background: #fffbeb; border-radius: 8px; border: 1px solid #fde68a;">
              <p style="margin: 0; font-size: 13px; color: #92400e;">
                💬 Reply directly to this email to respond to <strong>${name}</strong> at <strong>${email}</strong>.
                Reference <strong>#${requestId}</strong> in your reply so both sides can track this conversation.
              </p>
            </div>
          </div>

          <div style="background: #f9fafb; padding: 16px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center;">
              Sent from the contact form at greenpowermw.com · ${dateLabel}
            </p>
          </div>
        </div>
      `,
    });

    // ── Send confirmation email to the user ──
    await resend.emails.send({
      from:    "Green Power Systems <onboarding@resend.dev>",
      to:      email,
      subject: `[#${requestId}] Dear ${name}, We received your message at Green Power Systems Limited`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0f6e56; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">Dear ${name},</h1>
            <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">Green Power Systems Limited — Malawi's trusted solar partner</p>
          </div>

          <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">

            <!-- Tracking info for user -->
            <div style="margin-bottom: 24px; padding: 14px 18px; background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0; display: flex; flex-wrap: wrap; gap: 20px;">
              <div>
                <p style="margin: 0 0 3px; font-size: 11px; font-weight: 700; color: #166534; text-transform: uppercase; letter-spacing: 0.06em;">Your Request ID</p>
                <p style="margin: 0; font-size: 22px; font-weight: 700; color: #0f6e56; font-family: monospace; letter-spacing: 0.06em;">#${requestId}</p>
              </div>
              <div>
                <p style="margin: 0 0 3px; font-size: 11px; font-weight: 700; color: #166534; text-transform: uppercase; letter-spacing: 0.06em;">Submitted On</p>
                <p style="margin: 0; font-size: 13px; font-weight: 600; color: #166534;">${dateLabel}</p>
              </div>
            </div>

            <p style="font-size: 13px; color: #6b7280; line-height: 1.6; margin: 0 0 6px;">
              Please keep your Request ID <strong style="color: #0f6e56;">#${requestId}</strong> — quote it in any follow-up so our team can locate your enquiry instantly.
            </p>

            <p style="font-size: 15px; color: #374151; line-height: 1.8; margin: 20px 0 16px;">
              We received your message at <strong>Green Power Systems Limited</strong> and it will be looked into by a member of staff as soon as possible.
            </p>

            <p style="font-size: 15px; color: #374151; line-height: 1.8; margin: 0 0 16px;">
              We've received your message and will get back to you within <strong>working days</strong>.
            </p>

            <p style="font-size: 15px; color: #374151; line-height: 1.8; margin: 0 0 28px;">
              Thank you for contacting us.
            </p>

            <p style="font-size: 14px; color: #6b7280; line-height: 1.7; margin: 0 0 28px;">
              You can also reach us directly at:
            </p>
            <div style="display: flex; gap: 12px; flex-direction: column;">
              <p style="margin: 0; font-size: 14px; color: #374151;">📞 <strong>+265 991 234 567</strong></p>
              <p style="margin: 0; font-size: 14px; color: #374151;">📧 <strong>info@greenpowermw.com</strong></p>
              <p style="margin: 0; font-size: 14px; color: #374151;">📍 <strong>QuickTrip Complex, Area 25, Lilongwe</strong></p>
            </div>
          </div>

          <div style="background: #f9fafb; padding: 16px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center;">
              Green Power Systems · QuickTrip Complex, Area 25 Sungwi, Lilongwe, Malawi
            </p>
          </div>
        </div>
      `,
    });

    // ── Log full submission with tracking info ──
    console.log("New contact submission:", {
      requestId,
      receivedAt: dateLabel,
      name,
      email,
      phone:   body.phone   || "—",
      service: body.service || "—",
      message,
    });

    return NextResponse.json(
      { success: true, message: "Message sent!", requestId },
      { status: 200 }
    );

  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}