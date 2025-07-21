# Heaps / Priority Queues - Summary

## 💡 Core Idea
A Heap is a specialized tree-based data structure that satisfies the heap property: if P is a parent node of C, then the value of P is either greater than or equal to (Max-Heap) or less than or equal to (Min-Heap) the value of C. A Priority Queue is an abstract data type (ADT) that implements a heap, providing efficient retrieval of the highest (or lowest) priority element.

## 🔁 Repeated Sub-Patterns
* **Kth Smallest/Largest Element:** Finding the Kth smallest or largest element efficiently without fully sorting the array. (e.g., using a Min-Heap of size K for Kth largest, or a Max-Heap of size K for Kth smallest).
* **Top K Elements:** Retrieving the top K most frequent, largest, or smallest elements.
* **Merge K Sorted Lists/Arrays:** Efficiently merging multiple sorted collections.
* **Scheduling/Task Management:** Prioritizing tasks based on certain criteria (e.g., shortest job first, earliest deadline).
* **Dijkstra's Algorithm / Prim's Algorithm:** Using a min-priority queue to efficiently select the next edge/vertex with the minimum weight.
* **Median of a Data Stream:** Maintaining the median efficiently as elements are added (often uses two heaps).

## 📚 Common Traps
* **Default Heap Type (C++):** `std::priority_queue` is a **max-heap by default**. For a min-heap, you must explicitly specify `std::greater<T>`.
* **Empty Heap Access:** Calling `top()` or `pop()` on an empty priority queue will lead to runtime errors. Always check `empty()` first.
* **Incorrect Comparator:** Defining a custom comparator incorrectly can break the heap property.
* **Time Complexity Miscalculation:** Forgetting that `push` and `pop` operations are $O(\log N)$ (where N is heap size), not $O(1)$.
* **Space Complexity:** Forgetting that storing N elements in a heap takes $O(N)$ space.

## 🔁 Time-Space Complexity Tradeoffs
* **Insertion (`push`):** $O(\log M)$, where M is the current number of elements in the heap.
* **Extraction (`pop`):** $O(\log M)$, where M is the current number of elements in the heap.
* **Access Top (`top`):** $O(1)$.
* **Building a Heap from N elements:** $O(N)$ (more efficient than N individual pushes, which would be $O(N \log N)$).
* **Space Complexity:** $O(M)$, where M is the maximum number of elements stored in the heap at any given time.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Do you need to repeatedly find the **minimum or maximum element** from a collection?
    * Is the collection **dynamic** (elements are added/removed)?
    * Do you need to find the **Kth smallest/largest** element without a full sort?
    * Are you asked to manage a collection where elements have **priorities**?
    * Does the problem involve merging multiple sorted streams/lists?
* **Difficulty:** Medium (basic usage is easy, complex applications like two heaps for median can be harder).
