"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Sam McDowell
      Date:   10/15/2023

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];
   
   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   // Once the file has finished loading, parse the JSON file
   fr.onload=function(){ 
      let staff = JSON.parse(fr.result);
      makeStaffTable(staff);
   }
   
};

function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");

   for (let prop in staff.directory[0]) {
      let headerCell = document.createElement("th");
      headerCell.textContent = prop;
      headerRow.appendChild(headerCell);

   }

   staffTable.append(headerRow);

   for (let i = 0; i < staff.directory.length; i++) {
      let tableRow = document.createElement("tr");
      for (let prop in staff.directory[i]) {
         let tableCell = document.createElement("td");
         tableCell.textContent = staff.directory[i][prop]
         tableRow.append(tableCell);
      }
      staffTable.append(tableRow);
   }


   containerBox.appendChild(staffTable);


}