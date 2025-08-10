# Minimum Spanning Tree (MST) - Summary

## 💡 Core Idea
A **Minimum Spanning Tree (MST)** is a subgraph of a connected, undirected, and weighted graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. It is a tree because it uses exactly `V-1` edges, where `V` is the number of vertices.

## 🔁 Repeated Sub-Patterns
* **Prim's Algorithm:** A greedy algorithm that grows a single MST from a starting vertex. It uses a **Min-Priority Queue** to add the cheapest edge that connects a vertex in the growing MST to a vertex outside of it.
* **Kruskal's Algorithm:** A greedy algorithm that builds an MST by adding the cheapest available edges, as long as they don't form a cycle. It uses a **Disjoint Set Union (DSU)** data structure to efficiently detect cycles.
* **Connectivity Problems:** Any problem that requires finding the minimum cost to connect a set of items (e.g., cities, servers, power lines).

## 📚 Common Traps
* **Graph Representation:** MST algorithms are most efficient with an **adjacency list** representation of the graph.
* **Heap/DSU Implementation:** Incorrectly implementing the Min-Priority Queue for Prim's (e.g., using a max-heap) or the `find`/`unite` operations for Kruskal's.
* **Negative Edge Weights:** MST algorithms work correctly with negative edge weights as long as the graph doesn't have a negative cycle.
* **Disconnected Graphs:** If the input graph is not connected, an MST of the entire graph cannot be formed. Kruskal's will find an MST for each connected component (a "minimum spanning forest").
* **Complexity Mismatch:** Choosing Prim's for a very sparse graph (`E << V^2`) or Kruskal's when the number of edges is very large, which can affect performance.

## 🔁 Time-Space Complexity Tradeoffs
* **Prim's Algorithm:**
    * **Time:** `O(E log V)` or `O(E + V log V)` (using a binary heap).
    * **Space:** `O(V + E)`.
* **Kruskal's Algorithm:**
    * **Time:** `O(E log E)` (dominated by sorting edges) which simplifies to `O(E log V)` since `E` is at most `V^2`.
    * **Space:** `O(V + E)`.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * The graph is **undirected and weighted**.
    * The goal is to **connect all vertices** with the **minimum total cost**.
    * The solution should be a **tree** (no cycles).
* **Difficulty:** Medium to Hard (implementation requires mastery of priority queues or DSU).
