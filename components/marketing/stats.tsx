const stats = [
  {
    value: "3×",
    desc: "more callbacks when you apply within the first hour of a job posting",
  },
  {
    value: "68%",
    desc: "of mass auto-apply platforms report less than 2% interview conversion rates",
  },
  {
    value: "4.2×",
    desc: "higher response rate on targeted applications vs spray-and-pray volume",
  },
  {
    value: "6hrs",
    desc: "a day the average laid-off engineer loses to manual job applications",
  },
] as const;

export function Stats() {
  return (
    <section
      id="stats"
      className="border-y border-white/[0.07] bg-bg3 py-24 px-[5vw]"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-5 flex items-center gap-[9px] font-head text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-accent">
          <span className="h-0.5 w-5 bg-accent" aria-hidden />
          Why speed and targeting matter
        </div>
        <h2 className="font-head text-[clamp(1.9rem,3.8vw,2.75rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#eef1f5]">
          The data behind our approach.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] bg-white/[0.06] lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-bg3 px-[26px] py-[38px] text-center"
            >
              <div className="font-head text-[2.6rem] font-black leading-none tracking-[-0.05em] text-accent">
                {s.value}
              </div>
              <p className="mt-2 font-body text-[0.83rem] leading-[1.5] text-muted2">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
