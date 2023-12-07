"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: Sam McDowell
      Date:   10-19-2023

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
      if (this.document.cookie) {
            bestText.textContent = getBestTime() + " seconds";
      }
});

function getBestTime() {
      if (document.cookie) {
            let cookieArray = document.cookie.split("=");
            return parseInt(cookieArray[1]);
      } else {
            return 9999;
      }
}


function updateRecord() {
      let solutionTime = document.getElementById("timer").value;

      solutionTime = parseInt(solutionTime);

      let bestTime = getBestTime();

      if (solutionTime < bestTime) {
            bestTime = solutionTime
      }

      let d = new Date();
      d.setTime(d.getTime() + (90*24*60*60*1000));

      bestText.textContent = bestTime + " seconds";
      document.cookie = "puzzle8Best="+bestTime+";expires="+d.toUTCString();
      
}