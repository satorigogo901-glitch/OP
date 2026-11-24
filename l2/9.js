const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Anna', phone: '+380000000002' },
  { name: 'Olena', phone: '+380000000003' },
];
const findPhoneByName = (name) => {
  for (const item of phonebook) {
    if (item.name === name) return item.phone;
  }
};
module.exports = { phonebook, findPhoneByName };
