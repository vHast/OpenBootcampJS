let altura = 182;
let alturaMetros = 1.82;
let peso = 75.4;
let alturaRedondeada = Math.ceil(alturaMetros);
let pesoRedondeado = Math.floor(peso);
let varBoolean; // Esta variable sera true si el maximo valor que se puede obtener en Javascript + 1 es igual al maximo valor que se puede obtener en Javascript

if ((Number.MAX_VALUE + 1) == (Number.MAX_VALUE)) {
  varBoolean = true;
}  else {
  varBoolean = false;
}

console.log(alturaRedondeada, pesoRedondeado, varBoolean);