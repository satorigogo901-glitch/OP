function generateKey(l, ch) {
  const s = Array.from(ch);
  if (l > 0 && s.length === 0) {
    throw new RangeError('Додай хоча б один символ');
  }
  let key = '';
  for (let i = 0; i < l; i++) {
    const index = Math.floor(Math.random() * s.length);
    key += s[index];
  }
  return key;
}
module.exports = {generateKey};
