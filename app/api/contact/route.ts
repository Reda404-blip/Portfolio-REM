import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactPayload = {
  name?: string
  email?: string
  message?: string
  website?: string
}

function getEnv(name: string) {
  return process.env[name]?.trim()
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  let payload: ContactPayload
  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 })
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : ""
  const email = typeof payload.email === "string" ? payload.email.trim() : ""
  const message = typeof payload.message === "string" ? payload.message.trim() : ""

  if (payload.website) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !EMAIL_REGEX.test(email) || message.length < 10) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 })
  }

  const resendApiKey = getEnv("RESEND_API_KEY")
  const toEmail = getEnv("CONTACT_TO_EMAIL")
  const fromEmail = getEnv("CONTACT_FROM_EMAIL")
  const fromName = getEnv("CONTACT_FROM_NAME") || "Portfolio"

  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 })
  }

  const resend = new Resend(resendApiKey)

  const subject = `New portfolio message from ${name}`
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n")
  const html = `
    <h2>New portfolio message</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
  `

  const { error } = await resend.emails.send({
    from: `${fromName} <${fromEmail}>`,
    to: [toEmail],
    replyTo: email,
    subject,
    text,
    html,
  })

  if (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
