// Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

// Suma (+)
console.log(a + b);
// Resta (-)
console.log(Math.round((a - b) * 100) / 100);
// Multiplicación (*)
console.log(a * b) 
// División
console.log(Math.round((a / b) * 100) / 100);

// Representacion de los números en cadenas de texto

console.log(typeof a ) // Number
let a_s = a.toString(); // Conversion a string

console.log(a_s); // '3.5'
console.log(typeof a_s); // string

// Redondeo de numeros decimales

let c = 3.3;
let d = c * 3;

console.log(d) // 9.8999999

// .toFixed(x)

console.log(d.toFixed(2)) // 9.90 Este parametro indicara cuantos numeros decimales queremos que nuestra variable represente pero convierte el valor en STRING

// .toPrecision(x)
let e = 1389.123456789;
console.log(e.toPrecision(4)) // 1389 Limita el numero de cifras significativas
console.log(typeof e.toPrecision(4)); // string


