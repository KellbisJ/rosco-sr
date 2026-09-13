---
name: ROSCO S&R
description: Strip out, removal & renovation services in Perth — clean, careful, understated.
colors:
  primary: "#0c4a6e"
  primary-hover: "#083344"
  primary-light: "#e0f2fe"
  secondary: "#b45309"
  secondary-hover: "#92400e"
  secondary-light: "#fef3c7"
  bg-base: "#fafafa"
  surface: "#ffffff"
  surface-alt: "#f4f4f5"
  text-primary: "#0f172a"
  text-secondary: "#475569"
  text-body: "#1e293b"
  text-subtitle: "#334155"
  text-muted: "#94a3b8"
  border: "#e4e4e7"
  border-strong: "#d4d4d8"
typography:
  display:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  sm: "6px"
  lg: "8px"
  xl: "12px"
  "2xl": "16px"
  full: "9999px"
spacing:
  inset-sm: "16px"
  inset-md: "24px"
  inset-lg: "32px"
  gap-md: "24px"
  section-y: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-cta-large:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "12px 24px"
  card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.inset-lg}"
  chip-primary:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "6px 16px"
  nav-link:
    textColor: "{colors.secondary}"
---

# Design System: ROSCO S&R

## Overview

**Creative North Star: "The Clean Slate"**

The moment a room is stripped bare, swept, and ready for what comes next. The site deals in honest states — bare concrete, pulled-down plaster, a floor scraped clean — and presents them with quiet competence. Rubble and dust are not things to apologize for; they are the product, shown without garnish.

**Character:** Practical and understated, like a tradesperson who shows up on time and does clean work. Surfaces are light and calm; the deep ocean blue acts, the warm sand accompanies. Nothing decorative competes with the photography, because the photography is the argument.

**Key Characteristics:**

- Flat, airy surfaces with rare, state-reactive shadows.
- Deep ocean blue as the only action color; amber as a quiet secondary.
- Real site photography carries the pitch; no stock-hero posturing.
- Generous vertical rhythm, centered typographic blocks, one idea per section.
- Slight roughness in voice, none in finish.

## Colors

A cool off-white stage with one deep, confident accent and one warm, secondary voice. Blue acts, amber accompanies, neutrals carry the content.

