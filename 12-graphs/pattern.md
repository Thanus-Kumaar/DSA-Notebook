# Graphs - Pattern

## When to Apply This Pattern
Apply the Graphs pattern when:
* The problem involves a collection of **entities (nodes/vertices)** and **relationships (edges)** between them.
* You need to model **connections, networks, flows, or dependencies**.
* Problems often ask about **reachability, paths, cycles, connectivity, or ordering** based on relationships.
* Common scenarios include social networks, road maps, task dependencies, state transitions, and flow networks.

## Common Variations
* **Traversal (BFS/DFS):**
    * **BFS:** For shortest paths in unweighted graphs, level-by-level exploration, finding connected components.
    * **DFS:** For cycle detection, topological sort, finding all paths, solving mazes, strongly connected components.
* **Shortest Path Algorithms:**
    * **Dijkstra's:** Single-source shortest path in graphs with non-negative edge weights.
    * **Bellman-Ford:** Single-source shortest path in graphs with negative edge weights (can detect negative cycles).
    * **Floyd-Warshall:** All-pairs shortest path.
* **Minimum Spanning Tree (MST):**
    * **Prim's Algorithm:** Grows a single tree.
    * **Kruskal's Algorithm:** Adds edges in increasing order of weight, using DSU.
* **Topological Sort:** Linearly ordering vertices in a Directed Acyclic Graph (DAG) based on dependencies.
    * **Kahn's Algorithm (BFS-based):** Uses in-degrees.
    * **DFS-based:** Uses recursion stack and 3-state visited array.
* **Cycle Detection:**
    * In **undirected graphs:** DFS, checking for back-edges to non-parent visited nodes.
    * In **directed graphs:** DFS (using 3 states: unvisited, visiting, visited) or Kahn's algorithm (if not all nodes can be topologically sorted).
* **Strongly Connected Components (SCCs):** Groups of vertices in a directed graph where every vertex is reachable from every other vertex within the group (e.g., Kosaraju's, Tarjan's).
* **Union-Find / Disjoint Set Union (DSU):** For efficiently managing disjoint sets and checking connectivity (e.g., Kruskal's, connecting components).

## Key Implementation Insights
* **Graph Representation:**
    * **Adjacency List (`std::vector<std::vector<int>> adj`):** Preferred for most problems, especially sparse graphs (fewer edges than `V^2`). `adj[u]` stores a list of `v` such that `u -> v`.
    * **Adjacency Matrix (`std::vector<std::vector<int>> adj_matrix`):** Use for dense graphs or when `O(1)` edge existence check is critical.
* **`visited` Array/Set:** Crucial for preventing infinite loops in cyclic graphs and ensuring each node/edge is processed once.
    * For DFS cycle detection in directed graphs, use 3 states (e.g., `0: unvisited`, `1: visiting`, `2: visited`) to distinguish between nodes in the current recursion stack and fully processed nodes.
* **Edge Direction:** Pay close attention to whether the graph is directed or undirected, and build your adjacency list/matrix accordingly. For undirected graphs, add edges in both directions (`u -> v` and `v -> u`).
* **Handling Disconnected Components:** If the problem requires processing all nodes (e.g., counting islands, finding all connected components), iterate through all vertices `0` to `V-1`. If a vertex is unvisited, start a new traversal (BFS/DFS) from it.
* **In-Degrees (for Kahn's Algorithm):** An array `in_degree[V]` to count incoming edges for each vertex. Essential for starting the topological sort from nodes with no prerequisites.
* **Queue/Stack Usage:**
    * **Queue (`std::queue`):** For BFS (level-by-level, shortest path in unweighted).
    * **Stack (implicit recursion or `std::stack`):** For DFS (depth-first, cycle detection, topological sort).
* **Edge Cases:** Empty graphs, single-node graphs, graphs with no edges, fully connected graphs.
* **Path Reconstruction:** If the problem asks for the actual path (not just length/count), you'll need to store parent pointers during traversal.
