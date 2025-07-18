# Two Pointers - Summary

## 🔁 Repeated Sub-Patterns
* **Converging/Opposite Pointers:** Pointers start at ends of a single data structure, move inwards (e.g., Palindrome check, reversing, Two Sum on sorted array).
* **Parallel/Same-Direction Pointers (Read/Write):** Both pointers move in the same direction on a single data structure (e.g., moving zeros, removing duplicates in-place). One pointer reads, another writes/places.
* **Merging Pointers:** Pointers traverse separate sorted data structures (e.g., merging two sorted lists/arrays), picking the smaller element to build a new sorted output.

## 📚 Common Traps
* **Pointer Crossing/Bounds:** Ensure loop conditions (`left < right`, `ptr != nullptr`) prevent pointers from crossing incorrectly or going out of bounds.
* **Off-by-One Errors:** Be careful with initial pointer placements and final loop conditions, especially when dealing with array indices (`length - 1`).
* **Forgetting to Advance Pointers:** Ensure *all* relevant pointers (read, write, current_merged_tail, list1, list2) are advanced correctly within the loop.
* **Misinterpreting "In-Place":** Understand if it means literally modifying the original array/list without extra arrays (O(1) space) or just not creating a copy of the *entire* structure.
* **Maintaining Relative Order:** If required, simple swaps often don't work; you might need a read/write strategy.

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** Predominantly **O(N)** or **O(M+N)**, as each pointer typically traverses the data structure(s) at most once. Highly efficient.
* **Space Complexity:** Often **O(1)**, as it uses only a constant number of auxiliary pointers. This is its key advantage over hashing for some problems.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Are you dealing with sorted arrays/lists, or do you need to process from both ends?
    * Do you need to perform an in-place modification or filtering?
    * Are you merging two or more sorted sequences?
    * Can you avoid extra space by processing elements with pointers?
* **Difficulty:** Easy to Medium (concepts are simple, but application can be tricky).
