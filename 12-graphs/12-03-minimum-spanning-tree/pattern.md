# Minimum Spanning Tree (MST) - Pattern

## When to Apply This Pattern
Apply the MST pattern when:
* You are given a **connected, undirected, and weighted graph**.
* The problem asks you to find a way to **connect all vertices** with the **minimum possible total cost**.
* The solution should not contain any **cycles**.

## Common Variations
* **Prim's Algorithm (Priority Queue-based):**
    * **Core Idea:** Start from an arbitrary vertex and greedily grow a single tree. At each step, add the minimum-weight edge that connects a vertex already in the MST to a vertex not yet in the MST.
    * **Data Structures:** A Min-Priority Queue stores `(weight, vertex)` pairs. A `visited` array or a `dist` array tracks vertices and their minimum connection costs.
* **Kruskal's Algorithm (DSU-based):**
    * **Core Idea:** Build an MST by considering all edges in non-decreasing order of weight. Greedily add an edge to the MST if it doesn't form a cycle.
    * **Data Structures:** A **Disjoint Set Union (DSU)** data structure is used to check for cycles. If `find(u) == find(v)` for an edge `(u, v)`, adding it would form a cycle.
* **Bottleneck Problems:** Problems where you need to find a path that minimizes the maximum weight edge on the path. MSTs are often a good starting point for these problems.

## Key Implementation Insights
* **Algorithm Choice:**
    * **Kruskal's** is generally a good default choice, especially for **sparse graphs**, as its `O(E log E)` complexity is dominated by the initial sort.
    * **Prim's** can be more efficient for **dense graphs** where `E` is closer to `V^2`.
* **Kruskal's Implementation Details:**
    * 1. Create a DSU for `V` vertices.
    * 2. Sort all edges by weight in ascending order.
    * 3. Iterate through the sorted edges `(u, v, w)`.
    * 4. If `dsu.unite(u, v)` is successful (i.e., `find(u) != find(v)`), add `w` to the total cost.
* **Prim's Implementation Details:**
    * 1. Create a Min-Priority Queue of `(weight, vertex)` pairs.
    * 2. Push `(0, start_vertex)` to the PQ.
    * 3. Use a `visited` array.
    * 4. While the PQ is not empty:
    * 5. Pop the minimum weight edge `(w, u)`.
    * 6. If `u` is not visited, mark it as visited and add `w` to the total cost.
    * 7. For all neighbors `v` of `u`: if `v` is not visited, push `(weight(u,v), v)` to the PQ.
* **Graph Representation:** For Prim's, an adjacency list storing `(neighbor, weight)` is best. For Kruskal's, a simple list of all edges `(u, v, w)` is needed.
