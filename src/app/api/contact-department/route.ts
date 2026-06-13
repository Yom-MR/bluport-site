import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_CHANNELS } from "@/lib/contact";

type DepartmentKey = keyof typeof CONTACT_CHANNELS;

type DepartmentContactPayload = {
  department?: string;
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const requiredFields: Array<keyof DepartmentContactPayload> = [
  "fullName",
  "company",
  "email",
  "subject",
  "message",
];

const displayValue = (value?: string) => (value && value.trim() ? value.trim() : "N/A");

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Unable to process request at this time." },
      { status: 500 },
    );
  }

  let payload: DepartmentContactPayload;

  try {
    payload = (await request.json()) as DepartmentContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload. Please submit the form again." },
      { status: 400 },
    );
  }

  const department = payload.department as DepartmentKey | undefined;

  if (!department || !(department in CONTACT_CHANNELS)) {
    return NextResponse.json({ error: "Unknown department." }, { status: 400 });
  }

  const missingFields = requiredFields.filter((field) => !payload[field]?.trim());

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missingFields.join(", ")}` },
      { status: 400 },
    );
  }

  const channel = CONTACT_CHANNELS[department];

  const textBody = `New ${department.toUpperCase()} inquiry — Bluport Logistics

Routed to: ${channel.email} (${channel.purpose})

Name: ${displayValue(payload.fullName)}
Company: ${displayValue(payload.company)}
Email: ${displayValue(payload.email)}
Phone: ${displayValue(payload.phone)}
Subject: ${displayValue(payload.subject)}

Message:
${displayValue(payload.message)}
`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
      <h2 style="margin-bottom: 4px;">New ${department.toUpperCase()} inquiry — Bluport Logistics</h2>
      <p style="margin: 0 0 16px; color: #475569;">Routed to ${channel.email} — ${channel.purpose}</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 760px;">
        <tbody>
          <tr><td style="padding: 6px 0; font-weight: 600;">Name</td><td style="padding: 6px 0;">${displayValue(payload.fullName)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Company</td><td style="padding: 6px 0;">${displayValue(payload.company)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Email</td><td style="padding: 6px 0;">${displayValue(payload.email)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Phone</td><td style="padding: 6px 0;">${displayValue(payload.phone)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Subject</td><td style="padding: 6px 0;">${displayValue(payload.subject)}</td></tr>
        </tbody>
      </table>
      <p style="margin: 16px 0 6px; font-weight: 600;">Message</p>
      <p style="margin: 0; white-space: pre-wrap;">${displayValue(payload.message)}</p>
    </div>
  `;

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: "Bluport Web <intake@bluport.us>",
      to: channel.email,
      replyTo: payload.email,
      subject: `New ${department} inquiry — ${displayValue(payload.subject)}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request at this time." },
      { status: 500 },
    );
  }
}
