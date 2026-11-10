
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
- Desktop, mobile, and footer service navigation share `serviceNav` in `src/data/site.ts`: Individual Counselling, Women's Counselling, Teen Counselling, Senior Counselling, and Team Workshops. The four counselling links and homepage category actions derive their labels and destinations from `src/data/services.ts`. Team Workshops links to its separate static page at `/services/team-workshops`.
- `src/pages/services/[slug].astro` statically generates the four counselling routes from `services`: `/services/individual-counselling`, `/services/womens-counselling`, `/services/teen-counselling`, and `/services/senior-counselling`. Obsolete child/youth, family, and organization placeholder entries do not generate pages. `/services/couples-therapy` still redirects to Women's Counselling.
- `src/layouts/ServiceLayout.astro` is the reusable counselling page template, preserving the Women's Counselling formula: centered hero and introduction, two topic/approach cards, related focus badges beneath the cards, consultation prompt, divided question-and-answer rows, and closing call to action. Team Workshops does not use this layout.
- The shared service opening section uses `AnimatedHeroBackground` with its default heart effect, except Individual Counselling (`effect="connection"`), Teen Counselling (`effect="ribbons"`), and Senior Counselling (`effect="embers"`). The heart effect's rose, lavender, and base colors use theme tokens; the shader's warm amber glow is retained. All effects share a canvas lifecycle: confined to the section, fading into the page canvas, device-pixel ratio capped at 2, pausing off-screen or in hidden tabs, and drawing a still frame for reduced motion. A static CSS glow remains if WebGL is unavailable or fails, with a console diagnostic.
- Individual Counselling uses the supplied Stitch ANIMATION_199 dual-field shader: simplex-noise distortion, amber and lilac attractors, a luminous bridge, and orbit filaments at the supplied speed and glow strengths. It uses the canvas theme token for its base and 20% opacity. Shader smoothstep ramps use ordered edges for portable WebGL rendering.
- Teen Counselling uses Stitch ANIMATION_198 at 20% opacity (80% more translucent than the supplied full-opacity effect): seven interwoven apricot/lilac/violet sine filaments and a horizon glow at the supplied speed and strengths. It uses the canvas theme token for its base, ordered smoothstep ramps, and shared reduced-motion safeguards.
- Senior Counselling uses Stitch ANIMATION_197 at 40% opacity (60% more translucent than the supplied full-opacity effect): three layers of upward-drifting amber/lilac embers and a warm hearth glow. The supplied timing and strengths are retained with the canvas theme base, ordered smoothstep ramps (including a nonzero sparkle radius), and shared pausing and reduced-motion handling.
- Counselling service pages use a centered, photo-free hero above the introductory cards. The heart background is scaled to 120% of the supplied shader's size and renders at 70% opacity to keep the text prominent.
- Team Workshops has its own composition rather than the counselling layout: centered ripple hero with direct email/phone actions, eight topic cards, eight industry cards, three discussable delivery formats, a practitioner portrait and background, native booking FAQ disclosures, and a closing corporate enquiry. It preserves the former homepage workshop introduction, all original topic and industry names, and direct contact details. Formats are planning starting points, not confirmed packages; do not infer durations, pricing, delivery availability, or benefits coverage from the mockup.
- Team Workshops uses Stitch ANIMATION_195 via `effect="ripples"` at 24.5% opacity: five noise-distorted lilac ripple rings and a breathing amber core at the supplied timing and strengths. It shares simplex noise with the Individual effect, uses the canvas theme base and ordered smoothstep ramps, and retains the shared reduced-motion and pausing safeguards.
- Service hero backgrounds do not react to mouse or pointer movement. The shared renderer holds the supplied shaders' mouse uniform at the canvas center, including after resizing, without registering pointer listeners.
- The shared `Layout` enables Astro's `ClientRouter` with a 600ms content crossfade and a separately named, non-animated header. The header is replaced, not persisted, so route-dependent links stay current. Unsupported browsers swap without simulated animation; reduced-motion users get no view-transition animation.
- Page-bound accordion, mobile navigation, and contact form setup runs on `astro:page-load`. Mobile navigation releases document/media listeners and unlocks any open drawer on `astro:before-swap`. The contact form opts out of router form interception to retain its existing JSON submission behavior.
- Canvas backgrounds use custom-element connection/disconnection lifecycles: both the homepage somatic aura and service WebGL backgrounds stop animation and release listeners/resources when their page is removed, then initialize on return visits.
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
- The `terracotta` Button variant uses the theme's light terracotta accent with dark text and a lighter hover tint; it is used for the workshop facilitator's More About Rhonda action.
- `ClosingCta` shares the deep-background closing banner across pages, with optional `title` and `description` props and an `actions` slot for page-specific contact options. Existing counselling defaults remain unchanged. Team Workshops uses this banner for its unique team enquiry content.
- `Button` renders a link with a required `href` by default; use `as="button"` for native actions (defaulting to `type="button"`). Both share the same variants and sizes.
- Button labels retain their written capitalization; do not apply all-caps styling.
- Use the white logo in the dark header and footer. Retain the solid plum and original artwork assets for light-background use. Recoloured variants preserve the original artwork's dimensions and alpha.
- Create new components when a pattern will be reused.
- Prefer native Astro components.
- Avoid unnecessary JavaScript and hydration.
- Homepage Counselling uses numbered native disclosure cards in two independent columns (one on mobile), preserving the existing focus-area copy and icons. All items start closed; progressively enhanced Expand All / Collapse All controls affect only this section. The consultation prompt remains visible below the accordions.
- Focus-area copy and icon metadata are shared in `src/data/focusAreas.ts`. `FocusAccordion` renders balanced columns with independently scoped controls on the homepage, with all disclosures initially closed. Each counselling service selects typed `focusAreaTitles` and shows matching icon-and-title Badges beneath its two introductory cards, without a separate heading, introductory copy, per-area descriptions, or accordion controls. Women's Counselling retains its six selected areas.
- Immediately after Meet Rhonda, the homepage Counselling Services section presents Individual, Women's, Teen, and Senior Counselling in four numbered, divided rows. Desktop rows pair the title and audience with descriptive copy, topic chips, and a shared Button action; mobile rows stack. Summary copy is stored in each service's `homepage` field. Team Workshops is excluded from these rows and no longer has a homepage section. No age cutoffs, session durations, or clinical credentials are inferred from the mockup.
- Homepage section backgrounds alternate from Counselling Services (`bg-canvas`) through Areas of Focus (`bg-tint`) and Booking & Consultation (`bg-canvas`). The closing consultation call to action retains its deep background.

## Adding or Editing Counselling Services
- Edit `src/data/services.ts` rather than duplicating page markup. Each `ServiceContent` record requires a unique URL-safe `slug`, `label`, `introduction`, `approachTitle`, `approach`, `topics`, `focusAreaTitles`, `homepage` summary, and `questionSections` (question title and answer, with optional points and note).
- Choose `focusAreaTitles` from the existing typed titles in `src/data/focusAreas.ts`; the shared layout supplies the matching icons. Keep the entries in the desired navigation/homepage order.
- Adding a complete service record generates its static page, navigation links (desktop, mobile, footer), and homepage row automatically. Keep workshop content and booking destinations separate from the counselling template.

## Collaboration
- The developer retains creative control over page layouts.
- Do not redesign sections unless explicitly requested.
- Suggest alternatives when useful, but don't implement
  significant visual changes without direction.
- Use Stitch as inspiration, not a rigid pixel-perfect spec.
