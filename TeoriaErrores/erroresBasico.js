// Gestion de errores

const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  // return false
  throw new Error("El valor debe de ser de tipo numero")
}

/* const elDoble = miFuncion("Hola");
console.log(elDoble); */

const numero = '8';

try {
  // Codigo que puede fallar
  console.log("Esta ejecutandose de manera correcta.");
  const doble = miFuncion(numero)
  console.log(doble);
} catch(e) {
  // En el caso de fallar, quiero que ejecutes este bloque de codigo
  console.error(`El valor de e es de: ${e}`) // Esto imprimira el valor dentro de new Error descrito previamente
  console.error("ERROR!");
} finally {
  console.log("Esto se va a ejecutar tantoo si se produce un error como si no existe ninguno.")
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// Errores mas comunes => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

