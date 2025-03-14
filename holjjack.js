function solution(nodes, edges) {
  const adj = new Map();
  for (const node of nodes) {
    adj.set(node, []);
  }
  for (const [a, b] of edges) {
    adj.get(a).push(b);
    adj.get(b).push(a);
  }

  const visited = new Set();
  let holeJack = 0,
    reverseHoleJack = 0;

  for (const node of nodes) {
    if (!visited.has(node)) {
      const queue = [node];
      visited.add(node);
      const currentTree = [node];

      while (queue.length > 0) {
        const u = queue.shift();
        for (const v of adj.get(u)) {
          if (!visited.has(v)) {
            visited.add(v);
            queue.push(v);
            currentTree.push(v);
          }
        }
      }

      const degree = new Map();
      for (const u of currentTree) {
        degree.set(u, adj.get(u).length);
      }

      let cntEven = 0;
      for (const u of currentTree) {
        if (u % 2 === degree.get(u) % 2) {
          cntEven++;
        }
      }

      const cntOdd = currentTree.length - cntEven;

      if (cntEven === 1) holeJack++;
      if (cntOdd === 1) reverseHoleJack++;
    }
  }

  return [holeJack, reverseHoleJack];
}
