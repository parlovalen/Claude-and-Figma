# Worklog — Claude & Figma

A running summary of work done each session. Updated before every push.

---

## 2026-03-29 — Session 2

Picked up from the previous session. Completed the ui-library form showcase, scaffolded the ui-content-blocks project, built and made the first content block responsive, set up GitHub, and pushed everything.

**ui-library**
- Wired all 5 remaining form components (`FormLogIn`, `FormForgotPassword`, `FormNewsletter`, `FormContact`, `FormLeadSignup`) and 2 new primitives (`Textarea`, `Select`) into the dev sandbox
- Added Barlow Condensed to the Google Fonts link (needed for `FormLeadSignup` heading)
- Updated sidebar nav to include all new sections
- Added `submitLabel` and `className` props to `FormLeadSignup` to support override from content blocks

**ui-content-blocks** *(new project)*
- Scaffolded Vite + React 19 + TypeScript + Tailwind v3
- Vite alias `@ui` → `../ui-library/src` — imports library components without a build step
- Tailwind content glob includes ui-library source so all token classes resolve
- Collapsible siderail: `w-52` expanded ↔ `w-10` collapsed, animated with CSS transition, main content padding adjusts in sync

**HeroSection block** (Figma node `37:340`)
- Blue brand background with CSS-masked NLU watermark (hidden below `lg`)
- NLU logo header, heading + body copy, 4-item feature list with check icons
- `FormLeadSignup` at 486px with custom "Find your next step forward →" CTA
- Fully responsive across 4 breakpoints: mobile (36px heading, stacked) → sm → lg (two-column) → xl (Figma spec, 64px heading, 120px padding)

**Infrastructure**
- Installed `gh` CLI, authenticated with GitHub
- Created repo [parlovalen/Claude-and-Figma](https://github.com/parlovalen/Claude-and-Figma)
- Initial push of all three projects + this worklog

---

## 2026-03-28 — Session 1 — Initial Build

### figma-mcp-test
- Wired up Vite + React + TypeScript on an existing plain HTML project
- Implemented `HeroSection.tsx` from Figma node `20:207` (figma-claude-test file)
- Captured NLU landing page (`Test-Project/index.html`) into Figma using `generate_figma_design`

### ui-library
Set up a new React component library (`/ui-library`) with Vite + React 19 + TypeScript + Tailwind v3.

**Design tokens** (from design-system-test Figma file `X24Z9JJgY2bsMXpOIB79nd`):
- Colors: `brand` (#0072ce), `navy` (#002e52), `steel` (4 tones), `danger` (#900b09), `brand-yellow` (#e2e11b)
- Font: Barlow (+ Barlow Condensed)

**Primitive components built:**
- `Button` — 5 variants (primary, secondary, subtle, neutral, danger), 2 sizes, disabled state
- `Input` — label, description, error, disabled states
- `InputCompact` — floating label input (shrinks on focus/fill)
- `Checkbox` — custom SVG checkmark, label + description
- `Textarea` — resizable, label/description/error/disabled states
- `Select` — native select with custom chevron, label, disabled state

**Form components built** (from figma-claude-test designs):
- `FormRegister` — email + password + terms checkbox
- `FormLogIn` — email + password + forgot password link
- `FormForgotPassword` — email + cancel + reset button row
- `FormNewsletter` — horizontal email + submit
- `FormContact` — full name + email + phone + message textarea
- `FormLeadSignup` — interest select + name/email/phone + branded CTA button

**Dev sandbox (`src/main.tsx`):**
- Fixed siderail navigation with anchor links to each component section
- Showcases all primitives and forms with state variants

### ui-content-blocks
Set up a new content block sandbox (`/ui-content-blocks`) with Vite + React 19 + TypeScript + Tailwind v3.

- Vite alias `@ui` → `../ui-library/src` so blocks import directly from the library source
- Tailwind content glob includes `../ui-library/src/**` for shared token classes
- Collapsible siderail (`w-52` ↔ `w-10`) with animated transition — toggle to full-width preview

**Content blocks built:**
- `HeroSection` — from Figma node `37:340` (figma-claude-test)
  - Blue brand background with masked NLU watermark
  - NLU logo header (mark + wordmark)
  - Heading, body copy, 4-item feature list with check icons
  - `FormLeadSignup` card (486px) with "Find your next step forward →" CTA
  - Fully responsive: single column (mobile) → two column (lg+), scaled typography across 4 breakpoints

### Infrastructure
- GitHub repo created: [parlovalen/Claude-and-Figma](https://github.com/parlovalen/Claude-and-Figma)
- `gh` CLI installed and authenticated
- All three projects committed and pushed to `main`
