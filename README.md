# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Contact form email

The call-back form sends submissions through the Astro `/api/callback` endpoint and Resend. Configure these environment
variables for local development and in the Vercel project settings:

- `RESEND_API_KEY`: a Resend API key, kept server-side.
- `RESEND_FROM_EMAIL`: a sender address verified with Resend, such as `Joyful Minds Counselling <hello@your-domain.ca>`.

Copy `.env.example` to `.env` for local development. The recipient address is configured in `src/data/site.ts`.
The form requires a name, phone number, and province (Alberta or Ontario), with an optional best time to call
(up to 200 characters, including the visitor's time zone). It does not collect an email address, contact preference,
or general question; notification emails have no visitor reply-to address.

## SEO and sitemap

The canonical origin is `https://www.joyfulminds.ca`. Content URLs have no trailing slash except `/`;
Astro and Vercel share this policy. Keep Vercel's existing non-www-to-www domain redirect enabled.

`npm run build` generates `/sitemap-index.xml` and `/sitemap-0.xml` using `@astrojs/sitemap`.
The sitemap includes Home, About, Contact, the four counselling services and Team Workshops.
The legacy couples redirect, APIs and other noncanonical routes are excluded. `public/robots.txt`
advertises the sitemap index. No separate `/sitemap.xml` is necessary.

After building, run `npm run test:seo` to check the generated sitemap, canonical/social metadata,
structured-data relationships, breadcrumbs and page-specific service boundaries. Tests use Node's
built-in runner and the Vercel static output; they do not submit forms or book appointments.

The shared layout emits server-rendered JSON-LD and a default sharing image cropped from an existing
approved meadow photograph. Schema represents the practice, practitioner, website, pages, services and
breadcrumbs, not a physical clinic, reviews or unconfirmed service offers. Useful visible FAQs remain;
FAQ markup is not added for Google's retired FAQ rich-result feature.

Before publishing, have Rhonda review the factual accuracy of the copy, public contact details and
registration numbers. Registration-verification links are intentionally deferred until their official
destinations and current records can be confirmed; do not guess individual registry URLs.

### Local browser verification

The production build passed mobile-menu, keyboard/focus, disclosure and eight client-side
metadata/schema transition checks. All eight pages also passed direct-load checks at 390px and
1440px widths with no horizontal overflow.

Browser PerformanceObserver measurements covered Home, Individual, Contact and Workshops, with
three HTTP-cache-disabled loads per page/profile and normal motion. Median initial LCP was
1.720-1.924 seconds at 390x844 (1.6 Mbps download, 150ms latency, 4x CPU slowdown) and
0.356-0.368 seconds at 1440x900 (10 Mbps download, 40ms latency, no CPU slowdown). Initial
observed layout shift was zero in all 24 loads.

These are local lab observations of uncompressed static output, not Lighthouse scores, INP
measurements or a field Core Web Vitals pass. Lighthouse was unavailable and permission to download
it was denied; browser throttling was restored after measurement.

### Owner-operated launch checks

1. Deploy and confirm that all eight canonical pages, robots.txt and both sitemap files return 200.
   Check non-www, HTTP and trailing-slash redirects on production, including query-string preservation.
2. Keep preview deployments protected or noindex through Vercel's deployment settings; never apply
   preview indexing restrictions to the production domain.
3. Check Organization and Breadcrumb markup with Google's Rich Results Test and the complete graph
   with Schema.org Validator. Valid Service/Person markup does not guarantee a Google rich result.
4. Create a Google Search Console **Domain property** for `joyfulminds.ca` and verify it using DNS.
5. Submit `https://www.joyfulminds.ca/sitemap-index.xml`. Inspect the eight canonical URLs and compare
   declared and Google-selected canonicals when data becomes available.
6. Monitor page indexing and query/page impressions, clicks and CTR as data accumulates. Province
   wording in a query indicates intent, not the visitor's verified location.
7. Repeat mobile-menu, keyboard and client-side metadata checks after deployment. Record production
   mobile/desktop Lighthouse or PageSpeed baselines and monitor field Core Web Vitals when sufficient
   data exists; local browser results do not replace production measurements.

No analytics, advertising pixels, session recording or booking-conversion tracking is installed by this
SEO implementation. Search Console/DNS verification and deployment settings require owner access.
Restart an existing Astro dev server after configuration changes so it picks up the new canonical origin.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
