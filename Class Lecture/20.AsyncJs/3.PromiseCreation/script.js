// ---------------- PROMISE CREATION ----------------

// fetch();

//  Promise Creation
const myFetch = new Promise((resolve, reject) => {
  // url ->
  // resolve(1010101010101001); // actually give back data to PROMISE
  reject("ERROR: not nice"); // gives back ERROR to PROMISE.
});

// Promise Consumption

myFetch
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log(error, "error level 2");
  });

fetch("google.com");

// ---  How to create our Fetch --

function myFetch(url) {
  return new Promise((resolve, reject) => {
    // 1. Call the server
    const xmlReq = new XMLHttpRequest();
    const data = xmlReq.open("GET", url); // it opens the TCP connection (YOu can read about it) and sends the request.

    //2. if you have a good Data Wrap in in RESPONSE object.
    const ReponseWrapper = {
      url: url,
      status: 200,
      body: MediaStream(data),
      ok: true,
      redirected: false,
      json: function () {
        // this function takes the data and changes it to the REAL JSON.
      },
    };

    // 3. REJECT OR RESOLVE THE PROMISE according to condition.
    if (data) {
      // it means YOu got the data
      resolve(ReponseWrapper);
    } else {
      reject("Server TImed out");
    }
  });
}

myFetch("google.com");

// TODO: Advance (Mulicast, Eager ... )
// READ: https://github.com/thakurutkarsh22/jsPractice/blob/master/ObservablesVsPromises/index.js
