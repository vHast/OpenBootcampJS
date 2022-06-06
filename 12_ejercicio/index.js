const devolverLista = (num) => {
  let array = [0];
  if (num === 0 || num === 1) {
    array.push(1);
  } else {

    for (let i = 1; i < num; i++) {
      array.push(i + array[i])
    }
  }
  console.log(array);
  return array;
}

devolverLista(10);