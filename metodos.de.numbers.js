// Operador. valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3); // Casting

console.log(b); // [Number: 3]
console.log(typeof b); // object
console.log(a + b) // 5
console.log(a.valueOf() + b.valueOf()); // 5

// Aunque sea de tipo object, se pasa el valor number para realizar la operacion aritmetica

// NaN - Infinity

let notANumber = NaN;
console.log(notANumber, typeof notANumber);

// Numeros hexadecimales (base 16)

let numHex = '0x3a5b7'; // Todos los numeros hexadecimales empiezan por 0x
console.log(parseInt(numHex));

// Como convertir los string a valores numericos con Number, parseInt y parseFLoat

let numero = '5.89';
let num2 = 17.2;

console.log(Number(numero) + num2); // Este operador Number nos permite convertir este string en un numero

console.log(parseInt(numero)) // 5, se convertira en numero ENTERO (integer)

console.log(parseFloat(numero)) // 5.89, se convertira en un numero con decimales

// Obtener los valores maximo y minimo en Javascript

let minPrecision = Number.EPSILON;
let minValorJS = Number.MIN_VALUE; // 5e-324
let maxValorJS = Number.MAX_VALUE; // 1.7976931348623157e+308

console.log (minPrecision, minValorJS, maxValorJS);