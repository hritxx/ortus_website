/**
 * Survey submission proxy route.
 * Validates payload, rate-limits by IP, and forwards to Google Sheets webhook.
 */

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3;
const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** @type {Map<string, number[]>} IP → array of timestamps */
const ipTimestamps = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (ipTimestamps.get(ip) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    ipTimestamps.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  ipTimestamps.set(ip, timestamps);
  return false;
}

/**
 * Server-side validation helper.
 */
function validatePayload(data) {
  const { name, phone, email, totalScore } = data;
  if (!name || typeof name !== "string" || !name.trim()) {
    return "Name is required";
  }
  if (!phone || !PHONE_REGEX.test(phone)) {
    return "Valid 10-digit Indian phone number required";
  }
  if (email && !EMAIL_REGEX.test(email)) {
    return "Invalid email format";
  }
  if (typeof totalScore !== "number") {
    return "Invalid score data";
  }
  return null;
}

/**
 * Forwards payload to Google Sheets webhook and awaits response.
 */
async function forwardToWebhook(data) {
  const webhookUrl = process.env.SURVEY_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn(
      "[survey-submit] WARNING: SURVEY_SHEET_WEBHOOK_URL environment variable is not defined. " +
      "Google Sheet will not be updated. If you just added it, please restart the dev server."
    );
    return;
  }

  const { name, phone, email, totalScore, sectionScores } = data;
  const sheetPayload = {
    timestamp: new Date().toISOString(),
    name: name.trim(),
    phone,
    email: email || "",
    totalScore,
    income: sectionScores?.income?.score ?? "",
    spending: sectionScores?.spending?.score ?? "",
    emergency: sectionScores?.emergency?.score ?? "",
    debt: sectionScores?.debt?.score ?? "",
    savings: sectionScores?.savings?.score ?? "",
    goals: sectionScores?.goals?.score ?? "",
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sheetPayload),
    });
    if (!res.ok) {
      const bodyText = await res.text();
      console.error(`[survey-submit] Webhook failed with status ${res.status}:`, bodyText);
    } else {
      console.log("[survey-submit] Webhook successfully updated Google Sheet.");
    }
  } catch (err) {
    console.error("[survey-submit] Webhook fetch error:", err.message);
  }
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validationError = validatePayload(body);
    if (validationError) {
      return Response.json({ error: validationError }, { status: 400 });
    }

    await forwardToWebhook(body);

    return Response.json({ success: true });
  } catch (err) {
    console.error("[survey-submit] Error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
