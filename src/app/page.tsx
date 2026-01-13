import { HeroSection } from "@/components/hero/HeroSection";
import {
  FeaturesSection,
  HowItWorksSection,
  SocialProofSection,
  FAQSection,
  CTASection,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
