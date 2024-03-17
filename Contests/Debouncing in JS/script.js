function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function performSearch(e) {
  document.getElementById(
    "output"
  ).textContent = `Search for: ${e.target.value}`;
}

const debouncedSearch = debounce(performSearch, 500);

document
  .getElementById("searchInput")
  .addEventListener("input", debouncedSearch);
