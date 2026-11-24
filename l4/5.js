function sum(...args) {
  return args.reduce((res, x) => res + x, 0);
}

module.exports = { sum };
