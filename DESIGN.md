# Design System Specification: Joyful Minds Counselling
**Concept 4 (V1): Centered Editorial Hero — "Soft Meadow Sanctuary"**
*Practitioner: Rhonda Hilker, MSW, RSW*

---

## 1. Brand Identity & Design Principles

### Purpose & Emotional Tone
Joyful Minds Counselling provides compassionate, evidence-based, and somatic psychotherapy for adults dealing with life transitions, anxiety, neurodivergence, burnout, and trauma across Alberta and Ontario.

- **Warm Sanctuary:** The design avoids cold clinical austerity or generic corporate healthcare tropes. It feels like stepping into a peaceful, sun-warmed natural space.
- **Grounded & Reassuring:** Calm neutrals, organic botanical deep greens, and warm terracotta earth tones cultivate psychological safety and nervous system regulation.
- **Editorial Elegance:** High-craft typography pairings (refined editorial serif headings paired with clean, readable grotesque sans body) inspire credibility, professional rigor, and human warmth.
- **Accessible & Transparent:** Clear fee structures, plain-language clinical focus cards, visible licensing, and zero-pressure calls-to-action minimize cognitive fatigue for individuals seeking mental health support.

---

## 2. Color Palette & Token System

### Core Palette

| Token Name | Hex Code | Tailwind / CSS Mapping | Role & Usage |
| :--- | :--- | :--- | :--- |
| **Warm Canvas / Linen** | `#FAFAF7` | `bg-[#FAFAF7]` | Primary page background tone; soft oat/linen that prevents eye strain |
| **Pure Surface White** | `#FFFFFF` | `bg-white` | Elevated card containers, modals, content tiles |
| **Warm Neutral Tint** | `#F4EFEA` | `bg-[#F4EFEA]` | Sub-tier card background, pill badge fills, subtle dividers |
| **Warm Border Neutral** | `#EBE3DA` | `border-[#EBE3DA]` | Delicate border lines, cards, input frames, badges |
| **Deep Botanical Forest** | `#1C382B` | `text-[#1C382B]`, `bg-[#1C382B]` | Primary headings, brand anchor, dark banner footer, high-contrast text |
| **Earth Terracotta (Primary CTA)** | `#C85A32` | `bg-[#C85A32]`, `hover:bg-[#B34E28]` | Primary action buttons, badges, key interactive highlights |
| **Muted Sage Green** | `#2D5A43` | `text-[#2D5A43]`, `bg-[#2D5A43]` | Secondary buttons, accent icons, clinical trust badges |
| **Deep Charcoal Text** | `#2C332D` | `text-[#2C332D]` | Primary readable body text, high legibility (WCAG AAA) |
| **Muted Slate / Peat** | `#647067` | `text-[#647067]` | Secondary subcopy, clinical descriptions, footnotes, captions |

### Functional Accents & Soft Tints

- **Terracotta Soft Tint:** `#FDF2EC` / `rgba(200, 90, 50, 0.08)` (Used for badge chips, icon backgrounds, focus outlines)
- **Sage Soft Tint:** `#EDF4F0` / `rgba(45, 90, 67, 0.08)` (Used for clinical category badges, checkmarks)
- **Golden Meadow Glow:** `rgba(244, 230, 212, 0.65)` (Atmospheric radial gradient wash over hero photography)

---

## 3. Typography Scale & Hierarchy

### Typefaces
- **Headings & Editorial Quotes:** *Playfair Display* / *Cormorant Garamond* (Serif)
  - Attributes: Elegant, literary, deeply human, steady.
- **Body & Interface Elements:** *Plus Jakarta Sans* / *Inter* (Sans-serif)
  - Attributes: Crisp geometry, high legibility, generous x-height, neutral tone.

