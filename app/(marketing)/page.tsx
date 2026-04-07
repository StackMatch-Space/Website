import { Faq } from "@/components/marketing/faq";
import { Features } from "@/components/marketing/features";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { PainSection } from "@/components/marketing/pain-section";
import { Stats } from "@/components/marketing/stats";
import { TrustSection } from "@/components/marketing/trust-section";
import { WaitlistCta } from "@/components/marketing/waitlist-cta";
import { WhoItsFor } from "@/components/marketing/who-its-for";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <PainSection />
      <HowItWorks />
      <Features />
      <WhoItsFor />
      <Stats />
      <TrustSection />
      <WaitlistCta />
      <Faq />
      <FinalCta />
    </>
  );
}
