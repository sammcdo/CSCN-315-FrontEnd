"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Sam McDowell
      Date:   09-28-2023

      Filename: project06-02.js
*/


window.onload = function () {
      var allSelect = document.querySelectorAll("form#govLinks select");
      console.log("All Selected", allSelect);

      for (let i = 0; i < allSelect.length; i++) {
            allSelect[i].onchange = function (evt) {
                  let linkURL = evt.target.value;
                  let newWin = window.open(linkURL);
            }
      }
}

