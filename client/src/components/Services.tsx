/**
 * Services Section - Marvelbytes Business Solutions
 *
 * Interactive fan card stack showcasing all solution offerings.
 */

import { motion } from "framer-motion";
import { CardStack } from "@/components/ui/card-stack";
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
    <div className="relative h-full w-full overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition-opacity duration-300",
          item.gradient,
          active ? "opacity-100" : "opacity-90"
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.22),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
        <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur-sm">
          {item.tag}
        </span>

        <div>
          <h3 className="text-xl md:text-2xl font-bold leading-tight text-white">
            {item.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm md:text-base leading-relaxed text-white/80">
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

export default function Services() {
  const isMobile = useIsMobile();

  return (
    <section id="solutions" className="py-20 md:py-32 container">
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
        >
          Our Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-muted-foreground"
        >
          Comprehensive business solutions designed to drive growth, innovation,
          and operational excellence across your organization.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl overflow-hidden px-2"
      >
        <CardStack
          items={solutions}
          cardWidth={isMobile ? 300 : 520}
          cardHeight={isMobile ? 240 : 320}
          maxVisible={isMobile ? 5 : 7}
          spreadDeg={isMobile ? 36 : 48}
          overlap={isMobile ? 0.55 : 0.48}
          autoAdvance={true}
          intervalMs={3200}
          pauseOnHover
          loop
          showDots={false}
          renderCard={(item, state) => (
            <SolutionCard item={item as SolutionItem} active={state.active} />
          )}
        />
      </motion.div>

      <div className="mt-16 md:mt-20 text-center">
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          Ready to transform your business?
        </p>
        <button className="btn-primary text-base px-8 py-3">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
}
