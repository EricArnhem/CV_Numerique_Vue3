#!/usr/bin/env sh

# Abort on errors
set -e

# Set your remote repository URL and branch here
REMOTE_REPO_URL="https://github.com/EricArnhem/EricArnhem.github.io"
DEPLOY_BRANCH="main"

# Build
npm run build

# Navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Push to the specified remote repository and branch
git push -f $REMOTE_REPO_URL $DEPLOY_BRANCH

cd -