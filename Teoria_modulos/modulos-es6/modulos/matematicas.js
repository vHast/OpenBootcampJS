export function suma(a , b) {
  return a + b;
}

export function multiplica(a, b) {
  return a * b;
}

export function eleva(a, b) {
  return a ** b
}

export function factorial(a) {
  // Factorial de 5: 5 * 4 * 3 * 2 * 1
  let factorial = 1
  for (let i = 2; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}

export const nombre = "Matematicas";

// Anadiendo export al principio de function hacemos publicas nuestras funciones

// Con "type" module determinamos que importamos usando ES6