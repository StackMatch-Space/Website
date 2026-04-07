"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "How is StackMatch different from other auto-apply platforms?",
    a: "Most auto-apply tools optimize for volume — they'll send 500 applications and call that success. StackMatch optimizes for interviews. We only apply to roles where your profile genuinely fits, we tailor every resume and cover letter honestly, and we tell you why jobs don't respond. Fewer applications, better outcomes.",
  },
  {
    q: "Will my resume have fake skills or exaggerated experience added?",
    a: "Never. StackMatch only works with information you've provided. We reformat and optimize your real experience to be ATS-friendly and readable by humans — but we won't add skills you don't have or misrepresent your background. Your integrity stays intact.",
  },
  {
    q: "How does the rejection insight feature work?",
    a: "When a job doesn't respond within a typical response window, StackMatch analyzes the gap between your profile and the job requirements and surfaces the most likely reasons — skills below threshold, salary expectation mismatch, experience level, location. It's not perfect, but it's far better than silence.",
  },
  {
    q: "Can I really review every application before it's sent?",
    a: "Yes. In balanced mode (the default), you see every job StackMatch wants to apply to, along with the tailored resume and cover letter it prepared. You approve or skip. In aggressive mode, it applies automatically above your score threshold — your choice.",
  },
  {
    q: "How does the cover letter actually sound like me?",
    a: "During onboarding, we ask you a few questions about how you work, what you value in a team, and what excites you about certain types of roles. We use your actual answers as the foundation — the cover letter reflects your real perspective, not a template.",
  },
  {
    q: "When does StackMatch launch?",
    a: "We're onboarding early access members in batches now. Join the waitlist to be in the first group — early members get free premium access and hands-on onboarding support.",
  },
] as const;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="py-24 px-[5vw]">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-5 flex items-center gap-[9px] font-head text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-accent">
          <span className="h-0.5 w-5 bg-accent" aria-hidden />
          FAQ
        </div>
        <h2 className="font-head text-[clamp(1.9rem,3.8vw,2.75rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#eef1f5]">
          Common questions.
        </h2>
        <ul className="mx-auto mt-12 max-w-[740px] list-none p-0">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li
                key={item.q}
                className="border-b border-white/[0.06] py-[1.35rem] first:pt-0"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left font-head text-[0.975rem] font-bold text-[#eef1f5] transition hover:text-accent"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span
                    className={`shrink-0 text-[0.72rem] text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    ▼
                  </span>
                </button>
                {isOpen ? (
                  <p className="mt-3 font-body text-[0.9rem] leading-[1.72] text-muted2">
                    {item.a}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
