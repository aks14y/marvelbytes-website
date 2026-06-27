/**
 * Home Page - Marvelbytes Business Solutions
 */

import AnimatedHero from "@/components/AnimatedHero";
import About from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import SplitFeatureSection from "@/components/SplitFeatureSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import PageLayout from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout hideHeader>
      <AnimatedHero />

      <About />

      <WhyChooseUs />

      <Services />

      <SplitFeatureSection />

      <FAQ />
      <CTASection />
    </PageLayout>
  );
}
