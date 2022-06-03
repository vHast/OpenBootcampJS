// Funciones asincronas

function myAsinc() {
  // Hace una llamada a una base de datos externa
  // Puede darnos algun error
}

const miPromesa = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);
  // Si esta todo correcto
  if (i !== 0) {
    resolve()
  } else {
    reject()
  }
})

miPromesa
  .then(() => console.log("Se ha ejecutado de forma correcta"))
  .catch(() => console.log("ERROR")) // De esta manera vemos si hay algun error en nuestra promesa
  .finally(() => console.log("Yo me ejecuto siempre"))