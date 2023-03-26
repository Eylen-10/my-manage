export class Graph {
    private nodes: Map<string, Set<string>>;
    public delay: number;
    //构造函数
    constructor(delay=300){
        this.delay = delay;
        this.nodes = new Map();
    }

    //添加节点
    addNode(node: string): void{
        if(!this.nodes.has(node)){
            this.nodes.set(node, new Set());
        }
    }
    //添加边
    hasNode(node:string):boolean{
        return this.nodes.has(node);
    }
    //添加边
    addEdge(from: string, to: string):void{
        this.addNode(from);
        this.addNode(to);
        this.nodes.get(from)?.add(to);
    }

    //获取节点的邻接节点
    getAdjacentNodes(node: string):Set<string>{
        return this.nodes.get(node) || new Set();
    }

    //获取所有节点
    getNodes(): Set<string>{
        return new Set(this.nodes.keys());
    }
    // 遍历图（广度优先搜索）
    bfs(startNode: string, visitFn: (node: string) => void): void {
        const visited: Set<string> = new Set();
        const queue: string[] = [startNode];
        visited.add(startNode);
        visitFn(startNode);
        const traverse = async()=>{
            while (queue.length > 0) {
                const node = queue.shift() as string;
                const adjacentNodes = this.getAdjacentNodes(node);
                for (const adjNode of adjacentNodes) {
                    if (!visited.has(adjNode)) {
                        visited.add(adjNode);
                        await new Promise(resolve => setTimeout(resolve, this.delay)); // 等待1秒
                        visitFn(adjNode);
                        queue.push(adjNode);
                    }
                }
            }
        }
        traverse();
    }

    dfs(startNode: string, visitFn: (node: string) => void): void {
        const visited: Set<string> = new Set();
      
        const dfsHelper = async (node: string) => {
          visited.add(node);
          visitFn(node);
          await new Promise(resolve => setTimeout(resolve, this.delay));
          const adjacentNodes = this.getAdjacentNodes(node);
          for (const adjNode of adjacentNodes) {
            if (!visited.has(adjNode)) {
                await dfsHelper(adjNode);
            }
          }
        };
      
        dfsHelper(startNode);
      }
    



}