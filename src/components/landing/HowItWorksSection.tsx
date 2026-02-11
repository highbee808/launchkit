"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Choose your document",
    description: "Select from 30+ legal document templates.",
  },
  {
    number: "02",
    title: "Add your details",
    description: "Enter company name, website, and data practices.",
  },
  {
    number: "03",
    title: "Export & publish",
    description: "Copy or download as Markdown/HTML.",
  },
];

export function HowItWorksSection() {
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
    <section ref={sectionRef} id="how-it-works" className="relative py-12 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium text-primary bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Three steps to{" "}
            <span className="font-display italic text-primary">compliant</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            From zero to legally compliant in under a minute.
          </p>
        </div>

        {/* Steps - horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Connector line - desktop only */}
              {index < steps.length - 1 && (
                <div className={`hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent transition-all duration-1000 ${
                  isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`} style={{ transitionDelay: `${400 + index * 200}ms`, transformOrigin: "left" }} />
              )}

              {/* Step number */}
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-card border border-border/50 mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-display text-primary">{step.number}</span>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
