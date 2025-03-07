let req = [45, 73, 66, 87, 92, 67, 75, 79, 75, 80];
const q = 10;
const asdf = () => {
  let sum = 0;
  req.map((e) => {
    sum += e;
  });
  const a = Math.round(sum / 10);
  let w = a - req[0];
  let index = [];
  for (let i = 1; i < q; i++) {
    let b = a - req[i];
    if (b < 0) {
      b = b * -1;
    }
    if (b < w) {
      w = b;
      index = [i];
    } else if (b === w) {
      index.push(i);
    }
  }
  let res = 0;
  let l = req[index[0]];
  index.map((e) => {
    if (l < req[e]) {
      l = req[e];
      res = e;
    }
  });
  console.log(a, res + 1);
};
asdf();
