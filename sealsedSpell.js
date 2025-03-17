function solution(n, bans) {
  let answerN = n;

  const baseBans = bans.map(convertStringToBase26).sort((a, b) => a - b);

  for (const ban of baseBans) {
    if (ban <= answerN) answerN++;
    else break;
  }

  let length = 1;
  let count = 26;

  while (answerN > count) {
    answerN -= count;
    length++;
    count *= 26;
  }

  answerN--;
  let answer = "";

  for (let i = 0; i < length; i++) {
    answer = String.fromCharCode(97 + (answerN % 26)) + answer;
    answerN = Math.floor(answerN / 26);
  }

  return answer;
}

function convertStringToBase26(input) {
  let result = 0;
  for (const c of input) {
    result = result * 26 + (c.charCodeAt(0) - 96);
  }
  return result;
}
