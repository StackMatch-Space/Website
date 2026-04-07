const trustPoints = [
  {
    title: "Nothing goes out without your approval",
    body: "In balanced mode, you review every application before it's submitted. You see the job, the tailored resume, and the cover letter — then decide. Zero surprise applications.",
  },
  {
    title: "We never fabricate or exaggerate",
    body: "StackMatch only uses real information from your profile. We won't add skills you don't have or stretch your experience. Your reputation is more valuable than one application.",
  },
  {
    title: "Pause or adjust anytime",
    body: "Got an offer? Going on vacation? One click pauses everything. Change your thresholds, update your resume version, or stop entirely — full control, always.",
  },
] as const;

export function TrustSection() {
  return (
    <section id="trust" className="py-24 px-[5vw]">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-5 flex items-center gap-[9px] font-head text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-accent">
          <span className="h-0.5 w-5 bg-accent" aria-hidden />
          You stay in control
        </div>
        <h2 className="font-head text-[clamp(1.9rem,3.8vw,2.75rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#eef1f5]">
          Auto-apply doesn&apos;t mean
          <br />
          <span className="text-accent">losing your reputation.</span>
        </h2>
        <p className="mt-4 max-w-[580px] font-body text-[1.05rem] leading-[1.75] text-muted2">
          Your professional reputation matters. StackMatch never applies to a
          job you haven&apos;t approved. You set the rules — we execute them
          precisely.
        </p>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-2 md:gap-12">
          <div className="rounded-[18px] border border-white/[0.11] bg-bg2 p-7">
            <h4 className="mb-5 font-head text-[0.72rem] font-bold uppercase tracking-[0.1em] text-muted">
              Your settings
            </h4>
            <div className="flex items-center justify-between border-b border-white/[0.06] py-[11px]">
              <span className="font-body text-[0.86rem] text-muted2">Auto-apply mode</span>
              <span className="font-head rounded-full bg-scoreMid/10 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.04em] text-scoreMid">
                Balanced (review first)
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-white/[0.06] py-[11px]">
              <span className="font-body text-[0.86rem] text-muted2">Min match score</span>
              <span className="font-body text-[0.875rem] font-semibold text-[#eef1f5]">
                82 / 100
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-white/[0.06] py-[11px]">
              <span className="font-body text-[0.86rem] text-muted2">Salary range</span>
              <span className="font-body text-[0.875rem] font-semibold text-[#eef1f5]">
                $160k – $240k
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-white/[0.06] py-[11px]">
              <span className="font-body text-[0.86rem] text-muted2">Location</span>
              <span className="font-head rounded-full bg-trustBlue/10 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.04em] text-trustBlue">
                Remote only
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-white/[0.06] py-[11px]">
              <span className="font-body text-[0.86rem] text-muted2">Company size</span>
              <span className="font-body text-[0.875rem] font-semibold text-[#eef1f5]">
                50 – 5,000
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-white/[0.06] py-[11px]">
              <span className="font-body text-[0.86rem] text-muted2">Resume version</span>
              <span className="font-body text-[0.875rem] font-semibold text-[#eef1f5]">
                Python / Backend v3
              </span>
            </div>
            <div className="flex items-center justify-between py-[11px]">
              <span className="font-body text-[0.86rem] text-muted2">
                Auto-apply status
              </span>
              <span className="font-head rounded-full bg-accent/10 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.04em] text-accent">
                Active
              </span>
            </div>
          </div>

          <ul className="flex flex-col gap-[22px]">
            {trustPoints.map((point) => (
              <li key={point.title} className="flex gap-4">
                <div
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/15 bg-accent/10 font-body text-[0.78rem] text-accent"
                  aria-hidden
                >
                  ✓
                </div>
                <div>
                  <h3 className="font-head text-[0.975rem] font-bold text-[#eef1f5]">
                    {point.title}
                  </h3>
                  <p className="mt-1 font-body text-[0.865rem] leading-[1.65] text-muted2">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
