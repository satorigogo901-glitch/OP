'use strict';

const { phonebook: entries } = require('./9');

const phonebook = Object.assign(
  Object.create(null),
  Object.fromEntries(entries.map(({ name, phone }) => [name, phone])),
);

const findPhoneByName = n => phonebook[n];

module.exports = { phonebook, findPhoneByName };
