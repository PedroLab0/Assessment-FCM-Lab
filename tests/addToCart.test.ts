import { test, expect } from '@playwright/test';

test('addToCart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  //rellenamos el usernmae de forma correcta
  await page.fill('#user-name', 'standard_user');
  console.log('Username rellenado');
  //rellenamos el password de forma correcta
  await page.fill('#password', 'secret_sauce');
  //accionamos el btón de login
  await page.click('#login-button');
  //comprobamnos el estado inicial del carrito
  await page.click(".shopping_cart_link");
  console.log('Icono del carrito clickeado');
  //comprobamos si tenemos o no un item dentro del carrito
  await page.waitForSelector('.cart_list');
  let cartList = await page.$('.cart_list');
  if (cartList) {
    let cartItems = await cartList.$$('.cart_item');
    console.log(`Estado inicial: Se encontraron ${cartItems.length} elementos con la clase .cart_item`);
   //si encontramos items los elimnamos para limpiar el estado del carrito
    if (cartItems.length > 0) {
      for (const item of cartItems) {
        const removeButton = await item.$('#remove-sauce-labs-backpack');
        if (removeButton) {
          await removeButton.click();
        }
      }
      console.log('Todos los elementos han sido quitados');
    }
  }

  await page.goto('https://www.saucedemo.com/inventory.html');
  //Pulsamos el botón de añadir al carrito
  await page.click('#add-to-cart-sauce-labs-backpack');
  //pulsamos el icono del carrito
  await page.click(".shopping_cart_link");
  //comprobación si tenemos un item dentro de nuestra cart list
  await page.waitForSelector('.cart_list');
  cartList = await page.$('.cart_list');
  if (cartList) {
    const cartItems = await cartList.$$('.cart_item');
    console.log(`Se encontraron ${cartItems.length} elementos con la clase .cart_item`);
    if (cartItems.length > 0) {
      for (const [index, item] of cartItems.entries()) {
        const itemText = await item.innerText();
        console.log(`Elemento ${index + 1}: ${itemText}`);
      }
      await page.click('#checkout');
      await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    } else {
      console.log('No se encontró el elemento el .cart_item');
    }
  } else {
    console.log('no se ha encontrado el elemetno .cart_list');
  }
});
