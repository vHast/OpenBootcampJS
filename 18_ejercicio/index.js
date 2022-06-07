let marker, map;

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  const barcelona = { lat: 41.3874, lng: 2.1686 }
  const tallinn = { lat: 59.4370, lng: 24.7536 }
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 0,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
  const markerTwo = new google.maps.Marker({
    position: barcelona,
    map: map,
  })
  const markerThree = new google.maps.Marker({
    position: tallinn,
    map: map,
  })
  // Obtener la geolocalizacion
  // marker.setPosition({lat, lng})
  geoPosiciona()
}

window.initMap = initMap;

function geoPosiciona() {

  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const options = {timeout: 60000}
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