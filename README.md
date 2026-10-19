# SAPHELON — Engineering Confidence

Official corporate website for **SAPHELON Technologies**, delivering integrated industrial automation, IIoT & Industry 4.0 connectivity, applied AI, custom software, and pharmaceutical computer system validation (CSV).

---

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Styling**: Vanilla CSS Modules with design tokens (`src/styles/variables.css`)
- **Theme Support**: Three curated modes (`contour` dark mode, `mist` light mode, `blue` theme)

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
npm install
```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Typecheck and generate the production bundle into the `dist/` folder:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/                 # Static assets and domain photography
│   └── images/             # Industrial automation, IIoT, AI, CSV photography
├── src/
│   ├── components/         # Reusable UI components & section blocks
│   │   ├── Header/         # Navigation header & theme switcher
│   │   ├── Footer/         # Footer with multi-column navigation & quick links
│   │   ├── ServiceCard/    # Animated service cards with imagery
│   │   ├── ApproachSection/# Interactive 4-step delivery timeline rail
│   │   └── ...
│   ├── constants/          # Master content models, routes, and registries
│   ├── pages/              # Routed pages (Home, About, Services, Contact, etc.)
│   ├── styles/             # Global CSS design tokens, reset, typography
│   ├── types/              # TypeScript interface and type definitions
│   ├── App.tsx             # Main routing and layout wrapper
│   └── main.tsx            # Application entrypoint
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License

Proprietary © SAPHELON Technologies. All rights reserved.
