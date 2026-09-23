# Maru Rajwadu Restaurant — React website

A React + Vite website with the restaurant's searchable, priced menu and original menu images.

## Run locally

1. Install Node.js 20.19+ or 22.12+ (Node 24 also works).
2. In this folder, run `npm ci`.
3. Run `npm run dev`, then open the local URL printed in the terminal.

## Build / deploy

Run `npm run build` to regenerate the `dist` folder. On Netlify, set the build command to `npm run build` and the publish directory to `dist`. The included `dist` folder is a ready-built copy if you want to upload it directly.

## Edit the menu

Dish names, categories and prices are in `src/menu.js`. The restaurant's original menu images are in `public/menu/`. Change prices there and run the build again. Contact and map links are in `src/main.jsx`.

Menu prices were transcribed from the supplied images; confirm current prices and availability with the restaurant. The hero food photograph is illustrative.
