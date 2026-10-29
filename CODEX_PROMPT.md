# Paste this into Codex Cloud

Build a complete, polished and functional **120-second English interactive explainer website** using the repository's handoff documents.

Read `README.md`, `PROJECT_BRIEF.md`, `SOURCES.md`, `STORYBOARD.md`, `SCRIPT.md`, `DESIGN_GUIDELINES.md`, `SCENES.json`, and `ACCEPTANCE_CHECKLIST.md` before coding. Treat `SCENES.json` as the authoritative scene timing/data contract, and treat `SOURCES.md` as the factual authority. The user must be able to open this from a browser and present it in class tomorrow.

### Your deliverable
- Implement with Vite + React + TypeScript and modern CSS, with Motion or SVG/CSS animations as needed.
- Build an elegant, coherent 16:9 presentation experience with the central fictional avatar, age timeline, growing service-local data clusters, clear visual contrast among observed data / inferred interests / recommendations, and scene-specific animations.
- Implement all **nine scenes with their exact start/end seconds**; timer length **120 seconds**. Prefer a single timeline controller based on elapsed time, not one timer per component.
- Include Start, Pause/Resume, Replay, progress/scrub, fullscreen, and accessible keyboard controls. Prevent timer drift after pause or tab visibility changes.
- Put source citations by any visible numeric claim. Include an easy-to-open English Sources & Methodology panel with click-through official research links and the caveats from `SOURCES.md`. Pause playback while that panel is open.
- Include optional readable on-screen narration/captions; avoid relying on autoplay audio, paid TTS, or external APIs. If time remains, implement optional local voice audio without blocking the silent presentation.
- Use provided sample ages and data as **illustrations**, NOT quantitative claims about what any real child or platform knows. Never fake numerical data collection counts or imply one unified lifelong cross-platform dossier.
- Use no external trackers, user-login, real personal data, private credentials, copyrighted video, or NOS branding.

### Workflow
1. Inspect the repository and write a succinct implementation plan.
2. Build the site as a single app with maintainable components/data.
3. Execute tests/build; fix errors. Verify the scene boundaries, 120-second total, and controls.
4. If browser preview is supported, inspect the UI and fix overflow or illegible text.
5. Write a short updated README with run/deploy instructions and what was implemented.
6. Summarize the finished implementation and any untested items, without claiming the build is complete if it is not.

### Priorities
A convincing complete **first build** is more important than elaborate optional animation. The primary goal is visual comprehension: timeline → observed data → possible prediction → recommendation feedback loop → open question. Please proceed and build without asking extra questions unless you are genuinely blocked.
