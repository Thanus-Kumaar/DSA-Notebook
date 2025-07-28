# Greedy Algorithms - Summary

## 💡 Core Idea
Greedy algorithms make the locally optimal choice at each step with the hope that this choice will lead to a globally optimal solution. They do not revisit or undo previous choices. The key is proving that the "greedy choice property" holds: a locally optimal choice is always part of a global optimal solution.

## 🔁 Repeated Sub-Patterns
* **Activity Selection/Scheduling:** Maximizing tasks with non-overlapping intervals (e.g., choose activity that finishes earliest).
* **Interval Problems:** Selecting intervals based on start/end times to maximize/minimize some property.
* **Coin Change (Minimum Coins):** Often a DP problem, but for canonical coin systems, a greedy approach works.
* **Maximizing/Minimizing Sum/Profit/Cost:** Making choices to achieve an extreme value (e.g., "Jump Game" - maximizing reach).
* **Huffman Coding:** Building an optimal prefix code.
* **Minimum Spanning Tree (Prim's, Kruskal's):** These are classic greedy algorithms in graph theory.

## 📚 Common Traps
* **Failing Greedy Choice Property:** The most common mistake. Applying greedy where it doesn't lead to global optimality. Often needs a formal proof or counterexample.
* **Shortsightedness:** Making a local choice that appears best but makes the global optimum impossible or suboptimal later.
* **Incorrect Sorting:** Many greedy algorithms require the input to be sorted based on a specific criterion (e.g., end time, weight ratio).
* **Edge Cases:** Empty inputs, single elements, all identical values, very large/small values.
* **Confusion with DP:** Sometimes DP can be optimized to a greedy approach if certain conditions hold (e.g., 0/1 Knapsack is DP, Fractional Knapsack is greedy).

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** Often very efficient, typically **O(N log N)** (due to initial sorting) or **O(N)** (if input is already suitable or no sorting is needed). Each decision is usually O(1) or O(log N) with data structures.
* **Space Complexity:** Usually **O(1)** or **O(N)** (for sorting or temporary storage).

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem ask for an **optimal value** (max/min)?
    * Does making the "best" choice *right now* seem like it wouldn't mess up future optimal choices?
    * Can the problem be solved by iterating through the input once, making a decision at each step, and never needing to backtrack?
    * Can you prove that a locally optimal choice leads to a global optimum? (Hardest part for competitive programming).
* **Difficulty:** Medium (Identifying when it applies and proving correctness is hard; implementation is often easy).
