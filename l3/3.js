'use strict';

const ipToNumber = (ip = '127.0.0.1') => {
  const octets = ip.split('.').map(Number);
  return octets.reduce((address, octet) => (address << 8) | octet, 0);
};

module.exports = { ipToNumber };
