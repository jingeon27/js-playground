let a = "";
function add(x) {
  a += x;
  if (x === undefined) {
    return a;
  }
  return (d) => {
    if (d === undefined) {
      return a;
    }
    return add(d);
  };
}
let x = [1, 2, 3];
const asd = add("안녕하세요")("반가워요")("안녕하세요")();
console.log(asd);
