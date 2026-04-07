const personas = [
  {
    initials: "AK",
    role: "Senior Backend Engineer · Laid off 3 weeks ago",
    quote:
      "I needed interviews fast. I didn't have time to manually apply to 200 companies while also grinding Leetcode. StackMatch handled the applications — I just showed up and talked to people.",
  },
  {
    initials: "JL",
    role: "Full Stack Engineer · First job search in 6 years",
    quote:
      "I had no idea how competitive it was now. I was applying to everything and hearing nothing. StackMatch told me my salary expectation was above range for half the jobs I was targeting. That alone saved me weeks.",
  },
  {
    initials: "MR",
    role: "Platform Engineer · Relocated, searching in new market",
    quote:
      "My resume was fine but my cover letters were garbage — generic ChatGPT output that said nothing real. StackMatch wrote them in my actual voice and my response rate went up immediately.",
  },
] as const;

export function WhoItsFor() {
  return (
    <section id="who" className="py-24 px-[5vw]">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-5 flex items-center gap-[9px] font-head text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-accent">
          <span className="h-0.5 w-5 bg-accent" aria-hidden />
          Built for this moment
        </div>
        <h2 className="font-head text-[clamp(1.9rem,3.8vw,2.75rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#eef1f5]">
          For engineers who just got laid off
          <br />
          <span className="text-[0.7em] font-normal text-muted2">
            and need to move fast.
          </span>
        </h2>
        <p className="mt-2 max-w-[580px] font-body text-[1.05rem] leading-[1.75] text-muted2">
          StackMatch is built for one specific situation: you&apos;re a skilled
          engineer, the jobs exist, and you need to get hired without spending
          your whole day on applications.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {personas.map((p) => (
            <article
              key={p.initials}
              className="rounded-[18px] border border-white/[0.06] bg-bg2 p-7"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent/20 bg-bg3 font-head text-[0.78rem] font-extrabold text-accent">
                {p.initials}
              </div>
              <p className="mb-3 font-head text-[0.73rem] font-semibold tracking-[0.04em] text-accent">
                {p.role}
              </p>
              <p className="font-body text-[0.875rem] italic leading-[1.7] text-muted2">
                &ldquo;{p.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
