const persona = {
  nombre: "Gorka",
  edad: 34,
  isDeveloper: true,
  saludo: function() {
    console.log("Hello");
  }
}

// console.log(persona.saludo);
persona.saludo()

const otra_persona = {
  nombre: "Miguel",
  edad: 15,
  isDeveloper: false,
  saludo: function() {
    console.log("Hello");
  }
}

otra_persona.saludo()
// Estas repitiendo mucho codigo

const creaPersona = (nombre, edad, isDeveloper) => { // FACTORY FUNCTION
  return {
    nombre, // nombre: nombre,
    edad, // edad: edad,
    isDeveloper: isDeveloper, // ...
    saludo: function() {
      console.log("Hello")
    }
  }
}

const nueva_persona = creaPersona("Juan", 23, true);
console.log(nueva_persona);

const nueva_persona_2 = creaPersona("Maria", 44, false);