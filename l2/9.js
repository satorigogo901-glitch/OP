'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Anna', phone: '+380000000002' },
  { name: 'Olena', phone: '+380000000003' },
];

const findPhoneByName = name => {
  for (const entry of phonebook) {
    if (entry.name === name) return entry.phone;
  }
  return undefined;
};

module.exports = { phonebook, findPhoneByName };
