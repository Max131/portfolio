# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is Mario Abreu's portfolio website - a multilingual (Spanish/English) Astro-based static site showcasing frontend development work. The site features a modern, performance-focused architecture with internationalization, content collections, and responsive design.

## Development Commands

- **Development server**: `pnpm dev` or `npm run dev` - Starts Astro dev server with hot reload
- **Build**: `pnpm build` or `npm run build` - Creates optimized production build
- **Preview**: `pnpm preview` or `npm run preview` - Serves built site locally for testing
- **Astro CLI**: `pnpm astro` or `npm run astro` - Direct access to Astro commands

### Linting and Formatting

- ESLint and Prettier are configured but no npm scripts exist
- Run manually: `npx eslint .` and `npx prettier --write .`
- ESLint config uses `eslint-plugin-astro` for Astro-specific rules

## Architecture & Key Concepts

### Technology Stack

- **Framework**: Astro 5.x with static site generation
- **Styling**: Tailwind CSS 4.x with custom design system
- **TypeScript**: Strict configuration with comprehensive path aliases
- **Package Manager**: pnpm (evident from lockfile)
- **Fonts**: Inter (body) and Poppins (headings) via Fontsource

### Directory Structure

```
src/
├── components/        # Reusable Astro components
│   └── sections/     # Page section components
├── content/          # Content collections (projects)
├── i18n/            # Internationalization utilities and translations
├── layouts/         # Page layout components
├── pages/           # Route-based pages (index.astro, en/index.astro)
├── styles/          # Global CSS with font imports
└── utils/           # Utility functions
```

### Internationalization (i18n)

- **Default locale**: Spanish (`es`)
- **Supported locales**: Spanish and English (`es`, `en`)
- **Routing**: Spanish is root path `/`, English is `/en`
- **Translation system**: Custom utilities in `src/i18n/`
- **Configuration**: Set in `astro.config.mjs` with fallback strategy

### Content Management

- **Content collections**: Defined in `src/content/config.ts`
- **Projects schema**: Includes title, summary, categories, tags, dates, media assets
- **Validation**: Zod schema with custom refinements for image directory requirements
- **Media**: Images should be 480x270px optimized for web

### TypeScript Configuration

Path aliases configured for clean imports:

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@pages/*` → `src/pages/*`
- `@utils/*` → `src/utils/*`
- `@styles/*` → `src/styles/*`
- `@scripts/*` → `src/scripts/*`
- `@assets/*` → `src/assets/*`
- `@i18n/*` → `src/i18n/*`

### Design System

- **Color palette**: Stone (neutral), Yellow-400 (accent), Cyan-400 (accent), Blue-600 (links)
- **Typography**: Inter for body text, Poppins for headings
- **Theme**: CSS custom properties defined in global.css
- **Responsive**: Mobile-first approach with lg: breakpoint usage

### SEO & Metadata

- **Structured data**: JSON-LD for Person and Service schemas
- **Meta tags**: Comprehensive Open Graph and Twitter Card implementation
- **Canonical URLs**: Set to mabreumx.com
- **Sitemap**: Astro generates automatically

## Code Standards

### Component Structure

- Use Astro component frontmatter for logic and imports
- Prefer component-scoped styles when needed
- Use TypeScript interfaces for component props
- Implement semantic HTML structure

### Import Organization

1. External library imports first
2. Path alias imports (@/) second
3. Relative imports last

### Styling Conventions

- Tailwind utility classes preferred over custom CSS
- Use design tokens (--font-sans, --font-title) for consistency
- Follow mobile-first responsive design patterns
- Maintain accessibility standards

### Content Guidelines

- All content should support both Spanish and English
- Use translation utilities (`useTranslation`) consistently
- Images should be optimized and follow 480x270px standard for project thumbnails
- Implement proper alt text and accessibility features

## Project Context

This portfolio showcases Mario Abreu's 5+ years of frontend development experience,
featuring projects for major Mexican institutions and companies including ICA,
Museo Frida Kahlo, and CIBanco. The codebase demonstrates expertise in modern web
technologies and performance optimization.

Key project types featured:

- Large-scale institutional websites
- Cultural and educational platforms
- Financial sector applications
- E-commerce integrations
- Accessibility and SEO optimizations
