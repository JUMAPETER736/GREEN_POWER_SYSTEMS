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

    // ── Send email to the company ──
    await resend.emails.send({
      from:    "Green Power Website <onboarding@resend.dev>",
      to:      process.env.COMPANY_EMAIL!,
      replyTo: email,
      subject: `New enquiry from ${name}${body.service ? ` — ${body.service}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0f6e56; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">Green Power Systems Website</p>
          </div>

          <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
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

            <div style="margin-top: 28px; padding: 16px 20px; background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0;">
              <p style="margin: 0; font-size: 13px; color: #166534;">
                💡 Reply directly to this email to respond to <strong>${name}</strong> at <strong>${email}</strong>
              </p>
            </div>
          </div>

          <div style="background: #f9fafb; padding: 16px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center;">
              This message was sent from the contact form at greenpowermw.com
            </p>
          </div>
        </div>
      `,
    });

    // ── Send confirmation email to the user ──
    await resend.emails.send({
      from:    "Green Power Systems <onboarding@resend.dev>",
      to:      email,
      subject: "We received your message — Green Power Systems",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0f6e56; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">Thanks for reaching out, ${name}!</h1>
            <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">Green Power Systems — Malawi's trusted solar partner</p>
          </div>

          <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="font-size: 15px; color: #374151; line-height: 1.7; margin: 0 0 20px;">
              We've received your message and will get back to you within <strong>2 business hours</strong>.
            </p>
            <p style="font-size: 14px; color: #6b7280; line-height: 1.7; margin: 0 0 28px;">
              In the meantime, you can reach us directly at:
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

    console.log("New contact submission:", {
      name, email,
      phone:   body.phone   || "—",
      service: body.service || "—",
      message,
    });

    return NextResponse.json(
      { success: true, message: "Message sent!" },
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