const boton = document.querySelector("#btn");

boton.addEventListener("click", () => {
  alert("Click en el boton")
})

// JQuery

$(document).ready(() => {
  // Esto se va a ejecutar una vez se haya cargado todo el documento

  // Selectores
  // id = $(#el-1)
  // class = $(".hide-btn")
  $(".botones").click(() => {
    console.log("Hola, estoy utilizando jQuery")
  }) 
})