/**
 * Shared shell for standalone pages — header, main, footer
 */

import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getLenis } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      return;
    }
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function PageLayout({
  children,
  hideHeader = false,
}: {
  children: ReactNode;
  hideHeader?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-background">
      <ScrollToTop />
      {!hideHeader ? <Header /> : null}
      <main
        className={cn(
          "flex-1 overflow-x-clip",
          !hideHeader && "pt-16 md:pt-20",
        )}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
