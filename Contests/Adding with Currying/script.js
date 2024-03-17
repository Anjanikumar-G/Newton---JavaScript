function add(a, b, c, d) {
  return a + b + c + d;
}

function curry(fun) {
  return function (num1) {
    return function (num2) {
      return function (num3) {
        return function (num4) {
          return fun(num1, num2, num3, num4);
        };
      };
    };
  };
}

document.getElementById("calculate").addEventListener("click", function () {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const num3 = Number(document.getElementById("num3").value);
  const num4 = Number(document.getElementById("num4").value);

  const curried = curry(add);
  const result = curried(num1)(num2)(num3)(num4);

  document.getElementById("result").textContent = `Result: ${result}`;
});
