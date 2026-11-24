const rangeOdd = (start, end) => {
  const numbers = [];
  for (let number = start; number <= end; number++) {
    if (number % 2 !== 0) {
      numbers.push(number);
    }
  }
  return numbers;
};

module.exports = { rangeOdd };
