import Link from "next/link";

const footerLinks = [
  // { href: "#", label: "Privacy Policy" },
  // { href: "#", label: "Terms of Service" },
  // { href: "#", label: "Contact" },
  // { href: "#", label: "Twitter / X" },
  // { href: "#", label: "LinkedIn" },
] as const;

export function MarketingFooter() {
  return (
    <footer className="flex flex-col gap-6 border-t border-white/[0.06] bg-bg px-[5vw] py-8 sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/"
        className="font-head text-base font-extrabold text-[#eef1f5]"
      >
        Stack<span className="text-accent">Match</span>
      </Link>
      <nav
        className="flex flex-wrap gap-x-6 gap-y-2"
        aria-label="Footer"
      >
        {footerLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-body text-[0.8rem] text-muted transition-colors hover:text-[#eef1f5]"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <p className="font-body text-[0.75rem] text-muted">
        © {new Date().getFullYear()} StackMatch. All rights reserved.
      </p>
    </footer>
  );
}
