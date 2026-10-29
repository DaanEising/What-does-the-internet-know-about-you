import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scenes, DURATION, sceneAt, advance, clampTime, formatTime } from '../src/timeline.ts';
test('the authoritative contract has nine contiguous scenes totalling exactly 120 seconds', () => {
  assert.equal(scenes.length, 9); assert.equal(DURATION, 120000);
  assert.deepEqual(scenes.map(s=>s.start), [0,12,25,40,53,67,81,99,110]);
  scenes.forEach((s,i)=>{assert.ok(s.end>s.start);if(i)assert.equal(s.start,scenes[i-1].end);});
  assert.equal(scenes.at(-1)!.end*1000,DURATION);
});
test('scene boundaries resolve to the next scene with no gaps; the end remains on the end card',()=>{
  scenes.forEach((s,i)=>{assert.equal(sceneAt(s.start*1000),i);assert.equal(sceneAt(s.end*1000-1),i);});
  assert.equal(sceneAt(DURATION),8);
});
test('elapsed-time clock avoids frame accumulation and respects pause/resume anchors',()=>{
  const paused=advance(12000,1000,7250);assert.equal(paused,18250);
  assert.equal(advance(paused,50000,51000),19250);
  assert.equal(advance(119500,100,5000),120000);
  assert.equal(clampTime(-100),0);assert.equal(clampTime(140000),120000);
  assert.equal(formatTime(119999),'1:59');assert.equal(formatTime(DURATION),'2:00');
});
