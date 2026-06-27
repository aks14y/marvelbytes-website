import { splitTitleHalf, type TitleAccentHalf } from "@/lib/split-title";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface SplitSectionTitleProps {
  title: string;
  accentHalf?: TitleAccentHalf;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SplitSectionTitle({
  title,
  accentHalf = "second",
  className,
  as: Tag = "h2",
}: SplitSectionTitleProps) {
  const [first, second] = splitTitleHalf(title);
  const hasSplit = Boolean(first && second);

  if (!hasSplit) {
    return (
      <Tag
        className={cn(
          className,
          accentHalf === "first" ? "text-primary" : "text-white",
        )}
      >
        {title}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <span className={accentHalf === "first" ? "text-primary" : "text-white"}>
        {first}
      </span>{" "}
      <span className={accentHalf === "second" ? "text-primary" : "text-white"}>
        {second}
      </span>
    </Tag>
  );
}

interface SectionChapterProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  /** Which half of the title uses primary color. Alternates across sections. */
  accentHalf?: TitleAccentHalf;
}

export function SectionChapter({
  title,
  subtitle,
  align = "left",
  className,
  accentHalf = "second",
}: SectionChapterProps) {
  return (
    <ScrollReveal className={cn("mb-10 md:mb-14", className)}>
      <SplitSectionTitle
        title={title}
        accentHalf={accentHalf}
        className={cn(
          "text-3xl font-bold normal-case leading-[1.05] tracking-tight md:text-5xl lg:text-6xl",
          align === "center" && "mx-auto text-center",
        )}
      />
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base text-muted-foreground md:text-lg",
            align === "center" && "mx-auto text-center",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </ScrollReveal>
  );
}
