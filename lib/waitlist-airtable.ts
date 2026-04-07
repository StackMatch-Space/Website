import { normalizeEmail } from "@/lib/email";

/** Escape a string for use inside single quotes in an Airtable formula (double any '). */
function escapeForAirtableStringLiteral(value: string): string {
  return value.replace(/'/g, "''");
}

function getConfig(): {
  token: string;
  baseId: string;
  tableName: string;
  emailField: string;
  signupDateField: string;
} | null {
  const token = process.env.AIRTABLE_TOKEN?.trim();
  const baseId = process.env.AIRTABLE_BASE_ID?.trim();
  const tableName =
    process.env.AIRTABLE_TABLE_NAME?.trim() || "Waitlist";
  const emailField =
    process.env.AIRTABLE_EMAIL_FIELD?.trim() || "Email";
  const signupDateField =
    process.env.AIRTABLE_SIGNUP_DATE_FIELD?.trim() || "Sign-up Date";
  if (!token || !baseId) return null;
  return { token, baseId, tableName, emailField, signupDateField };
}

/** YYYY-MM-DD (UTC) for Airtable Date fields; full ISO if env requests datetime. */
function signupDateValue(): string {
  const dt = process.env.AIRTABLE_SIGNUP_USE_DATETIME?.trim()?.toLowerCase();
  const useDateTime = dt === "1" || dt === "true";
  const now = new Date();
  if (useDateTime) return now.toISOString();
  return now.toISOString().slice(0, 10);
}

export function isWaitlistConfigured(): boolean {
  return getConfig() !== null;
}

function tableUrl(cfg: ReturnType<typeof getConfig>): string {
  if (!cfg) throw new Error("WAITLIST_NOT_CONFIGURED");
  const encodedTable = encodeURIComponent(cfg.tableName);
  return `https://api.airtable.com/v0/${cfg.baseId}/${encodedTable}`;
}

/** Returns true if a row with this email already exists (case-insensitive via stored lowercase). */
export async function airtableEmailExists(email: string): Promise<boolean> {
  const cfg = getConfig();
  if (!cfg) throw new Error("WAITLIST_NOT_CONFIGURED");

  const normalized = normalizeEmail(email);
  const field = `{${cfg.emailField}}`;
  const literal = escapeForAirtableStringLiteral(normalized);
  const filterByFormula = `${field}='${literal}'`;

  const url = new URL(tableUrl(cfg));
  url.searchParams.set("filterByFormula", filterByFormula);
  url.searchParams.set("maxRecords", "1");

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`AIRTABLE_LOOKUP_${res.status}: ${text.slice(0, 200)}`);
  }

  const data = (await res.json()) as { records?: unknown[] };
  return Array.isArray(data.records) && data.records.length > 0;
}

/** Appends one row with the email field set. Caller should verify duplicate first. */
export async function airtableAppendEmail(email: string): Promise<void> {
  const cfg = getConfig();
  if (!cfg) throw new Error("WAITLIST_NOT_CONFIGURED");

  const normalized = normalizeEmail(email);
  const fields: Record<string, string> = {
    [cfg.emailField]: normalized,
    [cfg.signupDateField]: signupDateValue(),
  };
  const res = await fetch(tableUrl(cfg), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields }),
    cache: "no-store",
  });

  if (res.ok) return;

  const text = await res.text();
  throw new Error(`AIRTABLE_CREATE_${res.status}: ${text.slice(0, 200)}`);
}
