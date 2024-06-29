"use strict"; /* Added */

/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Amanda Rovey
  Date: 06/25/2024
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 4, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
  { tableNumber: 5, capacity: 4, isReserved: false },
  { tableNumber: 6, capacity: 6, isReserved: false },
  { tableNumber: 7, capacity: 6, isReserved: false },
  { tableNumber: 8, capacity: 6, isReserved: false },
  { tableNumber: 9, capacity: 8, isReserved: false },
  { tableNumber: 10, capacity: 8, isReserved: false }
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  let table = tables.find(t => t.tableNumber === tableNumber);
  if (table && !table.isReserved) {
    table.isReserved = true;
    // Display the success message
    callback(`Table ${tableNumber} reserved successfully.`);
    // Reset the reservation status after the specified time
    setTimeout(() => {
      table.isReserved = false;
    }, time);
  } else {
    callback(`Table ${tableNumber} is already reserved.`);
  }
}

// When the form is submitted, call the reserveTable function
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  // Get the name and table number
  const name = document.getElementById("name").value;
  const tableNumber = parseInt(document.getElementById("tableNumber").value);
  const messageElement = document.getElementById("message");

  // Call the reserveTable function with the table number, a callback, and a time
  reserveTable(tableNumber, function(message) {
    // Update the webpage with the message
    messageElement.textContent = message;
  }, 10000); // Reserve the table for 10 seconds for testing purposes 
});

// Function to populate the table dropdown
function populateTableDropdown() {
  const dropdown = document.getElementById("tableNumber");
  tables.forEach(table => {
    const option = document.createElement("option");
    option.value = table.tableNumber;
    option.textContent = `Table ${table.tableNumber} - ${table.capacity} people`;
    dropdown.appendChild(option);
  });
}

// Call the function to populate the dropdown when the page loads
document.addEventListener("DOMContentLoaded", populateTableDropdown);