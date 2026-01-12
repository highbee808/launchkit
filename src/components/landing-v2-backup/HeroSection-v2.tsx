"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-8 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blurred orb top right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        {/* Small orb bottom left */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-2xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating document mockups - Desktop only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Left floating card */}
        <div className="absolute left-[8%] top-[25%] animate-float opacity-60">
          <div className="w-48 h-32 rounded-xl bg-card/80 backdrop-blur-sm border border-border/30 p-4 transform -rotate-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="h-2 w-20 bg-muted-foreground/20 rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-muted-foreground/10 rounded" />
              <div className="h-2 w-3/4 bg-muted-foreground/10 rounded" />
              <div className="h-2 w-1/2 bg-muted-foreground/10 rounded" />
            </div>
          </div>
        </div>

        {/* Right floating card */}
        <div className="absolute right-[10%] top-[30%] animate-float-delayed opacity-50">
          <div className="w-44 h-28 rounded-xl bg-card/60 backdrop-blur-sm border border-border/20 p-4 transform rotate-3 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
              <div className="h-1.5 w-16 bg-muted-foreground/15 rounded" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-full bg-muted-foreground/10 rounded" />
              <div className="h-1.5 w-2/3 bg-muted-foreground/10 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-border/30 mb-6 sm:mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground">100% free. No account needed.</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in delay-100">
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-tight text-foreground mb-2">
            Legal docs that
          </span>
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display italic text-primary">
            actually ship.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6 sm:mt-8 mb-8 sm:mb-10 animate-fade-in delay-200 leading-relaxed">
          Generate privacy policies, terms, and compliance docs in{" "}
          <span className="text-foreground font-medium">under 60 seconds</span>.
          <br className="hidden sm:block" />
          Built for founders who&apos;d rather build than write legal.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in delay-300">
          <Link href="/documents">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base font-semibold transition-all duration-300 hover:scale-[1.02] glow-green-sm hover:glow-green group"
            >
              <span>Start Generating</span>
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto text-muted-foreground hover:text-foreground rounded-full px-6 h-14 text-base font-medium transition-all duration-200"
            >
              See how it works
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 sm:mt-14 animate-fade-in delay-400">
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary" fill="currentColor">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm">GDPR Ready</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary" fill="currentColor">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm">CCPA Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary" fill="currentColor">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm">15+ Templates</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-subtle hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
