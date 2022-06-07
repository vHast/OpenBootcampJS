let nombre = "Federico";
let apellido = "Alvarez";

sessionStorage.setItem("nombre", nombre);

localStorage.setItem("apellido", apellido);

document.cookie = "nombreCookie=FedericoAlvarez";
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2022, 6, 7, 21, 14).toUTCString();