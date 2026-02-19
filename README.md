<p align="center">
  <img src="./public/images/emperor-ui-logo.png" alt="Emperor UI Logo" width="120" />
</p>

<h1 align="center">Emperor UI</h1>

<p align="center">
  <strong>They provide the atoms, we provide the empire.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@js-empire/emperor-ui">
    <img src="https://img.shields.io/npm/v/@js-empire/emperor-ui.svg" alt="npm version" />
  </a>
  <a href="https://github.com/MustafaHasanat/emperor-ui/blob/main/package.json">
    <img src="https://img.shields.io/npm/l/@js-empire/emperor-ui" alt="license" />
  </a>
</p>

---

## Introduction

**Emperor UI** is a modular React component library built for modern web applications. It sits on top of [HeroUI](https://www.heroui.com/) to deliver ready-made organisms and page-level building blocks—so you can ship features faster without rebuilding common patterns from scratch.

Every component is designed with full control in mind: optional features can be enabled or disabled via props, and styling is customizable through `className` and `classNames` for fine-grained overrides.

Ideal for **React** and **Next.js** projects that use **Tailwind CSS** and HeroUI.

---

## Installation

Install the package from npm:

```bash
npm install @js-empire/emperor-ui
```

Or with yarn:

```bash
yarn add @js-empire/emperor-ui
```

Or with pnpm:

```bash
pnpm add @js-empire/emperor-ui
```

### Peer dependencies

Emperor UI depends on **React**, **HeroUI**, **Tailwind CSS**, and related tooling. Ensure your project has compatible versions. For theme switching, **next-themes** is used.

### Styles

Import the library’s global styles in your app root (e.g. `layout.tsx` or `_app.tsx`):

```tsx
import "@js-empire/emperor-ui/globals.css";
```

---

## Components

Components are grouped by complexity: **Atoms** (small building blocks), **Molecules** (combinations of atoms), **Organisms** (sections and features), and **Templates** (full page layouts).

---

### Atoms

| Component       | Description                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Brand**       | Logo and brand mark for headers and sidebars.                                                                                                                                  |
| **ColorPicker** | Color selection with preset or free (input) modes. Use `inputType="preset"` for predefined colors.                                                                             |
| **Container**   | Centered layout wrapper with consistent padding.                                                                                                                               |
| **Column**      | Flex column layout primitive.                                                                                                                                                  |
| **Row**         | Flex row layout primitive.                                                                                                                                                     |
| **CopyButton**  | Button that copies a given string to the clipboard and shows copy/success state. Pass `value` to copy.                                                                         |
| **Field**       | Form field / sorter wrapper.                                                                                                                                                   |
| **Filter**      | Single filter unit. Types: `search`, `select`, `autocomplete`, `date`, `numeric`, `checkbox`, `checkboxGroup`, `switch`, `range`. Use with `paramKey` and type-specific props. |
| **Portal**      | Renders children into a DOM node (e.g. modals, tooltips).                                                                                                                      |
| **ThemeSwitch** | Toggle between light and dark theme (works with `next-themes`).                                                                                                                |
| **Uploader**    | File upload with label, listing, and optional avatar mode. Use with `useUpload` and pass the returned props.                                                                   |

**Example — Theme switch**

```tsx
import { ThemeSwitch } from "@js-empire/emperor-ui";

<ThemeSwitch />;
```

**Example — Copy button**

```tsx
import { CopyButton } from "@js-empire/emperor-ui";

<CopyButton value="Text to copy" />;
```

**Example — Filter**

```tsx
import { Filter } from "@js-empire/emperor-ui";

<Filter
  type="search"
  paramKey="q"
  searchProps={{ placeholder: "Search..." }}
/>;
```

**Example — Uploader**

```tsx
import { Uploader, useUpload } from "@js-empire/emperor-ui";

const uploadProps = useUpload({
  labelId: "uploaded-file",
  fileTypes: ["image", "pdf"],
  isRequired: true,
  isMulti: true,
});

<Uploader {...uploadProps} />;
```

---

### Molecules

| Component    | Description                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| **ItemCard** | Card for list/grid items: header, body, footer, optional actions and hover effects. Supports vertical/horizontal orientation. |
| **NavBar**   | Horizontal navigation with items and optional hover effects.                                                                  |
| **Scaffold** | Main content wrapper; respects Emperor UI config (e.g. `dir` for RTL).                                                        |
| **SideBar**  | Collapsible sidebar with drawer on mobile; use with header, items, and trigger.                                               |

**Example — Item card**

```tsx
import { ItemCard } from "@js-empire/emperor-ui";

<ItemCard
  item={{ key: "1", title: "Item", subtitle: "Description" }}
  orientation="vertical"
  actions={[{ key: "edit", label: "Edit" }]}
  onActionClick={(key) => console.log(key)}
/>;
```

**Example — Scaffold**

```tsx
import { Scaffold } from "@js-empire/emperor-ui";

<Scaffold>
  <YourPageContent />
</Scaffold>;
```

---

### Organisms

| Component       | Description                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------- |
| **Filters**     | Container for multiple `Filter` components. Children must be `Filter` only.                     |
| **Footer**      | Site footer with quick links, social links, policies, and copyright.                            |
| **Header**      | App header with sidebar (drawer on mobile), nav bar, and optional glass effect.                 |
| **ItemDetails** | Details view block (e.g. breadcrumbs, media, title, price).                                     |
| **Listings**    | Grid or list of items with `ItemCard`, loading skeletons, empty state, and optional pagination. |

**Example — Filters**

```tsx
import { Filters, Filter } from "@js-empire/emperor-ui";

<Filters>
  <Filter type="search" paramKey="q" />
  <Filter type="select" paramKey="category" options={[...]} />
</Filters>
```

**Example — Listings**

```tsx
import { Listings } from "@js-empire/emperor-ui";

<Listings
  items={items}
  layout="grid"
  isLoading={isLoading}
  pagination={{ page: 1, total: 10, pageSize: 12 }}
/>;
```

**Example — Header**

```tsx
import { Header } from "@js-empire/emperor-ui";

<Header variant="default" glassEffect />;
```

---

### Templates

| Component       | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| **LandingPage** | Full landing page layout composing header, content, and footer. |

---

## Documentation & development

- **Storybook** — Run `npm run storybook` to browse and test components locally.
- **Issues** — [GitHub Issues](https://github.com/MustafaHasanat/emperor-ui/issues)
- **Repository** — [GitHub](https://github.com/MustafaHasanat/emperor-ui)

---

## Author

**JS Empire — Mustafa Alhasanat**

- [GitHub](https://github.com/MustafaHasanat)
- [npm](https://www.npmjs.com/~js-empire)

---

<p align="center">
  <sub>Built with React, HeroUI, and Tailwind.</sub>
</p>
