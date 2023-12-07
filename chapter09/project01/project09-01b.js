"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Sam McDowell
      Date:   10-19-2023

      Filename: project09-01b.js
*/

let query = location.search.slice(1);

query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);

let cardFields = query.split(/&/g);

for (let items of cardFields) {
      let nameValue  = items.split("=");
      let fieldname = nameValue[0]
      let fieldvalue = nameValue[1];

      document.getElementById(fieldname).textContent = fieldvalue;
}

console.log(thing);