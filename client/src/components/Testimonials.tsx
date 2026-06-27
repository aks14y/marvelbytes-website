"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote: "Marvelbytes transformed our entire business infrastructure. Highly recommended!",
    author: "Sarah Chen",
    role: "CTO at TechVision",
    avatar: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    quote: "Their solutions are innovative and scalable. Simply brilliant.",
    author: "Marcus Johnson",
    role: "Founder at InnovateLabs",
    avatar: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    quote: "The attention to detail and customer support is unmatched in the industry.",
    author: "Elena Rodriguez",
    role: "CEO at DigitalCraft",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export function TestimonialsContent({
  className,
  showHeader = false,
  flow,
}: {
  className?: string;
  showHeader?: boolean;
  flow?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role)
  const [displayedAuthor, setDisplayedAuthor] = useState(testimonials[0].author)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)

    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote)
      setDisplayedRole(testimonials[index].role)
      setDisplayedAuthor(testimonials[index].author)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 400)
    }, 200)
  }

  return (
    <div className={cn("w-full", className)}>
      {showHeader ? (
        <div className={flow ? "mb-3 text-center md:mb-4" : "mb-8 text-center md:mb-10"}>
          <h2
            className={cn(
              "font-bold text-white",
              flow ? "text-2xl md:text-3xl mb-2" : "text-3xl md:text-5xl mb-4"
            )}
          >
            What our clients say
          </h2>
          <p
            className={cn(
              "mx-auto max-w-2xl text-white/75",
              flow ? "text-sm md:text-base" : "text-base md:text-lg"
            )}
          >
            Trusted by industry leaders and innovative companies worldwide
          </p>
        </div>
      ) : null}

      <div className={cn("flex flex-col items-center", flow ? "gap-4 py-1" : "gap-8 py-4 md:gap-10")}>
      {/* Quote Container */}
      <div className="relative px-8">
        <span className="absolute -left-2 -top-6 text-7xl font-serif text-white/[0.06] select-none pointer-events-none">
          "
        </span>

        <p
          className={cn(
            "font-light text-white text-center max-w-lg leading-relaxed transition-all duration-400 ease-out",
            flow ? "text-lg md:text-xl" : "text-2xl md:text-3xl",
            isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100",
          )}
        >
          {displayedQuote}
        </p>

        <span className="absolute -right-2 -bottom-8 text-7xl font-serif text-white/[0.06] select-none pointer-events-none">
          "
        </span>
      </div>

      <div className="flex flex-col items-center gap-6 mt-2">
        {/* Author and Role text */}
        <div className="text-center">
          <p
            className={cn(
              "text-sm font-medium text-white transition-all duration-500 ease-out",
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
            )}
          >
            {displayedAuthor}
          </p>
          <p
            className={cn(
              "text-xs text-white/60 tracking-[0.2em] uppercase transition-all duration-500 ease-out",
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
            )}
          >
            {displayedRole}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index
            const isHovered = hoveredIndex === index && !isActive

            return (
              <button
                key={testimonial.id}
                onClick={() => handleSelect(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative flex items-center gap-0 rounded-full cursor-pointer",
                  "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isActive ? "bg-white shadow-lg" : "bg-transparent hover:bg-white/10",
                  isActive || isHovered ? "pr-4 pl-2 py-2" : "p-0.5",
                )}
              >
                {/* Avatar with smooth ring animation */}
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className={cn(
                      "w-8 h-8 rounded-full object-cover",
                      "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isActive ? "ring-2 ring-white/30" : "ring-0",
                      !isActive && "hover:scale-105",
                    )}
                  />
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    isActive || isHovered ? "grid-cols-[1fr] opacity-100 ml-2" : "grid-cols-[0fr] opacity-0 ml-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <span
                      className={cn(
                        "text-sm font-medium whitespace-nowrap block",
                        "transition-colors duration-300",
                        isActive ? "text-black" : "text-white",
                      )}
                    >
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return <TestimonialsContent />
}
