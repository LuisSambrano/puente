import { Navbar } from "@/features/landing/components/navbar";
import { HeroSection } from "@/features/landing/components/hero-section";
import { FundingSection } from "@/features/landing/components/funding-section";
import { CategoriesSection } from "@/features/landing/components/categories-section";
import { PartnersSection } from "@/features/landing/components/partners-section";
import { FeaturesSection } from "@/features/landing/components/features-section";
import { TestimonialSection } from "@/features/landing/components/testimonial-section";
import { TimelineSection } from "@/features/landing/components/timeline-section";
import { CtaSection } from "@/features/landing/components/cta-section";
import { Footer } from "@/features/landing/components/footer";
import { MotionBackground } from "@/features/landing/components/motion-background";

export default function Page() {
  return (
    <>
      <MotionBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <FundingSection />
        <CategoriesSection />
        <PartnersSection />
        <FeaturesSection />
        <TestimonialSection />
        <TimelineSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
