/*
   Why callbacks are not used ?

   1. Pyramid of DOOM 
   2. Order of Execution 



*/

// function googleCall('get the  mails', () => {
//   // logging the perticular mail
//   // 1. working to read the mails // 5 secodonds

//   function sendReplies('reply bah bhah bhah', ('success | failure') => {

//     // working 2. send the  reply 5sec

//     // if reply is successfull

//       function success() {
//          // working fo success log it

//          function mailng() {

//          }

//         //  4. mailing()

//       }

//       // 3. success()

//   }) {

//   }

//   // 2 sendReplies();

// })

// googleCall()
// .then( work on rading the emails) 1.
// .then( sendReplies) 2.
// .then (prepare for success) 3.
// .then(send the mail) 4.

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

// --  demo  ---

/*
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
console.log("c"); */

//  ------------- HANDLERS ----------
// .then is a handler ( consumes data and Positive case)
// .catch is a error handler (consumes the erros)

/*
const url = "https://api.kanye.restzzzzzssssssszzzzzz";

fetch(url) // level 0
  .then((responseObject) => {
    // level 1
    return responseObject.json();
  })
  .then((data) => {
    // level 2

    console.log(data);
  })
  .catch((error) => {
    // handler the error

    console.log("I have the ERROR", error);
  });

*/

// this catch block will handle all the Erros from all the levels (0, 1, 2);

//  --------------------------- Promise chaining ------------- ----------

// ALGO
// 1. what ever data/Error is returned from the X level to the next level (X + 1)  we have to ask questions
// 2. ask (x + 1) level question that Can that HANDLER handle the data/Error and according to thaat proceed forward.
// 3. Mind you THEN HANDLER can handle DATA ONLY (Debatable).
// 4. CATCH HANDLER can handle ERROR ONLY (Debatable).

/*
// const url = "https://api.kanye.rest";

fetch(url) // level 0
  .then((responseObject) => {
    // level 1
    console.log("level 1", responseObject);

    // throw new Error("level 1 error");

    return responseObject.json();

    // return 199999999999;
  })
  .then((data) => {
    // level 2

    console.log("level 2", data);

    return 100;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
    return 800;
  })

  .catch((error) => {
    // Level - 4
    // handler the error

    console.log("I have the ERROR", error);
  });

  */

// ---------------------------------- ERROR HANDLING ------------------------------

// NOTE:  Only 1 catch block in the last will make it Bulkier BEC for EVERY LEVEL the error handling is
// happening in the last BLOCK ONLY.

// -------- CASE 1: Multiple Catch Block At Multiple Levels --------

/*
const url = "https://api.kanye.rest";

fetch(url) // level 0
  .then((responseObject) => {
    // level 1
    throw new Error("error level 1");
    console.log("level 1", responseObject);

    return responseObject.json();
  })
  .catch((error) => {
    // level 2
    console.log("level 2", error);
  })
  .then((data) => {
    // level 3

    console.log("level 3", data);

    return 100;
  })
  .then((data) => {
    // level 4

    console.log("level 4", data);
    throw new Error("Level 4 error");

    return 800;
  })

  .catch((error) => {
    // Level - 5
    // handler the error

    // if(level 0) {
    //   // handle the errr in special for level 1
    //   // handle the errr in special for level 1
    //   // handle the errr in special for level 1
    //   // handle the errr in special for level 1
    //   // handle the errr in special for level 1
    //   // handle the errr in special for level 0
    // }

    // if(level 1) {
    //   // handle the errr in special for level 1
    //   // handle the errr in special for level 1
    //   // handle the errr in special for level 1
    //   // handle the errr in special for level 1
    //   // handle the errr in special for level 1
    // }

    console.log("I have the ERROR level 5", error);
  });

  */

// CASE 2 -> in THEN handler we have 2 handlers (Data) and error

const url = "https://api.kanye.rest";

/*fetch(url) // level 0
  .then(
    (response) => {
      // Level 1

      console.log("level 1", response);
      throw new Error("error at level 1");
      return response.json();
    },
    (error) => {
      console.log("level 1 then ERROR handler", error);
    }
  )
  .catch((error) => {
    // level 2
    console.log("level 2 ERROR", error);
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
    return 1;
  })

  .then((data) => {
    // level 4
    console.log("level 4", data);
    return 800;
  })

  .catch((error) => {
    // level 5
    console.log("level 5 ERROR BLOCK ", error);
  });
*/

//  ----------------- Unhandled Errors -----------------

const urlKanye = "https://api.kanye.restzzsssssss";

fetch(urlKanye) // level 0
  .then((res) => {
    // level 1
    return res.json();
  })
  .then((data) => {
    // level 2
    console.log(data);
  });

// If you have not handled the ERROR there n then
// you can do the Below.

window.addEventListener("unhandledrejection", () => {
  console.log("Global Error handling");

  // show betiful scrren here
});
