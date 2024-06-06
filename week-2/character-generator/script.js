/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Amanda Rovey
  Date: 6/4/2024
  Filename: Assignment 2.2
*/

"use strict";

// Function to create a character with private properties using closures
function createCharacter(name, gender, characterClass) {
  // Private properties, accessible only through the returned methods
  let _name = name;
  let _gender = gender;
  let _class = characterClass;

  // Public methods to access the private properties
  return {
    getName: function() {
      return _name;
    },
    getGender: function() {
      return _gender;
    },
    getClass: function() {
      return _class;
    }
  };
}

// Event listener for DOMContentLoaded to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Event listener for the generateHero button click
  document.getElementById("generateHero").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Retrieve form values to create a new character
    const name = document.getElementById('heroName').value;
    const gender = document.getElementById('heroGender').value;
    const charClass = document.getElementById('heroClass').value;

    // createCharacter function to create a new character with the provided name, gender, and class
    const character = createCharacter(name, gender, charClass);

    // Determine the image path based on character's gender and class
    const imagePath = getImagePath(gender, charClass);

    // Display character information in the 'characterInfo' based on user input
    const characterInfoDiv = document.getElementById('characterInfo');
    characterInfoDiv.innerHTML = 'Name: ' + character.getName() + '<br>Gender: ' + character.getGender() + '<br>Class: ' + character.getClass();

    // Set the source of the 'characterImage' to the determined path
    const characterImage = document.getElementById('characterImage');
    characterImage.src = imagePath;
    characterImage.style.display = 'block';

    // Make the 'characterOutput' div visible
    const outputDiv = document.getElementById('characterOutput');
    outputDiv.style.display = 'block';
  });
});

// Function to return the image path based on the character's gender and class
function getImagePath(gender, charClass) {
  // Determine the image path based on the character's gender and class
  if (gender === 'male' && charClass === 'warrior') {
    return 'images/mw.png';
  } else if (gender === 'male' && charClass === 'mage') {
    return 'images/mm.png';
  } else if (gender === 'male' && charClass === 'rogue') {
    return 'images/mr.png';
  } else if (gender === 'female' && charClass === 'warrior') {
    return 'images/fw.png';
  } else if (gender === 'female' && charClass === 'mage') {
    return 'images/fm.png';
  } else if (gender === 'female' && charClass === 'rogue') {
    return 'images/fr.png';
  } else if (gender === 'other' && charClass === 'warrior') {
    return 'images/ow.png';
  } else if (gender === 'other' && charClass === 'mage') {
    return 'images/om.png';
  } else if (gender === 'other' && charClass === 'rogue') {
    return 'images/or.png';
}

  // Return the corresponding image path 
  return (imagePaths[gender] && imagePaths[gender][charClass]);
}

// Function to toggle the background music play/pause state
function playPauseMusic() {
  // Access the background music element
  const backgroundMusic = document.getElementById('backgroundMusic');

  // Play or pause the music based on its current state
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    document.getElementById('musicControlButton').textContent = 'Pause Music';
  } else {
    backgroundMusic.pause();
    document.getElementById('musicControlButton').textContent = 'Play Music';
  }
}

// Event listener for the music control button click
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('musicControlButton').addEventListener('click', playPauseMusic);
});