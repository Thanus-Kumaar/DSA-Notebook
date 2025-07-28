# Dijkstra's Algorithm - Pattern

## When to Apply This Pattern
Apply Dijkstra's Algorithm when:
* You need to find the **shortest path** from a **single source vertex** to **all other reachable vertices** in a graph.
* The graph is **weighted**, and crucially, **all edge weights are non-negative**.
* You're looking for the minimum cost, distance, or time to traverse paths in a network.

## Common Variations
* **Standard SSSP:** Finding shortest paths from `source` to `all_others`.
* **Finding Shortest Path to a Specific Target:** Run Dijkstra's until the target is extracted from the priority queue.
* **Network Delay/Signal Propagation:** (As seen in "Network Delay Time") Where the "shortest path" is the time for a signal to reach a node, and the answer is the maximum of these shortest times.
* **Grid-based Dijkstra:** When cells in a grid have varying "costs" to move between them (e.g., shortest path in a weighted grid).
* **Prim's Algorithm for MST:** Conceptually very similar to Dijkstra's, but prioritizes edges to grow a minimum spanning tree, not paths from a source.

## Key Implementation Insights
* **Graph Representation:** Use an **Adjacency List** for efficiency. Each entry `adj[u]` should store pairs `(v, weight)` for all edges `u -> v` with cost `weight`.
    * Example: `std::vector<std::vector<std::pair<int, int>>> adj;`
* **Distance Array (`dist`):**
    * Initialize `dist[source] = 0`.
    * Initialize `dist[v] = infinity` for all other vertices `v`. `std::numeric_limits<int>::max()` is a good representation for infinity.
* **Min-Priority Queue (`pq`):**
    * Stores `(current_distance, node)` pairs.
    * Must be a **min-heap** based on `current_distance`.
    * Example (C++): `std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> pq;`
    * Push initial: `pq.push({0, source_node});`
* **Algorithm Steps:**
    1.  Initialize `dist` array and `pq`.
    2.  While `pq` is not empty:
        * Extract `(current_d, u)`: Pop the node `u` with the smallest `current_d` from `pq`.
        * **Stale Entry Check (Optimization):** If `current_d > dist[u]`, this is a stale entry (a shorter path to `u` has already been found and processed). `continue` to the next element in `pq`.
        * For each neighbor `v` of `u` with edge weight `w`:
            * **Relaxation Step:** If `dist[u] + w < dist[v]`:
                * Update `dist[v] = dist[u] + w`.
                * Push `(dist[v], v)` to `pq`.
* **Handling Unreachable Nodes:** After Dijkstra's finishes, iterate through the `dist` array. Any node `v` for which `dist[v]` is still `infinity` (or `std::numeric_limits<int>::max()`) is unreachable from the source.
* **Node Indexing:** Be mindful if nodes are 0-indexed or 1-indexed and adjust array/vector sizes accordingly (`n` vs `n+1`).
