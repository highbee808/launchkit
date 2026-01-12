"use client";

const steps = [
  {
    number: "01",
    title: "Choose your document",
    description: "Select from 15+ legal document templates including Privacy Policy, Terms of Service, GDPR compliance, and more.",
    visual: (
      <div className="relative w-full aspect-[4/3] rounded-xl bg-card border border-border/50 p-4 overflow-hidden">
        {/* Document type selector mockup */}
        <div className="grid grid-cols-2 gap-2">
          {["Privacy", "Terms", "Cookies", "GDPR"].map((doc, i) => (
            <div
              key={doc}
              className={`p-3 rounded-lg border transition-all ${
                i === 0
                  ? "bg-primary/10 border-primary/40 text-primary"
                  : "bg-secondary/30 border-border/30 text-muted-foreground"
              }`}
            >
              <div className={`w-4 h-4 rounded mb-2 ${i === 0 ? "bg-primary/30" : "bg-muted-foreground/20"}`} />
              <div className="text-xs font-medium">{doc}</div>
            </div>
          ))}
        </div>
        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
      </div>
    ),
  },
  {
    number: "02",
    title: "Add your details",
    description: "Enter your company name, website, and select what data you collect. We customize everything for you.",
    visual: (
      <div className="relative w-full aspect-[4/3] rounded-xl bg-card border border-border/50 p-4 overflow-hidden">
        {/* Form mockup */}
        <div className="space-y-3">
          <div>
            <div className="text-[10px] text-muted-foreground mb-1">Company Name</div>
            <div className="h-8 rounded-lg bg-secondary/50 border border-border/30 flex items-center px-3">
              <span className="text-xs text-foreground">Acme Inc.</span>
              <div className="ml-auto w-1 h-4 bg-primary animate-pulse" />
            </div>
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground mb-1">Website</div>
            <div className="h-8 rounded-lg bg-secondary/50 border border-border/30 flex items-center px-3">
              <span className="text-xs text-muted-foreground">acme.com</span>
            </div>
          </div>
          <div className="flex gap-2">
            {["Email", "Payment", "Location"].map((item, i) => (
              <div
                key={item}
                className={`flex-1 p-2 rounded-lg text-[10px] text-center ${
                  i < 2 ? "bg-primary/10 text-primary border border-primary/30" : "bg-secondary/30 text-muted-foreground border border-border/30"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Export & publish",
    description: "Copy your document or download as Markdown/HTML. Ready to publish on your website in seconds.",
    visual: (
      <div className="relative w-full aspect-[4/3] rounded-xl bg-card border border-border/50 p-4 overflow-hidden">
        {/* Preview mockup */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 rounded-full bg-green-500/60" />
          </div>
          <span className="text-[10px] text-muted-foreground font-mono">privacy-policy.md</span>
        </div>
        <div className="space-y-2 font-mono text-[10px]">
          <div className="text-primary"># Privacy Policy</div>
          <div className="text-muted-foreground">Last updated: Jan 2026</div>
          <div className="text-muted-foreground/70">Acme Inc. respects your privacy...</div>
        </div>
        {/* Export buttons */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2">
          <div className="flex-1 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="text-[10px] text-primary font-medium">Copy</span>
          </div>
          <div className="flex-1 h-7 rounded-lg bg-secondary/50 border border-border/30 flex items-center justify-center">
            <span className="text-[10px] text-muted-foreground">.md</span>
          </div>
        </div>
      </div>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-primary bg-primary/10 border border-primary/20 mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight mb-4">
            Three steps to{" "}
            <span className="italic text-primary">compliant</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            From zero to legally compliant in under a minute. No legal degree required.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 sm:space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-16`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Step number */}
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="text-5xl sm:text-6xl font-display text-primary/20">{step.number}</span>
                  <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent hidden sm:block" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-display tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-md">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
                  {step.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
