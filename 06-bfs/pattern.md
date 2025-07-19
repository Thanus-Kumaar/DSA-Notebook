# Breadth-First Search (BFS) - Pattern

## When to Apply This Pattern
Apply the Breadth-First Search (BFS) pattern when:
* You need to **traverse a tree or graph level by level**.
* You are looking for the **shortest path** (in terms of number of edges) in an unweighted graph.
* You need to find all **reachable nodes** from a starting node.
* Problems involving **"layers," "depth," or "minimum number of steps"** often hint at BFS.
* You need to explore all immediate neighbors before moving to the next set of neighbors.

## Common Variations
* **Standard BFS Traversal:** Basic exploration of all reachable nodes.
* **Level Order Traversal (Trees):** Grouping nodes by their depth level (as seen in "Binary Tree Level Order Traversal").
* **Shortest Path:** Keeping track of distance/steps from the source node.
* **Bipartite Check:** Using BFS to color nodes and check for conflicts.
* **Topological Sort (Kahn's Algorithm):** Using BFS for tasks with dependencies.
* **Multi-Source BFS:** Starting BFS from multiple initial nodes simultaneously (e.g., "01 Matrix" - finding nearest 0).

## Key Implementation Insights
* **The Queue:** The fundamental data structure for BFS. It stores nodes to visit in FIFO (First-In, First-Out) order.
    * `std::queue<Node*>` (C++)
    * `collections.deque` (Python)
    * `java.util.Queue` (Java)
* **Visited Set (for Graphs):** For general graphs (which can have cycles), maintain a `std::unordered_set<Node*>` (or `bool visited[]` array) to keep track of nodes already processed. This prevents infinite loops and redundant work. For trees, this is often not explicitly needed unless the tree structure itself is part of a larger graph problem.
* **Level Tracking:** To group nodes by level or to count levels:
    1.  Get `int level_size = queue.size();` at the beginning of each level's processing.
    2.  Loop `level_size` times, dequeuing and processing exactly those nodes.
    3.  Enqueue their children.
    4.  After the `level_size` loop, you've completed one full level.
* **Edge Cases:**
    * Empty graph/tree (queue starts empty or `root == nullptr`).
    * Single node.
    * Nodes with no children.
    * Disconnected components (if applicable to the problem).
* **Path Reconstruction:** If you need to reconstruct the shortest path, you might need to store parent pointers or distances as you traverse.
