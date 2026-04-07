import { EmailCaptureForm } from "@/components/marketing/email-capture-form";

export function FinalCta() {
  return (
    <section
      id="final-cta"
      className="border-t border-white/[0.06] bg-bg px-[5vw] pb-[68px] pt-[100px] text-center"
    >
      <div className="mx-auto max-w-[1120px]">
        <h2 className="font-head mb-5 text-[clamp(2rem,4.5vw,3.6rem)] font-black leading-[1.08] tracking-[-0.035em] text-[#eef1f5]">
          Stop sending applications into the void.
          <br />
          <span className="text-accent">Start getting interviews.</span>
        </h2>
        <p className="mx-auto max-w-[500px] font-body text-[1.05rem] leading-[1.75] text-muted2">
          StackMatch applies to the right jobs, in your voice, fast — so you can
          focus entirely on being prepared.
        </p>
        <div className="mx-auto mb-4 mt-10 w-full max-w-[460px]">
          <EmailCaptureForm
            submitLabel="Join the Waitlist"
            layout="final"
            className="justify-center"
          />
        </div>
        <p className="mt-3 font-body text-[0.78rem] text-muted">
          Free for early members · No credit card · Cancel anytime
        </p>
      </div>
    </section>
  );
}
