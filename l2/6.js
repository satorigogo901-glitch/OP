'use strict';

const square = x => x ** 2;
const cube = x => x ** 3;
const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const results = [];
  for (let x = 0; x <= 9; x++) {
    results.push(average(square(x), cube(x)));
  }
  return results;
};

module.exports = { square, cube, average, calculate };
