"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Amanda Rovey
      Date: June 12th 2024  

      Filename: project09-02a.js
*/

/* Page Objects */

function showData() {
  // Store the value of the riderName object in session storage
  sessionStorage.setItem('riderName', document.getElementById('riderName').value);
      
  // Store the value of the ageGroup object in session storage
  sessionStorage.setItem('ageGroup', document.getElementById('ageGroup').value);
      
  // Store the value of the bikeOption object in session storage
  sessionStorage.setItem('bikeOption', document.getElementById('bikeOption').value);
      
  // Store the value of the routeOption object in session storage
  sessionStorage.setItem('routeOption', document.getElementById('routeOption').value);
      
  // Store the value of the accOption object in session storage
  sessionStorage.setItem('accOption', document.getElementById('accOption').value);
      
  // Store the value of the region object in session storage
  sessionStorage.setItem('region', document.getElementById('region').value);
      
  // Store the value of the miles object in session storage
  sessionStorage.setItem('miles', document.getElementById('miles').value);
      
  // Store the value of the comments object in session storage
  sessionStorage.setItem('comments', document.getElementById('comments').value);
      
  // Change the location to the project09-02b.html file
  location.href = 'project09-02b.html';
}
    
  // Connects the function to the action of the user clicking the submit button
  document.getElementById('submitButton').onclick = showData;


let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");
