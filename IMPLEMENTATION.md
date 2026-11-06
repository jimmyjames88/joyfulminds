
# Design Implementation Guidelines

Use DESIGN.md as the visual foundation of this project.

## Creative Direction
- Maintain a warm, organic, professional aesthetic.
- Use the established colors, typography, and spacing.
- Dark Stitch palette override: deep violet `#17111F` canvas, alternating `#1D1627` sections, `#221B2D` card surfaces, `#3C314B` borders, and near-black violet `#100C16` header/footer. Use off-white `#F5F0FA` headings, `#E7E0ED` body text, and `#B7AEBF` muted text.
- Use lavender `#C2A1EF` and dusty rose `#C99AA5` accents, with dark rose `#35232E` accent fills. Solid actions use `#9255D6` (slightly deeper than the mockup to maintain white-label contrast) and darken to `#7D42BF` on hover. Text accents and button fills have separate tokens so both remain readable.
- Existing forest/sage/terracotta/peach token and component variant names remain compatibility slots for the new palette. The forest token now supplies light heading text; use forest-deep for dark backgrounds. The hero uses a responsive canvas-based somatic dot aura over a nocturnal aubergine base, with theme lavender and dusty-rose dots/glow, layered CSS radial/linear gradients, and no background photograph. The animation respects reduced motion, caps device-pixel ratio at 2, pauses while hidden, and uses precomputed ring geometry. Retain supplied image assets for future use.
- New page layouts do not need to replicate Stitch screens.
- The `/about` page presents Rhonda's supplied biography, registration and education cards, and clinical training in a numbered, divided list; shared navigation resolves homepage section links correctly when viewed from another route.
- Introduce new compositions when they improve the content.
- Maintain visual consistency without making every
  page look identical.

## Components
- Reuse existing UI primitives.
- Solid buttons use lavender at rest and darken on hover.
- Button labels retain their written capitalization; do not apply all-caps styling.
- Use the white logo in the dark header and footer. Retain the solid plum and original artwork assets for light-background use. Recoloured variants preserve the original artwork's dimensions and alpha.
- Create new components when a pattern will be reused.
- Prefer native Astro components.
- Avoid unnecessary JavaScript and hydration.

## Collaboration
- The developer retains creative control over page layouts.
- Do not redesign sections unless explicitly requested.
- Suggest alternatives when useful, but don't implement
  significant visual changes without direction.
- Use Stitch as inspiration, not a rigid pixel-perfect spec.
