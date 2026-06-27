/**
 * Testimonials Slider - Marvelbytes Business Solutions
 * 
 * Design System: Modern Dark Theme with Aurora Effects
 * - Carousel of client testimonials
 * - Smooth transitions
 * - Navigation controls
 */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Industries",
    role: "CTO",
    content:
      "Marvelbytes transformed our entire infrastructure. Their team's expertise and dedication were instrumental in our digital transformation journey.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Global Finance Solutions",
    role: "CEO",
    content:
      "Working with Marvelbytes was a game-changer. They delivered a custom solution that exceeded our expectations and improved our efficiency by 40%.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    company: "Innovation Labs",
    role: "Product Lead",
    content:
      "The team at Marvelbytes is exceptional. Their attention to detail and commitment to quality is unmatched. Highly recommended!",
    rating: 5,
  },
  {
    name: "David Park",
    company: "Enterprise Systems Inc",
    role: "VP of Operations",
    content:
      "Outstanding service and support. Marvelbytes helped us scale our operations seamlessly. They're true partners in our success.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    company: "Digital Ventures",
    role: "Founder",
    content:
      "From consultation to deployment, Marvelbytes provided exceptional value. Their innovative solutions helped us stay ahead of the competition.",
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-32 container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="heading-lg mb-4">What our clients say</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Trusted by leading organizations worldwide to deliver exceptional
          results and drive business growth.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <div className="card-elevated p-6 md:p-8 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground mb-6 flex-1 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 justify-center mt-8">
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="cursor-pointer p-2 rounded-lg bg-secondary hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="cursor-pointer p-2 rounded-lg bg-secondary hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
