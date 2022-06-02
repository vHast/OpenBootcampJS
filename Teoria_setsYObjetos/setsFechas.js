// Trabajando con fechas

const fecha = new Date();
console.log(fecha);

// Atencion - los meses inicializan en 0 (0 - Enero 11 - Diciembre)

const fecha2 = new Date(1987, 10);
console.log(fecha2);

const fecha3 = new Date (-1000000000000) // Milisegundos

const fecha4 = new Date("October 13, 1979");
console.log(fecha4);

console.log(fecha > fecha2); // true

console.log(fecha2 === fecha4) // ERROR - No se peuden comaprar fechas de esta manera

console.log(fecha2.getTime() === fecha4.getTime()) // Esta es la forma de comparar la igualdad entre fechas ya que se convierten los valores a milisegundos

/// Obtener el dia, el mes y el anyo de una fecha
// Obtener el dia getDate();
console.log(fecha2.getDate())

// Obtener el mes .getMonth() - Inicializan en 0 asi que hay que sumar uno

console.log(fecha2.getMonth() +1);

// Obtener el anyo .getFullYear()

console.log(fecha2.getFullYear());

// .toLocaleDataString
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

console.log(fecha2.toLocaleDateString('ee-EE'))