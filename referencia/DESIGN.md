---
name: Kinetic Obsidian
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#ffb59c'
  on-secondary: '#5c1900'
  secondary-container: '#ff5708'
  on-secondary-container: '#511500'
  tertiary: '#ffffff'
  on-tertiary: '#003824'
  tertiary-container: '#6ffbbe'
  on-tertiary-container: '#00734e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#822700'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#111317'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
typography:
  display-hero:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  metric-numeral-lg:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.04em
  metric-numeral-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.02em
  label-caps:
    fontFamily: Montserrat
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-interactive:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-performance, athletic digital environment tailored for elite strength and conditioning facilities. Designed for mobile-first gym administration and member interaction, the interface channels raw physical energy through precise, surgical digital execution.

### Design Movement & Aesthetic
The visual philosophy merges **Dark Mode Minimalism** with **Technical High-Contrast Glassmorphism**:
- **Carbon Depths:** Layered obsidian and charcoal fields create a low-light sanctuary reminiscent of high-end conditioning facilities and nocturnal focus.
- **Electric Precision:** High-voltage neon lime and kinetic orange accents mimic digital telemetry, heart-rate intervals, and equipment readouts, delivering instant focus to critical interactions.
- **Athletic Tactility:** Ultra-clean semi-translucent glass panels (`backdrop-filter: blur(16px)`), razor-thin technical borders, and focused ambient glows provide structured spatial discipline without clutter.
- **Tone:** Uncompromising, motivating, elite, disciplined, and frictionless.

## Colors

The palette balances deep light-absorbing carbon substrates with high-luminance kinetic accents to establish rapid visual priority during training and administrative oversight.

### Palette Architecture
- **Primary (`#CCFF00` - Kinetic Volt):** Primary calls-to-action, key biometric indicators, dynamic progress rings, and active state highlights.
- **Secondary (`#FF5500` - Ignition Orange):** High-priority alerts, heart-rate max zones, impending deadlines, and administrative action triggers.
- **Tertiary (`#10B981` - Emerald Vitality):** Success metrics, verified access logs, and active membership confirmations (`Membresía Activa`).
- **Substrates & Surfaces:**
  - Base Background: Deep Carbon (`#0D0F12`)
  - Elevated Container / Cards: Obsidian Slate (`#16191E`)
  - Floating Overlays & Modals: Graphite Edge (`#1F242D`)
- **Text & Accents:**
  - High Emphasis: Crisp Optical White (`#FFFFFF`)
  - Medium Emphasis / Data Labels: Muted Tech Slate (`#94A3B8`)
  - Subtle Borders & Dividers: Translucent Carbon Border (`rgba(255, 255, 255, 0.08)`)

## Typography

Typography establishes an athletic hierarchy through geometric authority and functional legibility.

- **Display & Headlines (Montserrat):** Dense, structural letterforms deployed in uppercase or tight tracking for hero titles, section divisions, and biometric totals.
- **Body & Controls (Inter):** Neutral, hyper-legible geometric grotesk crafted for screen clarity under intense physical motion or high-contrast glare.
- **Metric Numerals:** Oversized, tabular-ready Montserrat figures provide instantaneous workout feedback (e.g., BPM, lifted tonnage, remaining subscription days).
- **Labeling Conventions:** Sub-labels, micro-badges, and administrative status indicators leverage uppercase styling with expanded tracking (`0.08em`) to enforce structural precision.

## Layout & Spacing

The mobile layout system utilizes a unified 4-column fluid mobile grid scaling upward into 8-column (tablet) and 12-column (desktop administrative console) environments.

### Mobile Grid & Spatial Rhythm
- **Base Grid:** 4-column fluid structure with `16px` gutters and `16px` outer margins, hugging modern edge-to-edge device form factors with strict dynamic safe-area insets.
- **Rhythm Multiplier:** Strict 8px dimensional scale (with an auxiliary 4px step for micro-elements like pill tags and icon badges).
- **Interactive Touch Clearances:** Minimum hit targets of 48px vertically across all interactive triggers, buttons, and check-in panels to account for quick-tap execution during dynamic movement.
- **Screen Reflow:**
  - *Mobile (<640px):* Single-stack performance cards, sticky action sheet for check-in QR codes, edge-padded horizontal scrolls for routine modules.
  - *Tablet (641px–1024px):* Dual-column layout splitting administrative status from daily workout tracking.
  - *Desktop (>1024px):* Multi-column management matrix for member lifecycle auditing and administrative management.

