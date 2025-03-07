function solution(N, stages) {
  var answer = new Array(N).fill(0),
    cnt,
    leng,
    arr = new Array(N).fill(0);
  for (let i = 1; i <= N; i++) {
    cnt = 0;
    leng = stages.length;
    stages.map((e, idx) => {
      if (e === i) {
        stages.splice(idx, 1);
        cnt++;
      }
    });

    arr[i - 1] = { a: cnt / leng, b: i };
  }
  arr = arr.sort((a, b) => b.a - a.a);
  arr.map((e, i) => (answer[i] = e.b));
  return answer;
}
