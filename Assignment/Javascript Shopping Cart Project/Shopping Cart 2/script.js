
function toggleCart() {
    const cartUI = document.querySelector('.cartui');
    cartUI.classList.toggle('cartopened');
}

// Add onclick event handler to show the cart when cart icon is clicked
const cartIcon = document.querySelector('.carticon');
cartIcon.onclick = function() {
    toggleCart();
};

// Add onclick event handler to hide the cart when close button is clicked
const closeCartButton = document.querySelector('.closecart');
closeCartButton.onclick = function() {
    toggleCart();
};