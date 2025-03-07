function maxLength(a, k) {
  // Write your code here
  let max = 0,
    cnt = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      cnt += a[j];
      if (cnt === k) {
        if (j - i + 1 > max) {
          max = j - i + 1;
          console.log(max, j);
        }
        break;
      }
      if (cnt > k) {
        if (j - i > max) {
          max = j - i;
          console.log(max);
        }
        break;
      }
    }
    cnt = 0;
    if (max > a.length) {
      break;
    }
  }
  return max;
}
console.log(maxLength([3, 1, 2, 1], 4));
