"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Sam McDowell
      Date:   09-28-2023

      Filename: project06-03.js
*/

let useShip = document.getElementById("useShip");

let keys = [
      "firstname",
      "lastname",
      "address1",
      "address2",
      "city",
      "country",
      "code"
]

useShip.onclick = function () {
      copyShippingToBilling();
}

function copyShippingToBilling() {
      if (useShip.checked) {
            for (let i = 0; i < keys.length; i++) {
                  document.getElementById(keys[i]+"Bill").value = document.getElementById(keys[i]+"Ship").value;
            }
            document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
      }
}

let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

console.log(formElements);

for (let i = 0; i < fieldCount; i++) {
      formElements[i].oninvalid = showValidationError;
}

function showValidationError(evt) {
      evt.preventDefault();
      errorBox.textContent = "Complete all highlighted fields.";
}

