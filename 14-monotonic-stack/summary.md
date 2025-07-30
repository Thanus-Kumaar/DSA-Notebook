# Monotonic Stack - Summary

## 💡 Core Idea
A Monotonic Stack is a stack data structure that maintains its elements in either a strictly increasing or strictly decreasing order (monotonic property). It's used to efficiently find the "next greater/smaller element" or "previous greater/smaller element" for each element in an array/sequence.

## 🔁 Repeated Sub-Patterns
* **Next Greater Element (to the Right):** Iterate from right to left. Pop elements from stack that are less than or equal to current. The stack top (if any) is the answer. Push current.
* **Next Smaller Element (to the Right):** Iterate from right to left. Pop elements from stack that are greater than or equal to current. The stack top (if any) is the answer. Push current.
* **Previous Greater Element (to the Left):** Iterate from left to right. Pop elements from stack that are less than or equal to current. The stack top (if any) is the answer. Push current.
* **Previous Smaller Element (to the Left):** Iterate from left to right. Pop elements from stack that are greater than or equal to current. The stack top (if any) is the answer. Push current.
* **Largest Rectangle in Histogram / Trapping Rain Water:** Problems that involve finding areas or volumes based on heights, where a monotonic stack helps find bounding elements.

## 📚 Common Traps
* **Incorrect Monotonicity:** Ensuring the stack maintains the correct increasing/decreasing order.
* **Loop Direction:** Choosing the correct traversal direction (left-to-right vs. right-to-left) based on whether you need "next" or "previous" elements.
* **Stack Element Storage:** Deciding whether to store values or indices in the stack. Storing indices is often more flexible as it allows calculating distances or accessing original values.
* **Empty Stack Check:** Always check `stack.empty()` before calling `stack.top()` or `stack.pop()`.
* **Handling Equal Elements:** Deciding whether `strictly greater/smaller` or `greater/smaller or equal` is required, and adjusting pop conditions (`<=` vs `<`, `>=` vs `>`).
* **Final Stack Elements:** Remembering that elements remaining in the stack at the end have no "next" (or "previous") greater/smaller element.

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** **O(N)**. Each element is pushed onto the stack exactly once and popped from the stack at most once. This linear time complexity is the primary advantage.
* **Space Complexity:** **O(N)** in the worst case (e.g., a strictly increasing or decreasing sequence), where the stack might store all `N` elements.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem involve finding the "next" or "previous" element that satisfies a certain condition (e.g., greater, smaller)?
    * Does a brute-force `O(N^2)` solution involve nested loops where the inner loop searches for such an element?
    * Can the problem be solved by iterating through the array once?
    * Are you looking for a bounding element (left or right) for each item?
* **Difficulty:** Medium (Identifying the pattern and implementing it correctly can be tricky initially).
