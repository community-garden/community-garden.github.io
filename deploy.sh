#!/usr/bin/env bash

CURRENT_SHA=$(git rev-parse --short HEAD)

echo "delete dist ..." && sleep 2
rm -R dist
echo "Checkout gh-pages branch..." && sleep 2
git clone --single-branch --branch gh-pages git@github.com:community-garden/community-garden.github.io.git dist
echo "Clearing dist directory..." && sleep 2
rm -R dist/*
echo "Building pages..." && sleep 2
npx yarn run build
cd dist || exit
echo "commit new snapshot..." && sleep 2
git commit -am "update pages to commit ${CURRENT_SHA}"
echo "push to github..." && sleep 2
git push
echo "done!"
cd - || exit

