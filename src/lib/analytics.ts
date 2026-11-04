"use client";
type ActivityEvent = {
  event_name: "page_view" | "test_started" | "retake_started" | "question_viewed" | "question_answered" | "test_completed";
  test_number?: number;
  question_id?: string;
  metadata?: Record<string, number | string | boolean>;
};
function getVisitorId() {
  try {
    let id = localStorage.getItem("pb_visitor_id");
    if (!id) {
      id = typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : "pb-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem("pb_visitor_id", id);
    }
    return id;
  } catch {
    return "session-" + Date.now().toString(36);
  }
}
export function trackMany(events: ActivityEvent[]) {
  if (!events.length) return;
  const visitor_id = getVisitorId();
  void fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ visitor_id, events }),
    keepalive: true
  }).catch(() => {});
}
export function track(event: ActivityEvent) {
  trackMany([event]);
}
