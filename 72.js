function f(condition, x) {
  if (condition) {
    x = 100;
  }
  return x;
}

console.log(f(true, 1));