## Elevation & Depth

Visual hierarchy leverages tonal separation, tinted illumination, and multi-tier glassmorphism rather than muddy drop shadows.

### Elevation Hierarchy
1. **Canvas (Ground Floor):** Deep Carbon `#0D0F12`, matte, light-absorbent.
2. **Layer 1 - Data Containers & Workout Tiles:** Obsidian Slate `#16191E` with a 1px solid border of `rgba(255, 255, 255, 0.06)`. Zero elevation shadow.
3. **Layer 2 - Active Cards & Interactive Glass:** Semi-opaque `#1F242D` at 85% opacity with `backdrop-filter: blur(16px)`, crowned with a 1px perimeter outline of `rgba(255, 255, 255, 0.12)`.
4. **Layer 3 - Glowing Floating Actions & Overlays:** Kinetic Volt or Ignition Orange elements cast ambient luminous halos:
   - *Volt Glow:* `box-shadow: 0 8px 24px -4px rgba(204, 255, 0, 0.28)`
   - *Ignition Glow:* `box-shadow: 0 8px 24px -4px rgba(255, 85, 0, 0.32)`
   - *Emerald Confirmation Glow:* `box-shadow: 0 8px 20px -4px rgba(16, 185, 129, 0.25)`
5. **Layer 4 - Turnstile Access Modal / Turnstile QR Drawer:** Heavy carbon backdrop blur (`rgba(13, 15, 18, 0.85)` at 20px blur) elevating the high-contrast QR display above environmental lighting interference.

## Shapes

The geometry balances technical angularity with ergonomic friendliness through level-2 roundedness (`0.5rem` / 8px base).

- **Standard Components (Inputs, Metrics Tiles, List Panels):** `0.5rem` (8px) corner radius for sharp, performance-driven precision.
- **Hero Containers & Surface Panels (`rounded-lg`):** `1rem` (16px) corner radius for high-impact card structures and QR housings.
- **Floating Modals & Bottom Drawers (`rounded-xl`):** `1.5rem` (24px) corner radius on top borders to indicate smooth gesture docking.
- **Status Badges, Metric Pills, & Micro Tags:** Full pill radius (`9999px`) to immediately signal interactive toggles and membership validation states.

## Components

### Buttons
- **Primary Kinetic Action:** Volt background (`#CCFF00`), text in deep obsidian (`#0D0F12`), Montserrat SemiBold, subtle glow on press. Dedicated to primary triggers like "Iniciar Entrenamiento" or "Pagar Membresía".
- **Destructive / Urgent Action:** Ignition Orange (`#FF5500`), white text, used for critical admin cancellations or payment delinquency resolutions.
- **Secondary Ghost:** Transparent surface, 1px technical border (`rgba(255, 255, 255, 0.14)`), white text, shifting to `rgba(204, 255, 0, 0.1)` on interaction.

### Status Badges
- **Membresía Activa:** Emerald pill (`rgba(16, 185, 129, 0.12)` background, `#10B981` text, 1px border `rgba(16, 185, 129, 0.4)`), accompanied by a continuous glowing 6px emerald status dot.
- **Pago Pendiente / Vencido:** Ignition Orange pill (`rgba(255, 85, 0, 0.12)` background, `#FF5500` text, 1px border `rgba(255, 85, 0, 0.4)`).

### Access Containers (Check-In QR)
- High-contrast pure white backing container surrounded by an Obsidian Glass chassis. Outer frame features subtle Volt micro-crosshairs in the corners to evoke precision optics and instant scanner recognition at gym turnstiles.

### Workout Metric Cards
- Dark carbon tile with a dual-level data layout: micro uppercase label in Tech Slate (`#94A3B8`) on top, paired with an oversized Montserrat numeral in Volt or White. Integrated sparklines or circular completion rings rendered using Volt against `rgba(255, 255, 255, 0.05)` track rails.

### Input Fields & Controls
- **Inputs:** Dark field `#16191E`, inset 1px border `rgba(255, 255, 255, 0.1)`. Shifts to crisp Volt outline (`#CCFF00`) with matching input glow when focused.
- **Toggles & Checkboxes:** Custom angular switches using Volt for active track fill and Obsidian Carbon for switch heads.