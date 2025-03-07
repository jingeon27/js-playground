function solution(arr) {
  let cnt = 0;
  let result = 0;
  arr.map((e) => {
    if (e) {
      cnt++;
      result += cnt;
    } else {
      cnt = 0;
    }
  });
  return result;
}
console.log(solution([0, 1, 1, 1, 1, 1, 1, 0]));
