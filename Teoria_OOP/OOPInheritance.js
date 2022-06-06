// Inheritance
class Persona {
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre
    this.edad = edad
  }

  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
  }
}

class Desarrollador extends Persona {
  // Aqui podemos extender la clase previamente hecha y añadir otros atributos
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad) // Instanciacion de los constructores nombre y edad de Persona
    this.lenguaje = lenguaje
  }

  saludo() {
    super.saludo()
    console.log(`Y soy desarrollador de ${this.lenguaje}.`) // Se sobreescribe (override) la funcion
  };
  
}

const newDev = new Desarrollador("Gorka", 34, "Javascript");
console.log(newDev);
newDev.saludo();

// Polimorfismo => Varias formas