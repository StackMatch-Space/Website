const features = [
  {
    icon: "🎯",
    title: "Targeted matching, not volume",
    body: "We score every job against your exact profile and only recommend roles where you genuinely qualify. Fewer applications, dramatically better response rates.",
  },
  {
    icon: "⚡",
    title: "Auto-apply that you control",
    body: "Set your thresholds. Review your matches. Approve before it fires. StackMatch applies fast — within the first hour of a posting — but never without your say.",
  },
  {
    icon: "📄",
    title: "Resume that's honest and sharp",
    body: "No keyword stuffing, no fake skills. We reformat your real experience to pass ATS scans and impress human reviewers — without misrepresenting who you are.",
  },
  {
    icon: "✍️",
    title: "Cover letters in your voice",
    body: "Tell us how you think, what you value, why you're excited about a role. We write the cover letter in your words — not generic AI filler recruiters instantly recognize.",
  },
  {
    icon: "🔍",
    title: "Rejection insights",
    body: "When a job doesn't respond, we tell you why. Skills gap, salary mismatch, experience level — real data so you can adjust your strategy instead of applying blind.",
  },
  {
    icon: "📱",
    title: "Apply from anywhere, instantly",
    body: "New high-match job posted? Get notified on mobile immediately. Review and approve in one tap — no laptop needed. Speed is a real competitive advantage.",
  },
] as const;

export function Features() {
  return (
    <section
      id="features"
      className="border-y border-white/[0.07] bg-bg2 py-24 px-[5vw]"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-5 flex items-center gap-[9px] font-head text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-accent">
          <span className="h-0.5 w-5 bg-accent" aria-hidden />
          What makes us different
        </div>
        <h2 className="font-head text-[clamp(1.9rem,3.8vw,2.75rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#eef1f5]">
          Not more applications.
          <br />
          <span className="text-accent">Better ones.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[18px] bg-white/[0.06] md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="bg-bg2 p-8 transition-colors hover:bg-bg4"
            >
              <div className="mb-[1.1rem] flex h-[46px] w-[46px] items-center justify-center rounded-[11px] border border-accent/10 bg-accent/10 text-[1.15rem]">
                <span aria-hidden>{f.icon}</span>
              </div>
              <h3 className="font-head text-[0.975rem] font-bold text-[#eef1f5]">
                {f.title}
              </h3>
              <p className="mt-1.5 font-body text-[0.855rem] leading-[1.65] text-muted2">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
