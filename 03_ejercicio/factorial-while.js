// Factorial con WHILE loop

const factorialWhile = (num) => {
  let varFactorial = 1;
  while (num > 0) {
    varFactorial *= num;
    num--;
  }
  return varFactorial;
}

console.log(factorialWhile(10));