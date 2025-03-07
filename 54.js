function computeSuffixArrayAndLCP(str) {
  // 문자열의 모든 접미사를 생성하고 정렬합니다.
  const suffixes = [];
  for (let i = 0; i < str.length; i++) {
    suffixes.push(str.substring(i));
  }
  suffixes.sort();

  // 접미사 배열을 계산합니다.
  const suffixArray = [];
  for (let i = 0; i < suffixes.length; i++) {
    suffixArray.push(str.length - suffixes[i].length);
  }

  // LCP 배열을 계산합니다.
  const lcpArray = [];
  for (let i = 1; i < suffixArray.length; i++) {
    const str1 = str.substring(suffixArray[i - 1]);
    const str2 = str.substring(suffixArray[i]);
    let lcp = 0;
    while (lcp < str1.length && lcp < str2.length && str1[lcp] === str2[lcp]) {
      lcp++;
    }
    lcpArray.push(lcp);
  }
  lcpArray.unshift(0); // 첫 번째 원소는 항상 0입니다.

  return { suffixArray, lcpArray };
}

// 예시
const inputString = "banana";
const result = computeSuffixArrayAndLCP(inputString);
console.log("Suffix Array:", result.suffixArray);
console.log("LCP Array:", result.lcpArray);
