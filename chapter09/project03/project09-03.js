"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Sam McDowell
      Date:   10-19-2023

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");



if (localStorage.getItem("sbloggerVisit")) {
      let storedLastDate = localStorage.getItem("sbloggerVisit");
      lastVisitDate.textContent = storedLastDate;

      let lastDate = new Date(storedLastDate);

      for (let a of articleDates) {
            let articleDate = new Date(a.textContent);
            if (articleDate > lastDate) {
                  a.innerHTML += "<strong>new</strong>";
            }
      }
} else {
      lastVisitDate.textContent = "Welcome to SBlogger";
      for (let a of articleDates) {
            a.innerHTML += "<strong>new</strong>";
      }

      let currentDate = new Date("9/12/2024");
      localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());
}