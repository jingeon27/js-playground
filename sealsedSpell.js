function solution(n, bans) {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  );
  const spellMap = [];
  function createSpell(max, start, comb) {
    if (comb.length === max) {
      const spell = comb.join("");
      if (bans.includes(spell)) return;
      return spellMap.push(spell);
    }
    for (let i = 0; i < alphabet.length; i++) {
      comb.push(alphabet[i]);
      createSpell(max, i, comb);
      comb.pop();
    }
  }
  let index = 0;
  while (spellMap.length < n) {
    index++;
    createSpell(index, 0, []);
  }

  return spellMap[n - 1];
}
