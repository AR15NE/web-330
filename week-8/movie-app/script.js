/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Amanda Rovey
  Date: 7/15/2024
  Filename: script.js
*/

"use strict";

// In-memory array of movie objects
const movies = [
  {
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    year: 2003,
    synopsis: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    director: "Chris Columbus",
    year: 2001,
    synopsis: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    director: "Andrew Adamson",
    year: 2005,
    synopsis: "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion.",
  }
];

// Function to simulate fetching a movie by title
function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Convert both input and movie titles to lowercase for case-insensitive comparison
      const searchTitleLower = title.toLowerCase();
      const movie = movies.find(movie => movie.title.toLowerCase().includes(searchTitleLower));
      if (movie) {
        resolve(movie);
      } else {
        reject('Movie not found');
      }
    }, 1000); // Simulate network request delay
  });
}

// Async function to display movie data
async function displayMovie(event) {
  event.preventDefault();
  const title = document.getElementById('title-input').value;
  try {
    // Await the promise returned by fetchMovie and then displays movie details
    const movie = await fetchMovie(title);
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-director').textContent = `Director: ${movie.director}`;
    document.getElementById('movie-year').textContent = `Release Year: ${movie.year}`;
    document.getElementById('movie-synopsis').textContent = movie.synopsis;
    document.getElementById('error-message').textContent = '';
  } catch (error) {
    document.getElementById('error-message').textContent = error;
  }
}

// Event listener for the form submission
document.getElementById("movie-form").addEventListener("submit", displayMovie);
