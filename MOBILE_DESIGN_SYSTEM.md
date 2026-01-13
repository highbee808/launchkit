# LaunchKit Mobile Design System

A comprehensive guide to the mobile-first design patterns that make this app look premium on all devices.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Breakpoints](#breakpoints)
3. [Typography Scale](#typography-scale)
4. [Spacing System](#spacing-system)
5. [Icon Sizes](#icon-sizes)
6. [Button Sizes](#button-sizes)
7. [Card Design](#card-design)
8. [Navigation Components](#navigation-components)
9. [Section Headers](#section-headers)
10. [Animations](#animations)
11. [Safe Areas](#safe-areas)
12. [Color System](#color-system)
13. [Glass Morphism Effects](#glass-morphism-effects)

---

## Design Philosophy

The LaunchKit mobile design follows these core principles:

1. **Mobile-first**: All styles are written mobile-first, then scaled up
2. **Thumb-friendly**: Touch targets are at least 44px
3. **Readable**: Text sizes never go below 10px, optimal reading at 14-16px
4. **Breathing room**: Generous padding that scales appropriately
5. **Premium feel**: Subtle animations, glass effects, and refined typography

---

## Breakpoints

Using Tailwind CSS default breakpoints:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| (default)  | 0px       | Mobile phones (portrait) |
| `sm:`      | 640px     | Large phones / Small tablets |
| `md:`      | 768px     | Tablets |
| `lg:`      | 1024px    | Laptops / Desktops |
| `xl:`      | 1280px    | Large desktops |

---

## Typography Scale

### Headlines (H1 - Hero)

```
Mobile:    text-3xl    (30px / 1.875rem)
sm:        text-5xl    (48px / 3rem)
md:        text-6xl    (60px / 3.75rem)
lg:        text-7xl    (72px / 4.5rem)
```

**Example:**
```jsx
<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
```

### Section Headers (H2)

```
Mobile:    text-2xl    (24px / 1.5rem)
sm:        text-3xl    (30px / 1.875rem)
md:        text-4xl    (36px / 2.25rem)
lg:        text-5xl    (48px / 3rem)
```

**Example:**
```jsx
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
```

### Card Titles (H3)

```
Mobile:    text-sm     (14px / 0.875rem)
sm:        text-base   (16px / 1rem)
md:        text-lg     (18px / 1.125rem)
```

**Example:**
```jsx
<h3 className="text-sm sm:text-base md:text-lg font-semibold">
```

### Body Text (Paragraphs)

```
Mobile:    text-xs     (12px / 0.75rem)
sm:        text-sm     (14px / 0.875rem)
md:        text-base   (16px / 1rem)
```

**Example:**
```jsx
<p className="text-xs sm:text-sm md:text-base text-muted-foreground">
```

### Subheadlines (Hero subtitle)

```
Mobile:    text-xs     (12px / 0.75rem)
sm:        text-lg     (18px / 1.125rem)
md:        text-xl     (20px / 1.25rem)
```

**Example:**
```jsx
<p className="text-xs sm:text-lg md:text-xl text-muted-foreground">
```

### Badge / Label Text

```
Mobile:    text-[10px] (10px)
sm:        text-xs     (12px / 0.75rem)
```

**Example:**
```jsx
<span className="text-[10px] sm:text-xs font-medium">
```

### Stat Numbers (Display)

```
Mobile:    text-2xl    (24px / 1.5rem)
sm:        text-3xl    (30px / 1.875rem)
md:        text-4xl    (36px / 2.25rem)
lg:        text-5xl    (48px / 3rem)
```

---

## Spacing System

### Section Padding (Vertical)

```
Mobile:    py-12       (48px)
sm:        py-20       (80px)
md:        py-24       (96px)
```

**Example:**
```jsx
<section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6">
```

### Section Padding (Horizontal)

```
Mobile:    px-4        (16px)
sm:        px-6        (24px)
```

### Card Padding

```
Mobile:    p-4         (16px)
sm:        p-6         (24px)
md:        p-8         (32px)
```

**Example:**
```jsx
<div className="p-4 sm:p-6 md:p-8 rounded-xl">
```

### Header Margins (Below section headers)

```
Mobile:    mb-10       (40px)
sm:        mb-16       (64px)
```

### Element Spacing (Gaps)

```
Mobile:    gap-3       (12px)
sm:        gap-4       (16px)
md:        gap-6       (24px)
```

---

## Icon Sizes

### Small Icons (Inline with text)

```
Mobile:    w-3 h-3     (12px)
sm:        w-4 h-4     (16px)
```

### Medium Icons (Feature icons, nav icons)

```
Mobile:    w-5 h-5     (20px)
sm:        w-6 h-6     (24px)
```

### Large Icons (Hero icons, feature highlights)

```
Mobile:    w-10 h-10   (40px)
sm:        w-12 h-12   (48px)
```

### Icon Containers

```
Mobile:    w-10 h-10   (40px) with rounded-lg
sm:        w-12 h-12   (48px) with rounded-xl
```

**Example:**
```jsx
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/50 flex items-center justify-center">
  <svg className="w-5 h-5 sm:w-6 sm:h-6" />
</div>
```

---

## Button Sizes

### Primary CTA Button

```jsx
<Button className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold">
```

- Mobile: `px-6 py-5` (24px horizontal, 20px vertical)
- sm+: `px-8 py-6` (32px horizontal, 24px vertical)
- Font: `text-base sm:text-lg`

### Secondary Button

```jsx
<Button className="rounded-full px-4 sm:px-6 h-10 sm:h-12 text-sm sm:text-base">
```

### Small Button (Tags, filters)

```jsx
<button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full">
```

### Icon Button

```jsx
<button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
```

---

## Card Design

### Standard Card

```jsx
<div className="rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 p-4 sm:p-6 md:p-8 backdrop-blur-sm">
```

**Properties:**
- Border radius: `rounded-xl` (12px) on mobile, `rounded-2xl` (16px) on sm+
- Background: `bg-card/50` (semi-transparent)
- Border: `border border-border/50` (subtle border)
- Backdrop blur: `backdrop-blur-sm` (glass effect)

### Feature Card

```jsx
<div className="group relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:bg-card hover:border-border hover:shadow-xl">
```

### Card with Green Accent Line

```jsx
<div className="relative rounded-xl sm:rounded-2xl bg-card border border-border/50 overflow-hidden">
  {/* Green accent at top */}
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
  {/* Content */}
</div>
```

---

## Navigation Components

### Desktop Header (Floating Pill)

```jsx
<header className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center transition-transform duration-300">
  <nav className="relative flex items-center gap-8 px-2 py-2 rounded-full bg-[hsl(0_0%_8%/0.9)] backdrop-blur-md border border-[hsl(0_0%_100%/0.08)] shadow-[0_4px_20px_-4px_hsl(0_0%_0%/0.4)]">
```

### Mobile Bottom Nav (Floating Pill)

```jsx
<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex justify-center px-4" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
  <nav className="relative flex items-center justify-around w-full max-w-xs h-14 px-2 rounded-full bg-[hsl(0_0%_8%/0.9)] backdrop-blur-xl border border-[hsl(0_0%_100%/0.08)]">
```

**Mobile Nav Item (Active):**
```jsx
<Link className="flex items-center justify-center gap-2 h-10 rounded-full text-primary bg-primary/10 px-4">
  <IconFilled className="w-5 h-5" />
  <span className="text-xs font-semibold">{label}</span>
</Link>
```

**Mobile Nav Item (Inactive):**
```jsx
<Link className="flex items-center justify-center h-10 rounded-full text-muted-foreground w-10">
  <Icon className="w-5 h-5" />
</Link>
```

---

## Section Headers

### Standard Section Header Pattern

```jsx
<div className="text-center mb-10 sm:mb-16">
  {/* Badge */}
  <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium text-primary bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
    Section Label
  </span>

  {/* Title with italic accent */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
    Section{" "}
    <span className="font-display italic text-primary">title</span>
  </h2>

  {/* Subtitle */}
  <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
    Description text here.
  </p>
</div>
```

---

## Animations

### Fade In Up (Page Load)

```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
```

### Scroll-Triggered Animation Pattern

```jsx
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

// Usage in JSX
<div className={`transition-all duration-700 ${
  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
}`}>
```

### Staggered Animation Delays

```jsx
{items.map((item, index) => (
  <div
    className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    style={{ transitionDelay: `${150 + index * 75}ms` }}
  >
```

### Animation Delay Classes

```css
.delay-75 { animation-delay: 75ms; }
.delay-100 { animation-delay: 100ms; }
.delay-150 { animation-delay: 150ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
```

---

## Safe Areas

### iOS Safe Area Handling

```css
:root {
  --safe-area-inset-top: env(safe-area-inset-top, 0px);
  --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
  --safe-area-inset-left: env(safe-area-inset-left, 0px);
  --safe-area-inset-right: env(safe-area-inset-right, 0px);
}
```

### Bottom Navigation Safe Area

```jsx
style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
```

### Page Content with Bottom Nav

```jsx
<main className="flex-1 pb-20 md:pb-0">
```

- Mobile: `pb-20` (80px) to account for bottom nav
- Desktop: `pb-0` (no bottom nav)

---

## Color System

### CSS Variables (Dark Theme - Spotify Inspired)

```css
:root {
  --background: 0 0% 7%;           /* Near black */
  --foreground: 0 0% 100%;         /* White */
  --card: 0 0% 10%;                /* Slightly lighter */
  --card-foreground: 0 0% 100%;
  --primary: 141 76% 48%;          /* Spotify green */
  --primary-foreground: 0 0% 0%;   /* Black text on green */
  --secondary: 0 0% 16%;
  --muted: 0 0% 16%;
  --muted-foreground: 0 0% 70%;    /* Gray text */
  --border: 0 0% 20%;
  --ring: 141 76% 48%;             /* Focus ring - green */
}
```

### Usage

```jsx
// Primary green text
<span className="text-primary">Green text</span>

// Muted gray text
<span className="text-muted-foreground">Gray text</span>

// Card background
<div className="bg-card">

// Semi-transparent backgrounds
<div className="bg-card/50">     // 50% opacity
<div className="bg-primary/10">  // 10% opacity
```

---

## Glass Morphism Effects

### Standard Glass

```css
.glass {
  background: hsl(0 0% 10% / 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid hsl(0 0% 100% / 0.08);
}
```

### Nav Glass (Lighter blur for performance)

```jsx
className="bg-[hsl(0_0%_8%/0.9)] backdrop-blur-md border border-[hsl(0_0%_100%/0.08)]"
```

### Card Glass

```jsx
className="bg-card/50 backdrop-blur-sm border border-border/50"
```

---

## Grid Layouts

### Feature Cards (2 columns mobile, 3 columns desktop)

```jsx
<div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
```

### Stats Grid (2 columns mobile, 4 columns desktop)

```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
```

### Steps (1 column mobile, 3 columns desktop)

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
```

---

## Quick Reference: Mobile-First Pattern

Always write styles in this order:

```jsx
className="
  // 1. Mobile base styles (no prefix)
  text-sm p-4 rounded-xl

  // 2. Small screens (sm:)
  sm:text-base sm:p-6 sm:rounded-2xl

  // 3. Medium screens (md:)
  md:text-lg md:p-8

  // 4. Large screens (lg:)
  lg:text-xl
"
```

---

## Font Stack

### Body Font (DM Sans)

```css
font-family: var(--font-dm-sans), system-ui, sans-serif;
```

### Display Font (Instrument Serif)

```css
.font-display {
  font-family: var(--font-instrument-serif), Georgia, serif;
}
```

**Usage for accent text:**
```jsx
<span className="font-display italic text-primary">accent word</span>
```

---

## Performance Tips

1. **Use `next/font`** instead of CSS `@import` for Google Fonts
2. **Reduce backdrop-blur** on mobile: `backdrop-blur-sm` vs `backdrop-blur-xl`
3. **Simpler gradients on mobile** via media queries
4. **Use `will-change`** sparingly for animated elements
5. **Prefer CSS transitions** over JavaScript animations
6. **Use IntersectionObserver** for scroll-triggered animations

---

## Accessibility

1. **Touch targets**: Minimum 44x44px for buttons
2. **Font sizes**: Never below 10px
3. **Contrast**: Use `text-muted-foreground` (70% white) for secondary text
4. **Reduced motion**: Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

*This design system was developed for LaunchKit - a legal document generator with a premium Spotify-inspired dark theme.*
