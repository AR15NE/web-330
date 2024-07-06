"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Amanda Rovey
      Date: 7/4/2024    

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

// When the user finishes entering a postal code and then clicks or tabs away from the postal code input field, the code inside this function will run
postalCode.onblur = function() {
  // Get the current values of the postalCode and country fields
  let codeValue = postalCode.value;
  let countryValue = country.value;

  // Clear the place and region input fields to make way for new data
  place.value = "";
  region.value = "";
      
  // Use the Fetch API to send a GET request
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then(response => response.json())
    .then(json => {
      place.value = json.places[0]["place name"];
      region.value = json.places[0]["state abbreviation"];
    })
    
    .catch(error => console.log('Error:', error)); // Log any errors to the console
}




