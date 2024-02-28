let sayHiMixin = {
  // write your code here
  __proto__: sayMixin,

  say() {
    return super.say(`${this.name}`);
  },
};

function setPrototype() {
  // some code here
  return Object.assign(User.prototype, sayHiMixin);
}
