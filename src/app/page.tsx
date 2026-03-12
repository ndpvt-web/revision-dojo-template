import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FeatureSections from "@/components/FeatureSection";
import AISection from "@/components/AISection";
import CourseworkSection from "@/components/CourseworkSection";
import Testimonials from "@/components/Testimonials";
import ImpactCards from "@/components/ImpactCards";
import AllFeatures from "@/components/AllFeatures";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeatureSections />
      <AISection />
      <CourseworkSection />
      <Testimonials />
      <ImpactCards />
      <AllFeatures />
      <FAQ />
      <CTASection />
    </>
  );
}
