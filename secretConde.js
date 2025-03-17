function solution(n, q, ans) {
  // 1. n개의 숫자 중에서 5개를 고르는 모든 조합을 생성
  const candidates = [];

  function generateCombination(start, comb) {
    if (comb.length === 5) {
      candidates.push([...comb]);
      return;
    }
    for (let i = start; i <= n; i++) {
      comb.push(i);
      generateCombination(i + 1, comb);
    }
  }

  generateCombination(1, []);
  console.log(candidates);
  // 2. 각 조합이 모든 q[i] 시도를 통과하는지 검사
  let validCount = 0;

  candidatesLoop: for (const code of candidates) {
    for (let i = 0; i < q.length; i++) {
      const count = countMatching(code, q[i]);
      if (count !== ans[i]) continue candidatesLoop;
    }
    validCount++;
  }

  return validCount;
}

// 3. 두 배열의 교집합 개수 계산
function countMatching(arr1, arr2) {
  let i = 0,
    j = 0,
    count = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      count++;
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return count;
}
