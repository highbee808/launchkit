"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-8 sm:pb-12 overflow-hidden">
      {/* Original gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 mb-6 sm:mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground">Free to use. No signup required.</span>
        </div>

        {/* Headline - "kill the vibe" in Instrument Serif */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 animate-fade-in delay-100 px-2">
          Legal docs that don&apos;t
          <br />
          <span className="font-display italic text-primary">kill the vibe.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xs sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in delay-200 px-2">
          Generate privacy policies, terms of service, and legal pages in seconds. Not hours.
          Professional. Compliant. Actually readable.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in delay-300">
          <Link href="/documents">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor">
                <path d="M8 5.14v14l11-7z" />
              </svg>
              Start Generating
            </Button>
          </Link>
        </div>
      </div>

      {/* Preview card */}
      <div className="relative z-10 mt-10 sm:mt-16 w-full max-w-4xl mx-auto animate-slide-up delay-400 px-4 sm:px-0">
        <div className="relative rounded-xl sm:rounded-2xl bg-card border border-border/50 p-4 sm:p-6 backdrop-blur-sm overflow-hidden">
          {/* Green accent glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

          {/* Window header */}
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[10px] sm:text-xs text-muted-foreground font-mono truncate">privacy-policy.md</span>
          </div>

          {/* Code content - properly laid out */}
          <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm overflow-x-auto">
            <div className="text-primary font-semibold"># Privacy Policy</div>
            <div className="text-muted-foreground">
              <span className="text-foreground">Last updated:</span>{" "}
              <span className="whitespace-nowrap">
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <div className="text-muted-foreground leading-relaxed">
              Your Company Name (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy...
            </div>
            <div className="text-primary/60 pt-1">## Information We Collect</div>
            <div className="text-muted-foreground leading-relaxed">
              We collect information you provide directly to us...
            </div>
          </div>

          {/* Fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
