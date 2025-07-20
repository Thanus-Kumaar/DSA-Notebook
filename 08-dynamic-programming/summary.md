# Dynamic Programming (DP) - Summary

## 💡 Core Idea
Dynamic Programming is an algorithmic technique for solving complex problems by breaking them down into simpler subproblems. It solves each subproblem only once and stores their solutions to avoid redundant computations, especially when subproblems overlap.

## 🔁 Repeated Sub-Patterns
* **1D DP (Sequences/Arrays):** Solutions where the state depends on one variable, often an index `i` (e.g., `dp[i]`). Represents max/min/count for a prefix or suffix of an array/string.
* **2D DP (Grids/Strings):** Solutions where the state depends on two variables, often indices `i` and `j` (e.g., `dp[i][j]`). Common for grid traversals, string comparisons, or problems involving two sequences.
* **Space Optimization (Rolling Array):** Reducing auxiliary space complexity from `O(N)` or `O(N*M)` to `O(1)` or `O(min(N,M))` by observing that `dp[i]` only depends on a constant number of previous states (e.g., `dp[i-1], dp[i-2]`).
* **Knapsack Type Problems:** Choosing items to maximize value under a weight/capacity constraint.
* **Interval DP:** Solving problems on subarrays/subsequences/strings by considering intervals `[i, j]`.
* **Digit DP:** Counting numbers with specific properties by building them digit by digit.
* **Tree DP:** DP applied to tree structures, often involving calculations on subtrees.

## 📚 Common Traps
* **Incorrect State Definition:** This is the most critical trap. If `dp[i]` or `dp[i][j]` doesn't correctly represent the subproblem's solution, the recurrence will be flawed.
* **Wrong Recurrence Relation:** Incorrectly defining how `dp[i]` relates to smaller subproblems. Think about **all possible "last actions"** that lead to the current state.
* **Missing/Incorrect Base Cases:** Base cases are the foundation; if they're wrong, the entire table will be wrong.
* **Incorrect Order of Computation:** In bottom-up DP, ensuring that all required `dp` values are computed *before* they are used.
* **Off-by-One Errors:** Common with array indexing (0-based vs. 1-based) or string lengths.
* **Overlapping Subproblems Not Handled:** Using pure recursion without memoization/tabulation, leading to exponential time complexity.
* **Memory Limit Exceeded (MLE):** Forgetting to optimize space when `N` or `M` are large.

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:**
    * Generally **O(N)** for 1D DP, **O(N*M)** for 2D DP, where N and M are the dimensions of the state space. Each state is computed once.
    * The complexity is typically `(Number of States) * (Time to compute each State)`.
* **Space Complexity:**
    * Generally **O(N)** for 1D DP, **O(N*M)** for 2D DP, for storing the DP table.
    * Can often be optimized to **O(1)** or **O(min(N,M))** if current state only depends on a constant number of previous states (e.g., using a "rolling array" or just a few variables).

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem ask for an **optimal value** (max/min) or a **count** of ways?
    * Can the problem be broken down into **smaller, overlapping subproblems**?
    * Can the solution to a larger problem be built from solutions to smaller subproblems (**optimal substructure**)?
    * Does a naive recursive solution recompute the same subproblems repeatedly?
    * Are the constraints on `N` (or `N*M`) too large for brute-force exponential solutions (e.g., `N > 20-30`) but suitable for polynomial time?
    * Does the problem involve making a sequence of **decisions** (e.g., to take an item or not, to move right or down)?
* **Difficulty:** Medium to Hard (identifying and formulating DP is often the hardest part).
