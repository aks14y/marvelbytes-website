/**
 * About Page — expanded company story (distinct from homepage teaser)
 */

import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { SectionChapter } from "@/components/ui/section-chapter";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/scroll-reveal";
import { aboutPage } from "@/data/page-content";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        title={aboutPage.hero.title}
        subtitle={aboutPage.hero.subtitle}
        accentHalf="first"
      />

      <section className="bg-background py-16 md:py-24">
        <div className="container max-w-4xl px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {aboutPage.story.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {aboutPage.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h3 className="text-lg font-semibold text-primary md:text-xl">
              {aboutPage.mission.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              {aboutPage.mission.body}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container px-4">
          <SectionChapter
            title="How we deliver"
            subtitle="A proven process that keeps projects focused, transparent, and on track from first conversation to launch."
            accentHalf="second"
            className="mb-12 md:mb-16"
          />
          <StaggerReveal className="grid gap-10 md:grid-cols-2">
            {aboutPage.process.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title}>
                  <article>
                    <Icon className="mb-4 size-7 text-primary" strokeWidth={1.75} />
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm font-medium text-white/70">
                      {step.summary}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {step.detail}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container px-4">
          <SectionChapter
            title="What we stand for"
            subtitle="These principles guide every architecture decision, sprint, and client conversation."
            accentHalf="first"
            className="mb-12 md:mb-16"
          />
          <StaggerReveal className="grid gap-8 sm:grid-cols-2">
            {aboutPage.values.map((value) => (
              <StaggerItem key={value.title}>
                <div>
                  <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {value.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <ScrollReveal className="mx-auto mt-14 max-w-3xl text-center">
            <h3 className="text-xl font-semibold text-white md:text-2xl">
              {aboutPage.partnership.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {aboutPage.partnership.body}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container px-4 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready to work together?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Tell us about your project and we&apos;ll outline how Marvelbytes can
            help—from discovery through launch and beyond.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              className="h-12 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                Start a conversation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-lg border-white/15 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/5 hover:text-white"
            >
              <Link href="/solutions">Explore our solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
