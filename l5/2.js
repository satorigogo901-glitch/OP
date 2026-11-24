'use strict';

const array = () => {
  const values = [];
  const access = index => values[index];
  access.push = value => values.push(value);
  access.pop = () => values.pop();
  return access;
};

module.exports = { array };
