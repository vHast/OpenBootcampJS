// Instalar axios para hacer llamadas a servicios externos
import axios from "axios";

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/ditddto')
  .then(function (response) {
    // handle success
    console.log('Success')
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log('Errpr')
    console.log(error);
  })
  .then(function () {
    // always executed
  });