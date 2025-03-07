const web = [
  [1, 3],
  [4, 5],
  [5, 1],
  [2, 3],
  [3, 2],
  [2, 4],
];

function webClick(start, target, graph) {
  const queue = [[start, 0]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const [currentNode, steps] = queue.shift();

    if (currentNode === target) {
      return steps; // Found the shortest path length
    }

    const neighbors = graph.filter(
      (edge) => edge[0] === currentNode && !visited.has(edge[1])
    );

    for (const neighbor of neighbors) {
      queue.push([neighbor[1], steps + 1]);
      visited.add(neighbor[1]);
    }
  }

  return -1; // No path found
}

const startNode = 4;
const targetNode = 3;
const pathLength = shortestPathLength(startNode, targetNode, web);

if (pathLength !== -1) {
  console.log(
    `Shortest path length from Node ${startNode} to Node ${targetNode}: ${pathLength}`
  );
} else {
  console.log(`No path found from Node ${startNode} to Node ${targetNode}`);
}
