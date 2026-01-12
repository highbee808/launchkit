"use client";

const stats = [
  { value: "10K+", label: "Documents Generated" },
  { value: "60s", label: "Average Generation Time" },
  { value: "15+", label: "Document Templates" },
  { value: "100%", label: "Free Forever" },
];

const testimonials = [
  {
    quote: "Saved us thousands on legal fees. Had our privacy policy and terms ready in minutes instead of weeks.",
    author: "Sarah Chen",
    role: "Founder, TechStart",
    avatar: "SC",
  },
  {
    quote: "Finally, legal docs that don't put me to sleep. Clean, professional, and actually makes sense.",
    author: "Marcus Johnson",
    role: "CEO, AppVenture",
    avatar: "MJ",
  },
  {
    quote: "The GDPR template was exactly what we needed to launch in Europe. Compliance made easy.",
    author: "Elena Rodriguez",
    role: "CTO, DataFlow",
    avatar: "ER",
  },
];

export function SocialProofSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card/30 border border-border/30 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-display tracking-tight">
            Loved by <span className="italic text-primary">founders</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-4xl text-primary/10 font-serif">
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
