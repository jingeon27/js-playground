const input = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
function solution(rc, operations) {
  let num8 = [],
    cnt = 0,
    cnt1 = 0,
    answer = [[]],
    arr = rc,
    lenth = arr[0].length,
    lenth2 = arr.length,
    arr1 = new Array(lenth - 1).fill(0),
    arr2 = new Array(lenth - 1).fill(0),
    arr3 = new Array(lenth2 - 1).fill(0),
    arr4 = new Array(lenth2 - 1).fill(0);
  for (let j = 0; j < operations.length; j++) {
    if (operations[j] === "ShiftRow") {
      cnt++;
      if (cnt === lenth2) {
        cnt = 0;
      }
      if (cnt1 > 0) {
        arr1 = [];
        arr2 = [];
        arr3 = [];
        arr4 = [];
        for (let i = 0; i < lenth2; i++) {
          arr3[i] = arr[i][0];
          arr4[i] = arr[i][lenth - 1];
        }
        for (let i = 0; i < lenth; i++) {
          arr1[i] = arr[0][i];
          arr2[i] = arr[lenth2 - 1][i];
        }
        for (let i = 0; i + cnt1 < lenth; i++) {
          arr[0][i + cnt1] = arr1[i];
          arr[lenth2 - 1][lenth - i - cnt1 - 1] = arr2[lenth - i - 1];
        }
        for (let i = 0; i + cnt1 < lenth2; i++) {
          arr[lenth2 - i - cnt1 - 1][0] = arr3[lenth2 - i - 1];
          arr[i + cnt1][lenth - 1] = arr4[i];
        }
        for (let i = 0; i < cnt1; i++) {
          arr[0][i] = arr3[cnt1 - i];
          arr[cnt1 - i][lenth - 1] = arr1[lenth - i - 1];
          arr[lenth2 - 1][lenth - i - 1] = arr4[lenth2 - cnt1 + i - 1];
          arr[lenth2 - i - 1][0] = arr2[cnt1 - i];
        }
        cnt1 = 0;
      }
    } else {
      for (let i = 0; i < cnt; i++) {
        num8 = arr[lenth2 - 1];
        arr.unshift(num8);
        arr.splice(lenth2, 1);
      }
      cnt = 0;
      cnt1++;
      if (lenth - 1 === cnt1 || lenth2 - 1 === cnt1) {
        for (let i = 0; i < lenth2; i++) {
          arr3[i] = arr[i][0];
          arr4[i] = arr[i][lenth - 1];
        }
        for (let i = 0; i < lenth; i++) {
          arr1[i] = arr[0][i];
          arr2[i] = arr[lenth2 - 1][i];
        }
        for (let i = 0; i + cnt1 < lenth; i++) {
          arr[0][i + cnt1] = arr1[i];
          arr[lenth2 - 1][lenth - i - cnt1 - 1] = arr2[lenth - i - 1];
        }
        for (let i = 0; i + cnt1 < lenth2; i++) {
          arr[lenth2 - i - cnt1 - 1][0] = arr3[lenth2 - i - 1];
          arr[i + cnt1][lenth - 1] = arr4[i];
        }
        for (let i = 0; i < cnt1; i++) {
          arr[0][i] = arr3[cnt1 - i];
          arr[cnt1 - i][lenth - 1] = arr1[lenth - i - 1];
          arr[lenth2 - 1][lenth - i - 1] = arr4[lenth2 - cnt1 + i - 1];
          arr[lenth2 - i - 1][0] = arr2[cnt1 - i];
        }
        cnt1 = 0;
      }
    }
  }
  for (let i = 0; i < cnt; i++) {
    num8 = arr[lenth2 - 1];
    arr.unshift(num8);
    arr.splice(lenth2, 1);
  }
  if (cnt1 > 0) {
    for (let i = 0; i < lenth2; i++) {
      arr3[i] = arr[i][0];
      arr4[i] = arr[i][lenth - 1];
    }
    for (let i = 0; i < lenth; i++) {
      arr1[i] = arr[0][i];
      arr2[i] = arr[lenth2 - 1][i];
    }
    for (let i = 0; i + cnt1 < lenth; i++) {
      arr[0][i + cnt1] = arr1[i];
      arr[lenth2 - 1][lenth - i - cnt1 - 1] = arr2[lenth - i - 1];
    }
    for (let i = 0; i + cnt1 < lenth2; i++) {
      arr[lenth2 - i - cnt1 - 1][0] = arr3[lenth2 - i - 1];
      arr[i + cnt1][lenth - 1] = arr4[i];
    }
    for (let i = 0; i < cnt1; i++) {
      arr[0][i] = arr3[cnt1 - i];
      arr[cnt1 - i][lenth - 1] = arr1[lenth - i - 1];
      arr[lenth2 - 1][lenth - i - 1] = arr4[lenth2 - cnt1 + i - 1];
      arr[lenth2 - i - 1][0] = arr2[cnt1 - i];
    }
    cnt1 = 0;
  }
  answer = arr;
  return answer;
}
console.log(
  solution(input, ["ShiftRow", "Rotate", "Rotate", "Rotate", "ShiftRow"])
);
