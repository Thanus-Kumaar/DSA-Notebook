# Disjoint Set Union (DSU) - Pattern

## When to Apply This Pattern
Apply the Disjoint Set Union (DSU), or Union-Find, pattern when:
* You are given a set of elements that can be partitioned into a number of **disjoint subsets**.
* The problem involves a series of operations that either **query the connectivity** of two elements (`find`) or **merge the subsets** containing them (`unite`).
* The graph is **undirected**, and you need to efficiently **detect a cycle** by processing edges one-by-one.

## Common Variations
* **Basic Union-Find:** The standard `find` and `unite` operations.
* **Cycle Detection:** For a graph with `N` nodes and `N` edges, the first edge `(u, v)` where `find(u) == find(v)` is the redundant connection that forms a cycle.
* **Kruskal's Algorithm for MST:** The DSU structure is used to check for cycles as edges are added in increasing order of weight.
* **Finding Number of Connected Components:** Initialize DSU with `N` components. For each edge, perform a `unite` operation. The final number of components is the number of distinct roots.

## Key Implementation Insights
* **`parent` array:** The primary data structure. `parent[i]` stores the parent of element `i`. If `parent[i] == i`, `i` is the root of its set.
* **Path Compression (`find`):** This is a critical optimization. During a `find` operation, after locating the root, you set the parent of every node on the path directly to the root. This flattens the tree for future lookups.
    ```cpp
    int find(int i) {
        if (parent[i] == i) return i;
        return parent[i] = find(parent[i]); // Path compression in a single line
    }
    ```
* **Union by Rank or Size (`unite`):** This is the second critical optimization. To prevent tall trees, when merging two sets, you always attach the root of the smaller tree to the root of the larger tree. This keeps the trees short and balanced.
* **Node Indexing:** Be very careful with 0-based vs. 1-based indexing. If nodes are labeled from 1 to `n`, your DSU arrays must be of size `n+1`.
* **Problem-Specific Logic:** The DSU class itself is generic. The logic for the problem (e.g., iterating through edges, deciding when to return) lives in the main function.
