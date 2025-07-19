# Trees - Summary

## 🔁 Repeated Concepts & Operations
* **Node Structure:** Typically `val` (data) and pointers to children (e.g., `left`, `right` for binary trees).
* **Root:** The topmost node of the tree.
* **Leaf Node:** A node with no children.
* **Parent/Child/Sibling:** Relational terms for nodes.
* **Subtree:** A node and all its descendants.
* **Traversal Methods:**
    * **BFS (Level Order):** Explores level by level. Uses a **queue**.
    * **DFS (Depth-First Order):** Explores as deep as possible along each branch before backtracking.
        * **Pre-order:** Root -> Left -> Right
        * **In-order:** Left -> Root -> Right (useful for sorted output in BSTs)
        * **Post-order:** Left -> Right -> Root (useful for deletion/evaluation)
* **Recursion:** Many tree problems are naturally solved recursively due to their hierarchical structure.
* **Base Cases:** Crucial for recursive solutions (e.g., `if (node == nullptr) return ...`).

## 📚 Common Traps
* **Null Pointer Dereference:** Always check if a node pointer (`node`, `node->left`, `node->right`) is `nullptr` before accessing its members.
* **Incorrect Traversal Order:** Using the wrong traversal (BFS vs. DFS, or pre/in/post-order) for the problem's requirements.
* **Infinite Recursion:** Missing or incorrect base cases in recursive solutions.
* **Modifying Tree Structure:** If modifying, ensure all pointers are correctly updated to avoid breaking the tree or creating cycles.
* **Handling Empty Tree:** Ensure your code works correctly when the `root` is `nullptr`.

## 🔁 Time-Space Complexity Tradeoffs
* **Traversal (BFS/DFS):** **O(N)** time, where N is the number of nodes, as each node is visited once.
* **Space Complexity (Auxiliary):**
    * **BFS:** **O(W)**, where W is the maximum width (number of nodes at the widest level). In the worst case (complete binary tree), this is O(N).
    * **DFS (Recursive Stack):** **O(H)**, where H is the height of the tree. In the worst case (skewed tree), this is O(N). In the best case (balanced tree), this is O(log N).
    * **DFS (Iterative Stack):** Also O(H).

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem involve hierarchical data?
    * Do I need to visit every node?
    * Does the problem ask for properties related to depth, level, or paths?
    * Is recursion a natural fit for breaking down the problem?
* **Difficulty:** Easy to Hard (basic traversals are easy, complex tree manipulations or specific tree types can be hard).
