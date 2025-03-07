const Sort = (arr, k) => {
  let cnt = [arr[0] + arr[1] + arr[2]];
  console.log(1);
  for (let i = 1; i < arr.length - 2; i++) {
    for (let j = i + 1; i < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        cnt.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  console.log(cnt);
  const rr = [...new Set(cnt)];
  console.log(rr);
  const result = rr.sort((a, b) => b - a);
  return result[k - 1];
};
console.log(Sort([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3));
