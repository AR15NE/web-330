"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Amanda Rovey
      Date: June 12th 2024  

      Filename: project09-02b.js
*/

/* Page Objects */

// Retrieve and display the stored values from session storage
window.onload = function() {
  riderName.textContent = sessionStorage.getItem('riderName');
  ageGroup.textContent = sessionStorage.getItem('ageGroup');            
  bikeOption.textContent = sessionStorage.getItem('bikeOption');
  routeOption.textContent = sessionStorage.getItem('routeOption');
  accOption.textContent = sessionStorage.getItem('accOption');
  region.textContent = sessionStorage.getItem('region');
  miles.textContent = sessionStorage.getItem('miles');
  comments.textContent = sessionStorage.getItem('comments');
    };

window.onload = function() {
  // Retrieve and display the rider's name
  document.getElementById('riderName').textContent = sessionStorage.getItem('riderName');
      
  // Retrieve and display the age group
  document.getElementById('ageGroup').textContent = sessionStorage.getItem('ageGroup');
      
  // Retrieve and display the bike option
  document.getElementById('bikeOption').textContent = sessionStorage.getItem('bikeOption');
      
  // Retrieve and display the route option
  document.getElementById('routeOption').textContent = sessionStorage.getItem('routeOption');
      
  // Retrieve and display the accommodation option
  document.getElementById('accOption').textContent = sessionStorage.getItem('accOption');
      
  // Retrieve and display the region
  document.getElementById('region').textContent = sessionStorage.getItem('region');
      
  // Retrieve and display the miles per day
  document.getElementById('miles').textContent = sessionStorage.getItem('miles');
      
  // Retrieve and display any additional comments
  document.getElementById('comments').textContent = sessionStorage.getItem('comments');
};
    
