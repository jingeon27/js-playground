function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr;
}
console.log(solution(1000));
  for (let idx = 0; idx < arr.length; idx++) {
    if (cnt / leng > arr[idx]) {
      arr.splice(idx, 0, cnt / leng);
      answer.splice(idx, 0, i);
      break;
    }
  }
  if (!answer.includes(i)) {
    answer.push(i);
    arr.push(cnt / leng);
  }