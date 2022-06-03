// Funciones generadoras

function* generaId() {
  let id = 0;
  while(true) {
    id++;
    if (id === 10) {
      return id // Simplemente para que salga de la funcion
    }
    yield id; // Cada vez que terminemos esta funcion nos devolvera id, el yield es uan especie de return que en lugar de salir de la funcion, se va a quedar esperando hasta que se vuelva a llamar
  }
}

const gen = generaId();

console.log(gen.next().value) // La primera vez que la llamemos nos dara un 1
console.log(gen.next()) // 2
console.log(gen.next()) // 3
console.log(gen.next()) // ...
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next()) // done: true == La funcion ya se ha terminado