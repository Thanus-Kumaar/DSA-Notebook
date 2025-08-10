# Bellman-Ford Algorithm - Summary

## 💡 Core Idea
The **Bellman-Ford algorithm** is a Single-Source Shortest Path (SSSP) algorithm designed to find the shortest paths from a single source to all other vertices in a **weighted, directed graph**. Its primary advantage is that it can correctly handle graphs with **negative edge weights**, which algorithms like Dijkstra's cannot. It also has the ability to detect the presence of negative cycles.

## 🔁 Repeated Sub-Patterns
* **Single-Source Shortest Path:** The main application for graphs with negative weights.
* **Negative Cycle Detection:** The algorithm can detect if a negative cycle is reachable from the source by performing one extra pass of edge relaxation.
* **Dynamic Programming on Graphs:** The core logic is a form of DP, where `dist[i][v]` (cheapest path to `v` in `i` steps) is derived from `dist[i-1][u]`. This is often seen in problems like "Cheapest Flights Within K Stops."

## 📚 Common Traps
* **Positive-only Graphs:** Using Bellman-Ford on a graph with only non-negative edges is inefficient. Dijkstra's is the preferred choice for such cases due to its better `O(E log V)` time complexity.
* **Integer Overflow:** The distances can become very large or negative. Using `long long` for distance arrays is a good practice to prevent overflow.
* **Incorrect Number of Passes:** The core of the algorithm requires exactly `(V-1)` passes of edge relaxation to guarantee correctness. An additional `V`-th pass is needed to detect negative cycles.
* **Off-by-One Errors:** Mismanaging array indices when nodes are labeled 1 to `n` vs. 0 to `n-1`.

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** **O(V * E)**, where V is the number of vertices and E is the number of edges. This is slower than Dijkstra's but more versatile.
* **Space Complexity:** **O(V)** for the distance array. The graph itself takes `O(V+E)` space for an adjacency list, or `O(V^2)` for an adjacency matrix.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem ask for **shortest paths** from a **single source**?
    * Is the graph **weighted**?
    * Do the edge weights **include negative values**?
    * Is there a need to **detect negative cycles**?
* **Difficulty:** Medium (The logic is a straightforward DP-like iteration, but negative cycle detection adds complexity).
