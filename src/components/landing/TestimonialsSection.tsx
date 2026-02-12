"use client";

import { useRef, useLayoutEffect, useState, useEffect } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

const row1 = [
  {
    quote:
      "Generated our privacy policy in under a minute. Our lawyer reviewed it and said it was solid.",
    author: "Sarah M.",
    role: "Startup Founder",
  },
  {
    quote:
      "We needed GDPR-compliant terms before our EU launch. LaunchKit had us covered same day.",
    author: "James K.",
    role: "CTO",
  },
  {
    quote:
      "I used to pay $500+ for legal templates. Now I generate them instantly for every new client.",
    author: "Priya S.",
    role: "Freelance Developer",
  },
  {
    quote:
      "The cookie consent policy was exactly what we needed for our e-commerce store.",
    author: "Maria G.",
    role: "Shopify Store Owner",
  },
  {
    quote:
      "Markdown export is a lifesaver. Dropped our privacy policy straight into our docs site.",
    author: "Alex T.",
    role: "DevOps Engineer",
  },
  {
    quote:
      "Finally, legal docs that don't require a law degree to set up. Clean and professional.",
    author: "David L.",
    role: "Indie Hacker",
  },
  {
    quote:
      "We launch MVPs fast and LaunchKit lets us add compliant legal pages just as quickly.",
    author: "Nina R.",
    role: "Product Manager",
  },
  {
    quote:
      "Generated an NDA, terms of service, and privacy policy — all in under five minutes.",
    author: "Rachel H.",
    role: "Agency Owner",
  },
];

const row2 = [
  {
    quote:
      "The disclaimer generator saved me hours. Perfect for my SaaS landing page.",
    author: "Tom B.",
    role: "Software Engineer",
  },
  {
    quote:
      "I recommend LaunchKit to every founder I mentor. Compliance shouldn't slow you down.",
    author: "Dr. Linda W.",
    role: "Startup Advisor",
  },
  {
    quote:
      "Went from zero legal pages to fully compliant in one afternoon. Absolute game changer.",
    author: "Chris P.",
    role: "E-commerce Founder",
  },
  {
    quote:
      "The refund policy template was thorough and professional. Customers trust us more now.",
    author: "Aisha N.",
    role: "Online Course Creator",
  },
  {
    quote:
      "I track all my client projects and LaunchKit handles the legal side. Perfect combo.",
    author: "Jake F.",
    role: "Consultant",
  },
  {
    quote:
      "As a solopreneur, I can't afford a lawyer for every project. LaunchKit is the next best thing.",
    author: "Emma C.",
    role: "Freelance Designer",
  },
  {
    quote:
      "Setup took 30 seconds. Picked a template, filled in my details, done. That's how it should be.",
    author: "Ryan M.",
    role: "Full-Stack Developer",
  },
  {
    quote:
      "Every client site I build now starts with LaunchKit. Legal pages in minutes, not days.",
    author: "Sophia A.",
    role: "Web Developer",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          className="fill-primary"
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  const initials = author
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[300px] rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
      <div className="p-5 relative">
        {/* Decorative quote mark */}
        <div
          className="absolute top-3 right-4 text-[40px] leading-none font-serif select-none pointer-events-none text-primary opacity-[0.08]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          &rdquo;
        </div>

        <Stars />
        <p
          className="text-[13px] leading-relaxed mb-4 relative text-muted-foreground"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>

        {/* Thin separator */}
        <div className="mb-3 h-px bg-gradient-to-r from-border/50 to-transparent" />

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold tracking-wide bg-primary text-primary-foreground shadow-sm">
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold">{author}</p>
            <p className="text-[11px] tracking-wide text-muted-foreground font-mono">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function useElementWidth(
  ref: React.RefObject<HTMLDivElement | null>
): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function update() {
      if (ref.current) {
        setWidth(ref.current.scrollWidth);
      }
    }
    update();

    const ro = new ResizeObserver(update);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  return width;
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function wrap(min: number, max: number, v: number): number {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function VelocityRow({
  items,
  baseVelocity,
  numCopies = 4,
}: {
  items: typeof row1;
  baseVelocity: number;
  numCopies?: number;
}) {
  const reducedMotion = useReducedMotion();
  const hovered = useRef(false);
  const baseX = useMotionValue(0);

  const copyRef = useRef<HTMLDivElement>(null);
  const copyWidth = useElementWidth(copyRef);

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  useAnimationFrame((_t, delta) => {
    if (reducedMotion || copyWidth === 0 || hovered.current) return;
    baseX.set(baseX.get() + baseVelocity * (delta / 1000));
  });

  const copies = [];
  for (let i = 0; i < numCopies; i++) {
    copies.push(
      <div
        key={i}
        ref={i === 0 ? copyRef : undefined}
        className="flex gap-5 flex-shrink-0"
      >
        {items.map((item, idx) => (
          <ReviewCard
            key={`${i}-${idx}`}
            quote={item.quote}
            author={item.author}
            role={item.role}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="marquee-container overflow-hidden relative"
      onMouseEnter={() => {
        hovered.current = true;
      }}
      onMouseLeave={() => {
        hovered.current = false;
      }}
    >
      <motion.div className="flex gap-5" style={{ x }}>
        {copies}
      </motion.div>
    </div>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-20 md:py-24 overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-primary/[0.02] blur-[40px] rounded-full pointer-events-none" />

      {/* Section header */}
      <div
        className={`text-center mb-10 sm:mb-14 px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium text-primary bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
          Testimonials
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
          Loved by{" "}
          <span className="font-display italic text-primary">builders</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Founders, freelancers, and developers trust LaunchKit to handle their
          legal docs.
        </p>
      </div>

      {/* Two-row velocity marquee — constrained width */}
      <div className="max-w-6xl mx-auto overflow-hidden marquee-mask">
        <div
          className={`space-y-5 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <VelocityRow items={row1} baseVelocity={-40} />
          <VelocityRow items={row2} baseVelocity={40} />
        </div>
      </div>

      <style>{`
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, white 4%, white 96%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 4%, white 96%, transparent);
        }

        @media (max-width: 768px) {
          .marquee-mask {
            mask-image: linear-gradient(to right, transparent, white 2%, white 98%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, white 2%, white 98%, transparent);
          }
        }
      `}</style>
    </section>
  );
}
