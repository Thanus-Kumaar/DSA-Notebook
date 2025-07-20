# Dynamic Programming (DP) - Pattern

## When to Apply This Pattern
Apply the Dynamic Programming pattern when:
* The problem asks for an **optimal value** (e.g., maximum profit, minimum cost, longest path) or the **number of ways** to do something.
* The problem exhibits **Optimal Substructure**: The optimal solution to the problem can be constructed from optimal solutions to its subproblems. This means `solution(large_problem) = combine(solution(smaller_problem_1), solution(smaller_problem_2), ...)`.
* The problem exhibits **Overlapping Subproblems**: The same subproblems are encountered and solved repeatedly by a naive recursive approach. Drawing a recursion tree often reveals this.

## Common Variations
* **Sequence/Array DP (1D):** Problems on arrays or strings where `dp[i]` depends on `dp[i-1]`, `dp[i-2]`, etc. (e.g., "Climbing Stairs", "House Robber", "Maximum Subarray").
* **Grid/Path DP (2D):** Problems on 2D grids where `dp[i][j]` depends on `dp[i-1][j]`, `dp[i][j-1]`, `dp[i-1][j-1]`. (e.g., "Unique Paths", "Minimum Path Sum").
* **Longest Common Subsequence (LCS) Type:** Comparing two sequences. `dp[i][j]` typically relates to prefixes of length `i` and `j`. (e.g., "LCS", "Edit Distance", "Longest Palindromic Subsequence").
* **Knapsack Problems:**
    * **0/1 Knapsack:** Each item can either be taken or not taken.
    * **Unbounded Knapsack:** Each item can be taken multiple times.
    * **Coin Change:** Finding minimum coins or number of ways to make change.
* **Interval DP:** Problems defined over a range `[i, j]`, where `dp[i][j]` might depend on `dp[i][k]` and `dp[k+1][j]` for `i <= k < j`. (e.g., "Burst Balloons", "Matrix Chain Multiplication").
* **Tree DP:** DP applied to tree structures, often involving calculations on subtrees.
* **Digit DP:** Used to count numbers within a range `[L, R]` that satisfy certain digit-based properties.

## Key Implementation Insights

1.  **Define the DP State (`dp[i]`, `dp[i][j]`, etc.):** This is the most crucial step. What exactly does each cell in your DP table represent? Be extremely precise.
    * Common interpretations:
        * "The answer considering elements up to index `i`."
        * "The answer *ending at* index `i`."
        * "A boolean indicating if a subproblem is possible."
        * "The max/min value achievable using elements `0` to `i`."
        * "The count of ways to achieve something using elements `0` to `i`."
        * For 2D: "The answer for prefixes/subsequences of length `i` and `j`."

2.  **Formulate the Recurrence Relation:** How can you compute the current state `dp[i]` (or `dp[i][j]`) using already computed smaller states?
    * **Think about the "last action" or "last element considered"** that could lead to the current state.
    * If you're at `dp[i]`, what were the immediate previous states you could have transitioned from?
    * `dp[i] = f(dp[i-1], dp[i-2], ...)`
    * `dp[i][j] = g(dp[i-1][j], dp[i][j-1], dp[i-1][j-1], ...)` (for 2D)

3.  **Identify Base Cases:** These are the smallest subproblems whose solutions are known without further recursion. They initialize your DP table.
    * Often `dp[0]`, `dp[1]`, `dp[0][0]`, or boundary conditions in a grid.
    * Consider empty sets, single elements, or starting points.

4.  **Choose Between Top-Down (Memoization) and Bottom-Up (Tabulation):**
    * **Top-Down (Memoization):**
        * **Approach:** Recursive function with a cache (e.g., `std::vector<int> memo` or `std::unordered_map`).
        * **Pros:** Only computes necessary subproblems. Often easier to write as it directly follows the recurrence. Handles irregular dependency graphs naturally.
        * **Cons:** Can incur recursion overhead; potential for stack overflow on very deep recursions.
    * **Bottom-Up (Tabulation):**
        * **Approach:** Iterative loops filling a DP table (e.g., `std::vector<int> dp` or `std::vector<std::vector<int>> dp`).
        * **Pros:** No recursion overhead; often easier to optimize space.
        * **Cons:** Requires careful determination of iteration order to ensure dependencies are met. May compute unnecessary subproblems if the dependency graph is sparse.

5.  **Determine Iteration Order (for Tabulation):** Crucial for bottom-up DP. Ensure that when you compute `dp[i]`, all `dp` values it depends on (`dp[i-1]`, `dp[i-2]`, etc.) have already been computed. For 2D DP, this often means iterating `i` (rows) from `0` to `m-1` and then `j` (columns) from `0` to `n-1` (or vice-versa, depending on dependencies).

6.  **Space Optimization:** Look for opportunities to reduce the DP table size.
    * If `dp[i]` only depends on a constant number of previous states (e.g., `dp[i-1]` and `dp[i-2]`), you can often use just a few variables instead of an entire array (e.g., "Climbing Stairs" to O(1) space).
    * For 2D DP, if a row/column only depends on the previous one, you might reduce `O(N*M)` to `O(min(N,M))` by using a "rolling array" (e.g., only keeping two rows/columns).

7.  **Draw the DP Table:** Especially for 2D DP, drawing a small table and manually filling in a few cells based on your recurrence and base cases is incredibly helpful for debugging and confirming your logic. This visual aid clarifies dependencies.

8.  **Path Reconstruction (if needed):** If the problem asks for the actual path/sequence, not just the count or value, you might need to store additional information (e.g., which choice led to the optimal value) in the DP table, or re-trace the DP table backward from the final state.
