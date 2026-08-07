import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  consent?: boolean;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatValue(value: string) {
  return escapeHtml(value || "Non renseigné");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Requête invalide." }, { status: 400 });
  }

  const name = clean(body.name);
  const company = clean(body.company);
  const email = clean(body.email).toLowerCase();
  const phone = clean(body.phone);
  const service = clean(body.service);
  const message = clean(body.message);
  const website = clean(body.website);

  if (website) {
    return NextResponse.json({ message: "Le formulaire n’a pas pu être envoyé." }, { status: 400 });
  }

  if (!name || !emailPattern.test(email) || !service || message.length < 12 || !body.consent) {
    return NextResponse.json({ message: "Merci de vérifier les champs obligatoires." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || `Morocco Europe Consulting <${siteConfig.contact.email}>`;
  const submittedAt = new Intl.DateTimeFormat("fr-MA", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Casablanca"
  }).format(new Date());

  if (!apiKey) {
    return NextResponse.json(
      { message: "Le service email n’est pas encore configuré. Ajoutez RESEND_API_KEY dans Vercel." },
      { status: 503 }
    );
  }

  const subject = `Nouvelle demande MEC - ${service}`;
  const text = [
    "Nouvelle demande de contact depuis le site Morocco Europe Consulting",
    "",
    `Date: ${submittedAt}`,
    `Nom: ${name}`,
    `Entreprise: ${company || "Non renseigné"}`,
    `Email: ${email}`,
    `Téléphone: ${phone || "Non renseigné"}`,
    `Service souhaité: ${service}`,
    "",
    "Message:",
    message,
    "",
    "Consentement: accepté"
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <div style="border: 1px solid #d4af37; border-radius: 14px; overflow: hidden;">
        <div style="background: #001f3f; color: #ffffff; padding: 22px 26px;">
          <p style="margin: 0 0 6px; color: #d4af37; font-size: 12px; letter-spacing: .08em; text-transform: uppercase;">Morocco Europe Consulting</p>
          <h1 style="margin: 0; font-size: 22px;">Nouvelle demande de contact</h1>
        </div>
        <div style="padding: 24px 26px; background: #ffffff;">
          <p><strong>Date :</strong> ${formatValue(submittedAt)}</p>
          <p><strong>Nom :</strong> ${formatValue(name)}</p>
          <p><strong>Entreprise :</strong> ${formatValue(company)}</p>
          <p><strong>Email :</strong> <a href="mailto:${escapeHtml(email)}">${formatValue(email)}</a></p>
          <p><strong>Téléphone :</strong> ${formatValue(phone)}</p>
          <p><strong>Service souhaité :</strong> ${formatValue(service)}</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 22px 0;" />
          <p style="margin-bottom: 8px;"><strong>Message :</strong></p>
          <div style="white-space: pre-wrap; background: #f8fafc; border-left: 4px solid #d4af37; padding: 16px;">${escapeHtml(message)}</div>
          <p style="margin-top: 20px; font-size: 13px; color: #64748b;">Consentement RGPD / loi 09-08 accepté depuis le formulaire du site.</p>
        </div>
      </div>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      html,
      text
    })
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    console.error("Resend contact email error", errorBody);
    return NextResponse.json(
      { message: "L’envoi email a échoué. Veuillez vérifier la configuration Resend." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
