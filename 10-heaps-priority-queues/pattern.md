# Heaps / Priority Queues - Pattern

## When to Apply This Pattern
Apply the Heaps / Priority Queues pattern when:
* You need to **efficiently retrieve the minimum or maximum element** from a collection of items.
* The collection of items is **dynamic**, meaning elements are frequently added or removed.
* You need to find the **Kth smallest or Kth largest element** in an unsorted array or stream of data, more efficiently than a full sort.
* Problems involve **prioritization**, scheduling, or maintaining an ordered subset of elements.
* You are dealing with **merging multiple sorted streams or lists**.

## Common Variations
* **Kth Smallest/Largest Element:**
    * **Kth Largest:** Use a **min-heap of size `k`**. Iterate through elements, push onto heap, if `heap.size() > k`, `pop()`. The `top()` is the answer.
    * **Kth Smallest:** Use a **max-heap of size `k`**. Iterate through elements, push onto heap, if `heap.size() > k`, `pop()`. The `top()` is the answer.
* **Top K Frequent Elements:** Use a min-heap of `(frequency, element)` pairs.
* **Merge K Sorted Lists/Arrays:** Use a min-heap to store the current smallest element from each list/array.
* **Median of a Data Stream:** Maintain two heaps (a max-heap for the lower half and a min-heap for the upper half) to find the median in $O(\log N)$ time per insertion.
* **Event/Task Scheduling:** Store events/tasks in a min-priority queue based on their execution time or priority.
* **Graph Algorithms:** Essential for algorithms like Dijkstra's (shortest path from source) and Prim's (minimum spanning tree) to efficiently extract the minimum-weight edge/vertex.

## Key Implementation Insights
* **Choose the Right Heap Type:**
    * **Max-Heap:** If you need to quickly access/remove the *largest* element. (Default `std::priority_queue<T>` in C++).
    * **Min-Heap:** If you need to quickly access/remove the *smallest* element. (Requires `std::priority_queue<T, std::vector<T>, std::greater<T>>` in C++).
* **Heap Operations:**
    * `push(value)`: Adds an element.
    * `pop()`: Removes the top element.
    * `top()`: Peeks at the top element.
    * `size()`, `empty()`: Check state.
* **Fixed-Size Heap Strategy (for Kth problems):**
    * Always ensure the heap size does not exceed `k`.
    * If `heap.size() > k`, always `pop()` the top element. This ensures that the heap contains only the `k` most relevant elements (either largest or smallest, depending on heap type).
* **Custom Objects/Pairs:** When storing custom objects or pairs (e.g., `(frequency, char)`), you'll need to define a custom comparator or overload `operator<` (for default `std::priority_queue`) or `operator>` (for `std::greater` min-heap) to correctly define priority.
* **Edge Cases:** Handle empty inputs, `k=1`, `k=N`, and cases where all elements are the same.
