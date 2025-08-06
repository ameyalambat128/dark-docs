# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- GitHub Actions workflows for CI/CD
- Automated release process
- Issue and PR templates
- Contributing guidelines
- Code of conduct

## [2.0.2] - 2024-01-XX

### Added
- Multi-browser support (Chrome, Firefox, Edge, Opera)
- Manifest V3 support for modern browsers
- Manifest V2 support for Firefox compatibility

### Changed
- Improved build system with browser-specific configurations
- Enhanced popup interface design
- Better color theme customization options

### Fixed
- Compatibility issues with different Google Docs themes
- Performance optimizations for faster loading

## [2.0.1] - 2024-01-XX

### Added
- New dark theme variants
- Improved color customization
- Better user interface

### Changed
- Updated to latest manifest version
- Enhanced performance

### Fixed
- Various bug fixes and improvements

## [2.0.0] - 2024-01-XX

### Added
- Complete rewrite of the extension
- Modern dark theme for Google Docs
- Customizable accent colors
- Beautiful landing page
- Monorepo structure with Turborepo
- Next.js 15 website
- TypeScript support
- Shared UI components

### Changed
- Migrated from old extension architecture
- Improved build system
- Better development experience

## [1.0.0] - 2023-XX-XX

### Added
- Initial release
- Basic dark theme for Google Docs
- Chrome extension support

---

## Release Process

1. Update version numbers in:
   - `package.json` (root)
   - `apps/extension/package.json`
   - `apps/www/package.json` (if needed)

2. Add changes to this changelog

3. Create and push a git tag:
   ```bash
   git tag v2.0.3
   git push origin v2.0.3
   ```

4. GitHub Actions will automatically:
   - Build the extension for all browsers
   - Create a GitHub release
   - Upload browser-specific ZIP files 