/**
 * FAQ Section - Marvelbytes Business Solutions
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { SectionChapter } from "@/components/ui/section-chapter";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { StaggerItem, StaggerReveal } from "@/components/ui/scroll-reveal";
import { FAQ_BACKGROUND_IMAGE } from "@/data/hero-images";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does Marvelbytes offer?",
    answer:
      "We provide comprehensive business solutions including custom development, cloud infrastructure, security & compliance, data analytics, team augmentation, and strategic consulting. Each service is tailored to your specific business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we offer comprehensive post-deployment support including maintenance, monitoring, updates, and technical assistance. Support packages can be customized to your requirements.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile development methodology with regular sprints, client feedback loops, and transparent communication. You'll have visibility into progress at every stage of the project.",
  },
  {
    question: "Can you work with existing systems?",
    answer:
      "Absolutely. We specialize in integrating with existing systems and legacy applications. Our team has extensive experience in system migration and modernization.",
  },
  {
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team augmentation. We'll work with you to find a model that fits your budget and needs.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="card-elevated cursor-pointer p-4 transition-colors hover:border-primary/30 md:p-6"
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-semibold text-foreground md:text-lg">{question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-5 w-5 shrink-0 text-primary" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQContent({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("mx-auto w-full max-w-4xl", className)}>
      <StaggerReveal className="space-y-3">
        {faqs.map((faq, index) => (
          <StaggerItem key={faq.question}>
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          </StaggerItem>
        ))}
      </StaggerReveal>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 text-center md:mt-14"
      >
        <p className="mb-4 text-base text-white/60 md:text-lg">
          Still have questions? We&apos;re here to help.
        </p>
        <Link href="/contact" className="btn-primary inline-block px-8 py-3 text-base">
          Contact Our Team
        </Link>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  return (
    <ParallaxSection
      id="questions"
      singleImage={FAQ_BACKGROUND_IMAGE}
      monochrome={false}
      className="parallax--faq bg-surface py-20 md:py-32"
    >
      <div className="container px-4">
        <SectionChapter
          title="Straight answers, no jargon"
          subtitle="Find answers to common questions about our services and process."
          align="center"
          accentHalf="second"
        />
        <FAQContent />
      </div>
    </ParallaxSection>
  );
}
