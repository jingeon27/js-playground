function count(stable, dist) {
  let cnt = 1;
  horse = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - horse >= dist) {
      cnt++;
      horse = stable[i];
    }
  }
  return cnt;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1,
    rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
