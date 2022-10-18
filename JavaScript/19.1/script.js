// Instructions
// Please make the following changes to the HTML file while
//   navigating the DOM.
//   Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of
// your

const start = document.querySelector(".start-here");
start.textContent = "main title";
const ulInside = start.nextElementSibling.firstElementChild;
ulInside.appendChild(document.createElement("li")); // create li child
ulInside.lastChild.innerText = "sub title 4";
const removeMe = start.nextElementSibling.nextElementSibling;
const mainUl = document.querySelector("ul");
mainUl.removeChild(removeMe);
// start.nextElementSibling.nextElementSibling.remove()
start.parentElement.parentElement.parentElement.firstChild.lastElementChild.previousElementSibling.previousElementSibling.innerText =
  "Master Of The Dom";

start.parentElement.nextElementSibling.firstElementChild.innerText = "hi";
