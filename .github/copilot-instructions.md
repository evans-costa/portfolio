## Purpose

This file helps AI coding agents become productive fast in this repository (Next.js app using the app/ router, TypeScript, Tailwind, Zod, and React Hook Form). Focus on discoverable, actionable patterns and important files.

## Big picture (what to know)

- Framework: Next.js (app router) — entry is `src/app/layout.tsx` and pages are under `src/app/(main)` and other route files.
- Styling: TailwindCSS classes are used directly in components; global styles in `src/styles/globals.css`.
- Data: small local arrays for content live in `src/lib` (e.g. `projectData.ts`, `experienceData.ts`). These are simple typed exports used directly by components.
- Forms/validation: Zod schemas in `src/schemas` with `z.infer` for types (see `contactFormSchema.ts`) and integration with `react-hook-form` in `src/components/ContactForm/index.tsx`.

## Key files and examples (start here)

- Root layout & metadata: `src/app/layout.tsx` — uses `next/font/local` for `SpaceGrotesk` and imports `@/styles/globals.css`.
- Contact form: `src/components/ContactForm/index.tsx` — example of client component, `use client`, `react-hook-form` + `zodResolver`, and a fetch to `https://api.web3forms.com/submit`.
- Data models: `src/lib/projectData.ts`, `src/lib/experienceData.ts` — contain simple exported TypeScript types (`Project`, `Experience`) and arrays used by UI components.
- Config: `next.config.mjs` contains security headers/CSP that agents must preserve if touching HTTP headers.
- Path alias: `@/*` is mapped to `./src/*` in `tsconfig.json` — imports use `@/...`.

## Developer workflows & commands

- Dev server: `pnpm|npm|yarn` run equivalent for `next dev` — repository scripts: `dev`, `build`, `start` in `package.json`.
- Formatting: Prettier scripts are `lint:check` and `lint:write` (they run Prettier across the repo).
- There are no tests or CI manifests in the repo; avoid adding heavyweight test infra without maintainer confirmation.

Example commands (use the package manager you prefer):

- npm run dev — start development server
- npm run build — production build

## Project-specific conventions & patterns

- Client vs server: components that interact with browser APIs or forms use the `"use client"` directive (example: `ContactForm`). Keep server components (no directive) for layout and static content when possible.
- Styling: Components use inline Tailwind classes. When adding new classes prefer the existing utility-first style instead of adding bespoke CSS unless necessary.
- Types: Some files already define types (see `Project` and `Experience`). Type aliases live beside the data in `src/lib`.
- Zod + React Hook Form: prefer deriving TS types via `z.infer<typeof schema>` (see `contactFormSchema.ts`) and reuse them in components' generics for `useForm<>`.

## Security & integration notes

- CSP and security headers are defined in `next.config.mjs` — keep `connect-src` whitelist when adding external APIs.
- Contact form posts to `https://api.web3forms.com/submit`; do not commit secret keys. The access key in the current form is present as a hidden input; treat it as environment-managed in future changes.

## Typing guidance (concrete, repo-focused)

- Prefer explicit props types for all components that accept data. Examples to update:
  - `src/components/Project/projectList.tsx` — ensure `Project[]` is imported from `src/lib/projectData.ts` and used as the prop type
  - `src/components/Experience/experienceList.tsx` — use `Experience` type from `src/lib/experienceData.ts`
- For forms, keep using Zod and `z.infer` (already used). When calling external APIs, type the expected response shape and assert/validate with Zod where practical.
- API responses: Always validate external API responses with Zod schemas. See `src/types/web3forms.ts` for the Web3Forms response type and validation pattern.
- Error handling: Type catch blocks properly — use `error instanceof Error` to access error properties safely.

Example: derive form types from Zod (already present):

- `contactFormSchema.ts` exports `ContactFormSchema` via `z.infer` — components should use `useForm<ContactFormSchema>()` (already done in `ContactForm`).
- `web3FormsResponseSchema` in `src/types/web3forms.ts` validates API responses before use.

## Where to look when editing

- UI components: `src/components/*` and nested sections under `src/components/Sections`.
- Static data: `src/lib/*.ts`.
- Validation schemas: `src/schemas/*.ts`.
- Type definitions: `src/types/*.ts` (e.g., `web3forms.ts` for external API types).
- Global styles: `src/styles/globals.css`.
- Public assets: `public/` (images, fonts). Note `src/app/layout.tsx` references `public/fonts/SpaceGrotesk-VariableFont_wght.ttf`.

## Small do/don't checklist for agents

- DO keep `next.config.mjs` security headers unchanged unless explicitly updating CSP entries.
- DO use path alias `@/` for imports.
- DO prefer adding lightweight TypeScript types and using existing Zod schemas to infer types rather than inventing new validation logic.
- DON'T add secrets to the repo. Convert any keys to env vars if you must persist them.
- DON'T introduce a new global CSS system; follow Tailwind utilities unless a clear reason exists.

If any part of this file is unclear or you want more examples (typed component template, fetch helper, or a small automated type-check test), tell me which area to expand and I'll iterate.
