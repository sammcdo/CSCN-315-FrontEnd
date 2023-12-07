"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
    Author: Sam McDowell
    Date:   10/26/2023

    Filename: project10-04.js
*/


// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");


for (let i = 0; i < pieces.length; i++) {
    pieces[i].draggable = true;
    pieces[i].addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id);
    });
}

for (let i = 0; i < boardSquares.length; i++) {
    boardSquares[i].addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    boardSquares[i].addEventListener("drop", (e) => {
        e.preventDefault();
        let pieceId = e.dataTransfer.getData("text");
        console.log(pieceId);
        let movingPiece = document.getElementById(pieceId);
        console.log(movingPiece);
        console.log(e.target.tagName);
        if (e.target.tagName == "TD") {
            console.log("here");
            e.target.appendChild(movingPiece);
        } else if (e.target.tagName == "SPAN") {
            let occupyingPiece = e.target;
            console.log("here", occupyingPiece.parentElement);
            let square = occupyingPiece.parentElement;
            square.appendChild(movingPiece);
            if (occupyingPiece.className == "white") {
                whiteBox.appendChild(occupyingPiece);
            } else {
                blackBox.appendChild(occupyingPiece);
            }
        }
    });
}