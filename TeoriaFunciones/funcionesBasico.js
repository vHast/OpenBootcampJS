// Funciones

/* Bloques de codigo que se ejecutan con un fin especifico */

function saludar(nombre) {
  console.log(`Hola ${nombre}`); // Bloque de codigo
}

saludar('Fede');

//

function despedir(nombre) {
  console.log(`Adios ${nombre}`);
}

const despedida = (nombre) => {
  nombre = "Juan"
  console.log(`Adios ${nombre}`);
}
despedida('Esther');
///

let persona = {
  nombre: "Juan",
  apellido: "Gonzalez"
}

function saludarPersona(objeto) {
  objeto.apellido = "Villar"; // Se cambia el .appelido de objeto
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}
saludarPersona(persona);

////

function imprimeNumero(numero = 7) { // Parametro OPCIONAL con un valor por defecto
  console.log(numero); // Si no se define saldra 7 o undefined en el caso de que no se haya insertado un parametro con valor por defecto
}

imprimeNumero();

/////

function imprimir(...parametros) {
  console.log(parametros); // Simplemente va a pasar por consola todos los parametros que le tiremos a la funcion
}

imprimir([1,2,3,4,5,"hola", {id: 5}])

function suma(...nums) {
  console.log(nums.reduce((a, b) => a + b))
}

suma(1,2,3,4);


/////

function multiplicar(a =0, b = 0) {
  return a * b
}

console.log(multiplicar(4,9));