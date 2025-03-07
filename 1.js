const date = new Date();
console.log(new Date() > new Date("2022-12-24")); // Thu May 16 2019 17:16:13 GMT+0900 (한국 표준시)
console.log(NaN === NaN, [[]] === false, {} === {});
const asdf = [
  {
    asdf: "qer",
    sdw: 1,
    aswer: "2",
  },
];

console.log(
  asdf.map((e) => {
    return {
      f: e.asdf,
      a: e.sdw,
    };
  })
);
