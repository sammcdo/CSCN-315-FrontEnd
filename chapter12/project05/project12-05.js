"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-05

      Project to validate a user form
      Author: Sam McDowell
      Date:   11/9/2023

      Filename: project12-05.js
*/

$("form#userform")
// apply the novalidate attribute so that the browser validation is not run
.attr("novalidate", "")
// run a function when the form is submitted
.submit( e => {  

   let isValid = true;
   
   // confirm that a username has been supplied
   let username = $("input#username");
   // test the value of the username input box
   if ($(username).val() === "") {
      // if the name is missing, display an error message      
      isValid = false;
      $(username).next()
      // animate the reveal of the error message
      .hide()
      .text("* You must supply a username")
      .show(500);
   } else {
      // display an empty text string
      $(username).next().text("");
   }
   
   
   // confirm that an email address has been supplied
   let email = $("input#email");	
   // test the text of the email box is a valid email address
   let mailRE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let validMail = mailRE.test(email.val()); 
   
   if (validMail !== true) {
      // if the email address does not match the regular expression pattern, display an error message
      isValid = false;
      $(email).next()
      .hide()
      .text("* Not a valid e-mail address")
      .show(500);      
   } else {
      // display an empty text string
      $(email).next().text("");
   }
   
   
   // confirm that valid password has been supplied
   let pwd = $("input#pwd");
   // test the text of the password box conforms to the password rules
	let pwdRE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	let validPwd = pwdRE.test(pwd.val());
   
   if (validPwd !== true) {
      // if the password does not match the regular expression pattern, display an error message
      isValid = false;
      $(pwd).next()
      // animate the reveal of the error message
      .hide()
      .text("* Invalid password")
      .show(500);      
   } else {
      // display an empty text string
      $(pwd).next().text("");
   }
   
   
   // confirm that the two passwords match
   let pwd2 = $("input#pwd2");; 
   
   if (pwd.val() !== pwd2.val()) {
      // if the passwords don't match, display an error message
      isValid = false;
      $(pwd2).next()
      // animate the reveal of the error message
      .hide()
      .text("* Passwords must match")
      .show(500);      
   }  else {
      // display an empty text string
      $(pwd2).next().text("");
   } 
   
   // Confirm that there is no invalid data in the form
   if (isValid == false) {
      // if there is invalid data, cancel the form submission
      e.preventDefault();
   }
   
});