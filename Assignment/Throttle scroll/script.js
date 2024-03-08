let count = 1;
let lastScrollTime = 0;

const container = document.getElementById("scroll-container");

const addNewChildToScrollContainer = () => {
  const newElement = document.createElement("div");
  newElement.innerHTML = count + 3;
  newElement.classList.add("box");
  container.appendChild(newElement);
};

const scrollHandler = () => {
  const currentTime = new Date().getTime();

  if (currentTime - lastScrollTime >= 200) {
    const firedCountEl = document.getElementById("event-fired");
    firedCountEl.innerHTML = "Event fired: " + count + " times";
    addNewChildToScrollContainer();
    count++;
    lastScrollTime = currentTime;
  }
};

container.addEventListener("scroll", scrollHandler);
