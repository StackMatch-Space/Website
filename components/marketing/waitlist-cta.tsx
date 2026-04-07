import { EmailCaptureForm } from "@/components/marketing/email-capture-form";

export function WaitlistCta() {
  return (
    <section
      id="waitlist"
      className="border-y border-white/[0.07] bg-bg2 py-24 px-[5vw] text-center"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-5 flex items-center justify-center gap-[9px] font-head text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-accent">
          <span className="h-0.5 w-5 bg-accent" aria-hidden />
          Early access
        </div>
        <h2 className="font-head text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#eef1f5]">
          Stop applying. Start interviewing.
        </h2>
        <p className="mx-auto mt-3 max-w-[600px] text-center font-body text-[1.05rem] leading-[1.75] text-muted2">
          Join engineers who&apos;ve handed off the job search grind and are
          spending that time preparing to actually get hired.
        </p>
        <div className="mt-8 flex w-full justify-center">
          <EmailCaptureForm
            submitLabel="Claim My Spot"
            layout="waitlist"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
