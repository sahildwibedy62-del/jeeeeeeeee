# JEE Main 2027 — 50 Days Left ("Chaos Classroom")

A cinematic 2.5D animated video production and interactive web screening studio built with TanStack Start, React 19, Tailwind CSS 4, and TypeScript, deployed on Netlify.

## What's Included

- **Source & Combined Narration Audio**: Original 3-part narration (`public/audio/raw/part1.mp3`, `part2.mp3`, `part3.mp3`) losslessly concatenated in exact order (`public/audio/narration-combined.mp3`, 434.581s / 7m 14.58s, 48 kHz) plus a 30 FPS RMS amplitude envelope (`src/data/audioEnvelope.json`).
- **Pre-Production Data & Deliverables** (`public/deliverables/` & `src/data/productionData.ts`):
  - `jee-main-2027-subtitles.srt` — 139 pause-aligned Hinglish subtitle cues covering 0.00s to 434.59s.
  - `storyboard.json` — 6 chapters and 45 directed animated scenes with camera movements, character poses, visual gags, and SFX cues.
  - `project-config.json` & `render-settings.json` — full 1920×1080, 30 FPS, H.264/AAC 48 kHz broadcast render specifications.
- **Stylized 2.5D Art Plates** (`public/img/`): 7 cohesive 1920×1080 environment plates and key poster artwork for *Chaos Classroom — The JEE Survival Universe*.

## Tech Stack

- **Framework**: TanStack Start + TanStack Router + React 19
- **Styling & UI**: Tailwind CSS 4 + shadcn/ui + lucide-react
- **Build & Deployment**: Vite 8 + `@netlify/vite-plugin-tanstack-start`

## Running Locally

Requires Node.js 22.13+ (or Node 24/26+).

```bash
pnpm install
npm run dev
```

Or run with the Netlify CLI to emulate Netlify Image CDN and platform features:

```bash
netlify dev --port 8889
```

Useful scripts:

```bash
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint checks
npm run format:check # Prettier formatting check
npm test             # Run Vitest unit tests
```
