"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-05

    Crossword Puzzle Functions
    
    Author: Sam McDowell
    Date:   10/26/2023

    Filename: cross.js

   Global Variables
   ================
   allLetters
      References all of the letter squares in the crossword puzzle
   
   currentLetter
      References the letter currently selected in the crossword puzzle
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle square
      
      
   switchTypeDirection()
      Toggles the typing direction between right and down     

*/

let allLetters, currentLetter, wordLetters, acrossClue, downClue;
let typeDirection = "right";

window.onload = init;

function init() {
   allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0];
   let acrossID = currentLetter.dataset.clueA;
   let downID = currentLetter.dataset.clueD;
   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   downClue = document.getElementById(currentLetter.dataset.clueD);
   
   // Format the intial appearance of the puzzle to highlight the
   // first row, column, and square
   formatPuzzle(currentLetter);
   
   // Every time the pointer presses down on a letter, reformat the puzzle
   // to highlight the current row, column, and square
   for (let letters of allLetters) {     
      letters.onpointerdown = function(e) {
         formatPuzzle(e.target);
      };
   }
   
   // typeImage shows the typing direction (horizontal or vertical)
   let typeImage = document.getElementById("directionImg");
   
   // Toggle the typing direction when the pointer presses down on the typeImage
   typeImage.onpointerdown = switchTypeDirection;
   
   // Show all errors in the puzzle in red but only for 1 second
   document.getElementById("showErrors").onclick = function() {
      for (let letters of allLetters) {
         if (letters.textContent !== letters.dataset.letter) {
            letters.style.color = "red";
            setTimeout(function() {
               for (let letters of allLetters) {
                  letters.style.color = "";
               }
            }, 1000);
         }
      }
   }
   
   // Show the puzzle's solution
   document.getElementById("showSolution").onclick = function() {
      for (let letters of allLetters) {
         letters.textContent = letters.dataset.letter;
      }
   };
}

function formatPuzzle(puzzleLetter) {
   currentLetter = puzzleLetter; 
   
   for (let letters of allLetters) {
      letters.style.backgroundColor = "";
   }
   
   acrossClue.style.color = "";
   downClue.style.color = "";
     
   if (currentLetter.dataset.clueA !== undefined) {
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      acrossClue.style.color = "blue";
      wordLetters = document.querySelectorAll("[data-clue-a = " + currentLetter.dataset.clueA + "]");
      for (let words of wordLetters) {
         words.style.backgroundColor = "rgb(231, 231, 255)";
      }
   }
   if (currentLetter.dataset.clueD !== undefined) {
      downClue = document.getElementById(currentLetter.dataset.clueD);
      downClue.style.color = "red";
      wordLetters = document.querySelectorAll("[data-clue-d = " + currentLetter.dataset.clueD + "]");
      for (let words of wordLetters) {
         words.style.backgroundColor = "rgb(255, 231, 231)";
      }
   }
   
   if (typeDirection === "right") {
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   } else {
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }
}



function switchTypeDirection() {
   var typeImage = document.getElementById("directionImg");
   if (typeDirection === "right") {
      typeDirection = "down";
      typeImage.src = "pc_down.png";
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   } else {
      typeDirection = "right";
      typeImage.src = "pc_right.png";
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   }   
}
