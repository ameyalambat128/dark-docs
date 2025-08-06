# Contributing to Dark Docs 2.0

Thank you for your interest in contributing to Dark Docs 2.0! This document provides guidelines and information for contributors.

## 🚀 Quick Start

1. **Fork** the repository
2. **Clone** your fork locally
3. **Install** dependencies: `pnpm install`
4. **Create** a feature branch: `git checkout -b feature/amazing-feature`
5. **Make** your changes
6. **Test** your changes: `pnpm build && pnpm lint`
7. **Commit** your changes: `git commit -m 'Add amazing feature'`
8. **Push** to your fork: `git push origin feature/amazing-feature`
9. **Create** a Pull Request

## 🛠️ Development Setup

### Prerequisites
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation
```bash
git clone https://github.com/your-username/dark-docs-2.0.git
cd dark-docs-2.0
pnpm install
```

### Available Scripts
```bash
# Development
pnpm dev              # Start all apps in dev mode
pnpm dev:extension    # Build extension for development
pnpm dev:www          # Start website dev server

# Building
pnpm build            # Build all apps
pnpm build:extension  # Build extension only
pnpm build:www        # Build website only

# Quality
pnpm lint             # Lint all code
pnpm format           # Format all code
pnpm clean            # Clean build artifacts
```

## 📁 Project Structure

```
dark-docs-2.0/
├── apps/
│   ├── extension/          # Chrome Extension
│   │   ├── src/           # Extension source files
│   │   ├── build_config.json
│   │   ├── package.js     # Build script
│   │   └── releases/      # Built ZIP packages
│   └── www/               # Next.js Website
│       ├── src/           # Website source
│       └── public/        # Static assets
├── packages/
│   ├── shared/            # Shared constants & utilities
│   └── ui/                # Shared UI components
```

## 🎯 Development Guidelines

### Code Style
- Use **Prettier** for code formatting
- Follow **ESLint** rules
- Use **TypeScript** for type safety
- Follow **conventional commits** for commit messages

### Extension Development
- Test in multiple browsers (Chrome, Firefox, Edge, Opera)
- Ensure compatibility with Manifest V2 (Firefox) and V3 (others)
- Test with different Google Docs themes and settings

### Website Development
- Ensure responsive design works on all screen sizes
- Optimize for performance and accessibility
- Test with different browsers and devices

## 🐛 Bug Reports

Before reporting a bug:
1. Search existing issues to avoid duplicates
2. Test with the latest version
3. Provide detailed reproduction steps
4. Include browser version, OS, and extension version

## ✨ Feature Requests

When suggesting features:
1. Explain the problem you're trying to solve
2. Describe your proposed solution
3. Consider if it would benefit other users
4. Be willing to help implement if needed

## 🔄 Pull Request Process

1. **Fork** and clone the repository
2. **Create** a feature branch from `main`
3. **Make** your changes following the style guide
4. **Test** your changes thoroughly
5. **Update** documentation if needed
6. **Commit** with a clear message
7. **Push** to your fork
8. **Create** a Pull Request with a detailed description

### PR Guidelines
- Use the PR template
- Link related issues
- Include screenshots for UI changes
- Ensure all CI checks pass
- Request review from maintainers

## 📝 Commit Message Format

Use conventional commits:
```
type(scope): description

[optional body]

[optional footer]
```

Examples:
- `feat(extension): add new color theme option`
- `fix(www): resolve mobile navigation issue`
- `docs: update installation instructions`
- `refactor(shared): improve utility functions`

## 🏷️ Release Process

1. **Update** version numbers in relevant `package.json` files
2. **Update** `CHANGELOG.md` with changes
3. **Create** a git tag: `git tag v2.0.3`
4. **Push** the tag: `git push origin v2.0.3`
5. **GitHub Actions** will automatically build and create a release

## 🤝 Community

- **Issues**: Use GitHub Issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Code of Conduct**: Be respectful and inclusive

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Acknowledgments

Thank you to all contributors who help make Dark Docs 2.0 better! 