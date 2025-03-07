function solution(n, k) {
  const arr = [...Array(n)].map((_, i) => i + 1);
  while (arr.length > 1) {
    const sp = arr.splice(0, k - 1);
    arr.push(...sp);
    arr.shift();
  }
  return arr[0];
}
const n = 8;
const k = 3;
console.log(solution(n, k));
