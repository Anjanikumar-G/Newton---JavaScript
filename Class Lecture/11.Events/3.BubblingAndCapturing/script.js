/*
  Phases of EVENT 
  
  A click action has happened on the DOM/Browser.

  1. Capturing phase -> A Event will be originated from the window, 
  its aim would be to find the target who clicked (or did any action).

  eventObj = {
    type: click,
    target: null,
  }

  target -> which element clicked me.

  In this phase it is GUARANTEED that target is NOT KNOWN


  2. Targeting Pahse -> A event Will find itself on the target Element itself. 

  eventObj = {
    type: click,
    target: targetElement,
  }

  As soon As the Targeting Phase is done Event will not go DOWN, rather it will go UP to DIE.

  3. Bubbling Phase: A event will bubble up to window Element just TO die 

  In this phase it is guaranteed that TARGET IS KNOWN.
  
  eventObj = {
    type: click,
    target: targetElement,
  }





*/

// All elements

//  ------------------------ BUBBLING PHASE ----------------------
// 3rd option in addEventListener if is False or NOTHING then it is BUBBLING PASE EVENT LISTNER

const grandParentElement = document.getElementById("grandParent");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");

// // If I click on child Element

// childElement.addEventListener("click", (eventObj) => {
//   console.log("child CLicked");
// });

// grandParentElement.addEventListener("click", () => {
//   console.log("grandparent hello");
// });

// parentElement.addEventListener("click", (eventObj) => {
//   // console.log(eventObj); // target => SomeElement
//   console.log("parent clicked !!!");
// });

//  ---------------------- CAPTURING PHASE -----------------------

// true as the 3rd option of addEventListener so that I can add Listner in the Capturing phase.

// We cant See the Event object (target = null) Due to Constraint of JS language

// window.addEventListener("click", (event) => {
//   console.log(JSON.parse(JSON.stringify(event)), "window");
// });

// childElement.addEventListener(
//   "click",
//   (eventObj) => {
//     // console.log(JSON.parse(JSON.stringify(eventObj))); // target => key is not present we can say target -> null

//     console.log("child clicked!!");
//   },
//   true
// );

// grandParentElement.addEventListener(
//   "click",
//   (eventObj) => {
//     // console.log(eventObj); // target => Null.
//     console.log("grandparent hello");
//   },
//   true
// );

// parentElement.addEventListener(
//   "click",
//   (eventObj) => {
//     // console.log(eventObj); // target => Null.
//     console.log("parent hello parent elem");
//   },
//   true
// );

/* Question: 
  having this configuration tell us the output 

  1. When you click GrandParent. ? 

*/

// grandParentElement.addEventListener(
//   "click",
//   () => {
//     console.log("grandparent clicked");
//   },
//   false
// );

// parentElement.addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   true
// );

// childElement.addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   false
// );

//  ---------------------------- Event StopPropogation -------------

// 1. ------ Capturing phase

// childElement.addEventListener(
//   "click",
//   (eventObj) => {
//     // console.log(JSON.parse(JSON.stringify(eventObj))); // target => key is not present we can say target -> null

//     console.log("child clicked!!");
//   },
//   true
// );

// grandParentElement.addEventListener(
//   "click",
//   (eventObj) => {
//     // console.log(eventObj); // target => Null.
//     console.log("grandparent hello");
//     eventObj.stopPropagation(); // wall
//   },
//   true
// );

// parentElement.addEventListener(
//   "click",
//   (eventObj) => {
//     // console.log(eventObj); // target => Null.
//     console.log("parent hello parent elem");
//   },
//   true
// );

// 2. ----  Bubbling phase

// childElement.addEventListener("click", (eventObj) => {
//   console.log("child CLicked");
//   eventObj.stopPropagation();
// });

// grandParentElement.addEventListener("click", () => {
//   console.log("grandparent hello");
// });

// parentElement.addEventListener("click", (eventObj) => {
//   // console.log(eventObj); // target => SomeElement
//   console.log("parent clicked !!!");
//   // eventObj.stopPropagation(); // wall
// });

//  -------------------------- REMOVE EVENT-LISTNER --------------

//  EVENT DELEGATION ...

const buttonElement = document.getElementById("button");

const callBack = () => {
  console.log("click me");
};
buttonElement.addEventListener("click", callBack);

// Faking things
// after 5 seconds remove this Event listner from buttonElement
// 5000 - milliseconds -> 5sec

setTimeout(() => {
  buttonElement.removeEventListener("click", callBack);
}, 5000);