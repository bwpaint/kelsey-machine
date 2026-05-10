#!/bin/sh
# xCloud deployment script for Kelsey Machine Services (static React/Vite site)
set -e

# Install dependencies (--legacy-peer-deps avoids strict peer resolution issues)
$XCLOUD_NPM install --legacy-peer-deps

# Build the frontend — output goes to dist/public/
NODE_ENV=production $XCLOUD_NPM run build
