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
    const { name, phone, email, totalScore, sectionScores } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }
    if (!phone || !PHONE_REGEX.test(phone)) {
      return Response.json(
        { error: "Valid 10-digit Indian phone number required" },
        { status: 400 }
      );
    }
    if (email && !EMAIL_REGEX.test(email)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }
    if (typeof totalScore !== "number") {
      return Response.json(
        { error: "Invalid score data" },
        { status: 400 }
      );
    }

    // Forward to Google Sheets webhook if configured
    const webhookUrl = process.env.SURVEY_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
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

      // Fire-and-forget to avoid blocking the response
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetPayload),
      }).catch((err) => {
        console.error("[survey-submit] Webhook error:", err.message);
      });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("[survey-submit] Error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
