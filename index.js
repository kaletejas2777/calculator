const result = document.querySelector("#result");
var input1 = document.querySelector("#num1");
var input2 = document.querySelector("#num2");

document.querySelector("#add").addEventListener("click", (event) => {
  result.value = +input1.value + +input2.value;
});

document.querySelector("#sub").addEventListener("click", (event) => {
    result.value = input1.value - input2.value;
  });
document.querySelector("#mul").addEventListener("click", (event) => {
  result.value = input1.value * input2.value;
});

document.querySelector("#div").addEventListener("click", (event) => {
  result.value = input1.value / input2.value;
});