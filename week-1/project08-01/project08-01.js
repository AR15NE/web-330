"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Amanda Rovey
      Date: June 1st 2024   

      Filename: project08-01.js
*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

/*--------------- Object Code --------------------*/

//This function creates the timer object with minutes and seconds
function Timer(min, sec) {
      this.minutes = min; //Sets the initial minutes value for the timer 
      this.seconds = sec; //Sets the initial seconds value for the timer
      this.timeID = null; //null when not running
}

//Toggles the timer between running and paused. 
//Checks the current state of the timer and either starts or pauses it
//When starting the timer, it sets up an interval to count down every second
Timer.prototype.runPause = function(minBox, secBox) {
      const that = this; 
      if (this.timeID) { //If the timer is already going, the interval is cleared in order to pause it 
            clearInterval(this.timeID);
            this.timeID = null;
      } else {
            //If the timer is not going, it is started by setting a 1 second interval
            this.timeID = setInterval(function() {
                  countdown(that, minBox, secBox); //The countdown function is called every second in order to update the timer 
            }, 1000); //To calculate milliseconds
      }
};

//Countdown function that decreases the timer
function countdown(timer, minBox, secBox) {
      //If there are seconds remaining, the seconds are simply reduced
      if (timer.seconds > 0 ) {
            timer.seconds--;
      //Checks if there are minutes left when the seconds are zero
      } else if (timer.minutes > 0) {
            timer.minutes--; //Decreases the minutes by one
            timer.seconds = 59; //Resets seconds to 59 when a new minute is started
      //If both seconds and minutes are at 0, the timer is stopped
      } else {
            clearInterval(timer.timeID);
            timer.timeID = null;
      }
      //update the display to show the new time
      minBox.value = timer.minutes;
      secBox.value = timer.seconds;
}


/*---------------Interface Code -----------------*/

//This creates a timer object with what ever values were inputted into the boxes by the user 
let myTimer = new Timer(minBox.value, secBox.value);

//Event handler that registers any changes in the minutes box
minBox.onchange = function () {
      myTimer.minutes = this.value; //Updates the minutes when the user makes changes
};

//Event handler that registers any changes in the seconds box
secBox.onchange = function () {
      myTimer.seconds = this.value; //Updates the seconds when the user makes changes
}

//Event handler for the run/pause button when clicked
runPauseTimer.onclick = function() {
      myTimer.runPause(minBox, secBox); //Starts or pauses the timer depending on it's current state
}


