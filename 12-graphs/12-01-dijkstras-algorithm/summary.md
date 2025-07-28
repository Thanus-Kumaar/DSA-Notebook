# Dijkstra's Algorithm - Summary

## 💡 Core Idea
Dijkstra's Algorithm is a Single-Source Shortest Path (SSSP) algorithm used to find the shortest paths from a single source vertex to all other vertices in a **weighted graph** where all **edge weights are non-negative**. It operates in a greedy manner, always extending the shortest path to the next closest unvisited vertex.

## 🔁 Repeated Sub-Patterns
* **Single-Source Shortest Path:** The primary application.
* **Network Flow/Delay Time:** Finding the maximum "time" for a signal to reach all nodes from a source (as seen in "Network Delay Time").
* **Minimum Spanning Tree (Prim's Algorithm):** Prim's is very similar in structure to Dijkstra's, using a priority queue to grow a tree by adding the cheapest edge to an unvisited vertex.
* **Shortest Path with K edges/limits:** Sometimes adapted for specific constraints on path length.

## 📚 Common Traps
* **Negative Edge Weights:** Dijkstra's **does NOT work correctly with negative edge weights**. If negative weights are present, use Bellman-Ford.
* **Incorrect Priority Queue Usage:**
    * Forgetting to make it a **min-priority queue** (e.g., using `std::priority_queue<std::pair<int, int>>` in C++ by default creates a max-heap).
    * Pushing incorrect `(cost, node)` pairs (e.g., `(node, cost)`).
    * Not handling duplicate entries in the priority queue (the `current_cost > dist[u]` check).
* **Incorrect Distance Initialization:** Not initializing all distances to `infinity` and source to `0`.
* **Graph Representation:** Ensure adjacency list stores `(neighbor, weight)` pairs correctly.
* **Node Indexing:** Be careful with 0-indexed vs. 1-indexed nodes.
* **Unreachable Nodes:** Forgetting to check if all required nodes were reachable (i.e., if their `dist` remains `infinity`).

## 🔁 Time-Space Complexity Tradeoffs
* **Adjacency List + Min-Priority Queue:**
    * **Time Complexity:** `O(E log V)` or `O(E + V log V)`.
        * `V`: number of vertices, `E`: number of edges.
        * Each edge relaxation (`E` times) takes `O(log V)` for PQ operations. Each vertex extraction (`V` times) takes `O(log V)`.
    * **Space Complexity:** `O(V + E)` for adjacency list, `O(V)` for distance array, `O(V)` for priority queue in worst case. Overall `O(V + E)`.
* **Adjacency Matrix (less common):** `O(V^2)`.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Is the problem asking for **shortest paths** from a **single source**?
    * Is the graph **weighted**?
    * Are **all edge weights non-negative**?
    * Does the problem involve a network, connections, or finding minimum travel times/costs?
* **Difficulty:** Medium to Hard (implementation complexity due to priority queue and careful state management).
