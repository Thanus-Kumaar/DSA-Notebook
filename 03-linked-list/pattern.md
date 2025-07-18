# Linked Lists - Pattern

## When to Apply This Pattern
Apply the Linked List pattern when:
* You need a dynamic data structure where the **number of elements changes frequently**, and efficient insertions/deletions are required (especially in the middle of the sequence, given a pointer to the insertion/deletion point).
* The **physical contiguity of data in memory is not a requirement** (unlike arrays).
* You need to build sequences where elements point to the next, forming a chain.
* Problems involve concepts like **cycles, finding the middle element, reversing sections, or merging sorted sequences** by re-pointing existing nodes.

## Common Variations
* **Singly Linked List:** Each node points only to the next node. Most common in interviews.
* **Doubly Linked List:** Each node points to both the next and the previous node, allowing bidirectional traversal.
* **Circular Linked List:** The last node's `next` pointer points back to the head (or another node in the list), forming a loop.
* **Basic Operations:** Traversal, insertion at head/tail/middle, deletion.
* **Reversal:** Iterative or recursive methods to reverse the order of nodes.
* **Merging:** Combining two or more sorted linked lists (covered in "Merge Two Sorted Lists" - a "Merging Pointers" Two Pointers pattern).
* **Cycle Detection:** Using Fast & Slow pointers (Floyd's Tortoise and Hare) to detect if a list forms a loop (covered in "Linked List Cycle").
* **Finding Nth Node from End:** Can be done with two pointers with a `N` gap between them.
* **Removing Nth Node:** Often combines two pointers with careful previous node tracking.

## Key Implementation Insights
* **Node Definition:** Understand the `ListNode` (or `Node`) structure.
* **Pointer Management is Paramount:** Every operation revolves around correctly updating `next` (and `prev` for doubly) pointers. A single incorrect pointer update can break the entire list.
* **Dummy Head Node:** For problems where you're building a new list or modifying the head, a `dummyHead` (or `sentinel`) node simplifies the logic by providing a consistent starting point for your `current_tail` pointer and avoiding special handling for the very first node. The actual head of your result will be `dummyHead->next`.
* **Iterative vs. Recursive:** Many linked list problems (especially reversal) can be solved both iteratively (using loops and multiple pointers) and recursively (breaking down the problem into smaller subproblems). Understand both paradigms.
* **Drawing Diagrams:** For complex pointer manipulations, always draw out the nodes and pointers. This is invaluable for tracing and debugging.
* **Edge Cases:** Always consider and test:
    * Empty list (`head = nullptr`).
    * Single-node list.
    * Two-node list.
    * List with many nodes.
