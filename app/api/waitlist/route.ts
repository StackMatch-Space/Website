import { NextRequest, NextResponse } from "next/server";
import { isValidEmail, normalizeEmail } from "@/lib/email";
import {
  airtableAppendEmail,
  airtableEmailExists,
  isWaitlistConfigured,
} from "@/lib/waitlist-airtable";

export const dynamic = "force-dynamic";

/** GET ?email= — whether this address is already in Airtable. */
export async function GET(req: NextRequest) {
  if (!isWaitlistConfigured()) {
    return NextResponse.json(
      {
        error:
          "Waitlist is not configured (set AIRTABLE_TOKEN and AIRTABLE_BASE_ID).",
      },
      { status: 503 },
    );
  }

  const raw = req.nextUrl.searchParams.get("email") ?? "";
  const email = normalizeEmail(raw);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const registered = await airtableEmailExists(email);
    return NextResponse.json({ registered });
  } catch {
    return NextResponse.json(
      { error: "Could not verify email. Try again." },
      { status: 502 },
    );
  }
}

/** POST { email } — add row if new; returns already_registered if present. */
export async function POST(req: NextRequest) {
  if (!isWaitlistConfigured()) {
    return NextResponse.json(
      {
        error:
          "Waitlist is not configured (set AIRTABLE_TOKEN and AIRTABLE_BASE_ID).",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const raw =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email
      : "";
  const email = normalizeEmail(raw);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const exists = await airtableEmailExists(email);
    if (exists) {
      return NextResponse.json({
        ok: true,
        state: "already_registered" as const,
      });
    }
    await airtableAppendEmail(email);
    return NextResponse.json({ ok: true, state: "subscribed" as const });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    if (msg === "WAITLIST_NOT_CONFIGURED") {
      return NextResponse.json(
        { error: "Waitlist is not configured." },
        { status: 503 },
      );
    }
    return NextResponse.json(
      { error: "Could not join waitlist. Try again." },
      { status: 502 },
    );
  }
}
