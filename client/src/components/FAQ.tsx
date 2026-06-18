/**
 * FAQ Section - Marvelbytes Business Solutions
 * 
 * Design System: Modern Dark Theme
 * - Full-width accordion-style FAQ
 * - Smooth animations
 * - Common questions about services
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, index, isOpen, onClick }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="card-elevated p-6 md:p-8 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
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
            <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-20 md:py-32 bg-card/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Still have questions? We're here to help.
            </p>
            <button className="btn-primary text-base px-8 py-3">Contact Our Team</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
