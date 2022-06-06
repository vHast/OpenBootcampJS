const persona = {
  nombre: "Gorka",
  edad: 34
}

console.log(persona);

function obtenDobleEdad(edad) {
  return 2 * edad
}

const dobleEdad = obtenDobleEdad(persona.edad)

console.log(dobleEdad);

function obtenArray(edad) {
  let arrayNums = [];
  for (let i = 0; i < 10; i++) {
    const numero = edad + i
    console.log(numero);
    arrayNums = [...arrayNums, numero] // Otra forma de añadir valores a un array como si fuese push
  }
  return arrayNums;
}

const array = obtenArray(persona.edad); // Accedemos a la propiedad edad del objeto persona y lo usamos como parametro

