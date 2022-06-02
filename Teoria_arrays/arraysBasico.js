// Método para eliminar, modificar o anadir valores en nuestro array

// .splice(x, y, z)
// .splice(indice, 0, valores)

const array3 = [1, 2, 3, 4, 5, 6];

array3.splice(2, 1); // Se eliminará el 3

// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola"); // [1, 2, 'hola', 4, 5, 6] Se ha añadido el "hola" en la posicion 2

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3) // [1, 2, 3, 4, 5, 6] Se ha añadido el 3 en la posicion 2