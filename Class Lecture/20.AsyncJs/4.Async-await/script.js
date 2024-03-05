// ----------- ASYNC AWAIT (Syntatical Sugar for Promises) ----------

// Question: go ahead and Quote kanye and show it in DOM

const url = "https://api.kanye.rest";

// fetch(url) // 5sec ?
//   .then((res) => { // after 5 seconds I am getting the response .
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);

//     const { quote } = data;
//     // const quote = data.quote;

//     console.log("quote", quote);

//     return quote;
//   })
//   .then((data) => {
//     const divElement = document.getElementById("kanye");
//     divElement.innerHTML = data;
//   })
//   .catch((error) => {

//   })

//  ------- async await -----

// 1. if you want to use await ALWAYS have ASYNC FUNCTION.
// 2. async function RETURNS a PROMISE

//  Single Responsibility -> ONly Getting the Quotes
async function fetQuotes(url) {
  try {
    const response = await fetch(url); // 5seconds
    const data = await response.json(); // 2 secds
    const { quote, utkarsh } = data; // Object Destructuring
    return quote;
  } catch (error) {
    // handle the error
    // 1. handling error for Fetch
    // 2. handling error for REsponse json conversion
    // 3. Handling error for Object Destructuring.

    console.log(error);
  }
}

// Single Responsibility -> Dom manupulation
function display(quote) {
  const divElement = document.getElementById("kanye");
  divElement.innerHTML = quote;
}

// Multiple responsibility ->
async function completeProcess(url) {
  const quote = await fetQuotes(url);
  display(quote);
}

completeProcess(url);

// const promise = fetch();
// console.log(promise);

// ABC function is LIKE FETCH function

//  ----------- PROMISE CREATION ------------

// 1. new Promise()

function abc() {
  const abc1 = new Promise((res, rej) => {
    res(19900099000);
  });
  return abc1;
}

// 2. async
async function abc() {
  return 19900099000;
}

console.log(abc()); // Promise [[status: ]]

// -------- HOW TO CONSUME A PROMISE ------ - - - -

// 1.  .then .catch

abc().then((data) => {
  console.log(".then consumption ", data);
});

// 2.  async - await

async function consumeABC() {
  const data = await abc();
  console.log(data, "async wait consumption");
}

consumeABC();

//  ---------------------- fetch brother Axios ------------
