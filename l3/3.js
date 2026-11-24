function ipToNumber(ip = '127.0.0.1') {
  const octets = ip.split('.').map(Number);
  return octets.reduce(function (address, octet) {
    return (address << 8) | octet;
  }, 0);
}

module.exports = { ipToNumber };
