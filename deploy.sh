#!/bin/sh
# xCloud deployment script for Kelsey Machine Services (static React/Vite site)
set -e

# Install dependencies using npm (pnpm is installed as a dev dep)
$XCLOUD_NPM install

# Build the frontend — output goes to client/dist/
$XCLOUD_NPM run build
