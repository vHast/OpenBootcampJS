// Iterar los valores de una lista

const array = ["Hola", 2, 5, 90, false, undefined];

// Forma antigua de iterar valores
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// ES6 .forEach()
let suma = 0;
const arrayNums = [ 3, 6, 2, 77, 2, 3, 93, 19];


/* Value será básicamente el item que nosotros querramos iterar en el array, iamgina que es i++

El resto funciona como cualquier otro for loop*/
arrayNums.forEach(value => {
  suma += value;
  console.log(value)
})
console.log(suma);

// Búsqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90

const variable = arrayNums.find(value => {
  if (value === 90) {
    return true;
  } else {
    return false;
  }
})

console.log(variable);

const listaObjetos = [
  { nombre: "Leire", edad: 35},
  { nombre: "Gorka", edad: 34},
  { nombre: "Miguel", edad: 28},
  { nombre: "Lucia", edad: 3},
  { nombre: "Amaia", edad: 29}
]

/* const objeto = listaObjetos.find(o => {
  if (o.nombre === "Miguel") {
    return true;
  }
})
*/

const objeto = listaObjetos.find(o => {
  return o.nombre === "Miguel"
})

const { edad } = listaObjetos.find(o => o.nombre === "Miguel");
console.log(edad);
console.log(objeto.edad);