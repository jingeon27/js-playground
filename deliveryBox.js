function solution(n, w, num) {
  let answer = 0;

  if (w === 1) return n - num + 1;

  num -= 1;
  n -= 1;

  let x = Math.floor(num / w);
  let y = num % w;
  if (x % 2 === 1) {
    y = w - y - 1;
  }

  let ex = Math.floor(n / w);
  let ey = n % w;

  answer += ex - x;

  if (ex % 2 === 1) {
    ey = w - ey - 1;
    answer += ey <= y && y < w;
  } else {
    answer += 0 <= y && y <= ey;
  }

  return answer;
}
