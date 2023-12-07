"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-02

      Project to convert between celsius and fahrenheit
      Author: Sam McDowell
      Date:   11/9/2023

      Filename: project12-02.js
*/

$("input#cValue").change((e) => {
      let celsius = $(e.currentTarget).val();
      let fahrenheit = celsius * 1.8 + 32;
      $("input#fValue").val(fahrenheit.toFixed(0));
});

$("input#fValue").change((e) => {
      let fahrenheit = $(e.currentTarget).val();
      let celsius = (fahrenheit - 32) / 1.8;
      $("input#cValue").val(celsius.toFixed(0));
});