// Como obtener una lista a partir de otra .slice()

const array = ["Hola", 1, 2, 3, true, null, "adios"]

// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL

console.log(array.slice(1, 4)) // [ 1, 2, 3] Slice comienza en indice 1 y termina en indice 4

const array2 = array.slice( 2, 5);
console.log(array2) // [ 2, 3, true]