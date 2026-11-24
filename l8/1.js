'use strict';

const iterate = (object, callback) => {
  Object.keys(object).forEach((key) => callback(key, object[key], object));
};

module.exports = { iterate };
