const url = "https://fakestoreapi.com/products";
async function fetchAndDisplayImage() {
  const response = await fetch(url);
  const data = await response.json();
  const imageContainer = document.getElementById("imageContainer");

  data.forEach((item) => {
    const img = document.createElement("img");
    img.classList.add("images");
    img.src = item.image;
    imageContainer.appendChild(img);
  });
}
function isAtBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}
async function handleScroll() {
  if (isAtBottom()) {
    await fetchAndDisplayImage();
  }
}
window.addEventListener("scroll", handleScroll);
fetchAndDisplayImage();
