const boton = document.querySelector("#btn")

console.log(boton);

boton.addEventListener("click", () => {
  // alert("Se ha hecho click")
  // confirm("Estas de acuerdo?") && console.log("OK") // Operador ternario, si estamos de acuerdo imprimira OK en consola
   confirm("Estas de acuerdo?") 
     ? console.log("OK") 
     : console.log("No conforme");
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
  const nombre = prompt("What is your name?");
  if (nombre) {
    console.log("Your name is " + nombre)
  } else {
    console.log("You haven't typed anything")
  }
})

const lista = [
  {
    nombre: "Gorka",
    edad: 34
  }, {
    nombre: "Julen",
    edad: 21
  }, {
    nombre: "Amaia",
    edad: 50
  }]

  // console.log(lista);
  console.table(lista);