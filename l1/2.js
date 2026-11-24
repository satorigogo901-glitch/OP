function inc(num) {
  num.n++;
}

if (require.main === module) {
  const obj = { n: 5 };
  inc(obj);
  console.dir(obj);
}

module.exports = { inc };
