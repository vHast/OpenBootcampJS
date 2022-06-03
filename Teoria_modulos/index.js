// Un modulo es solamente una parte de codigo que se puede utilizar encualquier otra parte del programa

// Formas de importar/exportar modulos
// 1. CommonJS - require

// Se deben de hacer las funciones publicas, y desde donde o quiera consumirlas, exportarlas

// console.log(module);

const moduloMatematicas = require("./modulos/matematicas.js");
console.log(moduloMatematicas) // Importacion usando require (CommonJS), se puede ver lo que se ha exportado con un . despues de moduloMatematicas

// Tambien es posible importar la funcion factorial como
// const factorial = moduloMatematicas.factorial;

// const { factorial } = moduloMatematicas;
// const { factorial, suma} = require("./modulos/matematicas.js")

// 2. Import ES6 - import

const fact = moduloMatematicas.factorial(5); // modulo.funcion
console.log(fact);

const sum = moduloMatematicas.suma(12, 90); // modulo.funcion
console.log(sum);
