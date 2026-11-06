const allowed = new Set(["page_view", "test_started", "retake_started", "question_viewed", "question_answered", "test_completed"]);
export async function POST(request: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPERBASE_SERVICE_ROLE_KEY;
  if (!url || !key) return Response.json({ ok: false, reason: "analytics_not_configured" }, { status: 503 });
  try {
    const body = await request.json();
    const visitor_id = String(body.visitor_id || "");
    if (visitor_id.length < 8 || visitor_id.length > 80 || !Array.isArray(body.events) || body.events.length > 100) {
      return Response.json({ ok: false }, { status: 400 });
    }
    const rows = body.events.filter((event: any) => event && allowed.has(event.event_name)).map((event: any) => ({
      visitor_id,
      event_name: event.event_name,
      test_number: Number.isInteger(event.test_number) ? event.test_number : null,
      question_id: typeof event.question_id === "string" ? event.question_id.slice(0, 80) : null,
      metadata: event.metadata && typeof event.metadata === "object" ? event.metadata : {}
    }));
    if (!rows.length) return Response.json({ ok: true });
    const response = await fetch(url.replace(/\/$/, "") + "/rest/v1/activity_events", {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: "Bearer " + key,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify(rows),
      cache: "no-store"
    });
    if (!response.ok) return Response.json({ ok: false }, { status: 502 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
}
