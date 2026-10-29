import { useCallback, useEffect, useRef, useState } from 'react';
import { advance, clampTime, DURATION } from './timeline';
export function usePlayback() {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const clock = useRef({ base: 0, anchor: 0, running: false });
  const seek = useCallback((ms: number) => {
    clock.current.base = clampTime(ms); clock.current.anchor = performance.now();
    setTime(clock.current.base);
    if (clock.current.base === DURATION) { clock.current.running = false; setPlaying(false); }
  }, []);
  const pause = useCallback(() => {
    const c = clock.current;
    if (c.running) { c.base = advance(c.base, c.anchor, performance.now()); c.running = false; setTime(c.base); }
    setPlaying(false);
  }, []);
  const play = useCallback(() => {
    const c = clock.current;
    if (c.base >= DURATION) c.base = 0;
    c.anchor = performance.now(); c.running = true; setPlaying(true); setTime(c.base);
  }, []);
  const replay = useCallback(() => { seek(0); play(); }, [seek, play]);
  useEffect(() => {
    if (!playing) return;
    let frame = 0;
    const tick = () => {
      const c = clock.current;
      if (!c.running) return;
      const next = advance(c.base, c.anchor, performance.now()); setTime(next);
      if (next === DURATION) { c.base = next; c.running = false; setPlaying(false); }
      else frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing]);
  useEffect(() => {
    const hidden = () => { if (document.hidden) pause(); };
    document.addEventListener('visibilitychange', hidden);
    return () => document.removeEventListener('visibilitychange', hidden);
  }, [pause]);
  return { time, playing, seek, pause, play, replay };
}
