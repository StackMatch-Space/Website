import type { ReactNode } from "react";
import { MarketingFooter } from "@/components/marketing/footer";
import { MarketingNavbar } from "@/components/marketing/navbar";
import { WaitlistProvider } from "@/components/providers/waitlist-provider";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg font-body text-[#eef1f5] antialiased">
      <MarketingNavbar />
      <main className="flex-1">
        <WaitlistProvider>{children}</WaitlistProvider>
      </main>
      <MarketingFooter />
    </div>
  );
}
