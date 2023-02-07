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

console.log(addBinary(11011, 1000));
console.log(subtractBinary(11011, 1000));
console.log(multiplyBinary(11011, 1000));
console.log(divideBinary(101110, 101));
