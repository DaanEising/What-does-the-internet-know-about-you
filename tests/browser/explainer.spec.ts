import { test, expect } from '@playwright/test';
const starts=[0,12,25,40,53,67,81,99,110];
test('all scenes, controls, modal focus, pause, replay and responsive presentation',async({page})=>{
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/');
  await expect(page.getByRole('button',{name:'Start explainer'})).toBeVisible();
  await page.getByRole('button',{name:'Start explainer'}).click();
  await expect(page.getByRole('button',{name:'Pause',exact:true})).toBeVisible();
  await page.waitForTimeout(1100);
  await page.getByRole('button',{name:'Pause',exact:true}).click();
  const slider=page.getByRole('slider',{name:'Playback position'});
  const paused=await slider.inputValue();await page.waitForTimeout(400);expect(await slider.inputValue()).toBe(paused);
  for(let i=0;i<starts.length;i++){
    await slider.fill(String(starts[i]*1000));
    await expect(page.locator('.chapter-label')).toContainText(String(i+1).padStart(2,'0'));
    await expect(page.locator('h1')).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
  }
  await slider.fill('120000');await expect(page.locator('.time-display')).toContainText('2:00');
  await page.getByRole('button',{name:'Replay',exact:true}).click();
  await expect(page.getByRole('button',{name:'Pause',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Sources & methodology',exact:true}).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  const during=await slider.inputValue();await page.waitForTimeout(300);expect(await slider.inputValue()).toBe(during);
  await expect(page.getByRole('dialog').getByRole('link')).toHaveCount(8);
  await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(page.getByRole('button',{name:'Sources & methodology',exact:true})).toBeFocused();
  await page.locator('h1').click();await page.keyboard.press('ArrowRight');await expect(page.locator('.chapter-label')).toContainText('02');
  await page.keyboard.press('Space');await expect(page.getByRole('button',{name:'Pause',exact:true})).toBeVisible();
  await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});
  await expect(page.getByRole('button',{name:'Play',exact:true})).toBeVisible();
  for(const width of [1440,768,390]){await page.setViewportSize({width,height:width===390?844:900});for(const start of starts){await slider.fill(String(start*1000));expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();}}
  await page.getByRole('button',{name:'Toggle captions'}).click();
  await expect(page.locator('.caption-region')).toContainText('Captions hidden');
  await page.getByRole('button',{name:'Reduced motion',exact:true}).click();
  await expect(page.locator('.app')).toHaveClass(/reduce-motion/);
  await page.getByRole('button',{name:'Toggle fullscreen'}).click();
  expect(await page.evaluate(()=>Boolean(document.fullscreenElement))).toBeTruthy();
  await page.evaluate(()=>document.exitFullscreen());
  expect(errors).toEqual([]);
});
test('one complete 120-second playback reaches and stops at the end',async({page})=>{
  test.setTimeout(150000);
  await page.goto('/');await page.getByRole('button',{name:'Start explainer'}).click();
  await expect(page.getByRole('slider')).toHaveValue('120000',{timeout:125000});
  await expect(page.locator('.chapter-label')).toContainText('09');
  await expect(page.getByRole('button',{name:'Play',exact:true})).toBeVisible();
  await page.waitForTimeout(250);await expect(page.getByRole('slider')).toHaveValue('120000');
});
