function sum(...args) {
  return args.reduce(function (total, value) {
    return total + value;
  }, 0);
}

module.exports = { sum };
