const soloution = (n, arr, str) => {
  let soloution = 0;
  let now = 0;
  for (const char in str) {
    switch (str.at[char]) {
      case "B":
        now = arr[0] - 1 - now;
        soloution + now;
        break;
      case "S":
        break;
      case "G":
        break;
      case "P":
        break;
      case "D":
        break;
    }
  }
};
