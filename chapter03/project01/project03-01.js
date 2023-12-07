/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Sam McDowell
      Date:   09-07-2023

      Filename: project03-01.js
*/

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

function calcTotal() {
    let orderTotal = 0;

    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value);
        }
    }

    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

var menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < 5; i++) {
    menuItems[i].addEventListener("click", calcTotal);
}
