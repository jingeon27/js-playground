function solution(N, P1, P2, Connect) {
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const [x1, y1] = Connect[i];
      const [x2, y2] = Connect[j];

      // 교점 좌표 계산
      const intersectionX = Math.max(x1, x2);
      const intersectionY = Math.min(y1, y2);

      // 교점이 P1과 P2 범위 내에 있는지 확인
      if (
        intersectionX >= P1[i] &&
        intersectionX <= P2[i] &&
        intersectionY >= P1[j] &&
        intersectionY <= P2[j]
      ) {
        cnt++;
      }
    }
  }

  return cnt;
}

const N = 4;
const P1 = [1, 2, 3, 4];
const P2 = [4, 3, 2, 1];
const Connect = [
  [1, 4],
  [2, 3],
  [3, 2],
  [4, 1],
];

console.log(solution(N, P1, P2, Connect)); // 예상 결과: 6
