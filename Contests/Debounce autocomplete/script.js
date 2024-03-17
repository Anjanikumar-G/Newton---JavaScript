var nameList = [
  "Account",
  "Accuracy",
  "Brave",
  "Bold",
  "Bachelor",
  "Absolute",
  "Absorb",
  "Academy",
  "Accent",
  "Apple",
  "Amusement",
  "Ambulance",
  "Apricot",
  "Avocado",
];

const searchHandler = () => {
  let suggestionsListContainer = document.getElementById("searchOutput");
  let searchTerm = searchInput.value.toLowerCase();

  let filteredSearch = nameList.filter((name) =>
    name.toLowerCase().startsWith(searchTerm)
  );
  suggestionsListContainer.innerHTML = "";
  if (filteredSearch.length === nameList.length) return;
  filteredSearch.forEach(function (suggestion) {
    let li = document.createElement("li");
    li.textContent = suggestion;
    suggestionsListContainer.appendChild(li);
  });
};

const debounce = (callbackFn, wait) => {
  // Write your code here
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFn.apply(context, args);
    }, wait);
  };
};
const debounceSearchHandler = debounce(searchHandler, 500);
document
  .getElementById("searchInput")
  .addEventListener("keyup", debounceSearchHandler);
