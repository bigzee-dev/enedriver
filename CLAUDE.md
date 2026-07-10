# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev     # start dev server (Turbopack, http://localhost:3000)
npm run build   # production build (Turbopack)
npm run start   # serve the production build
npm run lint    # eslint (flat config)
npx tsc --noEmit  # typecheck (no dedicated "typecheck" script exists)
```

There is no test suite/runner configured in this project.

## Architecture

This is a single-page marketing site (no routing beyond `app/page.tsx`) for "E&E Driver Training Consultancy", a Botswana-based driver/plant-operator training company. `app/page.tsx` composes the page by stacking section components from `components/` in order (Header, Hero, AccreditationBar, Courses, WhyChooseUs, Industries, Process, ContactCTA, Footer) — there's no shared layout logic between sections beyond that ordering.

**Content vs. presentation split**: All copy/data lives in `lib/`, not in components:
- `lib/constants.ts` — company name, WhatsApp number/link, email, Facebook URL, address. Always import from here instead of hardcoding these values; several are marked `PLACEHOLDER` pending real client details.
- `lib/content.ts` — the course catalogue (`COURSES`) and industries list (`INDUSTRIES`), typed via the `Course` interface. `CourseCard`/`Courses` render straight from this array, so adding/editing a course means editing this file, not JSX.

**Design tokens live in `app/globals.css`**, not `tailwind.config.*` (Tailwind v4 CSS-first config via `@theme`). Brand colors (`--color-brand-*`, `--color-accent-*`) and semantic tokens (`--color-surface`, `--color-body`, `--color-heading`, etc.) are defined there, with light/dark values swapped purely via `@media (prefers-color-scheme: dark)` — **there is no manual dark-mode toggle**; it always follows system settings by design. The `.lane-line` / `.lane-line-vertical` classes are the site's recurring signature motif (a dashed road centre-line) and the `.eyebrow` class is the small tracked-caps label style used above section headings — reuse these rather than reinventing them.

**Fonts**: loaded once in `app/layout.tsx` via `next/font/google` (Montserrat for headings/display, IBM Plex Sans for body, IBM Plex Mono for numeric/data callouts), exposed as CSS variables and mapped to `--font-display` / `--font-sans` / `--font-mono` in `globals.css`.

**Placeholder brand assets**: the client hasn't supplied a logo or photography yet. `components/Logo.tsx` and `components/CourseArtwork.tsx` are hand-built inline SVGs standing in for those assets — light/dark logo variants are swapped with Tailwind's `dark:` class variant (matching the system-driven dark mode, no JS toggle). When real assets arrive, replace these components' internals but keep their existing props/usage sites intact.

**Icons**: `components/Icons.tsx` is a single file exporting all inline SVG icons used across the site (stroke uses `currentColor` so they inherit theme color automatically) — add new icons there rather than pulling in an icon library.

Path alias `@/*` resolves to the project root (see `tsconfig.json`), used throughout as e.g. `@/lib/constants`, `@/components/Header`.
