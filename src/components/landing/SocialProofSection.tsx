"use client";

const stats = [
  { value: "10K+", label: "Documents Generated" },
  { value: "60s", label: "Average Time" },
  { value: "15+", label: "Templates" },
  { value: "100%", label: "Free Forever" },
];

export function SocialProofSection() {
  return (
    <section className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card/30 border border-border/30 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-primary mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
