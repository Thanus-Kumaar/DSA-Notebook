# Bitmasking - Pattern

## When to Apply This Pattern
Apply the Bitmasking pattern when:
* A problem requires solving for all possible **subsets** of a given set of `N` items.
* The number of items `N` is **small** (typically `N <= 20`), making an exponential `O(2^N)` solution feasible.
* The state of a Dynamic Programming or graph traversal problem needs to include information about which items have been "visited" or "used."
* Bitwise operators can provide a highly efficient `O(1)` way to manage these states.

## Common Variations
* **Dynamic Programming (DP) on Subsets:** The most common application. A DP table `dp[mask]` stores the solution for the subset represented by `mask`. The recurrence typically involves iterating through the bits of the mask to move from smaller subsets to larger ones.
    * Example: `dp[mask] = f(dp[mask with a bit removed], ...)`.
* **State-Expanded BFS/DFS:** Using a bitmask to track the set of visited nodes in a graph traversal. The queue stores `(node, mask)` pairs. This is essential for problems like finding the shortest path that visits all nodes, which a simple `visited` array cannot solve.
* **Subset Sum:** Finding if a subset sums to a target. Can be solved with a DP bitmask approach.
* **Permutations/Combinations:** Bitmasking can be used to track used elements in a backtracking approach instead of a boolean array.
* **Maximum XOR:** A Trie can be built on the binary representations of numbers, but bitmasking is the core concept of using binary representations.

## Key Implementation Insights
* **Representing the Set:** A single integer `mask` of `N` bits represents the set. `(1 << i)` is the mask for the `i`-th item.
* **Key Bitwise Operators:**
    * **Checking an item:** `if (mask & (1 << i))` - returns `true` if item `i` is in the set.
    * **Adding an item:** `new_mask = mask | (1 << i)`
    * **Removing an item:** `new_mask = mask & ~(1 << i)`
    * **Iterating through subsets:** Loop `mask` from `1` to `(1 << N) - 1`.
    * **Final State:** The mask `(1 << N) - 1` represents the set with all `N` items.

* **DP State Definition:** The state is typically `dp[mask]`. For problems like "Shortest Path Visiting All Nodes," the state needs to be `dp[mask][current_node]` because the cost to a specific node depends on the set of nodes you took to get there.

* **Time and Space Complexity:** Be mindful that the `O(2^N)` time and space complexity means this pattern is only feasible for small `N` (around `20` to `22`).
