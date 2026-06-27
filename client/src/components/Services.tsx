/**
 * Services Section - Marvelbytes Business Solutions
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { CardStack } from "@/components/ui/card-stack";
import { SectionChapter } from "@/components/ui/section-chapter";
import { solutions, type SolutionItem } from "@/data/solutions";
import { useIsMobile } from "@/hooks/useMobile";
import { cn } from "@/lib/utils";

function SolutionCard({
  item,
  active,
}: {
  item: SolutionItem;
  active: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-card">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${item.image})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
        <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur-sm">
          {item.tag}
        </span>

        <div>
          <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/80 md:text-base">
            {item.description}
          </p>
          {active ? (
            <p className="mt-4 text-xs text-white/50">
              Swipe or use arrow keys to explore more solutions
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function ServicesContent({ className }: { className?: string }) {
  const isMobile = useIsMobile();

  return (
    <div className={cn("mx-auto w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl overflow-hidden"
      >
        <CardStack
          items={solutions}
          cardWidth={isMobile ? 280 : 480}
          cardHeight={isMobile ? 220 : 300}
          maxVisible={isMobile ? 5 : 7}
          spreadDeg={isMobile ? 36 : 48}
          overlap={isMobile ? 0.55 : 0.48}
          autoAdvance
          intervalMs={3200}
          pauseOnHover
          loop
          showDots={false}
          renderCard={(item, state) => (
            <SolutionCard item={item as SolutionItem} active={state.active} />
          )}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 text-center md:mt-16"
      >
        <p className="mb-4 text-base text-white/60 md:text-lg">
          Ready to transform your business?
        </p>
        <Link
          href="/contact"
          className="btn-primary inline-block px-8 py-3 text-base"
        >
          Contact us
        </Link>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="solutions" className="bg-surface py-20 md:py-32">
      <div className="container">
        <SectionChapter
          title="Not just services — full stack expertise"
          subtitle="Comprehensive business solutions designed to drive growth, innovation, and operational excellence."
          align="center"
          accentHalf="first"
        />
        <ServicesContent />
      </div>
    </section>
  );
}
