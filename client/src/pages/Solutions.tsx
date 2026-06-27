/**
 * Solutions Page — expanded capabilities & full catalog (distinct from homepage stack)
 */

import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { SectionChapter } from "@/components/ui/section-chapter";
import { StaggerItem, StaggerReveal } from "@/components/ui/scroll-reveal";
import { solutionsPage } from "@/data/page-content";
import { solutions, type SolutionItem } from "@/data/solutions";

const solutionsByTag = solutions.reduce<Record<string, SolutionItem[]>>(
  (groups, item) => {
    const list = groups[item.tag] ?? [];
    list.push(item);
    groups[item.tag] = list;
    return groups;
  },
  {},
);

const tagOrder = [
  "Development",
  "Mobile",
  "Enterprise",
  "Design",
  "Infrastructure",
  "Consulting",
  "Marketing",
  "Commerce",
  "Analytics",
  "Quality",
  "Staffing",
];

const orderedTags = tagOrder.filter((tag) => solutionsByTag[tag]);

function SolutionCatalogItem({ item }: { item: SolutionItem }) {
  return (
    <article className="flex h-full flex-col">
      <div
        className="aspect-[16/10] rounded-lg bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${item.image})` }}
        role="img"
        aria-label={item.title}
      />
      <div className="flex flex-1 flex-col pt-4">
        <span className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-primary">
          {item.tag}
        </span>
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function SolutionsPage() {
  return (
    <PageLayout>
      <PageHero
        title={solutionsPage.hero.title}
        subtitle={solutionsPage.hero.subtitle}
        accentHalf="second"
      />

      <section className="bg-background py-16 md:py-24">
        <div className="container px-4">
          <SectionChapter
            title="Capability areas"
            subtitle="We organize our work around four pillars. Most client engagements draw from one or more of these areas depending on your roadmap."
            accentHalf="first"
            className="mb-12 md:mb-16"
          />
          <StaggerReveal className="grid gap-10 sm:grid-cols-2">
            {solutionsPage.pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.title}>
                  <article>
                    <Icon className="mb-4 size-7 text-primary" strokeWidth={1.75} />
                    <h3 className="text-lg font-semibold text-white md:text-xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {pillar.body}
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
            title="Full service catalog"
            subtitle="Browse every discipline we offer. Each service can be scoped independently or combined into a unified delivery plan."
            accentHalf="second"
          />

          <div className="space-y-14 md:space-y-16">
            {orderedTags.map((tag) => (
              <div key={tag}>
                <div className="mb-6 max-w-3xl">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    {tag}
                  </h3>
                  {solutionsPage.categoryIntros[tag] ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {solutionsPage.categoryIntros[tag]}
                    </p>
                  ) : null}
                </div>
                <StaggerReveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {solutionsByTag[tag].map((item) => (
                    <StaggerItem key={item.id}>
                      <SolutionCatalogItem item={item} />
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container px-4 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Not sure which services you need?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Describe your goals and we&apos;ll recommend the right combination of
            engineering, infrastructure, design, and advisory support.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              className="h-12 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                Contact us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-lg border-white/15 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/5 hover:text-white"
            >
              <Link href="/about">Learn about us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
