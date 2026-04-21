import { NextRequest, NextResponse } from "next/server";

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

    console.log("📩 New contact submission:", {
      name:    body.name,
      email:   body.email,
      phone:   body.phone   || "—",
      service: body.service || "—",
      message: body.message,
    });

    return NextResponse.json(
      { success: true, message: "Message sent!" },
      { status: 200 }
    );

  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}