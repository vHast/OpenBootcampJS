// some()
// Devuelve true or false dependiendo de si existe un valor o no en una lista


const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = array.some(valor => valor < 0)

console.log(res);

const existe = array.some(valor => valor === 90);

console.log(existe);

const listaObjetos = [
  { nombre: "Leire", edad: 35},
  { nombre: "Gorka", edad: 34},
  { nombre: "Miguel", edad: 28},
  { nombre: "Lucia", edad: 3},
  { nombre: "Amaia", edad: 29}
]

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel");

console.log(existeMiguel);

// Como obtener una lista a partir de un objeto iterable

const str = "Hola, soy Gorka";
console.log(str[0]);

const ar_str = Array.from(str) // Esto creara un nuevo array a partir de str
console.log(ar_str);

const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set);

const keys = array.keys()
console.log(typeof keys);

const arKeys = Array.from(keys);
console.log(arKeys);