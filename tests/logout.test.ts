import { test, expect } from '@playwright/test';

test('Logout Test', async ({ page }) => {
    //página de inicio de sesión
    await page.goto('https://www.saucedemo.com/');
    //rellenamos el username
    await page.fill('#user-name', 'standard_user');
    //rellenamos la contraseña
    await page.fill('#password', 'secret_sauce');
    //accionamos el botón del login
    await page.click('#login-button');

    //pasamos a la página del inventario
    //click en el menú burger
    await page.click('#react-burger-menu-btn');
    //click en el botón loguot
    await page.click('#logout_sidebar_link');
    //esperamos obtener la página de login
    await expect(page.url()).toBe('https://www.saucedemo.com/');
  });