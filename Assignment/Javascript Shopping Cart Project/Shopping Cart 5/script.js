class Ui {
    static displayproducts(product) {
        const pcContainer = document.querySelector('.pccontainer');
        const productHtml = `
        <div class="cartproduct">
            <div class="pnp">
                <div class="img">
                    <img width="90px" src="${product.image}" alt="">
                </div>
                <div class="nameandprice">
                    <p>${product.title}</p>
                    <p>${product.price}</p>
                </div>
            </div>
            <button class="delete" productid="${product.id}">X</button>
        </div>`;
        pcContainer.insertAdjacentHTML('beforeend', productHtml);
    }

    static displayproductsLS() {
        const products = Storage.getproducts();
        const pcContainer = document.querySelector('.pccontainer');
        pcContainer.innerHTML = ''; 
        products.forEach(product => {
            this.displayproducts(product);
        });
    }
}