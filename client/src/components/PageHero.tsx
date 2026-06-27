import { SectionChapter } from "@/components/ui/section-chapter";
import type { TitleAccentHalf } from "@/lib/split-title";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accentHalf?: TitleAccentHalf;
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  align = "center",
  accentHalf = "first",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-surface py-20 md:py-28",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[40vh] w-[40vh] rounded-full bg-primary/15 blur-[100px]" />
        <div className="absolute -right-1/4 bottom-0 h-[35vh] w-[35vh] rounded-full bg-[#1e3a5f]/25 blur-[110px]" />
      </div>
      <div className="container relative z-10 px-4">
        <SectionChapter
          title={title}
          subtitle={subtitle}
          align={align}
          accentHalf={accentHalf}
          className="mb-0 [&_p]:max-w-3xl"
        />
      </div>
    </section>
  );
}
