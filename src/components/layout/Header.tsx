"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/documents", label: "Documents" },
    { href: "/generated", label: "Generated" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center transition-transform duration-300 ease-out ${
        isVisible
          ? "translate-y-4"
          : "-translate-y-full"
      }`}
    >
      {/* Pill-shaped floating container */}
      <nav
        className="
          relative flex items-center gap-8 px-2 py-2
          rounded-full
          bg-[hsl(0_0%_8%/0.9)] backdrop-blur-md blur-fix
          border border-[hsl(0_0%_100%/0.08)]
          shadow-[0_4px_20px_-4px_hsl(0_0%_0%/0.4)]
        "
      >
        {/* Subtle green accent line at bottom */}
        <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Logo */}
        <Link
          href="/"
          prefetch={true}
          className="flex items-center gap-2.5 pl-2 pr-4 py-1 rounded-full transition-colors duration-150 hover:bg-white/5 group"
        >
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            LaunchKit
          </span>
        </Link>

        {/* Divider */}
        <div className="w-px h-5 bg-white/10" />

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-medium
                  transition-colors duration-150
                  ${isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }
                `}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          href="/documents"
          prefetch={true}
          className="
            flex items-center gap-2 px-4 py-2 rounded-full
            bg-primary text-primary-foreground
            text-sm font-semibold
            transition-colors duration-150
            hover:bg-primary/90
          "
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span>Create</span>
        </Link>
      </nav>
    </header>
  );
}
