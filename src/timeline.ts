import contract from '../SCENES.json' with { type: 'json' };
export const scenes = contract.scenes;
export const DURATION = contract.durationSeconds * 1000;
export function clampTime(ms: number) { return Math.max(0, Math.min(DURATION, ms)); }
export function sceneAt(ms: number) {
  return scenes.findIndex(s => ms >= s.start * 1000 && ms < s.end * 1000) === -1
    ? ms >= DURATION ? scenes.length - 1 : 0
    : scenes.findIndex(s => ms >= s.start * 1000 && ms < s.end * 1000);
}
export function advance(base: number, anchor: number, now: number) { return clampTime(base + Math.max(0, now - anchor)); }
export function formatTime(ms: number) { const s = Math.floor(ms / 1000); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }
