/**
 * Projects showcase — what we have built (real portfolio)
 */

"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/ui/card-21";
import { FlipWords } from "@/components/ui/flip-words";
import {
  ScrollReveal,
  StaggerItem,
  StaggerReveal,
} from "@/components/ui/scroll-reveal";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

const PROJECT_FLIP_WORDS = [
  "designed",
  "developed",
  "built",
  "planned",
  "improved",
  "optimized",
] as const;

/** Marvelbytes primary #4369AD as HSL channels for card theming */
const PROJECT_THEME = "216 44% 32%";

export default function ProjectsBuilt() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) =>
      project.categories.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <section id="work" className="bg-background py-20 md:py-32">
      <div className="container px-4">
        <ScrollReveal className="mb-10 md:mb-14">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold normal-case leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl">
            <span className="block">
              We have{" "}
              <FlipWords
                words={PROJECT_FLIP_WORDS}
                className="font-bold text-primary"
              />
            </span>
            <span className="mt-1 block text-white md:mt-2">
              some great projects.
            </span>
          </h2>
        </ScrollReveal>

        <nav
          aria-label="Filter projects by category"
          className="mb-10 flex flex-wrap items-center justify-center gap-y-2 text-sm md:mb-12 md:text-base"
        >
          {projectCategories.map((category, index) => (
            <span key={category} className="inline-flex items-center">
              {index > 0 ? (
                <span className="mx-2 select-none text-primary" aria-hidden>
                  /
                </span>
              ) : null}
              <button
                type="button"
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "cursor-pointer bg-transparent px-0.5 py-1 font-medium transition-colors",
                  activeFilter === category
                    ? "text-primary"
                    : "text-white/60 hover:text-white",
                )}
              >
                {category}
              </button>
            </span>
          ))}
        </nav>

        <StaggerReveal
          key={activeFilter}
          className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id} className="aspect-[4/3] min-h-[280px]">
              <DestinationCard
                imageUrl={project.image}
                location={project.title}
                stats={project.categories.join(" / ")}
                href={project.href}
                themeColor={PROJECT_THEME}
              />
            </StaggerItem>
          ))}
        </StaggerReveal>

        {filteredProjects.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : null}

        <div className="mt-14 text-center md:mt-16">
          <p className="mx-auto max-w-xl text-sm text-muted-foreground md:text-base">
            Have a project in mind? We&apos;d love to add your product to this
            list.
          </p>
          <Button
            asChild
            className="mt-6 h-12 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              Start your project
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
