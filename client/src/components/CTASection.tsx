/**
 * CTA Section - Marvelbytes Business Solutions
 * 
 * Design System: 21st Dev Refined
 * - Call-to-action with compelling copy
 * - Two-column layout with image and text
 * - Primary and secondary buttons
 */

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card-elevated p-8 md:p-16 max-w-4xl mx-auto"
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's discuss how Marvelbytes can help you achieve your business
            goals with cutting-edge technology and strategic solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary text-base px-8 py-3">Download Our Brochure</button>
          </div>

          <p className="text-base md:text-lg text-muted-foreground mt-8">
            No credit card required. We'll get back to you within 24 hours.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
