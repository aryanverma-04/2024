
let calculator = () => {
  let num1 = Number.parseInt(prompt("Enter the value of first number: "));
  let num2 = Number.parseInt(prompt("Enter the value of second number: "));

  const dispfunc = (n) => {
    document.body.firstElementChild.innerHTML += `<br>The value is ${n}`;
  };
  const myfunc = (num1, num2) => {
    document.body.firstElementChild.innerHTML += `<br>The sum is ${
      num1 + num2
    }`;
  };

  let xShow = confirm("Do you want to display the value of first number?");
  if (xShow) {
    dispfunc(num1);
  }
  let yShow = confirm("Do you want to display the value of first number?");
  if (yShow) {
    dispfunc(num2);
  }
  let sum = confirm("Do you want to display the Sum of both number?");
  if (sum) {
    myfunc(num1, num2);
  }
};

setTimeout(calculator, 10000);