### Type Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `44px – 56px` (`3.5rem`) | Normal (400) / Medium (500) | `1.15` | `-0.02em` | Main hero title (*Rhonda Hilker, MSW, RSW*) |
| **H1 Section** | `32px – 40px` (`2.5rem`) | Normal (400) / SemiBold (600) | `1.25` | `-0.015em` | Major sections (*Counselling & Support*, *Workshops*) |
| **H2 Section / Quote** | `26px – 32px` (`2rem`) | Normal (400) Italic / Medium | `1.35` | `normal` | Philosophy quotes, subheadings |
| **H3 Card Heading** | `20px – 22px` (`1.375rem`) | SemiBold (600) | `1.3` | `-0.01em` | Service focus card titles, booking tier names |
| **Body Large** | `17px – 18px` (`1.125rem`) | Regular (400) | `1.65` | `normal` | Lead paragraph, hero sub-copy, quote body |
| **Body Regular** | `15px – 16px` (`1rem`) | Regular (400) | `1.6` | `normal` | Standard card text, service descriptions, guidelines |
| **Body Small / Micro** | `13px – 14px` (`0.875rem`) | Regular (400) / Medium (500) | `1.5` | `+0.01em` | Jurisdictions, insurance disclaimers, metadata |
| **Eyebrow / Badge** | `11px – 12px` (`0.75rem`) | SemiBold (600) | `1.0` | `+0.08em` | All-caps / small-caps badge labels with pill borders |

---

## 4. Spacing, Grid & Layout Structure

### Grid & Max Widths
- **Global Container Width:** `max-w-7xl` (`1280px`) with fluid horizontal gutter padding (`px-6 sm:px-8 lg:px-12`).
- **Hero & Content Container:** `max-w-4xl` (`896px`) to `max-w-5xl` (`1024px`) for centered editorial storytelling without excessive line lengths (optimal line length: 55–75 characters).
- **Section Vertical Rhythm:**
  - Hero Section: `pt-20 pb-24 lg:pt-28 lg:pb-32`
  - Body Content Sections: `py-20 lg:py-24`
  - Compact Cards / Bento Grids: `gap-6 lg:gap-8`

### Elevation & Radii Tokens
- **Corner Radii:**
  - Cards & Containers: `rounded-2xl` (`16px`) or `rounded-3xl` (`24px`)
  - Buttons & Interactive Pills: `rounded-full` (`9999px`)
  - Image Frames & Arch Portals: `rounded-2xl` (`16px`) with soft overflow clips
- **Shadow Treatments:**
  - Subdued Card: `0 2px 8px -2px rgba(28, 56, 43, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)`
  - Elevated Interactive Hover: `0 12px 24px -6px rgba(28, 56, 43, 0.08), 0 4px 8px -2px rgba(28, 56, 43, 0.03)`
  - Soft Frosted Overlay: `backdrop-blur-md bg-white/85 border border-[#EBE3DA]`

---

## 5. UI Component Library Specifications

### 1. Navigation Header
- **Layout:** Sticky or static clean top bar with subtle border-b (`border-[#EBE3DA]`).
- **Elements:**
  - Left: Official Joyful Minds Counselling Logo (botanical head illustration + wordmark).
  - Center: Nav links (`About Rhonda`, `Areas of Focus`, `Team Workshops`, `Fees & Booking`, `Contact`).
  - Right CTA: Pill button (`Book Free Consult ↗`) in botanical deep green or warm terracotta.

### 2. Centered Editorial Hero (Concept 4 V1 Archetype)
- **Background:** Panoramic warm sunflower meadow photo layered with a luminous golden-hour overlay (`rgba(254, 246, 235, 0.7)` to `rgba(244, 230, 212, 0.9)`), transitioning downward into the linen page canvas.
- **Top Badge:** Outlined rounded pill with subtle terracotta icon and label: `COMPASSIONATE & EVIDENCE-BASED PSYCHOTHERAPY`.
- **Title Block:** Centered name `Rhonda Hilker, MSW, RSW` with secondary subtitle `REGISTERED SOCIAL WORKER • ALBERTA & ONTARIO LICENSED`.
- **Mission Subcopy:** Reassuring, grounded narrative highlighting nervous system safety and collaborative pacing.
- **Dual CTA Group:**
  - Primary: Filled Terracotta button (`Schedule Free 30-Min Consult`).
  - Secondary: Outlined white/cream pill button (`Explore Areas of Focus`).
