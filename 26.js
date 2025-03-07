let a = [...Array(21).keys()];
for (let i = 0; i < 10; i++) {
  let input = readline()
    .split(" ")
    .map((x) => parseInt(x));
  let s = input[0],
    e = input[1];
  for (let j = 0; j < Math.floor((e - s + 1) / 2); j++) {
    [a[s + j], a[e - j]] = [a[e - j], a[s + j]];
  }
}
a.shift();
console.log(a.join(" "));
