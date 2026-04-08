import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="flex flex-col gap-6 border-t border-white/[0.06] bg-bg px-[5vw] py-8 sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/"
        className="font-head text-base font-extrabold text-[#eef1f5]"
      >
        Stack<span className="text-accent">Match</span>
      </Link>
      <p className="font-body text-[0.75rem] text-muted sm:text-right">
        © {new Date().getFullYear()} StackMatch. All rights reserved.
      </p>
    </footer>
  );
}
