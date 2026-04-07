const steps = [
  {
    n: 1,
    title: "Build your profile once",
    body: "Add your real skills, actual experience, and honest job preferences. Upload your resume. The more accurate it is, the better your matches.",
  },
  {
    n: 2,
    title: "AI targets the right jobs",
    body: "StackMatch scores every job against your profile and only surfaces roles where you have a genuine shot. No noise, no stretch roles, no wasted applications.",
  },
  {
    n: 3,
    title: "We apply. You prepare.",
    body: "Approve your matches and StackMatch handles the rest — tailored resume, real cover letter in your voice, submitted fast. Your only job is being ready for the interview.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-[5vw]">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-5 flex items-center gap-[9px] font-head text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-accent">
          <span className="h-0.5 w-5 bg-accent" aria-hidden />
          How it works
        </div>
        <h2 className="font-head text-[clamp(1.9rem,3.8vw,2.75rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#eef1f5]">
          Set up once.
          <br />
          Get interviews.
        </h2>
        <p className="mt-4 max-w-[580px] font-body text-[1.05rem] leading-[1.75] text-muted2">
          Three steps stand between you and a full pipeline of interviews
          running in the background.
        </p>

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute left-7 right-7 top-[27px] hidden h-px bg-white/[0.11] md:block"
            aria-hidden
          />
          <div className="relative flex flex-col gap-10 md:flex-row md:gap-0">
            {steps.map((step) => (
              <div
                key={step.n}
                className="flex-1 px-0 text-center md:px-6"
              >
                <div className="relative z-[1] mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-bg2 font-head text-lg font-extrabold text-accent">
                  {step.n}
                </div>
                <h3 className="font-head text-base font-bold text-[#eef1f5]">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted2">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
