// Nuevo set con nombres de tu familia

  const family = new Set()
  const padre = "Alejandro Alvarez";
  family.add(padre);
  const madre = "Miriam Barros";
  family.add(madre);
  const yo = "Federico Alvarez";
  family.add(yo);
  console.log(family);

  // Modifica el set original añadiendo tu nombre (duplicado)

  family.add("Federico Alvarez")
  console.log(family); // Mismo resultado

  // Modifica el set original añadiendo Javascript

  family.add("Javascript");
  console.log(family);