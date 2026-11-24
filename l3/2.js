const { random } = require('./1');

function generateKey(length, characters) {
  const alphabet = Array.from(characters);
  if (length > 0 && alphabet.length === 0) {
    throw new RangeError('The character set must not be empty');
  }

  let key = '';
  for (let index = 0; index < length; index++) {
    key += alphabet[random(alphabet.length - 1)];
  }
  return key;
}

module.exports = { generateKey };
