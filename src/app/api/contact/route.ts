import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const recipient = "tokmatechnologies2025@gmail.com";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  company?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept bot submissions caught by the honeypot field.
  if (clean(body.company, 200)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254);
  const phone = clean(body.phone, 50);
  const message = clean(body.message, 5000);

  if (!name || !emailPattern.test(email) || !message) {
    return Response.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form SMTP configuration is incomplete.");
    return Response.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  const port = Number(SMTP_PORT);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.error("Contact form SMTP_PORT is invalid.");
    return Response.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE === "true" || port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `Bhim Gurung Website <${SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `Website inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "Phone: Not provided",
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json(
      { error: "Your message could not be sent. Please try again later." },
      { status: 502 },
    );
  }
}
