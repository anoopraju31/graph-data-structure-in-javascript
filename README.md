# graph-data-structure-in-javascript

A **graph** is a data structure that consists of a set of **vertices** (also known as **nodes** or **points**) and a set of **edges** (also known as **links** or **lines**), where each **edge** connects a pair of **vertices**. Graphs are used to represent *relationships between objects*. The objects are typically represented by vertices, and the relationships between them are represented by edges.

Formally, a graph **G** can be defined as a pair **(V, E)**, where **V** is a *set of vertices* and **E** is a *set of edges*. Each edge in **E** is a pair **(u, v)** where **u** and **v** are vertices in **V**, indicating that there is a connection between vertex **u** and vertex **v**.

### Types of graphs
Graphs can be classified into various types based on properties such as the presence or absence of direction on edges, the presence or absence of weights on edges, and the presence or absence of cycles. Some common types of graphs include:
1. **Directed Graph (Digraph)**: A graph in which each edge has a direction, indicating a one-way connection between vertices.
2. **Undirected Graph**: A graph in which edges have no direction, indicating a bidirectional connection between vertices.
3. **Weighted Graph**: A graph in which each edge has an associated weight or cost, representing some value associated with the connection between vertices.
4. **Unweighted Graph**: A graph in which edges have no associated weight or cost.
5. **Cyclic Graph**: A graph that contains at least one cycle (a sequence of vertices where a vertex is connected to its successor, forming a loop).
6. **Acyclic Graph**: A graph that does not contain any cycles.

### Terminologies
1. **Vertex (Node)**: A fundamental unit of a graph, representing an entity. In a social network, for example, vertices might represent individuals, and edges might represent relationships between them.
2. **Edge**: A connection between two vertices. Edges can have attributes such as weight (for weighted graphs) or direction (for directed graphs).

### Various Ways to implement graphs
Graphs can be implemented using various data structures, including adjacency matrices, adjacency lists, and adjacency maps. Each has its own advantages and is suited to different types of operations and graph characteristics.

1. **Adjacency Matrix**: A two-dimensional array (or matrix) where each cell M[i][j] represents the presence or absence of an edge between vertex i and vertex j.
2. **Adjacency List**: A collection of lists or arrays where each vertex has a list of its adjacent vertices. This is a more space-efficient representation, especially for sparse graphs.
3. **Adjacency Map (or Dictionary)**: A mapping of each vertex to a collection (such as a list or set) of its adjacent vertices. This allows for efficient lookup of neighbors.

### Operations in graph
Operations on graphs typically involve manipulating the structure, vertices, or edges of the graph. These operations are fundamental to graph algorithms and applications. Here are some common operations performed on graphs:
1. **Add Vertex**: Insert a new vertex into the graph.
2. **Remove Vertex**: Delete a vertex from the graph along with its incident edges.
3. **Add Edge**: Create a new edge between two existing vertices.
4. **Remove Edge**: Delete an edge between two existing vertices.
5. **Get Neighbors**: Retrieve the adjacent vertices of a given vertex.
6. **isEmpty**: Checks whether a graph is empty or not, i.e., it has no vertices or edges.
7. **size**: Returns the number of vertices (or edges) in the graph, indicating its size.
8. **merge**: Combines two graphs by merging their vertices and edges into a single graph. This operation can involve resolving conflicts or maintaining consistency between the merged graphs.
9. **Depth-First Search (DFS)**: Explores a graph level by level, visiting all neighbors of a vertex before moving to the next level. It finds the shortest path from the starting vertex to every other reachable vertex.
10. **Breadth-First Search (BFS)**: Explores a graph by going as deep as possible along each branch before backtracking. It traverses along paths, exploring one branch fully before moving to the next.
