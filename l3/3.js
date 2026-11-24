function ipToNumber(ip = '127.0.0.1') {
  const parts = ip.split('.');
  return parts.reduce((sum, part, i) => {
    const shift = (3 - i) * 8;
    return sum + (Number(part) << shift);
  }, 0);
}

module.exports = { ipToNumber };
