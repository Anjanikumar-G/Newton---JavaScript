const submitBtn = document.getElementById("submit-btn");
// write your code here
function submithh(e){
    e.preventDefault();
}

const firstDiv = document.querySelector(".first-div");
const secondDiv = document.querySelector(".second-div");
let output = document.querySelector(".output");

firstDiv.addEventListener("click", () => {
    output.innerText += "first div called";
});

secondDiv.addEventListener("click", (e) => {
    // write your code here
    e.stopPropagation();
    output.innerText += "second div called -- ";
});