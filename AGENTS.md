# AGENTS.md — Portfolio

## Stack

Astro 5 static site, Tailwind CSS 4 (Vite plugin), TypeScript strict. Package manager: pnpm.

## Commands

```sh
pnpm dev          # dev server with HMR
pnpm build        # production build → dist/
pnpm preview      # serve production build locally
```

No test framework. No lint/format scripts wired in package.json. Run manually:
```sh
npx eslint .       # uses eslint-plugin-astro
npx prettier --write .
```

## Path Aliases

Defined in `tsconfig.json`. Always use aliases, never relative paths beyond same-directory:

| Alias | Maps to |
|---|---|
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@pages/*` | `src/pages/*` |
| `@utils/*` | `src/utils/*` |
| `@styles/*` | `src/styles/*` |
| `@scripts/*` | `src/scripts/*` |
| `@assets/*` | `src/assets/*` |
| `@i18n/*` | `src/i18n/*` |

## i18n

Default locale: `es` (Spanish, served at root `/`). English at `/en/`. Fallback: `en` → `es`.

Translation strings live in `src/i18n/ui.ts`. Use `useTranslation(locale)` to get a `t()` function — never hardcode user-facing strings. Every piece of UI text must exist in both `es` and `en` entries.

Pages mirror the locale structure: `src/pages/index.astro` (es), `src/pages/en/index.astro` (en), same for projects.

## Content Collections

Projects defined in `src/content/config.ts`. Markdown files in `src/content/projects/{es,en}/`. Schema (Zod):

- `title`, `summary`, `date` (string, parseable), `thumbnail`, `featured` — required-ish
- `categories`, `tags`, `link`, `images`, `dirimages`, `video` — optional
- Constraint: if `images` is non-empty, `dirimages` must also be set

New project = add markdown in both `es/` and `en/` directories with matching slugs.

## Styling

Tailwind via Vite plugin (`@tailwindcss/vite`). Global styles in `src/styles/global.css`. Custom font tokens: `--font-sans` (Inter), `--font-title` (Poppins). Tailwind classes: use `font-sans` / `font-title` for these.

Design tokens: Stone neutrals, Yellow-400/Cyan-400 accents, Blue-600 links.

## Component Conventions

- Components in `src/components/`, page sections in `src/components/sections/`
- `.astro` files with frontmatter for logic, `<script>` only if needed
- Props via TypeScript interface in frontmatter
- Use `set:html` to render translated HTML content strings from `ui.ts`
- Lucide icons via `@lucide/astro`

## Key Gotchas

- **Canonical URL** hardcoded to `mabreumx.com` in `src/i18n/ui.ts` — update if domain changes
- **OG image** path also in `src/i18n/ui.ts` (`site.image`)
- `projects-info.md` in repo root is a reference doc, not imported by the site
- Build output goes to `dist/` (gitignored)
- No `.env` files committed; env vars loaded by Astro if present
