function solution(jobs) {
  let result = 0;
  let answer = 0;
  let arr = jobs.map((e) => [...e, false, 0]);
  let index = 0;
  let now = 1001;
  let tmp = 1001;
  let asdf = 0;
  arr.map(() => {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i][2]) {
        if (arr[i][0] <= now && tmp > arr[i][1]) {
          index = i;
          now = arr[i][0];
          tmp = arr[i][1];
        }
        if (arr[i][0] < answer) {
          arr[i][3] += asdf;
        }
      }
    }
    if (now > answer) {
      answer = now;
    }
    answer += arr[index][1];
    arr[index][2] = true;
    asdf = tmp;
    tmp = 1001;
    now = 1001;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] <= answer && tmp > arr[i][1]) {
      index = i;
    }
    if (!arr[i][2]) {
      arr[i][3] += asdf;
    }
    arr[i][3] += arr[i][1];
    arr[i][3] -= arr[i][0];

    result += arr[i][3];
  }
  return parseInt(result / arr.length);
}
