"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Sam McDowell
      Date:   09-28-2023

      Filename: project06-01.js
*/

let SubmitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

SubmitButton.onclick = function () {
      if (pwd.validity.patternMismatch) {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least 1 letter and 1 number.");
      } else if (pwd.value != pwd2.value) {
            pwd2.setCustomValidity("Your passwords must match.");
      } else {
            pwd.setCustomValidity("");
            pwd2.setCustomValidity("");
      }
}