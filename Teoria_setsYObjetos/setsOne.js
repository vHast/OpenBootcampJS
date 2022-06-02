// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola"]

const miSet = new Set(array) // Se puede pasar un objeto iterable
console.log(array);
console.log(miSet, typeof miSet); // No se reflejan los cambios en el set

// No van a permitir almacenar valores que ya existen, los sets nos permiten asegurarnos de que no va a haber valores repetidos

// .add()

miSet.add(9)
console.log(miSet); // Se anade el valor 9 en el set
miSet.add(4)
console.log(miSet); // No se va a anyadir el valor 4 ya que ya existe

// .delete()
miSet.delete("hola")
console.log(miSet);

// clear()

/* miSet.clear()
console.log(miSet) */

// Limpiara todos los contenidos del array


// .has()
console.log(array.includes(2))
console.log(miSet.has(40));

// Devolvera el valor booleano si la condicion es correcta

// .size()

console.log(miSet.size)

// Devolver la cantidad de items guardados en el set

miSet.forEach(valor => {
  console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet);

const ar_miSet = [...miSet]
console.log(ar_miSet);

