// Declaracion de variables numericas

let a = 5;
let b = 0.1;
let c = 0.2;

// Precision
console.log(b + c); // Se imprimirá un número equívoco 0.3000000004

// Se puede obtener el 0.3 de la siguiente manera

console.log(Math.round((b + c) * 100) / 100);