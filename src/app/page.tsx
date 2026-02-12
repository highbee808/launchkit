import { HeroSection } from "@/components/hero/HeroSection";
import {
  FeaturesSection,
  HowItWorksSection,
  SocialProofSection,
  TestimonialsSection,
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
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
