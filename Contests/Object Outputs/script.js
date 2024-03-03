// javascript code goes here
const userInput = document.getElementById("input-name");
function greetUser() {
  const userName = userInput.value || " ";
  const gretting = `Hello, ${userName}!`;
  displayGreeting(gretting);
}
function displayGreeting(message) {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = message;
}
const greetButton = document.getElementById("btn-greet");
greetButton.addEventListener("click", greetUser);
