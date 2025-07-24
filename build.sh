#!/bin/bash

echo "Starting build process..."

# Check Node version
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run the build
echo "Running Angular build..."
npx ng build --configuration production --verbose 2>&1

# Check if build was successful
if [ -d "dist/frontend" ]; then
    echo "Build successful! Contents of dist/frontend:"
    ls -la dist/frontend/
else
    echo "Build failed - dist/frontend directory not found"
    exit 1
fi

echo "Build process completed."
