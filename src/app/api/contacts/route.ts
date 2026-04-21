import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
 
const resend = new Resend(process.env.RESEND_API_KEY);
 
interface ContactBody {
  name:     string;
  email:    string;
  phone?:   string;
  service?: string;
  message:  string;
}
 
/** Generate a short human-readable request ID, e.g. GP-20250421-A3F7 */
function generateRequestId(): string {
  const date = new Date();
  const datePart = date.toISOString().slice(0, 10).replace(/-/g, ""); // e.g. 20250421
  const random   = Math.random().toString(36).toUpperCase().slice(2, 6); // e.g. A3F7
  return `GP-${datePart}-${random}`;
}
 
/** Format a Date as a readable local string, e.g. "Tuesday, 21 April 2025 at 14:32 UTC" */
function formatDate(date: Date): string {
  return date.toUTCString().replace("GMT", "UTC");
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
    const requestId  = generateRequestId();
    const receivedAt = new Date();
    const dateLabel  = formatDate(receivedAt);
 
    // ── Send email to the company ──
    await resend.emails.send({
      from:    "Green Power Website <onboarding@resend.dev>",
      to:      process.env.COMPANY_EMAIL!,
      replyTo: email,
      subject: `[${requestId}] New enquiry from ${name}${body.service ? ` — ${body.service}` : ""}`,
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
                <p style="margin: 0; font-size: 15px; font-weight: 700; color: #0f6e56; font-family: monospace; letter-spacing: 0.04em;">${requestId}</p>
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
                Include the Request ID <strong>${requestId}</strong> in your reply subject line so both sides can track this conversation.
              </p>
            </div>
          </div>
 
          <div style="background: #f9fafb; padding: 16px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center;">
              This message was sent from the contact form at greenpowermw.com · ${dateLabel}
            </p>
          </div>
        </div>
      `,
    });