'use strict';

const introspect = (iface) => Object.entries(iface)
  .filter(([, value]) => typeof value === 'function')
  .map(([name, method]) => [name, method.length]);

module.exports = { introspect };
