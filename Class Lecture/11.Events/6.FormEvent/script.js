// FORMS

// 1. Select the element

const formElement = document.getElementById("form");
console.log(formElement);

formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // this line of code prevents the Default
  //    behaviour (i,e: submitting to action url and RELOADING THE PAGE)
});

// Copy paste Event

const nameElement = document.getElementById("name");
// nameElement.addEventListener("paste", (event) => {
//   console.log("hey someone paster");
//   event.preventDefault();
// });

// nameElement.addEventListener("copy", (event) => {
//   console.log("hey someone copied");
//   event.preventDefault();
// });

// Focus and Blur -

// nameElement.addEventListener("focus", () => {
//   console.log("focus");
// });

// nameElement.addEventListener("blur", () => {
//   console.log("blur");
// });

// 3 keys event -> keydown, keyup and keypress

// nameElement.addEventListener("keypress", (event) => {
//   console.log("button clicked");
//   //   console.log(event);
//   const key = event.key;
//   console.log(key);
// });

/*
    Question:  if you write in small cap in an Input box automatically it should become capital


*/

// ....... Form Validation  ......  Regex