'use strict';

const ages = persons => {
  const result = {};
  for (const name in persons) {
    if (Object.hasOwn(persons, name)) {
      const { born, died } = persons[name];
      Object.defineProperty(result, name, {
        value: died - born,
        enumerable: true,
        writable: true,
        configurable: true,
      });
    }
  }
  return result;
};

module.exports = { ages };
