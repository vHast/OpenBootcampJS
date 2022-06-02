// .sort()
const array = [2, 5, 9, 15, 1, 2, 0, 4];

console.log(array);

// A representa el elemento anterior y B el siguiente elemento, es obligatorio que esta funcion devuelva un valor

/* Por ejemplo, si a es menor que b, retornará un -1, que significa que tendrá un índice menor que b */

array.sort((a, b) => {
  if (a < b) {
    return - 1;
  } else if (a > b) {
    return + 1;
  } else { // a === b
    return 0;
  }
})

console.log(array) // Array ordenado

// Ordenar únicamente arrays numéricos

const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]

arrayNumerico.sort((a, b) => a - b);

console.log(arrayNumerico);

// Interesante en arrays de objetos

const listaObjetos = [
  { nombre: "Leire", edad: 35},
  { nombre: "Gorka", edad: 34},
  { nombre: "Miguel", edad: 28},
  { nombre: "Lucia", edad: 3},
  { nombre: "Amaia", edad: 29}
]

// Quiero ordenar esta lista de objetos de edad menor a mayor

/* listaObjetos.sort((a, b) => {
  if (a.edad < b.edad) {
    return -1; // A va a tener un indice menor que B
  } else if (a.edad > b.edad) {
    return +1;
  } else {
    return 0;
  }
})
*/

listaObjetos.sort((a, b) => a.edad - b.edad); // Refactorizado

console.log(listaObjetos);