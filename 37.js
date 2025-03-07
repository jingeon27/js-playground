function longestChain(words) {
  // Write your code here
  let max = 0,
    newValue = 0;
  const arr = [...words];
  const combinations = (array, v) => {
    const result = [];

    for (let k = 0; k < array.length; k++) {
      if (array[k].includes(array[i])) {
        array.splice(k, 1);
        k--;
      }
    }
    const nextIdx = array.findIndex((e) => e.length > v.length);
    if (nextIdx === -1) {
      return array.map((e) => [e]);
    } else {
      array.forEach((now, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combinations = combinations(rest, array[nextIdx]);
        const attached = combinations.map((v) => [now, ...v]);
        result.push(...attached);
      });
    }
    return result;
  };
  for (let i = 0; i < arr.length; i++) {
    let a = arr.slice(i + 1);
    if (max >= arr[i].length - arr[arr.length - 1].length) {
      break;
    }
    for (let k = 0; k < a.length; k++) {
      if (a[k].includes(arr[i])) {
        a.splice(k, 1);
        k--;
      }
    }
    newValue = Math.max(combinations(a, arr[i]).map((e) => e.length));
    if (newValue > max) {
      max = newValue;
    }
    cnt = 0;
  }
  return max;
}
console.log(longestChain(["a", "b", "ba", "bca", "bda", "bdca"]));