### Primary
- **Deep Ocean Blue** (#0c4a6e): The action color. Buttons, active states, links-to-quote, icon tiles on hover. Reserved for things the visitor can do or where the business proves itself.
- **Deep Ocean Blue Hover** (#083344): Pressed or hovered actions; deepens the commitment.
- **Deep Ocean Blue Tint** (#e0f2fe): Icon tile backgrounds, pill badges, soft attention states. Blue diluted to a whisper.

### Secondary
- **Warm Sand** (#b45309): Accompanying voice. Nav links in the header, footer descriptive text, anywhere blue would over-signal.
- **Warm Sand Hover** (#92400e): Hover for amber text.
- **Warm Sand Tint** (#fef3c7): Highlights and secondary light backgrounds (reserved, rarely seen in current implementation).

### Neutral
- **Bone** (#fafafa): Page background. Nearly white with a warm working edge.
- **Pure White** (#ffffff): Surfaces — cards, nav, footer, forms.
- **Washed Concrete** (#f4f4f5): Section alternates and quiet embedded surfaces.
- **Ink** (#0f172a): Heading text, strongest statements.
- **Slate** (#1e293b): Body text.
- **Dusk** (#334155): Subtitles and secondary descriptions.
- **Fog** (#475569): Captions and supporting text.
- **Mist** (#94a3b8): Placeholders, micro-captions, copyright.
- **Hairline** (#e4e4e7): Dividers, input strokes, card rings.
- **Hairline Strong** (#d4d4d8): Focus rings and emphasis borders.

**The One-Action Rule.** Deep Ocean Blue marks things you can do — quote, call, explore. If a blue element is not interactive, it is a badge or a proof of work; nowhere else.

## Typography

**Display Font:** system-ui stack (system-ui, -apple-system, sans-serif)
**Body Font:** same stack — one family, differentiated by weight, scale, and tracking.

**Character:** No imported display face. The type is the operating system's own sturdy sans, which reads as born-on-the-job rather than designed-for-the-brochure. Hierarchy comes from scale and weight contrast (700 vs 400), not from a second voice.

### Hierarchy
- **Display** (700, clamp(2.25rem, 5vw, 3.75rem), 1.1, -0.025em tracking): The hero statement. Home page only, one per page.
- **Headline** (700, clamp(1.875rem, 3.5vw, 2.25rem), 1.2, -0.025em tracking): Section openers. Centered with a max-width of ~36rem when the section is symmetric.
- **Title** (600, 1.125rem, 1.5): Card titles, service names, direct-contact headings.
- **Body** (400, 1.125rem, 1.75): Reading copy, 60–70 characters ideal, max ~38rem centered.
- **Label** (500–600, 0.875rem): Nav links, buttons, badges, chip text. Uppercase only in footers, with tracking; never on interactive controls.

**The One-Weight Rule.** Card titles and buttons share the 600 weight; body stays 400. If two elements of the same size fight for the same weight, one of them is not doing its job.

## Layout

A single responsive column life: `max-w-7xl` (80rem) containers, horizontal padding 16px → 24px → 32px across breakpoints, sections breathing at 80–128px of vertical rhythm (py-20/py-24/py-28/py-32).

- Headers and footers span full width with hairline borders; content blocks sit centered.
- Section headers are centered and capped at ~36rem; card grids break 1 → 2 → 3 columns at sm → lg, with 24px gutters.
- Type blocks center-align only when the section is symmetric; asymmetric sections (About) left-align their copy.
- The header is sticky with a 80% white blur over content — the one place translucency is allowed.

**The Section-As-Sentence Rule.** One section, one claim, one grid. Sections never carry two competing header ideas.

## Elevation & Depth

Flat by default. Depth is conveyed by tonal layering (white cards on washed or bone grounds with hairline rings), and shadows are a state response, not ambient furniture.

**The State-Reactive Shadow Rule.** Surfaces are flat at rest — a hairline ring and nothing more. Shadows appear on hover (cards lift 4px with xl shadow), on photographic evidence (lg shadow grounds images), and on the one promotional surface (the renovations slider, 2xl). If it does not respond or promote, it does not float.

### Shadow Vocabulary
- **Card Hover** (`0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`): Card lift on hover, always with `-translate-y-1`.
- **Image Ground** (`0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)`): Under gallery and About photography.
- **Promo Float** (`0 25px 50px -12px rgb(0 0 0 / 0.25)`): The renovations slider only.
- **CTA Glow** (`0 10px 15px -3px rgb(12 74 110 / 0.25)`): Under the large primary button, tinted with the accent.

## Shapes

A soft, handheld vocabulary: 16px corners on cards and form containers, 6px on buttons, 12px on icon tiles, fully round pills for badges and category tags. Hairline rings (`1px`, border color) are the standard edge treatment — borders define cards more than shadows do.

- Cards and containers: **Gently curved** (16px), hairline ring, no double borders at joints — adjacent sections share backgrounds instead of stacking cards.
- Buttons: **Bluntly rounded** (6px) — small, decisive, tool-like; the large CTA relaxes to 12px.
- Badges and category tags: **Fully round** pills; gallery tags are glass pills (20% white fill, 30% white border, backdrop blur) over photography.

## Components

### Buttons
- **Shape:** Bluntly rounded (6px); the large CTA relaxes to 12px.
- **Primary:** Deep Ocean Blue background, white text, 16px×24px padding; large variant 12px×24px with a tinted CTA glow shadow and a 2px hover lift.
- **Hover / Focus:** Hover deepens to #083344 (300ms transition); focus-visible draws a strong hairline outline in the accent color with 8px offset. The arrow in large CTAs shifts right 4px on hover.

### Chips
- **Style:** Fully round; Deep Ocean Blue Tint fill with Ink-blue text, 6px×16px padding, 500 weight.
- **State:** No unselected state in the current implementation — chips are informational badges, not toggles.

### Cards / Containers
- **Corner Style:** Gently curved (16px).
- **Background:** Pure White on Bone or Washed Concrete grounds.
- **Shadow Strategy:** Flat at rest (hairline ring only); xl shadow + 4px lift on hover (300–500ms).
- **Border:** 1px hairline ring in border color.
- **Internal Padding:** 32px standard; contact rows compact to 16px×20px.

### Gallery / Work Cards
- **Corner Style:** Gently curved (16px), fixed 3:4 aspect.
- **Image:** Object-cover fill, 560ms zoom to 110% on hover, lazy-loaded.
- **Overlay:** Bottom gradient from 60% black, label in white 600 with drop shadow; gradient intensifies on hover.

### Navigation
- Sticky header, 80% white with backdrop blur and a hairline bottom border.
- Links: 0.875rem, 500 weight, Warm Sand resting, Deep Ocean Blue on hover with underline.
- The Get a Quote button is a compact primary (6px radius), always visible; mobile collapses links but keeps the button.

### Contact Rows
- Full-width rows, 16px radius, Washed Concrete fill; hover floods to Deep Ocean Blue Tint with the accent-colored icon. Phone and email rows with right-aligned values.

## Do's and Don'ts

### Do:
- **Do** let photography carry the section — captions and badges only.
- **Do** reserve Deep Ocean Blue for actions and proof of work; nothing decorative wears it.
- **Do** keep one centered idea per section, capped at ~36rem.
- **Do** use hairline rings to separate cards at rest, shadows only for state or promotion.
- **Do** write like a Perth tradesperson: plain words, no corporate gloss.

### Don't:
- **Don't** introduce a second display font; the family is the system's own sans.
- **Don't** use Warm Sand for primary actions or blue for pure decoration.
- **Don't** float cards at rest — no resting shadows, no resting lifts.
- **Don't** fake the work: no plumbing, tidy-warehouse, or posed-stock renovation imagery.
- **Don't** stack heavy text on heavy texture; the background dot pattern stays at 3% opacity, pointer-events none.