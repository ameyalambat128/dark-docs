#!/bin/bash

# Script to copy built extension packages to version directory
# Usage: ./copy_to_version.sh [version]

set -e  # Exit on any error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get version from argument or package.json
if [ "$1" ]; then
    VERSION="$1"
else
    # Extract version from package.json
    VERSION=$(node -p "require('./package.json').version" 2>/dev/null || echo "unknown")
fi

RELEASES_DIR="releases"
VERSION_DIR="versions/v${VERSION}"

echo -e "${GREEN}Copying built packages to version directory...${NC}"

# Check if releases directory exists
if [ ! -d "$RELEASES_DIR" ]; then
    echo -e "${RED}Error: releases directory not found. Run 'npm run build' first.${NC}"
    exit 1
fi

# Create version directory
mkdir -p "$VERSION_DIR"

# Copy release packages to version directory
echo -e "${GREEN}Copying from $RELEASES_DIR to $VERSION_DIR${NC}"
cp "$RELEASES_DIR"/*.zip "$VERSION_DIR"/ 2>/dev/null || {
    echo -e "${RED}Error: No ZIP files found in releases directory.${NC}"
    exit 1
}

echo -e "${GREEN}Version v${VERSION} created successfully!${NC}"
echo -e "${YELLOW}Location: $VERSION_DIR${NC}"

# Show summary
echo -e "\n${GREEN}Packages copied:${NC}"
find "$VERSION_DIR" -name "*.zip" | sort | while read -r file; do
    echo "  - $(basename "$file")"
done