"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a pizza using object oriented programming
      Author: Sam McDowell
      Date:   10/15/2023

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/


let cart = {
   items: [],
   addItem: function (foodItem) {
      this.items.push(foodItem);
   },
}

class Pizza {
   constructor() {
      this.size;
      this.crust;
      this.toppings = [];
   }

   addToCart(cart) {
      cart.items.push(this);
   }

   summarize() {
      let summary = "Pizza: ";
      summary += this.size + " ";
      summary += this.crust + " ";
      this.toppings.forEach(element => {
         summary += element.name + "(" + element.side + ") ";
      });

      return summary;
   }

   addTopping(topping) {
      this.toppings.push(topping);
   }
}

class Topping {
   constructor() {
      let name;
      let side;
   }
}


/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");         // pizza image 
let pizzaSizeBox = document.getElementById("pizzaSize");             // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust");           // pizza crust selection 
let toppingOptions = document.querySelectorAll("input.topping");     // pizza topping option buttons
let addToCart = document.getElementById("addToCart");                // Add to Cart button
let cartBox = document.getElementById("cart");                       // Shopping cart box


// Add event handlers for the pizza toppings   
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
} 

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the pizza image  */
function drawPizza() {
   // Erase current pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");  

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);                                  
      }
   }      
}



// Function to build the pizza
function buildPizza() {
   let checkedToppings = document.querySelectorAll("input.topping:checked"); 

   let pizza = new Pizza();
   pizza.size = pizzaSizeBox.value;
   pizza.crust = pizzaCrustBox.value;

   for (let i = 0; i < checkedToppings.length; i++) {
      let t = new Topping();
      t.name = checkedToppings[i].name;
      t.side = checkedToppings[i].value;
      pizza.addTopping(t);
   }

   return pizza;
}    

// Function to add the built pizza to the shopping cart
function updateCart() {
   let pizza;

   pizza = buildPizza();

   cart.addItem(pizza);

   console.log(cart);

   let para = document.createElement("p");
   para.textContent = pizza.summarize();

   cartBox.appendChild(para);

}  
