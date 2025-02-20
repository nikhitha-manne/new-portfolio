import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = "onboarding@resend.dev"; // Resend's default verified email
const toEmail = "s_manne@u.pacific.edu"; // Your email to receive messages

export async function POST(req) {
  try {
    // Ensure the request body is properly formatted JSON
    const body = await req.json();

    const { email, subject, message } = body;

    console.log("📩 New Message From:", email);
    console.log("📌 Subject:", subject);
    console.log("📝 Message:", message);

    // Validate sender email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid sender email" }, { status: 400 });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: fromEmail, // Must be a verified email
      to: [toEmail], // Your email (where you receive messages)
      subject: subject,
      text: `New message from: ${email}\n\n${message}`, // Plain text version
      html: `
        <h1>${subject}</h1>
        <p><strong>Sender's Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `, // HTML format
    });

    console.log("✅ Email Sent Successfully:", data);
    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error("❌ Email Sending Error:", error);
    return NextResponse.json({ error: error.message || "Unknown error" }, { status: 500 });
  }
}
