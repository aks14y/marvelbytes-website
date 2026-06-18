/**
 * About Section - Marvelbytes Business Solutions
 * 
 * Design System: Modern Dark Theme
 * - Company mission and values
 * - Animated number counters with blur effect
 * - Team highlights
 */

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { FrostedGlassCard } from "@/components/ui/frosted-glass-card";

const stats = [
  { label: "Years of Experience", value: 10, suffix: "+" },
  { label: "Clients Served", value: 500, suffix: "+" },
  { label: "Projects Completed", value: 1000, suffix: "+" },
  { label: "Team Members", value: 150, suffix: "+" },
];

const values = [
  "Innovation at every step",
  "Client-first approach",
  "Quality and excellence",
  "Transparent communication",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 container">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
          >
            About Marvelbytes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl"
          >
            We're a team of passionate technologists dedicated to delivering
            innovative solutions that drive real business impact. Since our
            founding, we've partnered with leading organizations to transform
            their digital capabilities.
          </motion.p>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {stats.map((stat) => (
            <FrostedGlassCard
              key={stat.label}
              surface="dark"
              className="rounded-2xl p-6 md:p-8"
            >
              <AnimatedCounter
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                duration={2.5}
              />
            </FrostedGlassCard>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FrostedGlassCard surface="dark" className="rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
          </FrostedGlassCard>
        </motion.div>
      </div>
    </section>
  );
}
