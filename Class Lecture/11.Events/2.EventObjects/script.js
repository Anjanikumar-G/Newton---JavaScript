const button1 = document.getElementById("button1");

// addEventListener will add A LISTNER (EAR) to ELEMENT, when a perticular EVENT happens
// it basically EXECUTE callbackFUNCTION
button1.addEventListener("click", (eventObj) => {
  console.log("button1 is clicked!!!");
  console.log(eventObj);
});

// This is what happening behnid the scenes .....

// addEventListener(eventString, fun) {

//   // addEventListener know about the EVENT OBJECT
//   fun(eventObj)
// }

// -------- IMPORTANT THINGS ABOUT EVENT OBJ ---------
// 1. target -> Event obj knows  about ELEMENT due to whom IT WAS CREATED.
// 2. type -> TYPE OF EVENT (click, mouseenter).

// const containerElement = document.getElementById("container");

// containerElement.addEventListener("mouseenter", (event) => {
//   containerElement.style.background = "yellow";
//   console.log("mouseenter event", event);
//   console.log(event.target);
// });

// containerElement.addEventListener("mouseout", (event) => {
//   containerElement.style.background = "red";
// });

window.addEventListener("resize", (eventObj) => {
  // console.log(eventObj);
  console.log("resize");
});

//  -------------------- BUBBLING AND CAPTURING ------------------

// 1. EVENT IS an object we know that  (THAT TAKES SPACE IN RAM)
// 2. we do anything (ANY ACTION (click, scroll, hover, resieze)) it will create EVENT OBJECT in 100000 or lakhs.
// 3. Now If my ram is still doing good it means EVENT OBJECT HAS A LIFECYCLE.
// 4. ONCE EVENT OBJECT IS CREATED IT HAS TO BE DESTORYED.

// FACT 1 -> EVENT is created from BROWSER/WINDOW
// FACT 2 -> EVENT needs to DIE

// Purpose of EVENT ->
// 1. is to find which ELEMENT made ME.
// 2. is TO DIE.