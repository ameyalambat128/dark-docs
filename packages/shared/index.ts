// Shared constants and utilities for Dark Docs monorepo

export const EXTENSION_NAME = 'Dark Docs 2.0';
export const EXTENSION_VERSION = '2.0.0';

export const BRAND_COLORS = {
  primary: '#007aff',
  secondary: '#ffd700',
  dark: '#1a1a1a',
  darker: '#0a0a0a',
  accent: '#ff4444',
  success: '#00ff44',
} as const;

export const THEME_CONFIG = {
  background: {
    primary: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    secondary: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
  },
  text: {
    primary: '#f5f5f5',
    secondary: '#cccccc',
    muted: '#888888',
  },
} as const;

export type BrandColor = keyof typeof BRAND_COLORS;
export type ThemeConfig = typeof THEME_CONFIG;
