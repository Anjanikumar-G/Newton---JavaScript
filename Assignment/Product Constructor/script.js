// Your code here
function Product(name, price, manufacturer) {
  this.name = name;
  this.price = price;
  this.manufacturer = manufacturer;

  // Private property
  let tax = 0;

  // Private method
  const calculateTotalPrice = () => {
    return this.price + this.price * (tax / 100);
  };

  // Public methods
  this.getProductDetails = () => {
    return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`;
  };

  this.setTax = (amount) => {
    tax = amount;
  };

  this.getTax = () => {
    return tax;
  };

  this.getTotalPrice = () => {
    return calculateTotalPrice();
  };

  this.deleteMethod = (methodName) => {
    delete this[methodName];
  };
}

const arg1 = "Bulb";
const arg2 = "1000";
const arg3 = "Philips";
const arg4 = "5";

const myProduct = new Product(arg1, parseInt(arg2), arg3);
myProduct.setTax(parseInt(arg4));
