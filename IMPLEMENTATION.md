
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
- About opens with a centered `SectionHeading` hero and `AnimatedHeroBackground effect="orbits"`, using the supplied Stitch dual-attunement shader's drifting lilac and amber fields at 125% of their original speed, 125% glow intensity, and 87.5% opacity. The opening biography paragraph appears only in the hero; the portrait, remaining biography, and credentials follow in their own section.
- The `/contact` page follows the dark editorial visual system with direct contact options, an email-draft call-back form, a native FAQ disclosure section, and an emergency notice; the form does not transmit or store information on the website.
- Contact's opening section uses `AnimatedHeroBackground effect="breath"`, adapted from Stitch's co-regulation breath field: three concentric lilac and amber rings with a gently pulsing core. The shader retains its supplied timing and glow strengths, uses the page canvas token for its base, and renders at 70% opacity behind the existing heading and contact cards.
- Service navigation links to static pages for couples, individual, child/youth, adolescent/teen, family, and organizational support. Shared service copy is defined in `src/data/services.ts` and rendered by the dynamic static route.
- The Couples Therapy opening section uses `AnimatedHeroBackground` with its default heart effect, adapted from the supplied Stitch heart shader. Its rose, lavender, and base colors use theme tokens; the shader's warm amber glow is retained. All three effects share a canvas lifecycle: confined to the section, fading into the page canvas, device-pixel ratio capped at 2, pausing off-screen or in hidden tabs, and drawing a still frame for reduced motion. A static CSS glow remains if WebGL is unavailable or fails, with a console diagnostic.
- Couples Therapy uses a centered, photo-free hero above the introductory cards. The heart background is scaled to 120% of the supplied shader's size and renders at 70% opacity to keep the text prominent.
- Introduce new compositions when they improve the content.
- Maintain visual consistency without making every
  page look identical.

## Components
- Reuse existing UI primitives.
- `PhotoFrame` owns optimized image markup, responsive sizing, cropping, and the styled `figcaption` wrapper. Pass an imported image as `src` and descriptive `alt`. Captions use only the named `caption` slot: supply its contents, not another `figcaption`. Omit the slot for an image without a caption. Portrait framing and gradient-overlay captions are the defaults. Use `aspect="landscape"` for wide photos, `captionStyle="card"` for a separate caption card, `objectPosition` for subject-specific cropping, and `priority` for prominent above-the-fold photos.

```astro
<PhotoFrame src={portrait} alt="Rhonda Hilker">
  <span slot="caption">Rhonda Hilker <strong>MSW, RSW</strong></span>
</PhotoFrame>
```
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
