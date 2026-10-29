# Project Brief

## Context
This is a university homework assignment for the minor **Innovative Data Visualisation (IDV)**. It asks for a NOS-Explainer-style explanation of a complex subject in a medium of our choice, lasting **at most two minutes**. The work will be watched in class on Friday, **30 October 2026**. The explainer itself must be **in English**.

## One-sentence concept
Follow a fictional person from childhood to adulthood to show how ordinary online activity can create digital traces, how services may infer interests from these traces, and how those inferences can affect recommendations.

## Story question
**What does the internet know about you?**

## Core takeaway
**Online actions can become data; within a service, data may support predictions, and predictions can affect what you see next.** Predictions are uncertain, and services do not automatically share a single global profile.

## Audience and presentation
- Audience: classmates unfamiliar with the technical details of data profiling.
- Experience: self-running, visually engaging, ~120-second explainer projected on a classroom screen.
- Default mode: automatic scene playback. Add manual navigation and a pause button for rehearsal.
- Format: responsive website, optimized for desktop projector 16:9, but readable on mobile.
- Language: all public-facing app text and spoken text in English.

## In scope
- Nine scenes with precise time windows defined in `SCENES.json`.
- Fictional age milestones 3, 9, 11, 14, 18 (illustrative character, not normative developmental ages).
- Clearly labelled *population research facts* at relevant stages.
- Visual distinction among (1) observed/provided data, (2) inferred traits, (3) recommendations.
- A strongly visual, service-local profiling demo using a running-interest example.
- Recommendation feedback loop and an open-ended question (not an alarmist prediction).
- Research/sources panel accessible before, during, and after playback.

## Out of scope
- Reading real personal information; accessing any account; collecting audience data; cookies; analytics; actual ad-targeting or real platform APIs.
- Simulating exact knowledge of Google/Meta/TikTok or assuming they share one lifelong database.
- Claiming a causal relationship between profiling and particular choices.
- Unverified data counts or percentages for fictional users.
- An actual NOS logo, a brand imitation that would suggest official endorsement, or copyrighted footage.

## Scientific / editorial guardrails
1. **Do not confuse fictional ages with measured averages.** The age of our character is an editorial choice. Show source and cohort beside measured numbers.
2. **Do not claim a real profile is built from parent device activity.** Data may be logged at app, device or account level without correctly identifying the child.
3. **No cross-platform consolidation without a source.** Show separate service clusters; only combine patterns *hypothetically* within one fictional service.
4. **Observed data is not inferred data.** Use different shapes/colors and explicitly mark predictions as uncertain.
5. **Do not treat all data collection as advertising.** Content personalization and behavioural advertising are different activities.
6. **Protection of minors matters.** Under the EU Digital Services Act, platforms cannot show profiling-based targeted ads when they know with reasonable certainty a user is a minor. This does not amount to a blanket ban on all recommendations.
7. **Avoid exaggerated framing.** The ending asks a question, not a deterministic dystopian claim.
8. **No misleading visualization.** No fake quantitative score (e.g. '96% known') or arbitrary numeric count passed off as measured data.

## Success criteria
A classmate understands the difference between collection and inference, remembers the digital-footprint timeline, and can explain the recommendation feedback loop after two minutes. The site starts reliably, plays for exactly 120 seconds, supports pause/replay, and links all on-screen research facts to credible sources.
