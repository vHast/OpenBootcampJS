// Trabajando con Objetos

const obj = {
  id: 4,
  nombre: "Juan",
  apellido: "González",
  isDeveloper: true,
  libros_favoritos: ["El método", "El código de la manifestación"],
  "4-juegos": [1, 2, 3, 4]
}

console.log(obj["4-juegos"]); // Acceso a las propiedades de los objetos

// Replicar objeto

const obj2 = obj; // Se asigna la direccion de memoria
console.log(obj2);
obj2.nombre = "David"; // Se va a reemplazar el valor nombre en el objeto original
console.log(obj2.nombre); // David
console.log(obj.nombre); // David

let val1 = 4;
let val2 = val1;

console.log(val2) // Con elementos primitivos si que hace una copia pero con los objetos no ocurre el mismo caso

const obj3 = { ...obj}

console.log(obj.nombre) // David
console.log(obj3.nombre) // David

obj3.nombre = "Gorka"

console.log(obj.nombre, obj3.nombre); // David Gorka

//////////////////////
// Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
  {titulo: "Lo que el viento se llevo", anyo: 1939},
  {titulo: "Titanic", anyo: 1997},
  {titulo: "Moana", anyo: 2016},
  {titulo: "El efecto mariposa", anyo: 2004},
  {titulo: "TED", anyo: 2012}
]

// .sort* -> Muta el valor del ARRAY ORIGINAL

listaPeliculas.sort((a, b) => a.anyo - b.anyo);

console.log(listaPeliculas)