// Factorial con WHILE loop y BREAK

const factorialWhile = (num) => {
  let varFactorial = 1;
  while (num > 0) {
    varFactorial *= num;
    num--;
    if (num == 0) {
      break;
    }
  }
  return varFactorial;
}

console.log(factorialWhile(10));