document.querySelector(".pccontainer").onclick = (e) => {
  if (e.target.classList.contains("delete")) {
    let id = e.target.getAttribute("productid");
    Storage.removeproduct(id);
    Ui.removeproduct(e.target);
    bag.setAttribute("items", Storage.getproducts().length);
  }
};
