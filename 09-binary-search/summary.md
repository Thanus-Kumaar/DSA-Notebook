# Binary Search - Summary

## 💡 Core Idea
Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

## 🔁 Repeated Sub-Patterns
* **Standard Search:** Finding a specific target value in a sorted array.
* **Finding First/Last Occurrence:** Locating the first or last index of a duplicate element in a sorted array.
* **Finding Boundary/Threshold:** Searching for the first element greater than/equal to a value, or the last element less than/equal to a value.
* **Search in Rotated Sorted Array:** Adapting binary search to arrays that are sorted but have been rotated at an unknown pivot.
* **Binary Search on Answer/Result:** When the search space is not an array, but rather the range of possible answers to a problem, and a function exists to check if a given "answer" is valid (monotonic property).
* **Finding Minimum/Maximum in Rotated Sorted Array:** A specific application of binary search to find the pivot point.

## 📚 Common Traps
* **Off-by-One Errors:** Incorrectly setting `left`, `right`, or `mid` boundaries (`mid+1`, `mid-1`, `left <= right` vs. `left < right`). This is the most common source of bugs.
* **Integer Overflow:** `(left + right) / 2` can overflow if `left` and `right` are very large. Use `left + (right - left) / 2` instead.
* **Incorrect Loop Conditions:** Using `left < right` when `left <= right` is needed, or vice-versa, leading to infinite loops or missing the target.
* **Improper Handling of Duplicates:** For problems involving first/last occurrence, standard binary search needs modification.
* **Not Maintaining Invariants:** Failing to ensure that the `target` *always* remains within the `[left, right]` search space.
* **Applying to Unsorted Data:** Binary search requires the data to be sorted (or to have a monotonic property).

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** **O(log N)**. In each step, the search space is halved, leading to logarithmic time complexity. This is extremely efficient for large datasets.
* **Space Complexity:** **O(1)** for iterative implementations. **O(log N)** for recursive implementations due to the recursion stack. Iterative is generally preferred.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Is the input data **sorted** or can it be easily sorted?
    * Does the problem involve finding a specific element, a boundary, or a minimum/maximum value within a range?
    * Is there a **monotonic property** involved (e.g., if `X` is true, then all `Y > X` are also true)? This is key for "binary search on answer" problems.
    * Is the required time complexity **O(log N)**?
* **Difficulty:** Easy to Medium (conceptually simple, but variations and edge cases can make it tricky).
