import { HeroSection } from "@/components/hero/HeroSection";
import {
  FeaturesSection,
  HowItWorksSection,
  DocumentTypesSection,
  SocialProofSection,
  CTASection,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DocumentTypesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
