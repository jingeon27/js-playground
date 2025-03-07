const Arr = (a, b) => {
  const num = a > b ? a : b;
  let cnt = 0;
  for (let i = 0; i < num; i++) {
    if (a % i === 0 && b % i === 0) {
      cnt++;
    }
  }
  console.log(Math.pow(2, cnt));
};
Arr(18, 24);
