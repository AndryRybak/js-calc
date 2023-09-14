const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const splitBtn = document.getElementById("split");
const submitBtn = document.getElementById("submit");

plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
multiplyBtn.onclick = function () {
  action = "*";
};
splitBtn.onclick = function () {
  action = "/";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}
function computeNumbersWithActions(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  if (actionSymbol === "+") {
    return num1 + num2;
  } else if (actionSymbol === "-") {
    return num1 - num2;
  } else if (actionSymbol === "*") {
    return num1 * num2;
  } else if (actionSymbol === "/") {
    if (num2 === 0) {
      // Handle division by zero
      return "Division by zero";
    }
    return num1 / num2;
  }
}

submitBtn.onclick = function () {
  if (!action) {
    // Handle the case where no operation is selected
    resultElement.style.color = "red";
    resultElement.textContent = "Please select an operation";
    return;
  }

  const result = computeNumbersWithActions(input1, input2, action);
  printResult(result);
};
