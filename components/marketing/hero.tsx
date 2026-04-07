import { EmailCaptureForm } from "@/components/marketing/email-capture-form";
import { ScoreRing } from "@/components/marketing/score-ring";

const mockJobs = [
  {
    logo: "ST",
    logoClass: "bg-accent/10 text-accent",
    title: "Senior Backend Engineer",
    meta: "Stripe · Remote · $180–220k",
    tag: "Strong Python + distributed systems match",
    score: 97,
  },
  {
    logo: "GH",
    logoClass: "bg-trustBlue/10 text-trustBlue",
    title: "Staff Software Engineer",
    meta: "GitHub · Remote · $200k+",
    tag: "Staff-level experience aligns",
    score: 91,
  },
  {
    logo: "LI",
    logoClass: "bg-scoreMid/10 text-scoreMid",
    title: "Backend Engineer L4",
    meta: "LinkedIn · Sunnyvale · $170k",
    tag: "Salary range slightly above your target",
    score: 78,
  },
  {
    logo: "AM",
    logoClass: "bg-danger/10 text-danger",
    title: "SDE II — Platform",
    meta: "Amazon · Seattle · $155k",
    tag: "Missing: Kubernetes, Go experience",
    score: 54,
  },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-[128px]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[length:56px_56px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 0%, black 30%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(61,255,158,0.05)_0%,transparent_65%)]"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1120px] px-[5vw]">
        <div className="relative z-[1] grid items-center gap-16 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-[9px] rounded-full border border-accent/20 bg-accent/10 px-4 py-[7px] font-head text-[0.78rem] font-semibold tracking-[0.04em] text-accent">
              <span
                className="h-[7px] w-[7px] shrink-0 rounded-full bg-accent animate-pulse-dot"
                aria-hidden
              />
              Now accepting early access
            </div>
            <h1 className="font-head text-[clamp(2.6rem,5.2vw,4rem)] font-black leading-[1.05] tracking-[-0.035em] text-[#eef1f5]">
              <span className="text-accent">We handle the applications.</span>
              <br />
              <span className="text-muted2 text-[0.65em] font-normal">
                You prepare for interviews.
              </span>
            </h1>
            <p className="mb-9 mt-6 max-w-[500px] font-body text-[1.1rem] leading-[1.8] text-muted2">
              StackMatch doesn&apos;t just find jobs — it applies to the right
              ones for you. No mass applying. No wasted effort. Just a pipeline
              of interviews matched to your exact skills and experience.
            </p>
            <div className="mb-3">
              <EmailCaptureForm submitLabel="Get Early Access" layout="hero" />
            </div>
            <p className="font-body text-[0.78rem] text-muted">
              <span className="text-accent">Free forever</span> for early
              members · No credit card needed
            </p>
            <div className="mt-10 flex flex-wrap gap-9 border-t border-white/[0.06] pt-8">
              <div>
                <div className="font-head text-[1.6rem] font-black tracking-[-0.04em] text-[#eef1f5]">
                  1,400+
                </div>
                <div className="font-body text-[0.78rem] text-muted">
                  on waitlist
                </div>
              </div>
              <div>
                <div className="font-head text-[1.6rem] font-black tracking-[-0.04em] text-[#eef1f5]">
                  3×
                </div>
                <div className="font-body text-[0.78rem] text-muted">
                  more interviews
                </div>
              </div>
              <div>
                <div className="font-head text-[1.6rem] font-black tracking-[-0.04em] text-[#eef1f5]">
                  4.2×
                </div>
                <div className="font-body text-[0.78rem] text-muted">
                  higher response rate
                </div>
              </div>
            </div>
          </div>

          <div className="hidden rounded-[20px] border border-white/[0.11] bg-bg2 p-[22px] md:block">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-head text-[0.82rem] font-bold uppercase tracking-[0.04em] text-muted2">
                Top matches for you
              </span>
              <span className="rounded-full bg-accent/10 px-[11px] py-1 font-head text-[0.68rem] font-bold tracking-[0.06em] text-accent">
                ⚡ Auto-apply on
              </span>
            </div>
            {mockJobs.map((job) => (
              <div
                key={job.title}
                className="mb-[9px] flex cursor-default items-start gap-[13px] rounded-[13px] border border-white/[0.06] bg-bg3 px-[15px] py-[13px] transition-colors last:mb-0 hover:border-white/[0.11]"
              >
                <div
                  className={`mt-px flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] font-head text-[0.72rem] font-extrabold ${job.logoClass}`}
                >
                  {job.logo}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-head text-[0.865rem] font-semibold text-[#eef1f5]">
                    {job.title}
                  </div>
                  <div className="mb-1 font-body text-[0.73rem] text-muted">
                    {job.meta}
                  </div>
                  <span className="block truncate font-body text-[0.68rem] italic text-muted2">
                    {job.tag}
                  </span>
                </div>
                <ScoreRing score={job.score} size="sm" />
              </div>
            ))}
            <div className="mt-[11px] flex items-center gap-2.5 rounded-[11px] border border-accent/15 bg-accent/5 px-[14px] py-[11px]">
              <span className="text-base text-accent" aria-hidden>
                ⚡
              </span>
              <span className="flex-1 font-body text-[0.77rem] text-muted2">
                2 high-match jobs ready — review before we apply
              </span>
              <button
                type="button"
                className="font-head whitespace-nowrap rounded-[7px] bg-accent px-3 py-[5px] text-[0.68rem] font-extrabold tracking-[0.02em] text-bg"
              >
                Review & Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
