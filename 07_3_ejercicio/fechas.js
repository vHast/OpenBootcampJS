// Fecha de hoy

let todayDate = new Date()
console.log(todayDate);

// Fecha de nacimiento

let birthDate = new Date(1995, 9, 13);
console.log(birthDate);

// Variable que indique si hoy es mas tarde que la fecha de tu nacimiento

let esMasTarde = todayDate > birthDate;
console.log(esMasTarde);

// Variable que contenga el dia de nacimiento

let dia = birthDate.getDay();
console.log(dia);

// Una variable que contenga el mes de tu nacimiento

let mes = birthDate.getMonth() + 1;
console.log(mes);

// Variable que contenga el año de nacimiento

let year = birthDate.getFullYear();
console.log(year);