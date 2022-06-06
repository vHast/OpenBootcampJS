// Declarar una clase

class Persona {
  nombre;
  edad;
  isDeveloper;
  constructor(nombre, edad, isDeveloper) { // El método por defecto a la hora de crear una clase, método constructor
    this.nombre = nombre // El this hace referencia al objeto donde esta ahora mismo, en este caso, nombre sera lo que le pasemos al constructor
    this.edad = edad
    this.isDeveloper = isDeveloper
  }

  saludo() {
    console.log(`Hola ${this.nombre}, tienes ${this.edad} años`)
  }
}

const nuevaPersona = new Persona("Javi", 19, true);
console.log(nuevaPersona); // Persona { nombre: 'Javi', edad: 19, isDeveloper: true }
nuevaPersona.saludo() // Hola Javi, tienes 19 años

// Instanciacion es una forma de inicializar una clase

let numero = 60; // inicializar
let persona_2 = new Persona("Maria", 34, false) // instanciar
console.log(persona_2 instanceof Persona);
// instanceof -> similar a typeof pero para clases