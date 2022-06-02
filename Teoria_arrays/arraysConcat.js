// Como unir dos listas .concat(lista2)

const lista1 = ["hola", 2, false, null]
const lista2 = ["adios", 8, true, undefined]

console.log(lista1.concat(lista2)); // Devuelve un array SIN modificar los valores de los arrays ya hechos combinado en uno

const lista3 = lista1.concat(lista2);

console.log(lista3);

// Como unir dos listas con el factor de propagacion

console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(typeof lista4);
console.log(lista4);

// Error! Array bidimensional

const lista5 = [lista1, lista2];
console.log(lista5);