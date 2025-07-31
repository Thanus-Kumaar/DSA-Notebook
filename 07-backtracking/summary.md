# Backtracking - Summary

## 🔁 Repeated Sub-Patterns
* **Combinations:** Selecting a subset of items where order doesn't matter (e.g., "Combinations" problem). Often involves a `start_index` to prevent duplicates.
* **Permutations:** Arranging items in all possible sequences where order matters. Often involves a `visited` array/set to track used items.
* **Subsets:** Generating all possible subsets (power set) of a given set, often including the empty set.
* **Combination Sum/Coin Change:** Finding combinations of numbers that sum to a target, with or without element reuse.
* **N-Queens/Sudoku Solver:** Problems involving placing items on a grid with constraints, requiring trial and error.
* **Pathfinding (on Grids/Graphs):** Finding all possible paths from a start to an end point, often with obstacles or specific rules.

## 📚 Common Traps
* **Forgetting to "Unchoose" (`pop_back()`):** This is the most critical error. Without undoing a choice, the `current_solution` state will be incorrect for subsequent branches, leading to wrong results or infinite loops.
* **Incorrect Base Cases:** Not defining clear stopping conditions for recursion (when a solution is found, or when a path is invalid).
* **Duplicate Solutions:** Not handling the "order doesn't matter" vs. "order matters" distinction correctly (e.g., generating `[1,2]` and `[2,1]` for combinations). This is often solved with `start_index` or `visited` arrays.
* **Infinite Recursion:** Missing or incorrect base cases that cause the function to call itself indefinitely.
* **Passing by Value vs. Reference:** Passing mutable data structures (like `std::vector`) by value instead of by reference (`&`) in recursive calls, leading to changes not being propagated or excessive copying.
* **Off-by-One Errors:** In loop bounds or `start_index` calculations.
* **Inefficient Pruning:** Not using optimizations like sorting to prune the search space earlier.

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** Generally **exponential** or **factorial**, as it explores a decision tree. The complexity is often proportional to the number of solutions multiplied by the work to build each solution. For `N` items, it can be $O(2^N)$ (for subsets), $O(N!)$ (for permutations), or $O(C(N,K) \cdot K)$ (for combinations).
* **Space Complexity:** **O(D)**, where `D` is the maximum depth of the recursion tree (often `N` or `K`). This is for the recursion call stack and the `current_solution` vector. The space for storing all results is additional and can also be exponential.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem ask for **all possible solutions** (combinations, permutations, subsets, arrangements, paths)?
    * Does it involve making a **sequence of choices**?
    * Can a choice at one step affect subsequent choices?
    * Is there a clear way to "undo" a choice to explore alternatives?
    * Does the input size suggest an exponential time complexity might be acceptable (e.g., N <= 20-30)?
* **Difficulty:** Medium to Hard (conceptually simple, but implementation and debugging can be tricky).
