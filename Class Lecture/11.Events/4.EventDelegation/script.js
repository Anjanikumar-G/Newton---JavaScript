/*
  QUestion: When I click on red button My container 
  should be RED and same thing with other colors.

*/

// const containerElement = document.getElementById("container");

// const greenButtonElement = document.getElementById("green");
// const redButtonElement = document.getElementById("red");
// const yellowButtonElement = document.getElementById("yellow");

// greenButtonElement.addEventListener("click", (eventObj) => {
//   console.log(eventObj);
//   // const targetElement = eventObj.target
//   // console.log(greenButtonElement === eventObj.target, "comparision"); // true

//   const element = eventObj.target; // greenButtonElement
//   const color = element.id; // green

//   console.dir(color);

//   containerElement.style.background = color;
// });

// redButtonElement.addEventListener("click", (event) => {
//   const element = event.target; // redButtonElement
//   const color = element.id;

//   containerElement.style.background = color;
// });

// yellowButtonElement.addEventListener("click", (event) => {
//   const element = event.target; // yellowButtonElement
//   const color = element.id;

//   containerElement.style.background = color;
// });

// I have added 3 EVENT LISTENERS

// what about 10000 colors, if I have 10k colours will I have 10k EVENT LISTENERS

// IS THIS A GOOD WAY ?  NO.

// ------------ EVENT DELEGATION -------------------------
// TWITTER ALSO HAVE THIS THING FOR TIMELINES..

// Any parent will work

const palletContainerElement = document.getElementById("palletContainer");
const containerElement = document.getElementById("container");

// solution 1
palletContainerElement.addEventListener("click", (event) => {
  const element = event.target; // redbutton, greenbutton, yellowButton

  console.log(element);

  const color = element.id;

  containerElement.style.background = color;
});

// solution 2
document.body.addEventListener("click", (event) => {
  const element = event.target; // redbutton, greenbutton, yellowButton

  console.log(element);

  const color = element.id;

  containerElement.style.background = color;
});

// both the solution will work, but what is better in reality in CODE READIBILITY
//  solution 1 is.