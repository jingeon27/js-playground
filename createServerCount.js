function solution(players, m, k) {
  var answer = 0;
  const server = []; // [서버 수, 증설 시각] 쌍을 저장하는 배열
  for (let i = 0; i < 24; i++) {
    const serverLength = server.length;
    // k시간이 지나면 서버 제거
    if (serverLength > 0 && server[0][1] === i - k) {
      server.shift();
    }
    // 필요한 서버 수 계산
    const neededServer =
      players[i] - server.reduce((acc, [n]) => acc + n * m, m - 1);
    if (neededServer > 0) {
      const creationServer = Math.ceil(neededServer / m);
      server.push([creationServer, i]);
      answer += creationServer;
    }
  }
  return answer;
}
