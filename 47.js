const items = {
  list: { A: 6, B: 12, C: 4, D: 8, E: 9, F: 10, G: 15 },
  weight: [
    ["A", "B", 0],
    ["A", "C", 0],
    ["A", "D", 0],
    ["B", "D", 0],
    ["B", "G", 0],
    ["C", "E", 0],
    ["C", "F", 0],
    ["D", "E", 0],
    ["E", "F", 0],
    ["E", "G", 0],
    ["F", "G", 0],
  ],
  line: ["A", "B", "C", "D", "E", "F", "G"],
};

const solve = ({ list, weight, line }) => {
  const answerLength = line.length - 1;
  let solution = [];
  const explanation = weight.map((e) => [
    ...e.slice(0, 2),
    getGCD(list[e[0]], list[e[1]]) * getLCMDIVISORS(list[e[0]], list[e[1]]),
  ]);
  explanation.sort((a, b) => b[2] - a[2]);
  for (let i = 0; solution.length < answerLength; i++) {
    if (
      solution.find((e) => e.includes(explanation[i][0])) &&
      solution.find((e) => e.includes(explanation[i][1]))
    ) {
      let isBool = false;
      for (let k = 0; k < solution.length; k++) {
        const idx = solution[k].indexOf(explanation[i][0]);
        if (idx !== -1) {
          for (let j = 0; j < solution.length; j++) {
            const index = solution[j].indexOf(explanation[i][1]);
            if (index !== -1) {
              if (solution[j][Number(!index)] === solution[k][Number(!idx)]) {
                isBool = true;
                break;
              }
            }
          }
        }
      }
      if (!isBool) solution.push(explanation[i]);
    } else {
      solution.push(explanation[i]);
    }
  }
  return solution.reduce((a, b) => parseInt(a) + b[2], 0);
};
console.log(solve(items));
function getGCD(num1, num2) {
  let gcd = 1;
  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  return gcd;
}

function getLCMDIVISORS(num1, num2) {
  let lcm = 1;
  let divisors = 0;
  while (true) {
    if (lcm % num1 == 0 && lcm % num2 == 0) break;
    lcm++;
  }
  for (let i = 1; i <= Math.sqrt(lcm); i++) {
    if (lcm % i === 0) {
      divisors++;
      if (lcm / i != i) divisors++;
    }
  }
  return divisors;
}
