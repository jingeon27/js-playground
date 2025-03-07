function findRange(num) {
  // Write your code here
  let max = [...num.toString()];
  let min = [...num.toString()];
  const ChangeMaxValue = (v, maxValue) => {
    while (max.includes(v)) {
      max[max.indexOf(v)] = maxValue;
    }
  };
  const ChangeMinValue = (v, minValue) => {
    while (min.includes(v)) {
      min[min.indexOf(v)] = minValue;
    }
  };
  const MaxValue = min.find((e) => e !== "9");
  ChangeMaxValue(MaxValue, "9");
  if (min[0] === "1") {
    const MinValue = min.find((e, i) => {
      if (i !== 0) {
        return e !== "0";
      }
    });
    ChangeMinValue(MinValue, "0");
  } else {
    ChangeMinValue(min[0], "1");
  }
  console.log(parseInt(max.join("")), parseInt(min.join("")));
  return parseInt(max.join("")) - parseInt(min.join(""));
}
console.log(findRange(112233445));
