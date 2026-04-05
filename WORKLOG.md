# Worklog — Claude & Figma

---

## 2026-04-05 — Session 4 — NLU Areas of Study Template

### NLU Areas of Study Template (new project)

Built a complete landing page for NLU Psychology Areas of Study, iterating from a blank HTML/CSS/JS template toward pixel-fidelity with the NLU Brand Template.

**Proof Points / Stats section**
- Replaced student photo (girl-with-coffee.png)
- Made stat labels wrap to 2 lines; widened image container to 740px; image scaled to 95%, anchored left
- Fixed stats layout shift during count-up animation (`grid-template-columns: 280px 1fr`)
- Animated third stat (18 MO.); removed eyebrow label

**Why Study with Us**
- Swapped "National Louis University" → "NLU"

**Pillars section**
- Added centered h2 placeholder above the why-grid cards
- Removed 3 blue RTB items at the bottom
- Replaced all 4 pillar card images: psychology (+ horizontal flip), equity, access, excellence

**Urgency Banner**
- Replaced placeholder with urgency-bg.jpg

**Programs section**
- Replaced accordion slider with a 4-card 2×2 grid (from Figma node 89:2075)
- Figma bullet icons, off-white cards on white background
- Hover: yellow bullet stripe animation (staggered per bullet), 1px grey border + drop shadow
- `btn-subtle` (navy) buttons with SVG arrow slide-in on hover (fixed width `min-width: 250px`)
- Restored original eyebrow + intro copy with scroll-driven word color animation

**Testimonials**
- Replaced with exact 3-slide version from Brand Template (Dr. Angela, Jason, Anna)
- Slide 3 has inline video (desktop) + mobile play button
- Fixed mobile layout: card heights align, 48px top/bottom padding on carousel controls

**Video functionality**
- Desktop: custom 72px follow-cursor (play → close icon swap), inline photo expansion (60/40 split)
- Mobile: play button opens video modal with alum-anna.mp4
- Fixed broken video path (`videos/` → `video/`)

**Mobile fixes**
- Removed extra CTA button below hero checkmarks
- Fixed mobile testimonial gap caused by unstyled `<video>` element (`display: none`)
- Aligned photo heights across all 3 slides with `min-height: 260px` on `.testi-content`



A running summary of work done each session. Updated before every push.



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

---

## 2026-03-29 — Session 3

### figma-claude-test — Mobile Version

Built a complete mobile design frame (390px wide, iPhone 14 standard) on Page 1 of the figma-claude-test file, placed at x:5013, y:-1092 (right of the 1440px desktop frame at x:3473).

**Approach:** Fetched `get_design_context` for all 11 desktop sections, then built each section as a child frame inside a 390px auto-layout wrapper using `use_figma`. Image loading is not supported in the Plugin API context (`fetch` and `createImageAsync` both unavailable), so image elements are represented as solid-color placeholders with correct sizing.

**Sections built (top to bottom):**
- `Hero` — Blue bg, logo placeholders, 36px Barlow Condensed heading, body copy, yellow bullet list, full-width lead form card (4 inputs + CTA)
- `Visual Nav` — Light grey (#f1f2f4) bar with 5 compact nav links
- `Why NLU` — Eyebrow, 32px heading, 2×2 feature card grid with accent bars, navy stats row (#1 / Top 25 / 70K+ / 89%)
- `Urgency Banner` — Navy bg, countdown blocks (156D:03H:54M:50S), yellow "RESERVE YOUR SPOT NOW" button
- `Enrollment Steps` — Light bg, 4 numbered circle-badge steps, "START HERE →" button
- `Areas of Study` — Featured dark card (Business & Technology with title, body, yellow "EXPLORE PROGRAMS →" link), colored program strips, yellow arrow buttons
- `Our Colleges` — 5 college cards stacked, each with logo placeholder, title, and description
- `Carousel Testimonial` — Grey photo placeholder, blue bg quote area, Dr. Angela Zalesna details, 3-dot slide indicator
- `FAQs` — 36px Barlow Condensed heading, 4 accordion items (first item open with answer shown)
- `Call to Action` — Blue bg, 52px heading, yellow "FIND YOUR NEXT STEP FORWARD →" CTA
- `Footer` — Near-black bg, copyright, yellow nav links, accreditation fine print

**Figma frame:** `Mobile` (node `60:513`), total height ~6277px

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
