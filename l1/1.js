function inc(n) {
  return n + 1; }
if (require.main === module) {
  const a = 5;
  const b = inc(a);
  console.dir({ a, b });
}
module.exports = { inc };
