# Dark Docs 2.0 - Monorepo

Enhanced dark theme for Google Docs with customizable accent colors, plus a beautiful landing page.

## 🏗️ Monorepo Structure

This project uses **Turborepo** with **pnpm** for optimal performance and developer experience.

```
docs-dark-chrome/
├── apps/
│   ├── extension/          # Chrome Extension
│   │   ├── src/           # Extension source files
│   │   ├── build_config.json
│   │   ├── package.js     # Build script
│   │   └── releases/      # Built ZIP packages
│   └── landing/           # Next.js Landing Page
│       ├── src/           # Landing page source
│       └── public/        # Static assets
├── packages/
│   ├── shared/            # Shared constants & utilities
│   └── ui/                # Shared UI components
├── turbo.json             # Turborepo configuration
├── pnpm-workspace.yaml    # pnpm workspace config
└── package.json           # Root dependencies
```

## 🚀 Features

### Chrome Extension

- 🌙 **Dark Mode**: Modern dark theme for Google Docs
- 🎨 **Customizable Colors**: Adjustable accent colors
- ⚡ **Fast Performance**: Lightweight and efficient
- 🔧 **Easy Configuration**: User-friendly popup interface

### Landing Page

- 🎯 **Minimalist Design**: Clean, professional aesthetic
- 📱 **Responsive**: Works on all devices
- ⚡ **Fast**: Built with Next.js 15
- 🎨 **Animated**: Smooth Framer Motion animations

## 🛠️ Development

### Prerequisites

- **Node.js** >= 16.0.0
- **pnpm** (recommended) or npm

### Setup

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd docs-dark-chrome
```

2. **Install dependencies:**

```bash
pnpm install
```

### Build Commands

#### All Projects

```bash
pnpm turbo build        # Build all apps
pnpm turbo dev          # Run all apps in dev mode
pnpm turbo lint         # Lint all apps
pnpm turbo clean        # Clean all build artifacts
```

#### Chrome Extension Only

```bash
pnpm build:extension    # Build extension
pnpm dev:extension      # Build extension (same as build)
```

#### Landing Page Only

```bash
pnpm build:landing      # Build landing page
pnpm dev:landing        # Run landing page dev server
```

### Development Workflow

1. **Start development servers:**

```bash
pnpm turbo dev
```

2. **For extension development:**
   - Make changes in `apps/extension/src/`
   - Run `pnpm build:extension`
   - Load `apps/extension/dist/chrome/` in Chrome developer mode

3. **For landing page development:**
   - Make changes in `apps/landing/src/`
   - Visit `http://localhost:3000` (auto-reloads)

## 🌐 Multi-Browser Support

The extension build system creates browser-specific packages:

- **Chrome**: Manifest V3 with separate host permissions
- **Firefox**: Manifest V2 with combined permissions
- **Edge**: Manifest V3 (same as Chrome)
- **Opera**: Manifest V3 (same as Chrome)

Built packages are available in `apps/extension/releases/`:

- `dark-docs-2.0-chrome-v2.0.0.zip`
- `dark-docs-2.0-firefox-v2.0.0.zip`
- `dark-docs-2.0-edge-v2.0.0.zip`
- `dark-docs-2.0-opera-v2.0.0.zip`

## 🚀 Deployment

### Chrome Extension

```bash
pnpm build:extension
```

Upload the appropriate ZIP from `apps/extension/releases/` to browser stores.

### Landing Page

```bash
pnpm build:landing
```

Deploy `apps/landing/.next/` to your hosting provider (Vercel, Netlify, etc.).

## 📦 Packages

- **@dark-docs/shared**: Shared constants, utilities, and brand colors
- **@dark-docs/ui**: Shared UI components (BackgroundLines, etc.)

## 🔧 Tech Stack

- **Monorepo**: Turborepo + pnpm
- **Extension**: Vanilla JS + CSS
- **Landing**: Next.js 15 + TypeScript + Tailwind CSS + Framer Motion
- **Shared**: TypeScript + React

## 📄 License

MIT License
