---
name: TypeScript Migration
overview: Rename all 23 application `.js` files to `.tsx`, add prop interfaces to every component and context, and bring `pages/terms.tsx` up to par — following the style guide conventions throughout.
todos:
  - id: install-types
    content: Add @types/react-dom to devDependencies
    status: completed
  - id: context
    content: Migrate contexts/TranslationContext.js → .tsx with inferred Translations type
    status: completed
  - id: atoms
    content: Migrate components/atoms/Button.js and Tooltip.js → .tsx with prop interfaces
    status: completed
  - id: layouts
    content: Migrate components/layouts/Container.js, Split.js, Layout.js → .tsx
    status: completed
  - id: molecules
    content: Migrate all 5 molecules to .tsx, fix Room2 → Room naming
    status: completed
  - id: organisms
    content: Migrate all 5 organisms to .tsx
    status: completed
  - id: pages
    content: Migrate all 7 page .js files → .tsx, fix terms.tsx useTranslation type
    status: completed
isProject: false
---

# TypeScript Migration

## Scope

**23 `.js` files** to rename and type. **3 files** already TS (`hooks/use-scroll-direction.ts`, `lib/utils.ts`, `pages/terms.tsx`) — `terms.tsx` needs its `useTranslation` return type fixed.

`next.config.js` and `postcss.config.js` are kept as-is (tooling configs, no benefit from converting).

## Package addition

Add `@types/react-dom` — needed for `AppProps` in `_app.tsx` and other DOM-specific types that Next.js Pages Router relies on.

## Key typing decisions by layer

### `contexts/TranslationContext.tsx`

The most impactful change. Type the context value by inferring from the JSON source:

```typescript
import en from '../locales/en.json';
type Translations = typeof en;
const TranslationContext = createContext<Translations | undefined>(undefined);
```

`useTranslation` will return `Translations` and throw if called outside the provider. This gives full type-safe access to all translation keys across every component and page automatically.

### Components — atoms, layouts, molecules, organisms

Each gets a `Props` interface (or inline interface on the function signature). Style-guide conventions applied throughout:

- Named exports for all non-page components (style guide: "Favor named exports for components")
- `function` keyword for component definitions
- `React.ComponentType<{ size?: number }>` for the `icon` prop in `RoomFeature`
- Union types for constrained props (e.g. `size: 'small' | 'medium' | 'large'` in `Button`, `direction: 'normal' | 'reverse'` in `Split`)
- `children: React.ReactNode` where applicable

### `components/molecules/Room.tsx`

Fix the `Room2` naming inconsistency — rename the component to `Room` to match how it's imported in `lodging.js`.

### Pages

Pages keep `export default function` (required by Next.js Pages Router). Typed with Next.js-provided generics:

- `[pages/_app.tsx](pages/_app.tsx)`: `AppProps` from `next/app`
- `[pages/_document.tsx](pages/_document.tsx)`: no custom props, straightforward rename

### `pages/terms.tsx` (already TS, needs update)

The `useTranslation` return type is currently `any`. Once the context is properly typed, `terms.tsx` gets full type safety for free — only the `Section` interface needs to remain.

## Migration order

Components are migrated leaf-first to avoid broken imports during the rename:

1. `contexts/TranslationContext`
2. Atoms: `Button`, `Tooltip`
3. Layouts: `Container`, `Split`, `Layout`
4. Molecules: `Banner`, `Block`, `Room`, `RoomFeature`, `SectionHeader`
5. Organisms: `Footer`, `Gallery`, `Header`, `Hero`, `Menu`
6. Pages: `_app`, `_document`, `contacts`, `experiences`, `index`, `lodging`, `restaurant`
7. Fix `pages/terms.tsx`

Each step: delete the old `.js` file, create the new `.tsx` file with types added.
