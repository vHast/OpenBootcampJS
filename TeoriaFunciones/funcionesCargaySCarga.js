// Carga y sobrecarga de funciones

function saludar() {
  hola()
}

function hola() {
  console.log("Hola! Soy la función hola()");
}

saludar();

/// 1. Primero va a cargar la función global
/// 2. Después cargará saludar() y global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()

/* function recursiva() {
  recursiva()
}

recursiva() */