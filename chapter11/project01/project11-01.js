"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-01

      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: Sam McDowell
      Date:   11/2/2023

      Filename: project11-01.js
*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {   
      let dateStr = dateBox.value;

      fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+dateStr)
      .then((response) => {
            let parsed = response.json();
            return parsed;
      }).then((parsed) => {
            showPicture(parsed);
      }).catch((e) => {
            console.log(e);
      })
}

function showPicture(parsed) {
      if (parsed.media_type === "video") {
            let url = parsed.url;
            let title = parsed.title;
            let explanation = parsed.explanation;
            imageBox.innerHTML = `<iframe src="${url}"></iframe><h1>${title}</h1><p>${explanation}</p>`;
      }
      else if (parsed.media_type === "image") {
            let url = parsed.url;
            let title = parsed.title;
            let explanation = parsed.explanation;
            imageBox.innerHTML = `<img src="${url}" /><h1>${title}</h1><p>${explanation}</p>`;
      }
      else {
            imageBox.innerHTML = "Image not available.";
      }
}

