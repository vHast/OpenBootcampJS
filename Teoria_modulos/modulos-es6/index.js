// Importacion de funciones con ES6

import { suma, eleva, nombre} from './modulos/matematicas.js'
import getAutor, { libro } from './modulos/literatura.js' // Importar de forma por defecto y importar por nomenclatura

// Tambien se puede importar todo el archivo como
// import* as moduloMateMaticas from './modulos/matematicas.js'

const sumario = suma(4, 12)
console.log(sumario);

const potencias = eleva(2, 21)
console.log(potencias)

console.log(nombre);

console.log(getAutor());
console.log(libro);