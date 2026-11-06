export const dynamic = "force-dynamic";
type Stats = {
  visitors_30d: number; visitors_all_time: number; page_views_30d: number;
  questions_viewed_30d: number; questions_answered_30d: number;
  tests_started_30d: number; tests_completed_30d: number;
  popular_questions: { question_id: string; attempts: number }[];
};
async function getStats(): Promise<Stats | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPERBASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  try {
    const response = await fetch(url.replace(/\/$/, "") + "/rest/v1/rpc/admin_dashboard_stats", {
      method: "POST",
      headers: { apikey: key, Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: "{}",
      cache: "no-store"
    });
    if (!response.ok) return null;
    return await response.json();
  } catch { return null; }
}
const number = (value: number) => new Intl.NumberFormat("en-IN").format(value || 0);
export default async function AdminPage() {
  const stats = await getStats();
  return <main style={{minHeight:"100vh",background:"#f5f7fb",padding:"32px 18px",color:"#172033",fontFamily:"Arial,sans-serif"}}>
    <div style={{maxWidth:1050,margin:"0 auto"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"}}>
        <div><p style={{color:"#64748b",fontSize:12,fontWeight:700,letterSpacing:2}}>PREPBANGLA · PRIVATE</p><h1 style={{fontSize:30,margin:"6px 0"}}>Admin dashboard</h1><p style={{color:"#64748b",marginTop:4}}>Anonymous usage and learning activity · Last 30 days unless noted</p></div>
        <a href="/" style={{color:"#2563eb"}}>View website ↗</a>
      </div>
      {!stats ? <section style={{background:"white",padding:22,borderRadius:14,marginTop:24,lineHeight:1.7}}>
        <h2>Analytics database not connected yet</h2>
        <p>Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel, then run the SQL setup file <code>supabase/analytics.sql</code> in your Supabase SQL Editor. Also set ADMIN_USERNAME and ADMIN_PASSWORD.</p>
        <p>The dashboard will populate after real visitors use the site. It will not show historical activity from before tracking is enabled.</p>
      </section> : <>
        <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:14,marginTop:24}}>
          {[
            ["Unique visitors · 30 days",stats.visitors_30d],["Unique visitors · all time",stats.visitors_all_time],
            ["Page views · 30 days",stats.page_views_30d],["Questions viewed · 30 days",stats.questions_viewed_30d],
            ["Questions answered · 30 days",stats.questions_answered_30d],["Tests started · 30 days",stats.tests_started_30d],
            ["Tests completed · 30 days",stats.tests_completed_30d]
          ].map(([label,value])=><article key={String(label)} style={{background:"white",padding:20,borderRadius:14,boxShadow:"0 2px 12px #0f172a0a"}}><p style={{color:"#64748b",fontSize:13,margin:0}}>{label}</p><strong style={{display:"block",fontSize:30,marginTop:8}}>{number(Number(value))}</strong></article>)}
        </section>
        <section style={{background:"white",padding:22,borderRadius:14,marginTop:20}}>
          <h2 style={{fontSize:19}}>Most attempted questions</h2>
          {stats.popular_questions?.length ? stats.popular_questions.map(item=><div key={item.question_id} style={{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #e2e8f0"}}><span>{item.question_id}</span><strong>{number(item.attempts)} attempts</strong></div>) : <p style={{color:"#64748b"}}>No submitted answers yet.</p>}
        </section>
        <p style={{fontSize:12,color:"#64748b",marginTop:18}}>Visitors are counted by an anonymous browser identifier. One person using multiple browsers/devices may be counted more than once. No name, phone number or email is collected.</p>
      </>}
    </div>
  </main>;
}
