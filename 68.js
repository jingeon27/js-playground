function numberToKorean(num) {
  const units = ["", "십", "백", "천"];
  const bigUnits = ["", "만"];

  const digits = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];

  const numString = num.toString();

  let result = "";
  let chunkIndex = 0;
  let chunkString = "";

  for (let i = numString.length - 1; i >= 0; i--) {
    const digit = parseInt(numString[i]);

    chunkString = digits[digit] + units[i % 4] + chunkString;
    if (i % 4 === 0 && chunkString !== "") {
      result = chunkString + bigUnits[chunkIndex] + result;
      chunkString = "";
      chunkIndex++;
    }
  }

  return result || "영";
}

const numberInKorean = numberToKorean(111111);
console.log(numberInKorean); // "일백만"
