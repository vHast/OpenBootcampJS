const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.getElementById("eliminador")

parrafos.forEach(parrafo => {
  // Momento de incializacion del arrastre
  parrafo.addEventListener("dragstart", event => {
    console.log("Estoy arrastrando el parrafo " + parrafo.innerText);
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
  })
  parrafo.addEventListener("dragend", () => {
    // Momento donde termina de arrastrar
    //console.log("He terminado de arrastrar")
    parrafo.classList.remove("dragging")
  })
})

secciones.forEach(seccion => {
  seccion.addEventListener("dragover", event => {
    // Momento que se ejecuta mientras se esta arrastrando por las secciones div
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"; // Cursor del raton

    //console.log("Drag Over");
    //
  })

  seccion.addEventListener("drop", event => {
    console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id");
    // console.log("Parrafo id: ", id_parrafo)
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  })
})

papelera.addEventListener("drop", event => {
  const id_parrafo = event.dataTransfer.getData("id");
  const parrafo = document.getElementById(id_parrafo);
  console.log(parrafo);
  secciones.removeChild(parrafo);
})

