function generateKey(len, characters) {
  const chars = [...characters];
  if (len > 0 && chars.length === 0) {
    throw new RangeError('Додай хоча б один символ');
  }

  let key = '';
  for (let i = 0; i < len; i++) {
    const pos = Math.floor(Math.random() * chars.length);
    key += chars[pos];
  }
  return key;
}

module.exports = { generateKey };
