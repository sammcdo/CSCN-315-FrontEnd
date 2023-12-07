/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Sam McDowell
      Date:   08-31-2023

      Filename: js02.js
 */

// Declare constants
const EMP_COST = 100;         // photographer hourly rate
const BOOK_COST = 350;        // cost of memory book
const REPRO_COST = 1250;      // cost of reproduction rights
const TRAVEL_COST = 2;        // travel cost per mile

// Setup the form when the page loads
window.addEventListener("load", setupForm);

// Set the form's default values
function setupForm() {
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;

      getEstimate();

      document.getElementById("photoNum").onchange = getEstimate;
      document.getElementById("photoHrs").onchange = getEstimate;
      document.getElementById("photoDist").onchange = getEstimate;
      document.getElementById("makeBook").onchange = getEstimate;
      document.getElementById("photoRights").onchange = getEstimate;
}

// Estimate the total cost of the service
function getEstimate() {
      let totalCost = 0;
      let photographers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;
      let buyBook = document.getElementById("makeBook").checked;
      let buyRights = document.getElementById("photoRights").checked;

      // Cost for hours covered
      totalCost += photographers * hours * EMP_COST;
      // Cost for distance traveled
      totalCost += photographers * distance * TRAVEL_COST;

      // Add the cost of the book if purchased
      totalCost += buyBook ? BOOK_COST : 0;
      // Add the cost of the photo rights if purchased
      totalCost += buyRights ? REPRO_COST : 0;

      // Display the total cost estimate
      document.getElementById("estimate").innerHTML = "$" + totalCost;
}