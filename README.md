# Assessment-FCM-Lab

# Instalación y configuración
cd Assessment-FCM-Lab

Debes de tener Node.js instalado.
node --version
npm --version

Instalas Playwright

npm install playwright

Para inicializar el test del archivo específico

npx playwright test tests/nombredelarchivo

Por ejemplo: npx playwright test tests/login.test.ts

Se intenta seguir una estructura más o menos organizada.

El archivo de login.test.ts busca comprobar que se inicie sesión de forma exitosa.
El archivo de logout.test.ts busca comprobar que se inicie sesión de forma exitosa y luego cerrar la sesión.
El archivo de login.test.ts busca iniciar sesión, comprobar el estado del carrito, limpiar su estado en caso de que tenga items y posteriomente añadir items y hacer un checkout el cual acaba en la página del formulario anterior al pago.

PD: Entiendo que todo lo tenéis de sobra instalado y comprobado es simplemente para completar la documentación, gracias!!
