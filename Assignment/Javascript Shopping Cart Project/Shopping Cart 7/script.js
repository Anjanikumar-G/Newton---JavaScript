document.querySelectorAll(".addtocart").forEach((e) => {
  e.onclick = (evt) => {
    let id = evt.target.getAttribute("productid");
    let price = evt.target.previousElementSibling.innerHTML;
    let image =
      evt.target.parentElement.previousElementSibling.previousElementSibling.getAttribute(
        "src"
      );
    let title = evt.target.parentElement.previousElementSibling.innerHTML;
    let product = new Product(id, title, price, image);
    let products = Storage.getproducts();
    let ids = Object.values(products).map((r) => r.id);
    if (ids.includes(id)) return;
    else {
      Storage.addtolocalstorage(product);
      Ui.displayproducts(product);
      bag.setAttribute("items", Storage.getproducts().length);
    }
  };
});
