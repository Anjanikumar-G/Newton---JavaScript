const button = document.getElementById("myButton");
const output = document.getElementById("onButtonClick");
let clickCount = 0;
let canClick = true;

function throttleClick() {
  if (canClick) {
    canClick = false;
    clickCount++;
    output.textContent = `You clicked me ${clickCount} times`;
    setTimeout(() => {
      canClick = true;
    }, 1000);
  }
}

button.addEventListener("click", throttleClick);
