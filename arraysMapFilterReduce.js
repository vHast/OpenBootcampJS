// Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array = ["San Sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"]

array.forEach(v => {
  console.log(v);
})

/* Con el método .map(), podemos acceder al valor del array, devolver un statement y incluir un índice en él como segundo argumento

Cabe recordar que en los argumentos hay que incluir los parámetros con doble paréntesis para que los incluya, sino va a saltar un error de que valor no ha sido definido*/

const newArray = array.map((valor, indice) => {
  console.log(indice);
  return ` ${indice + 1} - ${valor}`
})

console.log(newArray); // Esto devolverá un nuevo array como newArray con los parámetros establecidos

// .filter()

const listaObjetos = [
  { nombre: "Leire", edad: 35},
  { nombre: "Gorka", edad: 34},
  { nombre: "Miguel", edad: 28},
  { nombre: "Lucia", edad: 3},
  { nombre: "Amaia", edad: 29}
]

const personasMayores = listaObjetos.filter(obj => {
  if (obj.edad > 30) {
    return true;
  } else {
    return false;
  }
})

// Esto devolverá una array de objetos con los parámetros establecidos, si el if statement es true, devolverá la edad del objeto que cumpla la condición 

const personasMasMayores = listaObjetos.filter(obj => obj.edad > 30) // Mismo codigo refactorizado

console.log(personasMasMayores);

// Excluir objeto

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel");

console.log(nuevaLista);

// .reduce()

const valores = [3, 56, 23, 5, 90, 100];
/* Este callback function acepta cuatro parámetros, el valor previo, el current, el índice, y el array original, se puede pasar por pantalla de la siguiente manera */

const suma = valores.reduce((prev, curr, i, arrayOriginal) => {
  console.log(prev);
  console.log(curr);
  console.log(i);
  console.log(arrayOriginal);
  return prev + curr
})

console.log(suma)


