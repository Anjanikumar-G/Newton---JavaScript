document.addEventListener("DOMContentLoaded", function () {
  Ui.displayproductsLS();
  bag.setAttribute("items", Storage.getproducts().length);
});
