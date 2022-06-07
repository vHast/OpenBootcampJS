let marker, map;

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
  // Obtener la geolocalizacion
  // marker.setPosition({lat, lng})
  geoPosiciona()
}

window.initMap = initMap;

function geoPosiciona() {

  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const options = {timeout: 60000};
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options) // Cada cierto tiempo nos va a pasar nuestra ubicacion, si salta un error tiene un timeout de 60000 ms
  } else {
    alert("Tu navegador no admite geolocalizacion")
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  marker.setPosition(nuevaPos);
  map.setCenter(nuevaPos);
}

function onError(error) {
  console.error(error);
}