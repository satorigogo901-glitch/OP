'use strict';

const sum = (...args) => args.reduce((total, value) => total + value, 0);

module.exports = { sum };
