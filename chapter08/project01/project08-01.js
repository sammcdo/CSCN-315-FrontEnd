"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Sam McDowell
      Date:   10/15/2023

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

function Timer(min, sec) {
      this.minutes = min;
      this.seconds = sec;
      this.timerID = null;
}

Timer.prototype.runPause = function (timer, minBox, secBox) {
      if (this.timerID) {
            window.clearInterval(this.timerID);
            this.timerID = null;
      } else {
            this.timerID = window.setInterval( () => {
                  this.countdown(minBox, secBox);
            }, 1000);
      }
      
}

Timer.prototype.countdown = function (minBox, secBox) {
      if (this.seconds > 0) {
            this.seconds -= 1;
      } else {
            if (this.minutes > 0) {
                  this.minutes -= 1;
                  this.seconds = 59;
            } else {
                  window.clearInterval(this.timerID);
                  this.timerID = null;
            }
      }
      console.log("Countdown");
      minBox.value = this.minutes;
      secBox.value = this.seconds;
}




/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let myTimer = new Timer(minBox.value, secBox.value);
console.log(myTimer);

minBox.onchange = function () {
      myTimer.minutes = minBox.value;
}

secBox.onchange = function () {
      myTimer.seconds = secBox.value;
}

runPauseTimer.onclick = function () {
      console.log("HERE");
      myTimer.runPause(myTimer, minBox, secBox);
}