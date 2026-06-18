/**
 * Hero Section - Marvelbytes Business Solutions
 * 
 * Design System: 21st Dev Refined
 * - Bold headline with Poppins font
 * - Scroll animation with parallax effect
 * - Hero background image with gradient overlay
 * - CTA buttons with hover effects
 */

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button, LiquidButton } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HERO_BG_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663760897792/GjwaD8BUpahCMzSYSk6nPk/hero-background-DHbPyU33qVPpjTxxYM29Jo.webp";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pb-40">
      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            <h1 className="heading-xl md:text-6xl font-bold text-foreground">
              Enterprise Solutions,{" "}
              <span className="text-primary">Crafted for Clarity</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Marvelbytes delivers innovative business solutions that empower
              organizations to scale, innovate, and succeed in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <LiquidButton variant="default" className="btn-primary inline-flex items-center gap-2">
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </LiquidButton>
              <Button className="btn-secondary">View Case Studies</Button>
            </div>
          </div>
        }
      >
        <img
          src={HERO_BG_URL}
          alt="Marvelbytes Solutions"
          className="mx-auto rounded-2xl object-cover h-full w-full"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
