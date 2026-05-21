# OCTETERS — CLAUDE CODE PROJECT INSTRUCTIONS

Read this entire file before touching any code.
This is the single source of truth for this project.

---

## ⚠️ DESIGN SYSTEM — READ THIS FIRST

We are cloning doss.com as our design foundation.
Doss.com IS our color system, spacing system, and visual style.
Do not invent colors. Do not use your own judgment on spacing.
Match doss.com exactly on every visual decision.

When unsure about any color, spacing, or layout detail:
→ Default to what doss.com does. Always.

---

## PROJECT OVERVIEW

Octeters builds AI-enabled software platforms for
operations, commerce, and marketplaces.

Website goal: Generate qualified leads.
Every section either builds trust or moves toward "Book a Call."

---

## TECH STACK

- Next.js 14 App Router
- TypeScript
- Tailwind CSS v3
- Framer Motion (animations)
- GSAP + ScrollTrigger (scroll animations)
- Lenis (smooth scroll)
- Lucide React (icons)
- Inter (Google Font — via next/font/google)

---

## SKILLS TO READ

Before any UI or frontend task, read these skill files:
- UI-UX-Pro-Max skill
- web-design-guidelines skill

Before any animation task, read the animation skill.

Call skills at the START of every task — not after.

---

## FONT

Inter — loaded via next/font/google.
Weights: 400, 500, 600, 700.
NEVER use any other font.
Apply to the entire project via layout.tsx.

Doss uses a different font — we replace it with Inter.
Match Doss font SIZES and WEIGHTS exactly.
Only the font family changes to Inter.

---

## COLOR SYSTEM

We are not inventing a color system.
We are copying doss.com's colors exactly.

How to get the correct color for any element:
1. Open doss.com in Chrome
2. Right-click the element → Inspect
3. Read the exact color from the Styles panel
4. Use that exact value

Do NOT approximate colors.
Do NOT use Tailwind named colors (blue-500, gray-900 etc.)
Use exact hex or rgba values inspected from doss.com.

Common Doss values (verify by inspecting — these may not be exact):
  Page background:     very dark, near black
  Text primary:        white or near-white
  Text muted:          rgba white, low opacity
  Primary button:      inspect from doss.com
  Border:              very subtle, low opacity white

When in doubt: inspect doss.com. Do not guess.

---

## SPACING SYSTEM

Copy doss.com spacing exactly.
Inspect padding, margin, gap values from Chrome DevTools.
Do not approximate. Use exact pixel values.

General Doss patterns (verify by inspecting):
  Section padding vertical:  generous — likely 80-120px
  Content max-width:         inspect from doss.com
  Content horizontal padding: inspect from doss.com
  Between elements:          inspect from doss.com

Rule: when unsure, inspect. Never guess spacing.

---

## LAYOUT SYSTEM

Reference: doss.com
Copy their layout decisions exactly:
  - Same max-width container
  - Same grid structure
  - Same element order within sections
  - Same responsive breakpoints where possible

---

## DESIGN REFERENCES

Primary reference: doss.com
  → Clone this exactly. This is our design system.

Secondary references (for later inspiration only,
do not use until clone is complete):
  - cradle.bio (readability, margins, transitions)
  - huly.io (mockup glow effect)
  - viteplus.dev (typography, color use)

---

## COMPONENT STRUCTURE

src/
  app/
    layout.tsx           ← Inter font, metadata, globals
    page.tsx             ← Homepage — imports all sections
  components/
    layout/
      Navbar.tsx
      AnnouncementBanner.tsx
      Footer.tsx
    sections/
      HeroSection.tsx
      LogoStrip.tsx
      ValueProps.tsx
      ServicesSection.tsx
      SolutionsSection.tsx
      CaseStudies.tsx
      ProcessSection.tsx
      Testimonials.tsx
      CTASection.tsx
      ContactForm.tsx
    ui/
      Button.tsx
      Badge.tsx
      Card.tsx
    intro/
      IntroOverlay.tsx
  lib/
    utils.ts

---

## WHAT IS BUILT SO FAR

- [x] Project setup (Next.js 14, TypeScript, Tailwind)
- [ ] globals.css
- [ ] Inter font in layout.tsx
- [ ] Navbar.tsx
- [ ] AnnouncementBanner.tsx
- [ ] HeroSection.tsx
- [ ] Everything else

Update this checklist as each piece is completed.

---

## HOW TO CLONE DOSS CORRECTLY

This is the most important section. Read carefully.

DO NOT use screenshots to clone.
Claude Code cannot reliably process images.

Instead — for every element you are cloning:
1. Open doss.com in Chrome
2. Right-click the element → Inspect
3. Read exact values from the Styles panel:
   - font-size, font-weight, line-height, letter-spacing
   - color, background, border
   - padding, margin, gap, width, height
   - border-radius, box-shadow
4. Use those exact values in the code

This is the only reliable way to get a pixel-perfect clone.

---

## RULES — NEVER BREAK THESE

1. Clone doss.com exactly — it is the design system
2. Never approximate colors — inspect and use exact values
3. Never approximate spacing — inspect and use exact values  
4. Font family is Inter — everything else matches Doss
5. Where Doss has graphics or product screenshots:
   use a dark placeholder div with a Lucide icon centered
   (MonitorDot, LayoutDashboard, or similar)
6. Keep all Doss text content exactly as-is for now
   Text will be replaced with Octeters content later
7. Build ONE section at a time
8. Stop after each section and wait for feedback
9. Run npm run dev after each section — fix all errors
10. Never leave TypeScript errors unresolved
11. Never install new packages without asking first
12. Every animation must respect prefers-reduced-motion
13. No horizontal scroll on any viewport

---

## BUILD ORDER

Build in this exact order. Do not skip ahead.
Stop after each item and wait for confirmation.

1. globals.css — base reset and Inter font setup
2. Navbar.tsx — inspect doss.com nav exactly
3. AnnouncementBanner.tsx — inspect doss.com banner
4. HeroSection.tsx — inspect doss.com hero exactly
5. LogoStrip.tsx
6. ValueProps.tsx (the 3 pillar section)
7. [continue based on instructions]

---

## CURRENT TASK

Clone the doss.com nav and hero section.

Step 1: Build Navbar.tsx
  - Inspect doss.com nav in Chrome DevTools
  - Copy exact colors, spacing, font sizes, layout
  - Replace Doss font with Inter
  - Stop and wait for confirmation

Step 2: Build AnnouncementBanner.tsx  
  - Inspect the thin banner above doss.com nav
  - Copy exactly
  - Stop and wait for confirmation

Step 3: Build HeroSection.tsx
  - Inspect each element of the Doss hero
  - Copy exact values for everything
  - Replace product graphics with dark placeholder + Lucide icon
  - Keep all Doss text as-is
  - Stop and wait for confirmation

---

## INTRO SCREEN

A fullscreen loading intro exists in /components/intro/
It plays on first visit.
Do not modify the intro unless explicitly asked.

---

## NOTES FOR CLAUDE CODE

- You are building a professional client website
- Quality over speed — get it right, not just done
- If something looks wrong, say so before proceeding
- The goal is: someone looking at our site and doss.com 
  side by side should see the same layout and visual style
- The only differences allowed: font family (Inter) 
  and graphics (placeholders)
