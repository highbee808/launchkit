"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface DocumentCardProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export function DocumentCard({ id, title, description, icon, delay = 0 }: DocumentCardProps) {
  return (
    <Link href={`/generate?type=${id}`}>
      <div
        className="group relative p-5 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm blur-fix gpu-boost transition-all duration-300 hover:bg-card hover:border-primary/30 hover:scale-[1.02] cursor-pointer"
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col items-center text-center gap-3">
          {/* Icon */}
          <div className="p-3 rounded-xl bg-secondary/50 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
            {icon}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
          <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </Link>
  );
}
