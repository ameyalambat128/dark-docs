module.exports = {
  env: {
    browser: true,
    es2021: true,
    webextensions: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Allow console statements for debugging in extension
    'no-console': 'off',
    
    // Allow unused variables that might be used in the future
    'no-unused-vars': 'warn',
    
    // Allow unreachable code (sometimes needed for debugging)
    'no-unreachable': 'warn',
    
    // Other common rules
    'no-undef': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-return': 'error',
    
    // Code style
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
  },
  globals: {
    // Chrome extension APIs
    chrome: 'readonly',
    browser: 'readonly',
    
    // DOM APIs
    document: 'readonly',
    window: 'readonly',
    
    // Common globals
    console: 'readonly',
  },
}; 