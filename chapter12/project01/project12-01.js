"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Sam McDowell
      Date:   11/9/2023

      Filename: project12-01.js
*/




$(document).ready(() => {
      $("li.submenu").on('mouseover', (e) => {
            $(e.currentTarget).children("ul").show();
      }).on("mouseout", (e) => {
            $(e.currentTarget).children("ul").hide();
      })

});
