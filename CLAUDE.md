# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

Monorepo for `@ssortia/shadcn-zod-bridge` — a declarative form library built on zod schemas and shadcn/ui components.

- `packages/ui/` - Main library: shadcn/ui primitives + form bridge components (ZodForm, AutoForm, field components)
- `packages/playground/` - Development playground with demo forms (Vite dev server)

## Development Commands

### UI Library (`packages/ui/`)
- `pnpm --filter ui build` - Build the library (tsup for ESM/CJS bundles + tsc for declarations)
- `pnpm --filter ui test:run` - Run all tests once
- `pnpm --filter ui test` - Run tests in watch mode

### Playground (`packages/playground/`)
- `pnpm --filter playground dev` - Start the Vite dev server (http://localhost:5173)

### Root Level
- Use `pnpm` as the package manager (not npm or yarn)
- `pnpm install` - Install all workspace dependencies
- `pnpm --filter <package-name> <command>` - Run commands in specific packages

## Architecture Notes

### Build & Bundling
- tsup for dual ESM/CJS output; React and react-dom are externalized
- TypeScript declarations generated via `tsc --emitDeclarationOnly`
- Path alias `@` → `./src` resolved by both tsup (esbuild) and vite

### Form Bridge Architecture
- `ZodForm` wraps `useForm()` with `zodResolver(schema)` + `FormProvider`
- `FieldWrapper` provides consistent layout: FormItem → FormLabel → FormControl → FormDescription → FormMessage
- Each Field component uses `useFormContext()` via FieldWrapper + shadcn primitive
- `AutoForm` introspects zod schema shape, maps types to Field components

### Tailwind CSS v4
- Uses `@tailwindcss/vite` plugin for automatic class detection
- `styles.css` must include `@source "./";` and `@source "../node_modules/react-day-picker";` directives — without these, Radix component classes (Checkbox, Switch, Slider, RadioGroup, Calendar) won't be generated in monorepo setups

### Zod v4 Compatibility
- No `ZodEffects` — use `ZodPipe` / `ZodTransform`
- `ZodEnum` entries via `_def.entries` (Record), not `_def.values`
- `@hookform/resolvers` zodResolver needs `as any` casts due to zod v4 type mismatches
- Wrapper type access (`_def.innerType`) requires `any` casts for TS compatibility

### Testing
- Vitest with jsdom + React Testing Library
- `ResizeObserver` polyfill required in test setup for Radix UI components
- `@testing-library/user-event` installed separately for interaction tests

### Key Files
- `packages/ui/src/index.ts` - All exports (shadcn primitives + form bridge)
- `packages/ui/src/components/form/` - ZodForm, AutoForm, FieldWrapper, types, fields/
- `packages/ui/src/components/ui/` - shadcn primitives (input, select, checkbox, etc.)
- `packages/ui/src/styles.css` - Tailwind config with theme variables
- `packages/playground/src/main.tsx` - Demo page with ManualFormDemo + AutoFormDemo

### Conventions
- shadcn/ui style: "new-york", no RSC, Lucide icons
- `cn()` utility for merging Tailwind classes (clsx + tailwind-merge)
- Playground alias: `@szd/ui` → `../ui/src`