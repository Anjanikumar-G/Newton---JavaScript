// javascript code goes here
const timerInput = document.querySelector(".timer");
const startButton = document.querySelector(".start-time");
const progressBar = document.querySelector(".progress");

startButton.addEventListener("click", () => {
  const timeInSeconds = parseFloat(timerInput.value);
  const maxWidth = 200;
  const intervalTime = 1000;
  if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
    let width = 0;
    const increment = maxWidth / timeInSeconds;
    progressBar.style.width = "0";
    const interval = setInterval(() => {
      width += increment;
      progressBar.style.width = width + "px";
      if (width >= maxWidth) {
        clearInterval(interval);
      }
    }, intervalTime);
  }
});
