# My Space on the Web — Built, Not Borrowed

A personal portfolio website built with Astro.

Live demo: https://kundangosavii.github.io

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Run Locally](#run-locally)
- [Build & Preview](#build--preview)
- [Contributing](#contributing)
- [Contact](#contact)

## About

This repository contains the source for my personal portfolio site. It's intentionally simple and content-driven, using Astro for static site rendering and Tailwind CSS for styling.

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS
- Vite (via Astro)

## Features

- Blog with Markdown-based posts
- Projects and lab experiments pages
- Responsive layout and optimized images
- Search index utilities and content configuration

## Project Structure

- `src/pages/` — site pages (home, blogs, projects, lab, publications, resume)
- `src/layouts/` — layout components used across pages
- `src/components/` — reusable UI components (Navbar, Footer, cards, etc.)
- `src/content/` — Markdown content for blog, labs, and projects
- `src/utils/` — helper scripts (search index, blog utilities)

See the code in the `src/` directory for implementation details.

## Prerequisites

- Node.js 18 or newer
- npm (or pnpm/yarn)

## Run Locally

1. Install dependencies:

```
npm install
```

2. Start the dev server:

```
npm run dev
```

Open http://localhost:3000 (or the port shown in the terminal) to view the site.

## Build & Preview

Build the production site:

```
npm run build
```

Preview the production build locally:

```
npm run preview
```

## Contributing

Contributions are welcome. If you'd like to suggest changes or improvements, open an issue or submit a pull request.

## Contact

Repository: [https://github.com/kundangosavii/portfolio](https://github.com/kundangosavii/kundangosavii.github.io)

If you want to see the live site: https://kundangosavii.github.io

