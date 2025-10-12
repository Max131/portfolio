# Agent Guidelines for Portfolio Project

## Commands

- **Build**: `npm run build` (Astro build)
- **Dev server**: `npm run dev` (Astro dev)
- **Preview**: `npm run preview` (Astro preview)
- **Lint**: No dedicated lint script (ESLint available in devDependencies)
- **Format**: No dedicated format script (Prettier available in devDependencies)
- **Test**: No test framework configured

## Code Style

- **Language**: TypeScript with strict Astro config
- **Imports**: External libraries first, then path aliases (@/_, @components/_, etc.)
- **Naming**: camelCase for variables/functions, PascalCase for types/interfaces
- **Functions**: Arrow functions preferred, JSDoc comments for documentation
- **Types**: Strict typing required, use interfaces for complex objects
- **Error handling**: try/catch blocks, no throwing in production code
- **Formatting**: 2-space indentation, double quotes, semicolons
- **Styling**: Tailwind CSS with custom font variables (--font-sans, --font-title)
- **Components**: Astro components with frontmatter for logic
- **Content**: Use Astro content collections for structured data
- **i18n**: Support for Spanish/English with translation utilities
