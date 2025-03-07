function solution(n, m) {
  let result = 0;
  const Sorted = m.sort((a, b) => a - b);
  for (let i = 0; i < Sorted.length; i++) {
    if (n / 2 >= Sorted[i]) {
      for (let j = Sorted.length - 1; j >= 0; j--) {
        if (n >= Sorted[i] + Sorted[j]) {
          Sorted.splice(j, 1);
          result++;
          break;
        }
      }
    } else {
      result++;
    }
  }
  return result;
}
console.log(solution(140, [90, 50, 70, 100, 60]));
