import Link from "next/link";

const navLinks = [
  { href: "#how-it-works", label: "How it Works" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
] as const;

export function MarketingNavbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex h-[68px] items-center justify-between border-b border-white/[0.06] bg-bg/80 px-[5vw] backdrop-blur-[16px]">
      <Link href="/" className="font-head text-xl font-extrabold tracking-tight text-[#eef1f5]">
        Stack<span className="text-accent">Match</span>
      </Link>
      <nav
        className="hidden flex-1 justify-center gap-8 md:flex"
        aria-label="Primary"
      >
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-body text-sm font-medium tracking-[0.01em] text-muted2 transition-colors hover:text-[#eef1f5]"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href="#waitlist"
        className="font-head whitespace-nowrap rounded-[10px] bg-accent px-[22px] py-2.5 text-[0.85rem] font-bold tracking-[0.02em] text-bg transition hover:translate-y-[-1px] hover:bg-[#5fffc4]"
      >
        Join Waitlist
      </a>
    </header>
  );
}
