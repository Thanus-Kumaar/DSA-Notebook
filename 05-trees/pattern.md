# Trees - Pattern

## When to Apply This Pattern
Apply the Tree pattern when:
* You are given data with an **inherent hierarchical relationship** (e.g., organizational charts, file systems, family trees).
* The problem involves **searching, inserting, or deleting elements** in a structured, non-linear way.
* You need to perform operations that involve **parent-child relationships** or **subtrees**.
* Problems often involve traversing all nodes or finding specific paths/properties within the hierarchy.

## Common Variations
* **Binary Tree:** Each node has at most two children (left and right). Most common in interview problems.
* **Binary Search Tree (BST):** A binary tree where for every node, all values in its left subtree are less than its own value, and all values in its right subtree are greater. This property allows for efficient searching.
* **Balanced Trees (AVL, Red-Black):** Self-balancing BSTs that guarantee logarithmic time complexity for operations by maintaining height balance. (Less common to implement from scratch in interviews, but good to know their properties).
* **N-ary Tree:** Nodes can have more than two children.
* **Heaps (Priority Queues):** A specialized tree-based data structure (usually a complete binary tree) that satisfies the heap property (parent is always greater/smaller than its children).
* **Tries (Prefix Trees):** Tree-like data structures used for efficient retrieval of keys in a dataset, often for strings (e.g., autocomplete).

## Key Implementation Insights
* **Recursive Thinking:** Many tree problems have elegant recursive solutions. Define the base case (usually `nullptr`), and then assume the recursive calls for children work correctly to solve the current node's problem.
* **Iterative Thinking (with Stack/Queue):** For problems where recursion might lead to stack overflow (very deep trees) or where level-by-level processing is needed (BFS), iterative solutions using explicit stacks (for DFS) or queues (for BFS) are necessary.
* **Traversal Choice:**
    * Use **BFS (Queue)** for problems requiring **level-by-level processing**, finding the shortest path in an unweighted tree, or problems where you need to explore nodes closest to the root first.
    * Use **DFS (Recursion or Stack)** for problems involving **paths from root to leaf**, checking properties of subtrees, or when you need to explore one branch fully before moving to the next.
* **Dummy/Helper Nodes:** Sometimes, creating a dummy node or using helper functions can simplify recursive calls or initial setup.
* **Parent Pointers:** Some problems might include a `parent` pointer in the node definition, which allows for upward traversal.
* **Tree Construction:** Understand how trees are built from input (e.g., from arrays, pre-order/in-order traversals).
