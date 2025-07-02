const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers.reduce((total, currNumber) => total + currNumber, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((total, currNumber) => total * currNumber, 1);
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (number) {
  result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
