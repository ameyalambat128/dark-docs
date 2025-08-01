#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const archiver = require('archiver');

// Configuration
const config = require('./build_config.json');
const packageJson = require('./package.json');

const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'dist');
const RELEASES_DIR = path.join(__dirname, 'releases');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

// Clean and create directories
async function setupDirectories() {
  await fs.remove(DIST_DIR);
  await fs.ensureDir(DIST_DIR);
  await fs.ensureDir(RELEASES_DIR);
}

// Copy source files to dist
async function copySourceFiles() {
  log('📁 Copying source files...', colors.blue);

  // Copy all source files
  await fs.copy(SRC_DIR, DIST_DIR, {
    filter: (src) => {
      const relativePath = path.relative(SRC_DIR, src);
      return !relativePath.includes('node_modules');
    },
  });

  // Copy assets (icons, etc.) from assets directory
  const assetsDir = path.join(__dirname, 'assets');
  if (await fs.pathExists(assetsDir)) {
    const assetFiles = await fs.readdir(assetsDir);
    for (const file of assetFiles) {
      await fs.copy(path.join(assetsDir, file), path.join(DIST_DIR, file));
    }
  }
}

// Generate browser-specific manifests
async function generateManifests() {
  log('📄 Generating browser-specific manifests...', colors.blue);

  const baseManifest = await fs.readJson(path.join(SRC_DIR, 'manifest.json'));

  for (const [browserName, browserConfig] of Object.entries(config.browsers)) {
    const manifest = {
      ...baseManifest,
      name: config.name,
      description: config.description,
      version: packageJson.version,
      manifest_version: browserConfig.manifest_version,
    };

    // Browser-specific permissions
    if (browserConfig.manifest_version === 2) {
      // Firefox (Manifest V2)
      manifest.permissions = browserConfig.permissions;
      delete manifest.host_permissions;
    } else {
      // Chrome/Edge (Manifest V3)
      manifest.permissions = browserConfig.permissions;
      if (browserConfig.host_permissions) {
        manifest.host_permissions = browserConfig.host_permissions;
      }
    }

    // Create browser-specific directory and copy files
    const browserDir = path.join(DIST_DIR, browserName);
    await fs.ensureDir(browserDir);

    // Copy all files from dist to browser-specific directory (except other browser dirs)
    const items = await fs.readdir(DIST_DIR);
    for (const item of items) {
      const itemPath = path.join(DIST_DIR, item);
      const stat = await fs.stat(itemPath);

      // Skip other browser directories
      if (stat.isDirectory() && Object.keys(config.browsers).includes(item)) {
        continue;
      }

      await fs.copy(itemPath, path.join(browserDir, item));
    }

    // Write browser-specific manifest
    await fs.writeJson(path.join(browserDir, 'manifest.json'), manifest, {
      spaces: 2,
    });
  }
}

// Create distribution packages
async function createPackages() {
  log('📦 Creating distribution packages...', colors.blue);

  const promises = Object.keys(config.browsers).map(async (browserName) => {
    const browserDir = path.join(DIST_DIR, browserName);
    const zipPath = path.join(
      RELEASES_DIR,
      `${config.name.toLowerCase().replace(/\s+/g, '-')}-${browserName}-v${packageJson.version}.zip`
    );

    return new Promise((resolve, reject) => {
      const output = fs.createWriteStream(zipPath);
      const archive = archiver('zip', { zlib: { level: 9 } });

      output.on('close', () => {
        log(
          `✅ ${browserName}: ${path.basename(zipPath)} (${archive.pointer()} bytes)`,
          colors.green
        );
        resolve();
      });

      archive.on('error', reject);

      archive.pipe(output);
      archive.directory(browserDir, false);
      archive.finalize();
    });
  });

  await Promise.all(promises);
}

// Main build function
async function build() {
  try {
    log(`🚀 Building ${config.name} v${packageJson.version}...`, colors.bright);

    await setupDirectories();
    await copySourceFiles();
    await generateManifests();
    await createPackages();

    log('🎉 Build completed successfully!', colors.green);
    log(`📍 Packages created in: ${RELEASES_DIR}`, colors.yellow);
  } catch (error) {
    log(`❌ Build failed: ${error.message}`, colors.red);
    console.error(error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  build();
}

module.exports = { build };
