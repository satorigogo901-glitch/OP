const phonebook = {
  'Marcus Aurelius': '+380445554433',
  Anna: '+380000000002',
  Olena: '+380000000003',
};

function getPhone(name) {
  if (Object.hasOwn(phonebook, name)) {
    return phonebook[name];
  }
}

const findPhoneByName = (name) => getPhone(name);

module.exports = { phonebook, findPhoneByName };
