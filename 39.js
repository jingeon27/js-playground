const inputList = ["a", "b", "ba", "bca", "bda", "bdca"];

inputList.forEach((str) => {
  const includedChars = [];

  inputList.forEach((item) => {
    if (item.includes(str)) {
      includedChars.push(item);
    }
  });

  console.log(`[${includedChars.join(", ")}]: ${str}`);
});
