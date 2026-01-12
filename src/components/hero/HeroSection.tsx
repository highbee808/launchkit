"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const documentTypes = [
  {
    id: "privacy",
    title: "Privacy Policy",
    description: "GDPR & CCPA compliant",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "terms",
    title: "Terms of Service",
    description: "Protect your business",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    description: "Cookie consent info",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="8" cy="9" r="1.5" fill="currentColor" />
        <circle cx="15" cy="8" r="1" fill="currentColor" />
        <circle cx="10" cy="14" r="1.5" fill="currentColor" />
        <circle cx="16" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
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
        <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in delay-200 px-2">
          Generate privacy policies, terms of service, and legal pages in seconds. Not hours.
          Professional. Compliant. Actually readable.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in delay-300">
          <Link href="/documents">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 glow-green-sm hover:glow-green"
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
          <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

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

      {/* 3 Document Type Cards + CTA */}
      <div className="relative z-10 mt-8 sm:mt-12 w-full max-w-4xl mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-3 gap-2 sm:gap-3 animate-fade-in delay-500">
          {documentTypes.map((doc) => (
            <Link
              key={doc.id}
              href={`/generate?type=${doc.id}`}
              className="group"
            >
              <div className="relative p-3 sm:p-5 rounded-lg sm:rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:border-primary/30 hover:scale-[1.02] cursor-pointer">
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center gap-2 sm:gap-3">
                  {/* Icon */}
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-secondary/50 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                    {doc.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {doc.title}
                  </h3>

                  {/* Description - hidden on mobile */}
                  <p className="hidden sm:block text-xs text-muted-foreground">
                    {doc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA to view all documents */}
        <div className="text-center mt-6 sm:mt-8 animate-fade-in delay-600">
          <Link href="/documents">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>View all 15+ templates</span>
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
