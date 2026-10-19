# CLAUDE.md — Architecture & Engineering Index

Welcome to the **Saphelon Labs** React codebase. This project converts the original static site into a high-fidelity, modular React application using Vite, React, TypeScript, React Router, CSS Modules, and centralized CSS design tokens.

---

## Quick Reference Rules
- **Component Convention**: `PascalCase` for component folders, component files, and exports.
- **Hook Convention**: `useCamelCase` for hooks.
- **File & Folder Parity**: Files and folders match the component name (`components/<Name>/<Name>.tsx`).
- **Styling**: Use **only** CSS variables defined in `src/styles/variables.css`. Never hardcode colors or fonts.
- **Folder Structure**: One component per folder with its own `<Name>.module.css` and `index.ts`.
- **DRY Architecture**: Always check for an existing component before writing new markup.
- **Documentation**: Provide a short, informative comment above every component, hook, and function.
- **Design Tokens**: Never edit design tokens in `variables.css` or `constants/colors.ts` without explicit user permission.

---

## Detailed Guidelines & Documentation Index

### Rules
- [Coding Standards](.claude/rules/coding-standards.md) — Documentation, TypeScript typing, and architectural fidelity rules.
- [Folder Structure](.claude/rules/folder-structure.md) — Standardized file organization for components, pages, hooks, styles, and assets.
- [Styling Guide](.claude/rules/styling.md) — CSS Modules, theme variable consumption, and no inline styles rule.
- [Naming Conventions](.claude/rules/naming.md) — Naming rules across components, hooks, constants, and stylesheets.

### Skills & Workflows
- [Add Component Skill](.claude/skills/add-component.md) — Step-by-step instructions to create and barrel-export a new reusable UI component.
- [Add Page Skill](.claude/skills/add-page.md) — Step-by-step workflow for assembling route-level pages and configuring routing.

### References
- [Design Tokens](.claude/references/design-tokens.md) — Master color hex codes, font specifications, and layout constraints.
- [Original Site Notes](.claude/references/original-site-notes.md) — Background on logo geometry, intro animation sequence, and theme switching logic.
