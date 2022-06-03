// Funcion sin argumentos que devuelva true

const returnTrue = () => true;
console.log(returnTrue());

// Funcion asincrona que utilice un setTImeout y pase por consola un mensaje despues de 5 segundos


const myAsync = new Promise((resolve, reject) => {
  let i = 1;
  setTimeout(() => {
    console.log("Hola soy una promesa");
  }, "5000");
  if (i = 1) {
    resolve();
  } else {
    reject()
  }
})

myAsync
  .then(() => console.log("Se ha ejecutado de forma correcta"))
  .catch(() => console.log("ERROR")) // De esta manera vemos si hay algun error en nuestra promesa


// Funcion generadora de indices pares automaticos

function* generaId() {
  let num = 0;
  while(true) {
    num+= 2;
    if (num % 0) {
      return num // Simplemente para que salga de la funcion
    }
    yield num; // Cada vez que terminemos esta funcion nos devolvera num, el yield es uan especie de return que en lugar de salir de la funcion, se va a quedar esperando hasta que se vuelva a llamar
  }
}

const generador = generaId();
console.log(generador.next())
console.log(generador.next())
console.log(generador.next())
console.log(generador.next())
console.log(generador.next())
console.log(generador.next())