import { NextResponse } from "next/server";
import { Resend } from "resend";

type RequestCapacityPayload = {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  pickupLocation?: string;
  deliveryLocation?: string;
  requestedPickupDate?: string;
  requestedDeliveryDate?: string;
  assetType?: string;
  estimatedWeight?: string;
  dimensions?: string;
  urgencyLevel?: string;
  operationType?: string;
  preferredContactMethod?: string;
  notes?: string;
};

const requiredFields: Array<keyof RequestCapacityPayload> = [
  "fullName",
  "company",
  "email",
  "phone",
  "pickupLocation",
  "deliveryLocation",
  "requestedPickupDate",
  "assetType",
  "urgencyLevel",
  "operationType",
  "preferredContactMethod",
];

const displayValue = (value?: string) => (value && value.trim() ? value.trim() : "N/A");

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const operationsEmail = process.env.OPERATIONS_EMAIL;

  if (!resendApiKey || !operationsEmail) {
    return NextResponse.json(
      { error: "Unable to process request at this time." },
      { status: 500 },
    );
  }

  let payload: RequestCapacityPayload;

  try {
    payload = (await request.json()) as RequestCapacityPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload. Please submit the form again." },
      { status: 400 },
    );
  }

  const missingFields = requiredFields.filter((field) => !payload[field]?.trim());

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        error: `Missing required fields: ${missingFields.join(", ")}`,
      },
      { status: 400 },
    );
  }

  const resend = new Resend(resendApiKey);

  const textBody = `New Request Capacity Submission — Bluport Logistics

Full Name: ${displayValue(payload.fullName)}
Company: ${displayValue(payload.company)}
Email: ${displayValue(payload.email)}
Phone: ${displayValue(payload.phone)}
Pickup Location: ${displayValue(payload.pickupLocation)}
Delivery Location: ${displayValue(payload.deliveryLocation)}
Requested Pickup Date: ${displayValue(payload.requestedPickupDate)}
Requested Delivery Date: ${displayValue(payload.requestedDeliveryDate)}
Asset / Equipment Type: ${displayValue(payload.assetType)}
Estimated Weight: ${displayValue(payload.estimatedWeight)}
Dimensions: ${displayValue(payload.dimensions)}
Urgency Level: ${displayValue(payload.urgencyLevel)}
Operation Type: ${displayValue(payload.operationType)}
Preferred Contact Method: ${displayValue(payload.preferredContactMethod)}
Notes / Constraints: ${displayValue(payload.notes)}
`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
      <h2 style="margin-bottom: 12px;">New Request Capacity Submission — Bluport Logistics</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 760px;">
        <tbody>
          <tr><td style="padding: 6px 0; font-weight: 600;">Full Name</td><td style="padding: 6px 0;">${displayValue(payload.fullName)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Company</td><td style="padding: 6px 0;">${displayValue(payload.company)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Email</td><td style="padding: 6px 0;">${displayValue(payload.email)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Phone</td><td style="padding: 6px 0;">${displayValue(payload.phone)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Pickup Location</td><td style="padding: 6px 0;">${displayValue(payload.pickupLocation)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Delivery Location</td><td style="padding: 6px 0;">${displayValue(payload.deliveryLocation)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Requested Pickup Date</td><td style="padding: 6px 0;">${displayValue(payload.requestedPickupDate)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Requested Delivery Date</td><td style="padding: 6px 0;">${displayValue(payload.requestedDeliveryDate)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Asset / Equipment Type</td><td style="padding: 6px 0;">${displayValue(payload.assetType)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Estimated Weight</td><td style="padding: 6px 0;">${displayValue(payload.estimatedWeight)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Dimensions</td><td style="padding: 6px 0;">${displayValue(payload.dimensions)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Urgency Level</td><td style="padding: 6px 0;">${displayValue(payload.urgencyLevel)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Operation Type</td><td style="padding: 6px 0;">${displayValue(payload.operationType)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Preferred Contact Method</td><td style="padding: 6px 0;">${displayValue(payload.preferredContactMethod)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: 600;">Notes / Constraints</td><td style="padding: 6px 0;">${displayValue(payload.notes)}</td></tr>
        </tbody>
      </table>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "Bluport Operations <intake@bluport.us>",
      to: operationsEmail,
      replyTo: payload.email,
      subject: "New Request Capacity Submission — Bluport Logistics",
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
