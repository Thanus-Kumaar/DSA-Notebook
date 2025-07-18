# Linked Lists - Summary

## 🔁 Repeated Concepts & Operations
* **Node Structure:** `val` (data) and `next` (pointer to the subsequent node).
* **Head/Tail:** Pointers to the first and last nodes.
* **Traversal:** Iterating through nodes using `current = current->next`.
* **Insertion/Deletion:** Modifying `next` pointers to add/remove nodes.
* **Dummy Head Node:** A common sentinel node used to simplify operations, especially when building a new list or handling insertions at the beginning, by providing a consistent starting point.
* **Fast & Slow Pointers (Floyd's Cycle Finding):** Used for cycle detection, finding middle of list, or specific Kth node from end.

## 📚 Common Traps
* **Null Pointer Dereference:** Always check if a pointer (`ptr` or `ptr->next`) is `nullptr` before trying to access its members (`ptr->val`, `ptr->next`). This is the most frequent linked list error.
* **Off-by-One Errors:** Misjudging loop conditions (e.g., `ptr->next != nullptr` vs. `ptr != nullptr`) leading to skipping the last node or going out of bounds.
* **Losing the Head:** Forgetting to update the `head` pointer if the first node changes (e.g., during insertion at beginning, reversal).
* **Broken Chains/Memory Leaks:** Incorrectly updating `next` pointers can orphan nodes (creating memory leaks) or break the list, making subsequent nodes unreachable.
* **Single-Node/Empty List Edge Cases:** Always test these scenarios thoroughly.

## 🔁 Time-Space Complexity Tradeoffs
* **Access/Search:** $O(N)$ - requires traversal from the head.
* **Insertion/Deletion:** $O(1)$ *if* you have a pointer to the previous node (for deletion) or the insertion point. Otherwise, $O(N)$ to find the position.
* **Space Complexity:** $O(N)$ for the list itself (each node takes space). Operations are often $O(1)$ auxiliary space if done in-place.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem involve sequences where insertions/deletions in the middle are frequent?
    * Do I need to manage dynamic memory explicitly (C++)?
    * Am I dealing with cycles or need to find a middle element efficiently?
    * Does the solution need to be in-place (modifying pointers, not creating new nodes)?
* **Difficulty:** Easy to Hard (basic ops are easy, complex pointer manipulations and multi-pointer problems can be hard).
