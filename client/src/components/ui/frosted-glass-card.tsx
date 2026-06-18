import * as React from "react"

import { cn } from "@/lib/utils"

export interface FrostedGlassCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  containerClassName?: string
  surface?: "light" | "dark"
  tilt?: boolean
}

export function FrostedGlassCard({
  children,
  className,
  containerClassName,
  surface = "light",
  tilt = true,
  ...props
}: FrostedGlassCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!tilt) return

    const card = cardRef.current
    if (!card) return

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateY = ((x - centerX) / centerX) * 10
      const rotateX = ((y - centerY) / centerY) * -10

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      card.style.setProperty("--mouse-x", `${x}px`)
      card.style.setProperty("--mouse-y", `${y}px`)
    }

    const handleMouseLeave = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)"
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [tilt])

  return (
    <div className={cn("frosted-glass-container", containerClassName)}>
      <div
        ref={cardRef}
        className={cn(
          "frosted-glass-card",
          surface === "dark"
            ? "frosted-glass-card-dark"
            : "frosted-glass-card-light",
          className
        )}
        {...props}
      >
        <div className="relative z-[1]">{children}</div>
      </div>
    </div>
  )
}
