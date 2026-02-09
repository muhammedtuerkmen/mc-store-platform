# qandqservices Store Platform

Open-source, community-driven Minecraft store platform inspired by modern storefronts. The goal is to build a high-quality alternative that encourages healthy competition and avoids lock-in. We want to develop this in the open with contributors from the community.

## What this is

- A Next.js + Tailwind v2 storefront starter
- Modular sections (Discord, Server IP, tiles, ranks)
- Minimal admin UI for settings (UI only for now)
- Designed to be extended into a full all-in-one platform

## Tech stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS v2

## Getting started

Prerequisites:

- Node.js 18+ (recommended)
- npm

Install and run:

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

```
src/
  app/            Next.js routes (home, ranks, admin)
  components/     UI components (Header, Tiles, Ranks, Login)
  data/           Site configuration and content
  app/globals.css Tailwind + custom UI styles
public/
  assets/branding/examplelogo.png
```

## Configuration

All content and toggles are in `src/data/siteConfig.ts`:

- Brand name, tagline, logo path
- Discord and Server IP modules (enable/disable)
- Home page tiles
- Ranks list
- Footer copy and links

Example (enable/disable modules):

```ts
modules: {
  discord: { enabled: true, label: "gg/qandqservices", url: "https://discord.gg/qandqservices" },
  serverIp: { enabled: true, label: "qandqservices.me" }
}
```

## Assets

Place your logo here:

```
public/assets/branding/examplelogo.png
```

Update the path and dimensions in `src/data/siteConfig.ts` if needed.

## Admin (minimal)

There is a minimal admin UI at:

```
/admin
```

Currently it is UI-only and reads from `siteConfig.ts`. It is meant to evolve into a real settings panel.

## Contributing

We welcome contributors. This project aims to be a community-built alternative to closed, monopoly-like platforms. If you want to help shape a fair, open ecosystem for Minecraft server stores, please join.

How to contribute:

- Open an issue for bugs or feature ideas
- Submit a PR with a clear description and screenshots when it changes UI
- Keep changes modular and easy to extend

## License

MIT. See `LICENSE`.
