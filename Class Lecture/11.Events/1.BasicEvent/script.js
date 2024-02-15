// Any thing that you do in Browser Is an ACTION

/*
    What do you do in your browser ?

    Click, DoubleClick, Select, Hover (moving around on browser),
    Changing the screen size, SCROLLING etc.....

    Every action is AN Event of its Own type


    // ROLE OF BROWSER 
    ANY ACTION HAPPENS create an event and SEND IT, it is upto the JS FILE if they ACCEPT EVENT OR NOT.
*/

console.log("a");

// Till now I have not done anything To LISTEN to the EVENT.
// SO we have to add LISTNERS.

// 1. We select an ELEMENT on WHOM WE WANT TO LISTEN
// 2. We specify what EVENT we want to listen on that ELEMENT.
// 3. Ofcourse the Callback function when that event arrives.

const button1Element = document.getElementById("button1");
// console.log(button1Element);

// function button1Callback() {
//   button1Element.style.background = "red";
//   console.log("click buuton  1");
// }

// button1Element.addEventListener("click", button1Callback);

// const containerELement = document.getElementById("container");
// console.log(containerELement);

// containerELement.addEventListener("mouseout", () => {
//   containerELement.style.background = "red";
// });

// containerELement.addEventListener("click", () => {
//   containerELement.style.background = "purple";
// });

// containerELement.addEventListener("mouseenter", () => {
//   containerELement.style.background = "yellow";
// });

// const listOFElements = document.getElementsByClassName("color");
// const colorElement = listOFElements[0];

// console.log(colorElement);

// colorElement.addEventListener("click", () => {
//   colorElement.style.background = "yellow";
// });

//  ------------------ Mouse Events ----------------------
// 1. Click

// function button1Callback() {
//   button1Element.style.background = "red";
//   console.log("click buuton  1");
// }

// button1Element.addEventListener("click", button1Callback);

// 2. Double Click

// const containerELement = document.getElementById("container");
// containerELement.addEventListener("dblclick", () => {
//   console.log("double click 1!!!");
// });

// 3. mouseOver: CARES ABOUT CHILD (read MDN DOCS)

// const containerELement = document.getElementById("container");
// containerELement.addEventListener("mouseover", () => {
//   console.log("mouseover !!!");
// });

// 4. mouseEnter: Mouse Enter DO NOT CARE ABOUT CHILD  (read MDN DOCS)

// const containerELement = document.getElementById("container");
// containerELement.addEventListener("mouseenter", () => {
//   console.log("mouseenter !!!");
// });

// ------------------------- WHAT EXACTLY ARE EVENTS -----------------

// --------------- KEYBOARD EVENTS -----------------------

const containerELement = document.getElementById("container");
containerELement.addEventListener("key", () => {
  console.log("mouseenter !!!");
});