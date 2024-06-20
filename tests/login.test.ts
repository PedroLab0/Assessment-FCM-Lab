import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
//vamos a la página de saucedemo
  await page.goto('https://www.saucedemo.com/');
  //rellenamos el username de forma correcta
  await page.fill('#user-name', 'standard_user');
  //rellenamos el password de forma correcta
  await page.fill('#password', 'secret_sauce');
  //accionamos el botón de login
  await page.click('#login-button');
  //esperamos obtener la página del inventario
  await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});
