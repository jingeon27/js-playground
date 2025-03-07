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
  const solution = [];
  const gcdMap = new Map();
  const lcmMap = new Map();

  const getGCD = (num1, num2) => {
    const key = `${num1}_${num2}`;
    if (gcdMap.has(key)) {
      return gcdMap.get(key);
    }

    let a = num1;
    let b = num2;
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    const gcd = a;
    gcdMap.set(key, gcd);
    return gcd;
  };

  const getLCM = (num1, num2) => {
    const key = `${num1}_${num2}`;
    let divisors = 0;
    if (lcmMap.has(key)) {
      return lcmMap.get(key);
    }

    const gcd = getGCD(num1, num2);
    const lcm = (num1 * num2) / gcd;
    for (let i = 1; i <= Math.sqrt(lcm); i++) {
      if (lcm % i === 0) {
        divisors++;
        if (lcm / i != i) divisors++;
      }
    }
    lcmMap.set(key, divisors);
    return divisors;
  };
  const explanation = weight.map((e) => [
    ...e.slice(0, 2),
    getGCD(list[e[0]], list[e[1]]) * getLCM(list[e[0]], list[e[1]]),
  ]);
  explanation.sort((a, b) => b[2] - a[2]);

  for (const [item1, item2, value] of explanation) {
    if (
      solution.some((e) => e.includes(item1)) &&
      solution.some((e) => e.includes(item2))
    ) {
      let isBool = false;
      for (const s1 of solution) {
        const idx1 = s1.indexOf(item1);
        if (idx1 !== -1) {
          for (const s2 of solution) {
            const idx2 = s2.indexOf(item2);
            if (idx2 !== -1) {
              if (s2[idx2 ? 0 : 1] === s1[idx1 ? 0 : 1]) {
                isBool = true;
                break;
              }
            }
          }
        }
        if (isBool) {
          break;
        }
      }
      if (!isBool) {
        solution.push([item1, item2, value]);
      }
    } else {
      solution.push([item1, item2, value]);
    }

    if (solution.length === answerLength) {
      break;
    }
  }
  console.log(solution);
  const totalWeight = solution.reduce(
    (acc, [_, __, weight]) => acc + weight,
    0
  );
  return totalWeight;
};

const result = solve(items);
console.log(result);
