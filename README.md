# html5-tailwindcssv4-static-noframework-noserver

Static multi-page website built with HTML and Tailwind CSS v4.

## Overview

This repository contains a multi-page static site with the following pages:

- `index.html`
- `about.html`
- `services.html`
- `contact.html`

The project uses Tailwind CSS v4 for styling and includes a build workflow via npm scripts.

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

This compiles `assets/css/input.css` to `assets/css/output.css` and watches for changes.

## Build

```bash
npm run build
```

## Serve locally

```bash
npm run serve
```

## Notes

- Compiled CSS output is ignored in `.gitignore`.
- The source CSS files are under `assets/css/`.
- JavaScript and layout support files are in `assets/js/` and `layout/`.
