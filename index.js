class Graph {
  #nodes
  constructor() {
    this.#nodes = {}
  }
  
  addNodes(node) {
    if (!this.#nodes[node]) this.#nodes[node] = []
  }
  
  addEdges(src, dist) {
    if (!this.#nodes[src] || !this.#nodes[dist]) return
    if (!this.#nodes[src].includes(dist)) this.#nodes[src].push(dist)
    if (!this.#nodes[dist].includes(src)) this.#nodes[dist].push(src)
  }
  
  showNodes () {
    console.log(this.#nodes)
  }
  
  bfs(src, dist) {
    if (!this.#nodes[src] || !this.#nodes[dist]) return false

    const queue = [src]
    const visited = {}
    
    while(queue.length) {
      let current = queue.shift()
      
      if(visited[current]) continue
      if(current === dist) return true
      
      visited[current] = true
      let neighbors = this.#nodes[current]
      
      for (let neighbor of neighbors) 
        queue.push(neighbor)
    }
    
    return false
  }
  
  dfs(src, dist, visited = {}) {
    if (visited[src]) return false
    if (src === dist) return true
    
    visited[src] = true
    const neighbors = this.#nodes[src]
    
    for (let neighbor of neighbors)
      if (this.dfs(neighbor, dist, visited)) return true
      
    return false
  }
}

const graph = new Graph()

// Adding nodes
graph.addNodes('A')
graph.addNodes('B')
graph.addNodes('W')
graph.addNodes('C')
graph.addNodes('D')
graph.addNodes('E')

// Adding edges
graph.addEdges('A', 'W')
graph.addEdges('B', 'W')
graph.addEdges('W', 'C')
graph.addEdges('W', 'D')

// Show nodes
graph.showNodes()
console.log(graph.bfs('A', 'C')? 'True' : 'False')
console.log(graph.dfs('A', 'C')? 'True' : 'False')
