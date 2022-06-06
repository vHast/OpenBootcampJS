// Declarar una clase

class Persona {
  // Private -> #
  #nombre 
  #edad

  //Protected -> _
  _isDeveloper = true

  constructor(nombre, edad, isDeveloper) { // El método por defecto a la hora de crear una clase, método constructor
    this.#nombre = nombre // El this hace referencia al objeto donde esta ahora mismo, en este caso, nombre sera lo que le pasemos al constructor
    this.#edad = edad
  }

  saludo() {
    console.log(`Hola ${this.#nombre}, tienes ${this.#edad} años.`)
  }

  obtenNombre() { // Funcion getter -> Nos permite aceder (de forma controlada) a algun atributo protegido
    return this.#nombre
  }

  #obtenEdad() {
    return this.#edad
  }

  getEdad() {
    return this.#edad
  }

  setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
};

const persona = new Persona("Gorka", 70);
console.log(persona);
console.log(persona.nombre);
persona.saludo();

// Hay que ver las clases como un mando de television, ntenemos una serie de botones y nosotros hacemos click en un boton

persona.nombre = "David" //Reasignamiento de valores de persona.nombre, esto es acceso publico
persona.saludo() // Hola Gorka, tienes 70 años

/* En el caso de que los atributos de la  clase se incialice con # significara que los atributos son privados, el reasignamiento previamente hecho no se realizara*/

// persona.#obtenEdad();

// No podemos acceder los metodos privados y protegidos desde fuera, los privados solamente se pueden acceder desde dentro de la clase y el protected solo se puede acceder desde dentro de la clase y desde clases descendientes

// Getter -> metodos que nos permiten obtener atributos/metodos privados o protegidos

const edad = persona.getEdad()
console.log(edad);
// Setter -> metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos


// Quiero cambiar la edad de la persona

persona.setEdad(15);
console.log(persona.getEdad());

