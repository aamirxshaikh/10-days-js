const inputField = document.querySelector("input[name=display]");

const appendValue = (value) => {
  inputField.value += value;
};

document.getElementById("btn0").addEventListener("click", function () {
  appendValue("0");
});

document.getElementById("btn1").addEventListener("click", function () {
  appendValue("1");
});

document.getElementById("btnClr").addEventListener("click", function () {
  inputField.value = "";
});

document.getElementById("btnEql").addEventListener("click", function () {
  let input = inputField.value;

  let operator = input.match(/\+|\-|\*|\//);

  operator = operator ? operator[0] : "Invalid operator";

  let [a, b] = input.split(/[\+\-\*\/]/);

  let result;

  switch (operator) {
    case "+":
      result = addBinary(a, b);
      break;
    case "-":
      result = subtractBinary(a, b);
      break;
    case "*":
      result = multiplyBinary(a, b);
      break;
    case "/":
      result = divideBinary(a, b);
      break;
    default:
      result = operator;
  }

  inputField.value = result;
});

document.getElementById("btnSum").addEventListener("click", function () {
  appendValue("+");
});

document.getElementById("btnSub").addEventListener("click", function () {
  appendValue("-");
});

document.getElementById("btnMul").addEventListener("click", function () {
  appendValue("*");
});

document.getElementById("btnDiv").addEventListener("click", function () {
  appendValue("/");
});

function addBinary(a, b) {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}

function subtractBinary(a, b) {
  return (parseInt(a, 2) - parseInt(b, 2)).toString(2);
}

function multiplyBinary(a, b) {
  return (parseInt(a, 2) * parseInt(b, 2)).toString(2);
}

function divideBinary(a, b) {
  return (parseInt(a, 2) / parseInt(b, 2)).toString(2);
}
