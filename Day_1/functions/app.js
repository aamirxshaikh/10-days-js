/*
 * Create the function factorial here
 */

var fact = 1;

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    for (let i = n; i > 0; i--) {
      fact = fact * i;
    }
  }

  return fact;

  // using recursion

  // return n * factorial(n - 1);
}

// using arrow function

// const factorial = n => (n === 0 ? 1 : n * factorial(n - 1))

// console.log(factorial(4));
