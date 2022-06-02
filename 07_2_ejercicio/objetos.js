const datosPersonales = {
  nombre: "Federico",
  apellido: "Alvarez",
  edad: 26,
  altura: 1.82,
  eresDesarrollador: true
}

let miEdad = datosPersonales.edad;

// Lista que contenga el objeto con tus datos personales y un nuevo objeto con lso datos personales de tus dos mejores amigos

let misDatos = {...datosPersonales }
console.log(misDatos);

const mejoresAmigos = [{
  nombre: "Miguel",
  apellido: "Castellon",
  edad: 29,
  altura: 1.85,
  eresDesarrollador: false
},
{
  nombre: "Javier",
  apellido: "Fernandez",
  edad: 26,
  altura: 1.83,
  eresDesarrollador: false
}
]

mejoresAmigos.push(misDatos); // Se suman mis datos a la lista

// Nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

let nuevaLista = mejoresAmigos.sort((a, b) => a.edad + b.edad);
console.log(nuevaLista);