const painPoints = [
  {
    emoji: "😩",
    title: "Mass applying doesn't work",
    body: "Sending 300 applications and hearing nothing back isn't bad luck — it's a targeting problem. Most platforms optimize for volume. We optimize for fit.",
  },
  {
    emoji: "📭",
    title: "You never know why you got rejected",
    body: "Ghosted after applying? You deserve to know why. Was it your skills, your salary expectation, or just bad timing? StackMatch tells you — so you can fix it.",
  },
  {
    emoji: "🤖",
    title: "AI resumes sound like AI",
    body: "Generic keyword-stuffed resumes and robotic cover letters hurt more than they help. Recruiters can tell. Yours should sound like you — just better formatted and ATS-ready.",
  },
] as const;

export function PainSection() {
  return (
    <section
      id="pain"
      className="border-y border-white/[0.07] bg-bg2 py-24 px-[5vw]"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-5 flex items-center gap-[9px] font-head text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-accent">
          <span className="h-0.5 w-5 bg-accent" aria-hidden />
          Why engineers struggle
        </div>
        <h2 className="font-head text-[clamp(1.9rem,3.8vw,2.75rem)] font-black leading-tight tracking-[-0.035em] text-[#eef1f5]">
          Other platforms send applications.
          <br />
          <span className="text-accent">We get you interviews.</span>
        </h2>
        <p className="mt-4 max-w-[580px] font-body text-[1.05rem] leading-[1.75] text-muted2">
          Mass applying feels productive. But 200 applications with 2 callbacks
          isn&apos;t a strategy — it&apos;s noise. StackMatch does less, better.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] md:grid-cols-3">
          {painPoints.map((card) => (
            <article
              key={card.title}
              className="bg-bg2 px-[26px] py-[30px] transition-colors hover:bg-bg3"
            >
              <div className="mb-4 text-2xl" aria-hidden>
                {card.emoji}
              </div>
              <h3 className="font-head text-base font-bold text-[#eef1f5]">
                {card.title}
              </h3>
              <p className="mt-2 font-body text-[0.875rem] leading-[1.65] text-muted2">
                {card.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 font-head text-[1.15rem] font-bold text-accent">
          There&apos;s a smarter way — targeted, honest, and fast. →
        </p>
      </div>
    </section>
  );
}
