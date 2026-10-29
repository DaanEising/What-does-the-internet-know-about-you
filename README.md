# What Does the Internet Know About You?

A two-minute English interactive explainer, built with Vite, React, TypeScript and self-authored SVG/CSS illustrations. Follow a fictional character from early video viewing to a hypothetical recommendation feedback loop. No backend, account, API key, tracking, remote fonts, or audience data collection.

## Run

Use Node.js 22.18+ (Node 24 recommended) and npm. From the repository root:

```sh
npm ci
npm run dev
```

Open the address printed by Vite in your own browser. Click **Start explainer**. Silent playback includes optional readable narration; no audio is bundled. Playback works without internet once the app is loaded. External research links need internet.

## Present

- Space: play / pause; R: replay; left / right arrows: previous / next scene (when focus is outside a control).
- Use the scrub bar or fictional age milestones to navigate. Use the fullscreen control for projection.
- Sources & Methodology pauses playback, traps keyboard focus in a native dialog, and closes with Escape. Resume manually after reading.
- Switching away from the tab pauses playback. Return and resume manually; hidden time is not added.
- Captions and reduced-motion controls are available. System reduced-motion preferences are respected.

Nine contiguous scenes use the exact boundaries in `SCENES.json`: 0, 12, 25, 40, 53, 67, 81, 99, 110, and 120 seconds. A single elapsed-time clock governs scene state, with no accumulated frame or interval drift. Research is attributed beside numeric claims; the panel preserves populations, caveats, and the distinction between recommendations and profiling-based ads targeting minors.

## Build and deploy

```sh
npm run build
npm run preview
```

Publish the generated `dist/` directory to any static host (for example GitHub Pages, Netlify, or Cloudflare Pages). The relative Vite base supports a repository subpath. No server environment variables or credentials are needed. Serve the output over HTTP; do not open `dist/index.html` directly with `file://`.

For a classroom backup, build beforehand and keep the project and installed dependencies on the presenting laptop; `npm run preview` serves the local production build without internet. This is a local site backup, not a video export.

## Validate

```sh
npm test
npm run build
npm run test:browser
```

The unit checks cover all scene boundaries, continuity, duration, time clamping, and clock anchors. Browser tests cover controls, seeking, modal focus and pause behaviour, visibility changes, overflow at multiple widths, and a real full two-minute playback.

Browser tests use `/usr/bin/chromium` when available. Else install Chromium with `npx playwright install chromium`; Playwright uses its bundled browser. A browser download requires network access to Playwright’s download hosts. The prepared cloud machine already has system Chromium.

Validated in cloud Chromium: three unit checks, production build, two browser tests including full playback, and visual inspection of desktop/mobile screenshots. Playback controls fit every scene at 1280×720, 1440×810 and 1920×1080. **Still required before class:** rehearse one full run on the actual laptop/browser/projector, confirm back-row legibility, fullscreen support, and external research-link availability. Optional voice-over and a screencast are not implemented. Research URLs are taken from the supplied brief, not independently reverified during implementation.

## Editorial handoff

`PROJECT_BRIEF.md`, `SOURCES.md`, `STORYBOARD.md`, `SCRIPT.md`, `DESIGN_GUIDELINES.md`, `SCENES.json`, and `ACCEPTANCE_CHECKLIST.md` retain the production brief. `SCENES.json` is the timing/narration contract; `SOURCES.md` is the supplied factual authority. Scene visuals and typography are in `src/Visual.tsx` and `src/style.css`; playback is isolated in `src/usePlayback.ts` and `src/timeline.ts`.
