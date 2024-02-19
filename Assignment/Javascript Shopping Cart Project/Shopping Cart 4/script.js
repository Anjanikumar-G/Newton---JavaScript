
class Storage{
    static getproducts(){
        const products = localStorage.getItem('products');
        return products ? JSON.parse(products) : [];
    }

    static addtolocalstorage(product) {
        const products = Storage.getproducts();
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

    static removeproduct(productId) {
        const products = Storage.getproducts();
        const updatedProducts = products.filter(product => product.id !== productId);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
}