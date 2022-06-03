const array = [1, 5, 6, 2, 7, 12, 8, 92];

const array2 = array.map((valor) => valor * 2); // Funcion anonima

console.log(array2);

const dobleDelValor = valor => valor * 2;

// Las funcione de tipo flecha no se pueden usar a no ser que hayan sido inicializadas previamente, es recomendable hacerlo al principio de nuestro archivo Javascript

const array3 = array.map(dobleDelValor);
console.log(array3);

function doble(valor) {
  return valor * 2; // Esta funcion se puede acceder en cualquier parte del archivo Javascript a diferencia de las funciones flecha
}