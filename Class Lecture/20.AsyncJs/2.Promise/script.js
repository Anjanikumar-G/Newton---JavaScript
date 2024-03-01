// ---------------- PROMISES ----------------------

// English: wada(in hindi), Commitment.
// js -> a commitment..

// console.log("going to buger KING");

// // request Burger king fro order

// // I have only requested the Data.

// // How to consume we will look ?

// const promise = fetch("google.com"); // REAL DATA WILL ARRIVE AFTER  10sec

// console.log(promise);

// console.log("continue with own thing");

//  -------- HOW TO TALK TO SERVER ------------

// const url = `https://pokeapi.co/api/v2/pokemon/pikachu`; // 10

// console.log("a");

// fetch(url) // after 5 sec I got the response
//   .then((response) => {
//     // play with response
//     console.log("response", response);

//     return response.json(); // convert response into data -> 5 seconds
//   }) // after I get the data
//   .then((data) => {
//     // play with data
//     console.log("data", data);
//   });

// console.log("b");

console.log("a");

// Request line
const promise = fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((r) => {
    console.log("response", r);

    return r.json(); // 5seconds
  })
  .then((d) => {
    console.log("data", d);
  });

console.log("b");
console.log("c");
