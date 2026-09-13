# ROSCO S&R

Strip out, removal & renovation services in Perth, WA. Astro 7 + Tailwind 4
site for a small, real business — homeowners renovating their own home,
pitched with photo evidence of actual jobs.

## Commands

```sh
pnpm dev        # local dev server (default :4321)
pnpm build      # production build
pnpm preview    # serve the built site
pnpm astro ...  # raw astro
```

## Structure

```
src/pages/        index, about, services, contact (.astro)
src/layouts/      Layout.astro — shell, JSON-LD, header/footer mount
src/components/   Header.astro, Footer.astro
src/styles/       global.css — design tokens + Tailwind wiring
public/           static files (logo, favicon)
DESIGN.md         design system truth  (read before UI work)
PRODUCT.md        product truth        (read before content work)
knowledge/        agent knowledge packs (gitignored; see routing below)
```

## Hard rules

- **No fabrication.** Testimonials, reviews, pricing, licences, insurance,
  years in business, scale — never invented. Photo evidence is the pitch.
- **One-Action Rule.** Deep Ocean Blue only for interactive things or proof
  of work. Never decorative.
- **DESIGN.md and PRODUCT.md override guessing** — when a decision touches
  the design system or customer-facing claims, read the docs first.
- Focus-visible outlines on every interactive element; no resting shadows;
  real imagery only.

<!-- knowledge:auto:begin -->
<!-- generated from knowledge/index.ts via `node knowledge/validate.ts --sync` — hand-edits get overwritten -->

## Knowledge routing

Find the row for the area you are about to work in. Read that entry doc and its bindings BEFORE editing anything there.

| Subject | Read first when | Entry doc · bindings |
|---|---|---|
| Product truth — what ROSCO S&R actually is | before writing or editing any customer-facing copy: claims, services, pricing, testimonials, credentials, or contact details | `knowledge/product.md` · — |
| Design system — The Clean Slate | before creating or editing any UI: colors, type, spacing, components, shadows, or motion | `knowledge/design.md` · — |
| Site surfaces — pages, layout, components | before adding, moving, renaming, or deleting a page, section, or component | `knowledge/surfaces.md` · — |
| Media & leads — images, forms, embeds | before touching imagery, the quote form, embedded maps, meta tags, or the sitemap | `knowledge/media.md` · — |

<!-- knowledge:auto:end -->
