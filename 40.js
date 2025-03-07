const edges = [
  [1, 2],
  [3, 4],
  [5, 4],
];
let now = 1;
const idx = edges.findIndex((a) => a.includes(now));
now = edges[idx].splice(now, 1);
console.log(now);
