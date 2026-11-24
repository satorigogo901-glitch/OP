const square = (x) => x * x;
const cube = (x) => x ** 3;
const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const results = [];
  for (let x = 0; x <= 9; x++) {
    const squared = square(x);
    const cubed = cube(x);
    results.push(average(squared, cubed));
  }
  return results;
};

module.exports = { square, cube, average, calculate };
