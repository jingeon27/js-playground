const func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4);

const bindFn = func.bind({ x: 1 });
bindFn(1, 2, 3, 4);
console.log();
const outer = function () {
  let a = 1;
  const inner = function () {
    return ++a;
  };
  return inner;
};
const outer2 = outer();
console.log(outer2());
console.log(outer2());
