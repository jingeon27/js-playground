function solution(nodes, edges) {
  // 트리 구성
  const tree = new Map();
  for (const node of nodes) {
    tree.set(node, []);
  }
  for (const [a, b] of edges) {
    tree.get(a).push(b);
    tree.get(b).push(a);
  }

  // 방문 여부를 체크하기 위한 Set
  const visited = new Set();

  // 홀짝 트리와 역홀짝 트리의 개수를 저장할 변수
  let holeJackCount = 0;
  let reverseHoleJackCount = 0;

  // 각 트리를 순회
  for (const node of nodes) {
    if (!visited.has(node)) {
      // 현재 트리의 모든 노드를 찾기 위해 BFS 수행
      const currentTreeNodes = [];
      const queue = [node];
      while (queue.length > 0) {
        const currentNode = queue.shift();
        if (!visited.has(currentNode)) {
          visited.add(currentNode);
          currentTreeNodes.push(currentNode);
          for (const neighbor of tree.get(currentNode)) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }

      // 현재 트리에서 가능한 모든 루트 노드를 시도
      let isHoleJack = false;
      let isReverseHoleJack = false;
      for (const root of currentTreeNodes) {
        const nodeType = {};
        dfs(root, null, tree, nodeType);

        // 홀짝 트리인지 확인
        if (isHoleJackTree(nodeType)) {
          isHoleJack = true;
        }

        // 역홀짝 트리인지 확인
        if (isReverseHoleJackTree(nodeType)) {
          isReverseHoleJack = true;
        }
      }

      // 결과 업데이트
      if (isHoleJack) {
        holeJackCount++;
      }
      if (isReverseHoleJack) {
        reverseHoleJackCount++;
      }
    }
  }

  return [holeJackCount, reverseHoleJackCount];
}

// DFS로 트리를 탐색하며 노드 타입을 결정
function dfs(node, parent, tree, nodeType) {
  const children = tree.get(node).filter((child) => child !== parent);
  const numType = node % 2; // 노드 번호의 홀짝 여부 (0: 짝수, 1: 홀수)
  const childType = children.length % 2; // 자식 노드 개수의 홀짝 여부 (0: 짝수, 1: 홀수)
  nodeType[node] = [numType, childType]; // 노드 타입 저장

  // 자식 노드에 대해 재귀적으로 탐색
  for (const child of children) {
    dfs(child, node, tree, nodeType);
  }
}

// 홀짝 트리인지 확인
function isHoleJackTree(nodeType) {
  for (const node in nodeType) {
    const [numType, childType] = nodeType[node];
    if (
      !(numType === 1 && childType === 1) &&
      !(numType === 0 && childType === 0)
    ) {
      return false;
    }
  }
  return true;
}

// 역홀짝 트리인지 확인
function isReverseHoleJackTree(nodeType) {
  for (const node in nodeType) {
    const [numType, childType] = nodeType[node];
    if (
      !(numType === 1 && childType === 0) &&
      !(numType === 0 && childType === 1)
    ) {
      return false;
    }
  }
  return true;
}
