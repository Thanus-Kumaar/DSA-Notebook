# Bitmasking - Summary

## 💡 Core Idea
Bitmasking is a technique for representing a **set of items or a state** using a single integer. It leverages the binary representation of numbers and bitwise operators to perform fast, `O(1)` operations on these sets, such as adding, removing, or checking for an item's existence. It is most effective when the number of items (`N`) is small (typically `N <= 20`).

## 🔁 Repeated Sub-Patterns
* **DP with Bitmasking:** The most common application. A DP table state `dp[mask][...]` stores the optimal solution for the subset of items represented by the `mask`.
* **State-Expanded BFS/DFS:** Using a bitmask to track the set of visited nodes in a graph traversal, enabling the algorithm to find the shortest path that visits all nodes.
* **Subset Generation:** Iterating through all `2^N` possible subsets by looping from `0` to `2^N - 1`.
* **Fast Bitwise Operations:** Using bitwise operators for fast calculations (e.g., counting set bits with `__builtin_popcount`).

## 📚 Common Traps
* **Integer Overflow:** Using bitmasks for `N > 64` can lead to overflow with standard integer types.
* **Off-by-One Errors:** Mismanaging bit indices, especially with `0`-based vs. `1`-based problem indexing.
* **Incorrect Operator Usage:** Confusing `|` (OR) for adding a bit with `&` (AND) for checking a bit.
* **Inefficient Brute-Force:** Applying bitmasking to a problem where `2^N` is too large (`N > 20`).

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** The total complexity is often `O(2^N * N)` or `O(2^N * N^2)`. The bitwise operations themselves are `O(1)`.
* **Space Complexity:** `O(2^N)` to store the DP table.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * The problem involves **subsets** or a **power set** of items.
    * The number of items `N` is **small** (typically `< 20`).
    * You need to track a complex state of visited items or a subset of items for a DP solution.
* **Difficulty:** Hard (The conceptual leap to using a bitmask for state is the hardest part).
