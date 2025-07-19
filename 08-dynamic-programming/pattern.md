# Dynamic Programming (DP) - Pattern

## When to Apply This Pattern
Apply the Dynamic Programming pattern when:
* The problem asks for an **optimal value** (e.g., maximum profit, minimum cost, longest path) or the **number of ways** to do something.
* The problem exhibits **Optimal Substructure**: The optimal solution to the problem can be constructed from optimal solutions to its subproblems.
* The problem exhibits **Overlapping Subproblems**: The same subproblems are encountered and solved repeatedly by a naive recursive approach.

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

1.  **Define the DP State:** This is the most crucial step. What does `dp[i]` or `dp[i][j]` represent? Be extremely precise. For example, `dp[i]` could mean "the answer considering elements up to index `i`" or "the answer *ending at* index `i`." The nuance matters.

2.  **Formulate the Recurrence Relation:** How can you compute the current state `dp[i]` (or `dp[i][j]`) using already computed smaller states? Think about the *last action* or *last element* that could lead to the current state.
    * `dp[i] = f(dp[i-1], dp[i-2], ...)`
    * `dp[i][j] = g(dp[i-1][j], dp[i][j-1], dp[i-1][j-1], ...)`

3.  **Identify Base Cases:** These are the smallest subproblems whose solutions are known without further recursion. They initialize your DP table.
    * `dp[0]`, `dp[1]`, `dp[0][0]`, etc.

4.  **Choose Between Top-Down (Memoization) and Bottom-Up (Tabulation):**
    * **Top-Down (Memoization):**
        * **Approach:** Recursive function with a cache (e.g., `std::vector<int> memo` or `std::unordered_map`).
        * **Pros:** Only computes necessary subproblems. Often easier to write as it directly follows the recurrence.
        * **Cons:** Can incur recursion overhead; potential for stack overflow on very deep recursions.
    * **Bottom-Up (Tabulation):**
        * **Approach:** Iterative loops filling a DP table (e.g., `std::vector<int> dp` or `std::vector<std::vector<int>> dp`).
        * **Pros:** No recursion overhead; often easier to optimize space.
        * **Cons:** Requires careful determination of iteration order to ensure dependencies are met. May compute unnecessary subproblems.

5.  **Determine Iteration Order (for Tabulation):** Ensure that when you compute `dp[i]`, all `dp` values it depends on (`dp[i-1]`, `dp[i-2]`, etc.) have already been computed. For 2D DP, this often means iterating `i` (rows) and then `j` (columns), or vice-versa.

6.  **Space Optimization:** Look for opportunities to reduce the DP table size. If `dp[i]` only depends on a constant number of previous states (e.g., `dp[i-1]` and `dp[i-2]`), you can often use just a few variables instead of an entire array. For 2D DP, if a row/column only depends on the previous one, you might reduce `O(N*M)` to `O(min(N,M))`.

7.  **Draw the DP Table:** Especially for 2D DP, drawing a small table and manually filling in a few cells based on your recurrence and base cases is incredibly helpful for debugging and confirming your logic.
