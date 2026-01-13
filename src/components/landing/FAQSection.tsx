"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Is LaunchKit really free?",
    answer:
      "Yes, 100% free. No hidden fees, no credit card required, no premium tiers. Generate unlimited documents forever.",
  },
  {
    question: "Are these documents legally binding?",
    answer:
      "Our templates are professionally crafted and widely used. However, we recommend having a lawyer review documents for complex business needs or specific jurisdictions.",
  },
  {
    question: "What regulations do the templates cover?",
    answer:
      "Our templates are designed to comply with major regulations including GDPR, CCPA, CalOPPA, and other international privacy laws. We update them regularly as laws change.",
  },
  {
    question: "Can I customize the generated documents?",
    answer:
      "Absolutely. All documents are generated based on your inputs and can be exported as Markdown or HTML for further editing in any text editor.",
  },
  {
    question: "Do you store my data?",
    answer:
      "We store generated documents locally in your browser for your convenience. No personal data is sent to external servers. Your information stays with you.",
  },
  {
    question: "How often are templates updated?",
    answer:
      "We monitor legal requirements continuously and update our templates whenever regulations change to ensure you always have compliant documents.",
  },
];

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium text-primary bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Questions?{" "}
            <span className="font-display italic text-primary">Answered.</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Everything you need to know about LaunchKit.
          </p>
        </div>

        {/* FAQ Grid - Editorial layout */}
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-16">
          {/* Left: Question list */}
          <div className="space-y-1">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const num = String(index + 1).padStart(2, "0");

              return (
                <button
                  key={index}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`group w-full text-left transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className={`relative py-4 sm:py-5 border-b transition-colors duration-300 ${
                    isOpen ? "border-primary/40" : "border-border/30 hover:border-border/60"
                  }`}>
                    {/* Active indicator line */}
                    <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-primary transition-all duration-300 ${
                      isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                    }`} style={{ transformOrigin: "top" }} />

                    <div className="flex items-start gap-4 sm:gap-6 pl-3 sm:pl-4">
                      {/* Number */}
                      <span className={`font-display text-lg sm:text-xl transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-muted-foreground/40 group-hover:text-muted-foreground/60"
                      }`}>
                        {num}
                      </span>

                      {/* Question */}
                      <span className={`flex-1 text-sm sm:text-base font-medium transition-colors duration-300 ${
                        isOpen ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                        {faq.question}
                      </span>

                      {/* Arrow */}
                      <svg
                        viewBox="0 0 24 24"
                        className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "text-primary rotate-45"
                            : "text-muted-foreground/40 group-hover:text-muted-foreground/60 group-hover:translate-x-1"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>

                  {/* Mobile answer - shows inline on mobile */}
                  <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <p className="pt-4 pb-2 pl-12 sm:pl-16 pr-4 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Answer panel - desktop only */}
          <div className="hidden lg:block relative">
            <div className={`sticky top-32 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`} style={{ transitionDelay: "400ms" }}>
              {/* Answer card */}
              <div className="relative p-8 xl:p-10 rounded-2xl bg-card/40 border border-border/30 backdrop-blur-sm">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-3 right-3 w-12 h-12 border-t border-r border-primary/20" />
                </div>

                {/* Large decorative number */}
                <div className="absolute -top-6 -left-2 text-[120px] font-display text-primary/[0.06] leading-none select-none pointer-events-none">
                  {openIndex !== null ? String(openIndex + 1).padStart(2, "0") : "01"}
                </div>

                <div className="relative">
                  {/* Question label */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-xs font-medium tracking-wide uppercase text-primary/80">
                      Answer
                    </span>
                  </div>

                  {/* Answer content with crossfade */}
                  <div className="relative min-h-[100px]">
                    {faqs.map((faq, index) => (
                      <p
                        key={index}
                        className={`text-base xl:text-lg text-muted-foreground leading-relaxed transition-all duration-500 ${
                          openIndex === index
                            ? "opacity-100 translate-y-0 relative"
                            : "opacity-0 translate-y-4 absolute inset-0"
                        }`}
                      >
                        {faq.answer}
                      </p>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <div className="flex items-center justify-between text-xs text-muted-foreground/60">
                      <span>Question {openIndex !== null ? openIndex + 1 : 1} of {faqs.length}</span>
                      <div className="flex gap-1">
                        {faqs.map((_, i) => (
                          <div
                            key={i}
                            className={`w-6 h-0.5 rounded-full transition-colors duration-300 ${
                              i === openIndex ? "bg-primary" : "bg-border/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
