function solution(info, n, m) {
  const length = info.length;
  const INF = Infinity;

  // DP 테이블 초기화 (3차원 배열)
  let dp = Array.from({ length: length + 1 }, () =>
    Array.from({ length: n }, () => Array(m).fill(INF))
  );

  dp[0][0][0] = 0; // 초기 상태

  for (let i = 0; i < length; i++) {
    const [aTrace, bTrace] = info[i];

    for (let a = 0; a < n; a++) {
      for (let b = 0; b < m; b++) {
        if (dp[i][a][b] === INF) continue;

        // A 도둑이 i번 물건을 훔치는 경우
        let newA = a + aTrace,
          newB = b;
        if (newA < n) {
          dp[i + 1][newA][newB] = Math.min(
            dp[i + 1][newA][newB],
            dp[i][a][b] + aTrace
          );
        }

        // B 도둑이 i번 물건을 훔치는 경우
        (newA = a), (newB = b + bTrace);
        if (newB < m) {
          dp[i + 1][newA][newB] = Math.min(dp[i + 1][newA][newB], dp[i][a][b]);
        }
      }
    }
  }

  // 가능한 최소 A 도둑의 흔적 개수 찾기
  let answer = INF;
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < m; b++) {
      answer = Math.min(answer, dp[length][a][b]);
    }
  }

  return answer === INF ? -1 : answer;
}
