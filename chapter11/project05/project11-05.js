"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-05

      Project to retrieve content for a SF blog
      Author: Sam McDowell
      Date:   11/2/2023

      Filename: project11-05.js
*/

window.addEventListener("load", init);

function init() {
   // Page Objects
   let selectionList = document.getElementById("authorList");
   let bookReview = document.getElementById("review");
   let podList = document.getElementById("podcastList")
   
   // Fetch a list of authors from the server
   fetch("authorlist.json")
      .then (response => response.json())
      .then (json => {
         
         // Place the authors in a selection list
         for (let authors of  json.authorlist) {
            let newOpt = document.createElement("option");
            newOpt.value = authors.initials;
            newOpt.textContent = authors.name;
            selectionList.appendChild(newOpt);
         }
      
         // Create an onchange event handler that displays a review by the selected author
         selectionList.onchange = function() {
            fetch("sfreviews.pl?author="+selectionList.value)
            .then (response => response.text())
            .then (review => bookReview.innerHTML = review)
            .catch(e => console.log(e))
            }
         })
      .catch ( e => console.log(e));
   
   // Fetch the list of podcasts from an XML document
   fetch("sfpod.xml")
   .then(response => response.text())
   .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
   .then (dom => {
      // Rewrite the XML structure into an HTML fragment
      let podcasts = dom.querySelectorAll("item");
      for (let show of podcasts) {
         let title = show.children[0].textContent;
         let summary = show.children[1].textContent;
         let link = show.children[2].textContent;
         let article = `<article><h1><a href=${link}>${title}</a></h1><p>${summary}</p></article>`;
         podList.insertAdjacentHTML("beforeEnd", article)
      }
   })
   .catch(e => console.log(e))
}