# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt-based educational platform for Valentin FOURNY's courses, built with the Nuxt UI Docs template. The platform provides structured learning modules on Node.js, Vue.js, CI/CD, and Git.

## Development Commands

### Essential Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint

# Run type checking
npm run typecheck
```

### Package Manager

This project uses **npm** as the package manager.

## Architecture

### Technology Stack

- **Nuxt 4**: Full-stack Vue framework with SSR/SSG capabilities
- **Nuxt Content**: File-based CMS for markdown content
- **Nuxt UI**: Component library based on Tailwind CSS
- **Nuxt Image**: Image optimization
- **TypeScript**: Type-safe development

### Project Structure

#### Content Organization

Content is organized in numbered directories under `/content/`:

- `1.node/` - Node.js course materials
- `2.vue/` - Vue.js course materials
- `3.ci-cd/` - CI/CD course materials
- `4.git/` - Git course materials
- `index.yml` - Landing page configuration with course modules

**Content Collections** (defined in `content.config.ts`):

- `landing`: Single page collection for the home page (`index.md`)
- `docs`: All other markdown files, with optional `links` metadata for external resources

#### Application Structure

- `app/` - Nuxt application code
  - `pages/` - File-based routing
    - `index.vue` - Landing page (uses `landing` collection)
    - `[...slug].vue` - Catch-all docs page (uses `docs` collection)
  - `layouts/docs.vue` - Documentation layout with TOC
  - `components/` - Vue components
    - `content/` - Content-specific components (HeroBackground, StarsBg)
    - `landing/` - Landing page components (HeroSection, ModulesSection, AboutMeSection)
  - `app.config.ts` - UI configuration (theme, header, footer, TOC)

#### Server Routes

- `server/routes/raw/[...slug].md.get.ts` - Raw markdown endpoint
  - Accepts paths like `/raw/node/bases.md`
  - Returns markdown content with title/description prepended as H1 and blockquote if missing from original content
  - Useful for exporting or viewing raw markdown of course materials

### Key Configuration Files

**`nuxt.config.ts`** - Main Nuxt configuration:

- Modules: ESLint, Image, UI, Content, Color Mode
- Content: TOC search depth limited to 1
- Nitro: Prerendering with link crawling enabled
- ESLint: Stylistic rules (comma dangle: never, brace style: 1tbs)

**`app.config.ts`** - Application-specific config:

- UI theme colors (primary: green, neutral: slate)
- Header/footer configuration
- TOC configuration with community links
- Edit link base URL

**`content.config.ts`** - Content collections schema:

- `landing`: Single page collection (source: `index.md`)
- `docs`: All other markdown files (excludes `index.md`), with schema validation for optional `links` array

### Content System

The platform uses Nuxt Content with two collection types:

1. **Landing Page**: Single-page collection rendered on `/` with custom YAML configuration
2. **Documentation Pages**: All course materials with automatic navigation and TOC generation

Content files support:

- Frontmatter metadata (title, description, links)
- Automatic table of contents (limited to H1 level)
- Surround navigation (previous/next pages)
- Custom components in markdown (StarsBg, HeroBackground)

### Styling & Theming

- Uses Nuxt UI v4 component library
- Primary color: green
- Neutral color: slate
- Custom CSS in `app/assets/css/main.css`
- ESLint configured with stylistic preferences (no trailing commas, 1tbs brace style)

## Coding Conventions

### Vue Component Structure

**All Vue components must follow this structure order:**

1. `<template>` - Always first
2. `<script setup lang="ts">` - Always after template
3. `<style>` - If needed, always last

This convention improves readability by showing the component's output (template) before its implementation (script).

**Example:**

```vue
<template>
  <div>Content here</div>
</template>

<script setup lang="ts">
// Logic here
</script>

<style scoped>
/* Styles here */
</style>
```

## Development Workflow

### Adding New Course Content

1. Create markdown files in the appropriate numbered directory under `/content/`
2. Use numbered prefixes for ordering (e.g., `1.index.md`, `2.bases.md`)
3. Include frontmatter: `title`, `description`, optional `links` array
4. Content will automatically appear in navigation and support TOC
