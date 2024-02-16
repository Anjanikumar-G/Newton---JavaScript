const containerElement = document.getElementById("container");
console.log(containerElement, "containerElement - 1"); // null;

// 1. DOMContentLoaded: it is the EVENT WHICH IS launched only when DOM TREE creation is 100%.

// window.addEventListener("DOMContentLoaded", () => {
//   const containerElement = document.getElementById("container");
//   console.log(containerElement, "containerElement - 2"); // element
// });

// When DOMContentLoaded happens it is Guranteed that DOM TREE is 100% completed
// IT is not GURANTEED that the Image will be loaded completly.

// 2.  Load ->  when External Resources (images, css, videos, audio, etc) are 100% loaded

// document.addEventListener("load", () => {
//   // play with the image.....
// });

// 3.beforeunload -> This event is called when the user is destoying the page/Document.

// window.addEventListener("beforeunload", (event) => {
//   // cancel all event listners
//   // cleaning.

//   alert("brefore dying");
//   event.stopPropagation();
// });