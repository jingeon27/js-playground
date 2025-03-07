function solution(B, W) {
  var answer = 0;
  const arr = new Array(19).fill(new Array(19).fill(0));
  for (const temp of B) {
    arr[temp[0] - 1][temp[1] - 1] = 1;
  }
  for (const tmp of W) {
    arr[tmp[0] - 1][tmp[1] - 1] = 2;
  }
  console.log(arr);
  function checkDirection(X, Y) {
    for (let x = 0; x < 19; x++) {
      for (let y = 0; y < 19; y++) {
        if (arr[x][y] === 2) {
          let cnt = 1;

          let i, j;
          for (
            i = x - X, j = y - Y;
            i >= 0 && j >= 0 && arr[i][j] === 2;
            i -= X, j -= Y
          ) {
            cnt++;
          }
          for (
            i = x + X, j = y + Y;
            i < 19 && j < 19 && arr[i][j] === 2;
            i += X, j += Y
          ) {
            cnt++;
          }
          if (cnt === 5) {
            answer = -1;
            return;
          }
        }
        if (arr[x][y] === 1) {
          let cnt = 1;
          let i, j;
          for (
            i = x - X, j = y - Y;
            i >= 0 && j >= 0 && arr[i][j] === 1;
            i -= X, j -= Y
          ) {
            cnt++;
          }
          for (
            i = x + X, j = y + Y;
            i < 19 && j < 19 && arr[i][j] === 1;
            i += X, j += Y
          ) {
            cnt++;
          }
          if (cnt === 5) {
            answer = 1;
            return;
          }
        }
      }
    }
  }
  checkDirection(0, 1);
  checkDirection(1, 0);
  checkDirection(1, 1);
  checkDirection(1, -1);
  return answer;
}
solution([
  [10, 10],
  [11, 10],
  [9, 11],
  [11, 11],
  [10, 8],
  [12, 13],
],);