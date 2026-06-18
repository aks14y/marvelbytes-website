/**
 * Home Page - Marvelbytes Business Solutions
 * 
 * Design System: 21st Dev Refined
 * - Header with navigation
 * - Hero section with scroll animation
 * - Services showcase with cards
 * - Footer with contact information
 */

import Header from "@/components/Header";
import AnimatedHero from "@/components/AnimatedHero";
import About from "@/components/About";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedHero />
        <About />
        <Services />
        <section className="py-20 bg-[#030303]">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">What Our Clients Say</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">Trusted by industry leaders and innovative companies worldwide</p>
            </div>
            <Testimonials />
          </div>
        </section>
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
