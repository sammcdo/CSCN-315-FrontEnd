"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-04

      Project to retrieve UV index and other solar information for user's current position
      Author: Sam McDowell
      Date:   11/2/2023

      Filename: project11-04.js
*/

// Table Objects
let latCell = document.getElementById("lat");
let lngCell = document.getElementById("lng");
let uvIndexCell = document.getElementById("uvIndex");
let uvMaxCell = document.getElementById("uvMax");
let ozoneCell = document.getElementById("ozone");
let st1Cell = document.getElementById("st1");
let st2Cell = document.getElementById("st2");
let st3Cell = document.getElementById("st3");
let st4Cell = document.getElementById("st4");
let st5Cell = document.getElementById("st5");
let st6Cell = document.getElementById("st6");


// Get the device's current position
navigator.geolocation.getCurrentPosition(getLocation, handleError);

function getLocation(pos) {
     
   let myPosition = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
   }

   let url = "https://api.openuv.io/api/v1/uv";
   let key = "a680ff3e4f26e4eb68ad5816a303cb23";

   fetch(`${url}?lat=${myPosition.lat}&lng=${myPosition.lng}`, {
      method: "GET",
      headers: {
         'x-access-token': key
      }
   })
   .then(response => response.json())
   .then(json => showSunSafety(json))
   .catch(e => console.log(e));

   function showSunSafety(obj) {
      console.log("RESULT", obj.result);
      latCell.textContent = myPosition.lat.toFixed(6);
      lngCell.textContent = myPosition.lng.toFixed(6);
      uvIndexCell.textContent = obj.result.uv;
      uvMaxCell.textContent = obj.result.uv_max;
      ozoneCell.textContent = obj.result.ozone;
      st1Cell.textContent = obj.result.safe_exposure_time.st1;
      st2.textContent = obj.result.safe_exposure_time.st2;
      st3.textContent = obj.result.safe_exposure_time.st3;
      st4.textContent = obj.result.safe_exposure_time.st4;
      st5.textContent = obj.result.safe_exposure_time.st5;
      st6.textContent = obj.result.safe_exposure_time.st6;
   }
}

function handleError() {
   alert("Unable to get your location");
}






