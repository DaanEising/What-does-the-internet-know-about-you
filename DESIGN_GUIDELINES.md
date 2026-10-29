# Design Guidelines

## Tone
Professional, calm, cinematic editorial data storytelling. Inspired by the clarity of news explainers, but not an imitation of NOS branding. High legibility and restrained animation over decorative complexity.

## Palette
- Background: `#0B1220` (deep navy)
- Foreground: `#F8FAFC` (near white)
- Secondary text: `#94A3B8`
- Observed or provided data: `#38BDF8` (cyan)
- Inferred possibility: `#C084FC` (purple)
- Recommendation / potential influence: `#FBBF24` (amber)
- Card surface: `#172337`
- Lines / separators: `#334155`
Use these semantic colors consistently; avoid communicating a difference *only* by color.

## Typography
- System sans-serif (`Inter`, `Arial`, system-ui); no bundled licensed fonts required.
- One large sentence or statistic per scene. At projector distance, key title >= 42px, main fact >= 32px, supporting text >= 20px (desktop reference).
- Source caption can be smaller but must remain readable in a sources panel.

## Layout at 16:9
- Center: human/avatar silhouette with nearby story event.
- Right (or surrounding): data categories, visually GROUPED BY SERVICE when relevant.
- Bottom: persistent lifecycle timeline, overall elapsed-time progress, play/pause controls.
- Top corner: unobtrusive label “Fictional example” and Sources & Methodology button.
- Avoid huge text paragraphs; prefer icon + one sentence + one data point.

## Motion
- Scene clock: 120,000 milliseconds in application time.
- Pauses, seeking, speed-independent state and browser visibility changes must not desynchronise effects.
- Smooth transitions of 300–900ms; reduce motion when `prefers-reduced-motion` is active.
- Inferences are introduced only *after* the relevant data; purple nodes should never look like confirmed facts.
- Feedback loop uses purposeful motion, not aggressive flashing.
- Provide subtitle/caption text as a first-class text element, not baked into images.

## Assets
- Prefer CSS / SVG / Lucide icons or simple self-authored illustrations. No copyrighted news clips or external tracking fonts.
- Avoid brand logos if not needed. If adding platform names as examples, label them as examples and respect trademark constraints.
- Work offline after first install. No external data access during playback.

## Accessibility
- Keyboard-accessible controls; visible focus; sufficient contrast.
- Space toggles play/pause (unless focus is on interactive input), R for replay, arrow keys for manual scene navigation if implemented.
- Sources modal/panel can open and close by keyboard; prevent unannounced auto-advance while reading sources (pause playback).
- Include a reduced-motion mode and subtitle visibility control if a voice-over is added.

## Recommended stack
Vite + React + TypeScript + CSS, with Motion library optional for animation. Keep scenes/data in `src/data/scenes.ts` or load from `SCENES.json`. Avoid backends, accounts, paid APIs, analytics, and unnecessary dependencies.
