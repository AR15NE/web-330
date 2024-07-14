/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Amanda Rovey
  Date: 7/10/2024
  Filename: script.js
*/

"use strict";

// An array of chef objects. Each object represents a chef with their name, specialty, weakness, and location.
const chefs = [
  { name: "Chef Alfredo", specialty: "Pasta", weakness: "Sushi", location: "Rome" },
  { name: "Chef Bearnaise", specialty: "Steak", weakness: "Vegan dishes", location: "Paris" },
  { name: "Chef Tempura", specialty: "Sushi", weakness: "Steak", location: "Tokyo" }
];

// A function that simulates retrieving chef data with a delay.
// The function returns a promise that either resolves with the chef data or rejects with an error message
function getChefData(chef, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Uses Math.random() to randomly resolve or reject the promise
      if (Math.random() > 0.5) {
        resolve(chef);
      } else {
        reject(`Oh no! We couldn't find any information about ${chef.name}. Please try again later.`);
      }
    }, delay * 1000);
  });
}

// This function handles both fulfilled and rejected promises.
Promise.allSettled([
  getChefData(chefs[0], 2),
  getChefData(chefs[1], 3),
  getChefData(chefs[2], 4)
]).then((results) => {
    //For each chef, if the promise was fulfilled, display the chef data. If the promise was rejected, display the error message.
  results.forEach((result, index) => {
    const chefDiv = document.getElementById(`chef${index + 1}`);
      if (result.status === "fulfilled") {
        chefDiv.innerHTML = `<h2>${result.value.name}</h2><p>Specialty: ${result.value.specialty}</p><p>Weakness: ${result.value.weakness}</p><p>Location: ${result.value.location}</p>`;
      } else {
        chefDiv.innerHTML = `<p>Error: ${result.reason}</p>`;
    }
  });
});
