"use strict";
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      console.log(this);
      return func.apply(this, args);
    } else {
      return function (...args2) {
        console.log(this);
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}
function foo(...args) {
  return args;
}
console.log(foo(1, 2, 3));
let curriedSum = curry(sum);

console.log(curriedSum(4, 2, 3)); // 6, 보통때 처럼 단일 callable 형식으로 호출하기
// console.log(curriedSum(3)(2, 3)); // 6, 첫 번째 인수를 커링하기
// console.log(curriedSum(5)(2)(3));
console.log(this);
var x = this;
console.log(x);
