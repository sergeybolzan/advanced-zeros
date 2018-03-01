module.exports = function getZerosresult(number, base) {
  let result = number;
  let basis = base;
  let a, b, c = 0;
  for (let i = 2; i <= base; i++) {
    a = 0;
    if (basis % i == 0) {
      b = 0;
      while (basis % i == 0) {
        basis = Math.floor(basis / i);
        b++;
      }
      c = number;
      while (c / i > 0) {
        a = a + Math.floor(c / i);
        c = Math.floor(c / i);
      }
      result = Math.floor(Math.min(result, a / b));
    }
  }
  return result;
}