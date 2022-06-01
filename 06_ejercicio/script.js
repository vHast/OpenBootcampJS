// Variable que contenga la lista de la compra

let compraArr = ['Carne', 'Clara de Huevo', 'Arroz integral', 'Pechuga de pollo', 'Brocoli'];
console.log(typeof compraArr);

// Modifica la lista de la compra
compraArr.push('Aceite de Girasol');
console.log(compraArr);

// Vuelve a modificar la lista de la compra elminando Aceite de Girasol
compraArr.pop();
console.log(compraArr);

// Peliculas favoritas

let peliculasArr = [
  {
  titulo: 'There Will Be Blood',
  director: 'Paul Thomas Anderson',
  fecha: new Date(2011, 1, 1)
  },
  {
  titulo: 'Taxi Driver',
  director: 'Martin Scorsese',
  fecha: new Date(1976, 1, 1)
  },
  {
  titulo: 'Goodfellas',
  director: 'Martin Scorsese',
  fecha: new Date(1990, 1, 1)
  }]

console.log(peliculasArr);

// Peliculas posteriores al 1 de enero de 2010

let dateFilter = new Date(2010, 1, 1);
console.log(dateFilter);
let posteriores2010 = peliculasArr.filter(pelicula => pelicula.fecha > dateFilter);
console.log(posteriores2010);