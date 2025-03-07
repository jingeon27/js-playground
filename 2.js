let result = [32, 55, 62, 3700, 250];
let res = [];
const reverse = () => {
  result.map((e) => {
    console.log(e);
    const num = reverseString(String(e));
    console.log(num);
    if (isPrime(num)) {
      res.push(parseInt(num));
    }
  });
};
function reverseString(str) {
  let newString = "";
  console.log(str);
  for (let i = str.length - 1; i >= 0; i--) {
    isFirst = false;
    newString += str[i];
  }
  return newString;
}
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
reverse();
console.log(res);
