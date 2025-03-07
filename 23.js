const solution = (n, arr) => {
  let array2 = arr,
    res = 0,
    idx = 0;
  arr.sort((a, b) => a - b);
  while (true) {
    idx = Math.round((array2.length - 1) / 2);
    res = array2[idx];

    if (res === n) break;
    res > n
      ? (array2 = arr.slice(0, idx))
      : (array2 = arr.slice(idx, array2.length - 1));
  }
  return res;
};
