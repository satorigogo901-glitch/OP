'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  Anna: '+380000000002',
  Olena: '+380000000003',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
