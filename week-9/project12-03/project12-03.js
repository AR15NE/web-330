"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Amanda Rovey
      Date: 7/22/2024   

      Filename: project12-03.js
*/

// Event listener for click events on the plus and minus icons
$("article > h2").click(function() {
  let heading = $(this);
  let list = heading.next();
  let headingImage = heading.children("img");
  
  // Applies a sliding motion to the list when the h2 element is clicked. 
  list.slideToggle(500);

  // Checks the current image in the heading
  let srcValue = headingImage.attr("src");
  // If the 'src' attribute value is 'plus.png', it changes it to 'minus.png', and vice versa. This toggles the image displayed when the h2 element is clicked
  if (srcValue == "plus.png") {
    headingImage.attr("src", "minus.png");
  } else {
    headingImage.attr("src", "plus.png");
  }
});