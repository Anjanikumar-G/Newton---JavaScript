const myButton = document.getElementById("myButton");
const onButtonClick = document.getElementById("onButtonClick");

let clickCount = 0;

function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

function updateClickCount() {
  clickCount++;
  onButtonClick.textContent = `You clicked me ${clickCount} times`;
}

myButton.addEventListener("click", debounce(updateClickCount, 1000));
