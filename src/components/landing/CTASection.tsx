"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Top fade for smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border border-border/30 mb-4 sm:mb-6">
          <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
          <span className="text-xs sm:text-sm text-muted-foreground">No signup required</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 px-2">
          Ready to get{" "}
          <span className="font-display italic text-primary">compliant?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 px-4">
          Generate your first document in under 60 seconds.
        </p>

        {/* CTA */}
        <div className={`flex justify-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link href="/documents">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 sm:px-10 h-12 sm:h-14 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 group"
            >
              <span>Start Generating Free</span>
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Trust badges */}
        <div className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 text-muted-foreground/60 transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span className="text-[10px] sm:text-xs">Secure</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
            <span className="text-[10px] sm:text-xs">No Card</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] sm:text-xs">60 Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
