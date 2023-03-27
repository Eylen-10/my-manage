class BFSNode {
    name: string;
    neighbors: BFSNode[];
    visited: boolean;
  
    constructor(name: string) {
      this.name = name;
      this.neighbors = [];
      this.visited = false;
    }
  }
  
  function bfs(start: BFSNode): void {
    const queue: BFSNode[] = [start];
    start.visited = true;
  
    while (queue.length > 0) {
      const node = queue.shift()!;
      console.log(node.name);
  
      for (const neighbor of node.neighbors) {
        if (!neighbor.visited) {
          neighbor.visited = true;
          queue.push(neighbor);
        }
      }
    }
  }
  