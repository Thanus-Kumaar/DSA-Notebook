# Breadth-First Search (BFS) - Summary

## 🔁 Repeated Sub-Patterns
* **Level Order Traversal:** Visiting nodes level by level (as seen in "Binary Tree Level Order Traversal").
* **Shortest Path in Unweighted Graph/Tree:** BFS naturally finds the shortest path (in terms of number of edges) because it explores layer by layer.
* **Connected Components:** Can be used to find all reachable nodes from a starting point.
* **Graph Traversal:** General algorithm for exploring nodes and edges in a graph.

## 📚 Common Traps
* **Forgetting to Mark Visited:** In general graph BFS, if not marking visited nodes, you can enter infinite loops in cyclic graphs. (Less of an issue in trees unless there are explicit cycles).
* **Incorrect Queue Management:** Not `push`ing children or not `pop`ping the current node.
* **Off-by-One Errors in Level Grouping:** Incorrectly calculating `level_size` or clearing the `current_level_nodes` list.
* **Handling Disconnected Components:** If a graph has multiple disconnected parts, BFS from one starting node won't visit all nodes. You'd need to run BFS multiple times.
* **Edge Cases:** Empty input, single node, no children.

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** **O(V + E)** for graphs (Vertices + Edges) or **O(N)** for trees (Nodes), as each node and edge is visited at most once.
* **Space Complexity:** **O(V)** or **O(N)** in the worst case, as the queue might hold all nodes at the widest level of the graph/tree.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem ask for level-by-level processing?
    * Do you need to find the shortest path in an unweighted graph/tree?
    * Is the concept of "neighbors" or "adjacent elements" important?
    * Can the problem be modeled as a graph traversal?
* **Difficulty:** Easy to Medium (basic BFS is easy, applying it to complex graph problems can be medium).
