# Project Instructions

## Technology
- Astro, TypeScript, and Tailwind CSS v4.
- Prefer static output unless server rendering is explicitly required.
- Use native Astro components (.astro) for static UI.
- Use React or Vue islands only for genuinely interactive functionality.
- Do not introduce React, Next.js patterns, or new dependencies unnecessarily.

## Project Documentation

Before implementing changes, consult the following files:

- [Agent Guidelines](../AGENTS.md)
- [Design System](../DESIGN.md)
- [Design Implementation](../IMPLEMENTATION.md)

## Architecture
- Reuse existing components, layouts, utilities, and design tokens.
- Keep pages focused on composition and content.
- Extract repeated UI patterns into reusable components.
- Use Astro content collections for structured Markdown/MDX content.
- Define typed props and validate structured data where appropriate.

## Styling
- Use existing Tailwind theme tokens and semantic color names.
- Avoid hardcoded colors or arbitrary spacing when suitable tokens exist.
- Implement responsive, mobile-first layouts.
- Preserve the design system's typography, spacing, and visual hierarchy.

## Performance
- Ship minimal client-side JavaScript.
- Prefer native HTML and CSS to JavaScript when practical.
- Use Astro's image tooling for local images.
- Avoid unnecessary dependencies and hydration directives.

## SEO and Accessibility
- Use semantic HTML with one primary H1 per page.
- Include appropriate titles, meta descriptions, canonical URLs, and Open Graph metadata.
- Preserve keyboard navigation and visible focus states.
- Give meaningful images descriptive alt text.

## Workflow
- Inspect existing conventions before making changes.
- Make the smallest maintainable change.
- Do not rewrite unrelated code.
- Run astro check and the production build after significant changes.
- Fix introduced errors and summarize changes and verification.
