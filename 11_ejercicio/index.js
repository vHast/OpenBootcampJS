// Una clase llamada "Estudiante"

class Estudiante {
  nombre;
  asignaturas;

  constructor(nombre, asignaturas) {
    this.nombre = nombre
    this.asignaturas = ["Javascript", "HTML", "CSS"]
  }
  obtenDatos() {
    console.log(`Mi nombre es ${this.nombre} y mis asignaturas son ${this.asignaturas}`);
  }
}

let developer = new Estudiante("Javier")
developer.obtenDatos()