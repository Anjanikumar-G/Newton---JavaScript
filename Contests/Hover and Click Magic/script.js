// javascript code goes here
const circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = "green";
  });

  circle.addEventListener("mouseover", () => {
    circle.style.backgroundColor = "transparent";
  });

  circle.addEventListener("mouseout", () => {
    circle.style.backgroundColor = "blue";
  });
});
