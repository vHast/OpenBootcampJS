// Factorial con loop FOR

const factorial = (num) => {
  let varFactorial = 1;
  for (let i = num; i > 0; i--) {
    varFactorial *= i;
  }
  return varFactorial;
}

console.log(factorial(10));