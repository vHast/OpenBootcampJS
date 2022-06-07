// $("li").hide()
// $(selector).accion()

$(document).ready(() => {
  // Esto se va a ejecutar una vez se haya cargado todo el documento

  // Selectores
  // id = $(#el-1)
  // class = $(".hide-btn")
  $("#el-1").hide();

  $(".hide-btn").click(() => {
    console.log("Ocultando...");
    // $("h1").hide();
    $("h1").fadeOut();
  })

  $(".show-btn").click(() => {
    console.log("Mostrando...");
    // $("h1").show();
    $("h1").fadeIn();
  })

  $("li").dblclick(() => {
    $("h1").css({color: "red"})
  })

  $(".new-element").click(() => {
    $("ul").prepend("<li>New Element</li>")
  })

  $("li").mouseenter((elem) => {
    elem.target.style.color = "blue"
  })

  $("li").mouseleave((elem) => {
    elem.target.style.color = "black"
  })
})

// $(() => {

// })   Lo mismo pero simplificado

