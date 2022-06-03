function suma(a , b) {
  return a + b;
}

function multiplica(a, b) {
  return a * b;
}

function eleva(a, b) {
  return a ** b
}

function factorial(a) {
  // Factorial de 5: 5 * 4 * 3 * 2 * 1
  let factorial = 1
  for (let i = 2; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}

// Exportacion con CommonJS

module.exports = {
  suma,
  multiplica,
  eleva,
  factorial
}

// De esta manera se hacen publicas estas funciones