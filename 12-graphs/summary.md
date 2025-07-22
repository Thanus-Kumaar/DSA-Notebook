# Graphs - Summary

## 💡 Core Idea
A Graph is a non-linear data structure consisting of `Vertices` (nodes) and `Edges` (connections between vertices). They are used to model relationships between objects. Graphs can be directed or undirected, weighted or unweighted, and may contain cycles.

## 🔁 Repeated Concepts & Operations
* **Representations:** Adjacency List (most common), Adjacency Matrix.
* **Traversal:**
    * **BFS (Breadth-First Search):** Level-by-level exploration. Uses a **queue**. Good for shortest paths in unweighted graphs.
    * **DFS (Depth-First Search):** Explores as deep as possible along each branch. Uses a **stack** (explicitly or implicitly via recursion). Good for cycle detection, topological sort.
* **Connectivity:** Finding connected components, checking reachability.
* **Cycle Detection:** Identifying if a graph contains a cycle.
* **Topological Sort:** Linear ordering of vertices in a Directed Acyclic Graph (DAG) based on dependencies.
* **Shortest Path:** Finding the path with minimum cost/edges between vertices.
* **Minimum Spanning Tree (MST):** Finding a subset of edges that connects all vertices with minimum total weight.

## 📚 Common Traps
* **Graph Representation Choice:** Using Adjacency Matrix for sparse graphs (leading to MLE/TLE) or Adjacency List for dense graphs where `O(1)` edge lookup is critical (less common).
* **Forgetting `visited` Array/Set:** Essential for preventing infinite loops in cyclic graphs during BFS/DFS.
* **Incorrect Edge Direction:** Misinterpreting `u -> v` vs. `v -> u` in directed graphs.
* **Handling Disconnected Components:** For problems requiring processing all nodes, ensure your traversal logic covers all components (e.g., iterating through all nodes and starting BFS/DFS if unvisited).
* **Base Cases for Traversal:** Empty graph, single node graph.
* **Weighted vs. Unweighted:** Using algorithms meant for unweighted graphs on weighted graphs (e.g., simple BFS for shortest path in weighted graph).
* **Negative Cycles:** Not handling or detecting negative cycles when using algorithms like Bellman-Ford.

## 🔁 Time-Space Complexity Tradeoffs
* **Adjacency List:**
    * Space: `O(V + E)` (Vertices + Edges).
    * Traversal (BFS/DFS): `O(V + E)`.
* **Adjacency Matrix:**
    * Space: `O(V^2)`.
    * Traversal (BFS/DFS): `O(V^2)`.
* **Dijkstra's (with Priority Queue):** `O(E log V)` or `O(E + V log V)`.
* **Bellman-Ford:** `O(V * E)`.
* **Floyd-Warshall:** `O(V^3)`.
* **Kahn's Algorithm (Topological Sort):** `O(V + E)`.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem involve **relationships or connections** between entities?
    * Can the entities be modeled as **nodes** and relationships as **edges**?
    * Are there concepts of **paths, reachability, cycles, or dependencies**?
    * Does the problem involve finding shortest paths, minimum connections, or ordering based on prerequisites?
* **Difficulty:** Medium to Hard (Graph problems are often among the most challenging).
