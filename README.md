# Dark Docs 2.0

Enhanced dark theme for Google Docs with customizable accent colors.

## Features

- 🌙 **Dark Mode**: Modern dark theme for Google Docs
- 🎨 **Customizable Colors**: Adjustable accent colors
- ⚡ **Fast Performance**: Lightweight and efficient
- 🔧 **Easy Configuration**: User-friendly popup interface

## Development

### Prerequisites

- Node.js >= 16.0.0
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd docs-dark-chrome
```

2. Install dependencies:

```bash
npm install
```

### Build Commands

- **Build for all browsers**: `npm run build`
- **Development build**: `npm run dev` (same as build)
- **Clean build files**: `npm run clean`
- **Copy to version directory**: `./copy_to_version.sh [version]`

### Project Structure

```
docs-dark-chrome/
├── src/                    # Source files
│   ├── scripts/           # Content scripts
│   ├── styles/            # CSS files
│   ├── popup/             # Popup UI files
│   └── manifest.json      # Extension manifest
├── dist/                  # Built extension (generated)
│   ├── chrome/           # Chrome-specific build
│   ├── firefox/          # Firefox-specific build
│   ├── edge/             # Edge-specific build
│   └── opera/            # Opera-specific build
├── releases/              # Browser-specific ZIP packages (generated)
├── versions/              # Version archives (generated)
├── package.js             # Main build & packaging script
├── package.json           # Node.js dependencies
├── build_config.json     # Build configuration
└── copy_to_version.sh    # Version archiving script
```

### Loading the Extension

1. Build the extension: `npm run build`
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the `dist` folder

### Development Workflow

1. Make changes to files in the `src/` directory
2. Run `npm run build` to build for all browsers
3. Load the appropriate browser build from `dist/[browser]/` in your browser's developer mode

## Multi-Browser Support

The build system automatically creates browser-specific packages:

- **Chrome**: Manifest V3 with separate host permissions
- **Firefox**: Manifest V2 with combined permissions
- **Edge**: Manifest V3 (same as Chrome)
- **Opera**: Manifest V3 (same as Chrome)

## Building for Production

```bash
npm run build
```

This creates ZIP files for all browsers in the `releases/` directory, ready for store submission:

- `docs-dark-chrome-chrome-v2.0.0.zip` - Chrome Web Store
- `docs-dark-chrome-firefox-v2.0.0.zip` - Firefox Add-ons
- `docs-dark-chrome-edge-v2.0.0.zip` - Edge Add-ons
- `docs-dark-chrome-opera-v2.0.0.zip` - Opera Add-ons

## License

MIT License
