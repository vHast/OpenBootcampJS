// Como podemos comparar listas
//.every()

const array = [ 4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

const resultado = array.every(valor => {
  if (typeof valor === "number") {
    return true;
  } else {
    return false;
  }
})
// Este método comprueba de que el valor introducido como parámetro cumple con la función if, en este caso, el tipo de valor es un number, devolverá un valor booleano de true

const resultadoFact = array.every(valor => valor > 0); // Refactorizado

console.log(resultado);

// Comparacion de listas

const ar1 = [ 1, 2, 3, 4];
const ar2 = [ 1, 2, 3, 4];

console.log(ar1 === ar2) // False, aunque sean iguales, las listas no se pueden comparar de esta manera

const compararArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false; // Primero se comparan las longitudes, si no son iguales se saldra de la funcion
  const res = array1.every(function (valor, i) { // Valor es el indice 0 del array1, se compara con el indice 0 del array 2;
      if (valor === array2[i])
        return true;
      return false;
    })
  return res;
}

console.log(compararArrays(ar1, ar2));