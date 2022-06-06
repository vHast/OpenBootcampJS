let firstname = "Federico";
console.log(firstname);
let surname = "Alvarez";
console.log(surname);
let estudiante = `${firstname} ${surname}`;
console.log(estudiante);
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
let numLetras = estudiante.length;
console.log(numLetras);
let primeraLetra = firstname.charAt(0);
console.log(primeraLetra);
let ultimaLetra = surname.charAt(surname.length - 1);
console.log(ultimaLetra);
let sinEspacios = estudiante.replace(/\s/g, ""); // Uso de RegEx
console.log(sinEspacios);

let varBooleana = estudiante.includes("Federico");
console.log(varBooleana);
