---
name: Aureate Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#ffb5a0'
  on-secondary: '#5f1500'
  secondary-container: '#d73b00'
  on-secondary-container: '#fffbff'
  tertiary: '#e7c8ba'
  on-tertiary: '#3f2c22'
  tertiary-container: '#caad9f'
  on-tertiary-container: '#564036'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#862200'
  tertiary-fixed: '#fcdccd'
  tertiary-fixed-dim: '#dfc0b2'
  on-tertiary-fixed: '#28180f'
  on-tertiary-fixed-variant: '#574237'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is engineered to evoke the atmosphere of a Michelin-starred establishment: sophisticated, warm, and hyper-curated. The brand personality balances the architectural coldness of high-end luxury with the welcoming glow of candlelit hospitality. 

The aesthetic style is a refined hybrid of **Minimalism** and **Glassmorphism**. It utilizes expansive negative space to allow high-fidelity food photography to breathe, while employing frosted glass overlays to suggest depth and tactile quality. Every interaction should feel intentional and weighted, mirroring the deliberate service of a premium dining experience.

## Colors

The palette is rooted in a "Noir" foundation to emphasize exclusivity. 
- **Deep Black & Dark Brown:** Used for the primary canvas and structural containers to create a sense of infinite depth and warmth.
- **Gold (Primary):** Reserved for moments of prestige, such as brand marks, active states, and premium call-outs. 
- **Vibrant Orange (Highlight):** Used sparingly for functional urgency, such as "Book a Table" buttons or limited-time seasonal offers.
- **Glass/Translucent:** A 10-15% opacity white or gold tint used for navigation bars and card overlays to maintain context with the background imagery.

## Typography

This design system utilizes **Inter** exclusively to provide a clean, systematic, and professional look that does not compete with the visual richness of the photography. 

- **Display Type:** Uses tight letter-spacing and heavy weights to create a "masthead" feel for section headers.
- **Body Text:** Optimized for readability with generous line heights to ensure menu descriptions feel accessible yet elegant.
- **Labels:** All-caps styling is used for categories (e.g., "APPETIZERS", "VINTAGES") to establish a clear information hierarchy.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** with significantly exaggerated margins on desktop to enforce a "gallery" feel. 

- **Vertical Rhythm:** Sections are separated by large gaps (120px+) to prevent the UI from feeling cluttered or "fast-food" oriented.
- **Grid:** A 12-column grid is used for desktop, frequently utilizing centered 6-column or 8-column spans for editorial content.
- **Mobile:** Elements reflow to a single column with increased vertical padding to ensure touch targets remain luxurious and easy to navigate.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Ambient Shadows**. 

- **Surface Tiers:** Background is pure black (#0A0A0A). Secondary containers use a deep brown (#2C1B12) at low opacity.
- **Shadows:** Use large blur radii (30px+) with low opacity (15-20%) and a slight warm tint (#000000) to create a soft, liftoff effect rather than a harsh drop-shadow.
- **Glass Effects:** Overlays utilize a `backdrop-filter: blur(20px)` combined with a subtle 1px border of 10% white to define edges without adding visual weight.

## Shapes

The design system employs **Rounded** geometry (base 8px/0.5rem) to soften the professional tone and make the interface feel more organic and inviting.

- **Cards:** Use `rounded-lg` (16px) to create a soft frame for food photography.
- **Buttons:** Use `rounded-xl` (24px) or full pill-shapes for primary actions to distinguish them from informational containers.
- **Images:** Always follow the container's roundedness to maintain a cohesive silhouette.

## Components

- **Buttons:** 
    - *Primary:* Gold background, black text, no border. High-gloss finish on hover.
    - *Secondary:* Ghost style with 1px gold border and subtle blur background.
- **Cards:** Featured menu items use a "Glass-Bottom" style where the title and price sit on a frosted overlay at the base of the image.
- **Inputs:** Underlined or subtly boxed with deep brown backgrounds. Focus state shifts the border to Gold.
- **Chips/Filters:** Pill-shaped with a 1px border. Active states use the Vibrant Orange to indicate selection.
- **Lists:** Menu lists use "dotted leaders" (dots connecting the item name to the price) to evoke traditional high-end physical menus.
- **Specialty Component - "The Reservation Bar":** A persistent, glassmorphic bottom-docked bar on mobile for instant access to booking.