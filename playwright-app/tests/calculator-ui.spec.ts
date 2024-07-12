import { test, expect } from '@playwright/test';

test('Calculator adding 2 numbers', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');
  /* 
  await page.getByRole('spinbutton').first().click();
  await page.getByRole('spinbutton').first().fill('1000'); 
  */
  const txtN1 = await page.getByRole('spinbutton').first()
  await txtN1.focus()
  await txtN1.fill('1000')

  /* 
  await page.getByRole('spinbutton').nth(1).click();
  await page.getByRole('spinbutton').nth(1).fill('1000'); 
  */
  const txtN2 = await page.getByRole('spinbutton').nth(1);
  await txtN2.focus()
  await txtN2.fill('2000')

  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.locator('#divResult')).toContainText('3000');
});

test('Calculator subtracting 2 numbers', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');
  /* 
  await page.getByRole('spinbutton').first().click();
  await page.getByRole('spinbutton').first().fill('1000'); 
  */
  const txtN1 = await page.getByRole('spinbutton').first()
  await txtN1.focus()
  await txtN1.fill('1000')

  /* 
  await page.getByRole('spinbutton').nth(1).click();
  await page.getByRole('spinbutton').nth(1).fill('1000'); 
  */
  const txtN2 = await page.getByRole('spinbutton').nth(1);
  await txtN2.focus()
  await txtN2.fill('2000')

  await page.getByRole('button', { name: 'Subtract' }).click();
  await expect(page.locator('#divResult')).toContainText('-1000');
});