- **Trust Chips Row:** Inline horizontal chips showcasing regulated licensure, virtual AB & ON care, and PHIPA/HIA privacy compliance.

### 3. Practice Specialties Grid (3×3 Matrix)
- **Container:** 9 cards arranged in a responsive 3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).
- **Card Styling:** White surface background, `rounded-2xl`, `border border-[#EBE3DA]`, `p-6` padding.
- **Items:**
  1. *Anxiety*
  2. *Life Transitions*
  3. *Women's Health*
  4. *Neurodivergence*
  5. *Stress & Burnout*
  6. *PTSD & Trauma*
  7. *Relationships*
  8. *Traumatic Events*
  9. *Illness, Injury & Medical Changes*
- **Pathway Banner:** Full-width banner beneath grid offering direct contact for clients unsure where they fit.

### 4. Therapist Spotlight Section
- **Layout:** Balanced split column featuring:
  - Left: Portrait photo with soft rounded corners (`rounded-2xl`).
  - Right: Quote headline (*"Therapy begins with a relationship where you feel deeply understood"*), warm therapeutic philosophy, and credentials box highlighting ACSW (#20412) & OCSWSSW (#859099) licensing.

### 5. Corporate & Team Workshops
- **Layout:** Contained card with structured 2-column breakdown:
  - *Common Topics:* Psychological safety, neurodiversity in workplace, burnout prevention.
  - *Sectors Served:* Healthcare, tech, small business, professional services.
  - Direct inquiry contact line.

### 6. Transparent Booking & Rate Tiers
- **Structure:** 3 clear horizontal cards representing the client journey:
  1. **Complimentary Consultation:** `$0 / 30 Minutes` (Zero obligation, schedule fit).
  2. **Initial Assessment (Recommended First Step):** `$225 / 1.5 Hours` (Deep intake & somatic mapping).
  3. **Standard Therapy (Ongoing):** `$225 / 1 Hour` (Regular bi-weekly or weekly integration).
- **Insurance Badge:** Explanatory banner confirming social worker psychotherapy coverage under extended health plans.

### 7. Grounding Closing Banner & Footer
- **Closing Sanctuary CTA:** Deep forest green background (`#1C382B`), serene white serif message (*"You do not have to figure this out alone..."*), and terracotta button.
- **Footer Structure:** Multi-column layout with official branding, practice registration details, mandatory crisis helpline notice (988), navigation sitemap, and copyright disclaimers.

---

## 6. Implementation & Styling Guide

```css
/* Core Custom Properties */
:root {
  --color-canvas: #FAFAF7;
  --color-surface: #FFFFFF;
  --color-border: #EBE3DA;
  --color-text-primary: #1C382B;
  --color-text-body: #2C332D;
  --color-text-muted: #647067;
  --color-cta-terracotta: #C85A32;
  --color-cta-hover: #B34E28;
  --color-accent-sage: #2D5A43;
  --color-hero-glow: rgba(244, 230, 212, 0.7);

  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;

  --radius-card: 1rem;       /* 16px */
  --radius-pill: 9999px;
}

body {
  background-color: var(--color-canvas);
  color: var(--color-text-body);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, .font-serif {
  font-family: var(--font-serif);
  color: var(--color-text-primary);
}

.btn-primary-terracotta {
  background-color: var(--color-cta-terracotta);
  color: #FFFFFF;
  border-radius: var(--radius-pill);
  padding: 0.75rem 1.75rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
}

.btn-primary-terracotta:hover {
  background-color: var(--color-cta-hover);
  transform: translateY(-1px);
}
```
