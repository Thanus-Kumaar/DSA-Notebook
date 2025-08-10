# Bellman-Ford Algorithm - Pattern

## When to Apply This Pattern
Apply the Bellman-Ford algorithm when:
* You need to find the **shortest path** from a **single source** to all other vertices.
* The graph is **weighted and directed**.
* Crucially, the graph contains **negative edge weights**.
* There is a possibility of a **negative cycle**, and you need to detect it.

## Common Variations
* **Standard SSSP with Negative Edges:** The basic application.
* **Detecting Negative Cycles:** After `(V-1)` passes, if a `V`-th pass can still find a shorter path, a negative cycle exists. The path to all nodes in that cycle and its descendants are effectively `(-infinity)`.
* **Cheapest Flights within K Stops:** The DP solution for this problem is structurally identical to Bellman-Ford. The number of passes corresponds to `k` stops.

## Key Implementation Insights
* **Distance Array (`dist`):** The primary data structure, `dist[v]`, stores the shortest distance from the source to `v`. It must be initialized with a large value (e.g., `infinity`) for all vertices except the source.
* **Edge Relaxation:** The core of the algorithm. For each edge `(u, v, w)`, if a shorter path to `v` is found via `u` (`dist[u] + w < dist[v]`), update `dist[v] = dist[u] + w`.
* **Iteration:** You must perform the edge relaxation process `(V-1)` times for all edges. A fixed number of iterations is what makes Bellman-Ford work correctly with negative weights.
* **Negative Cycle Detection:** After the `(V-1)` passes, loop through all edges one more time. If any distance can still be relaxed, a negative cycle exists.
* **Complexity:** Its `O(V * E)` time complexity is slower than Dijkstra's `O(E log V)`, but it's the right tool for graphs with negative weights.
* **Long Long for Distance:** Use `long long` for the `dist` array to prevent integer overflow when summing many edge weights, especially if there are large negative values.
