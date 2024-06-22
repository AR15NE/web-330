"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Amanda Rovey
      Date: 6/20/2024  

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// Generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);      
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

// Add event listeners to each puzzle piece for the 'pointerdown' event - as in when a puzzle piece is picked up
pieces.forEach(piece => {
   piece.addEventListener('pointerdown', grabPiece);
});

// Function to handle when a puzzle piece is picked up
function grabPiece(e) {
   // Highlight the piece by increasing its brightness - helping the user see which piece if selected 
   e.target.style.filter = "brightness(120%)";
   // Records the starting position of the pointer
   pointerX = e.clientX;
   pointerY = e.clientY;
   // Prevent the default panning and zooming actions on the puzzle piece
   e.target.style.touchAction = 'none';
   // Brings the current puzzle piece to the front by setting its z-index
   zCounter++;
   // Apply the new z-index to the current piece
   e.target.style.zIndex = zCounter;
   // Save the initial position of the puzzle piece on the board
   pieceX = e.target.offsetLeft;
   pieceY = e.target.offsetTop;
   // Add event listeners for moving and dropping the piece
   e.target.addEventListener('pointermove', movePiece);
   e.target.addEventListener('pointerup', dropPiece);
}

// Function to handle when a puzzle piece is being moved
function movePiece(e) {
   // Calculate the difference between the new pointer position and the initial position
   let diffX = e.clientX - pointerX;
   let diffY = e.clientY - pointerY;
   // Update the position of the piece based on the difference
   e.target.style.left = `${pieceX + diffX}px`;
   e.target.style.top = `${pieceY + diffY}px`;
}

// Function to handle when a puzzle piece is dropped
function dropPiece(e) {
   // Remove the event listeners for moving and dropping the piece
   e.target.removeEventListener('pointermove', movePiece);
   e.target.removeEventListener('pointerup', dropPiece);
   // Remove the highlight from the piece to indicate that the user is no longer holding the piece
   e.target.style.filter = "brightness(100%)";
}