# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Emperor UI is a React component library (not a web app) built on HeroUI + Tailwind CSS. There is no backend, database, or API — it is a pure frontend component library published to npm as `@js-empire/emperor-ui`.

### Key commands

All scripts are in `package.json`. The primary ones:

| Command          | Purpose                                                       |
| ---------------- | ------------------------------------------------------------- |
| `pnpm dev`       | Vite dev server on port 3000                                  |
| `pnpm storybook` | Storybook on port 6006 (main way to visually test components) |
| `pnpm build`     | Vite library build (outputs to `dist/`)                       |
| `pnpm lint`      | ESLint                                                        |
| `pnpm format`    | Prettier                                                      |

### Gotchas

- **pnpm build scripts**: After `pnpm install`, pnpm may block build scripts for `esbuild` and `@heroui/shared-utils`. Run `pnpm rebuild esbuild @heroui/shared-utils` if Vite or Storybook fails to start with missing binary errors.
- **Playwright browsers**: Vitest browser tests require Playwright Chromium. Install with `npx playwright install chromium` if not already cached.
- **No test files**: The project has Vitest + Playwright configured (`@vitest/browser-playwright`) but currently has zero `*.test.ts(x)` files. Testing is done through Storybook stories.
- **Storybook is the primary dev surface**: Since this is a component library, Storybook (port 6006) is the main way to develop and visually verify components, not the Vite dev server.
- **Pre-commit hook**: Husky runs `pnpm format`, `git add .`, `pnpm lint`, and `pnpm build` on pre-commit (see `.husky/pre-commit`).
