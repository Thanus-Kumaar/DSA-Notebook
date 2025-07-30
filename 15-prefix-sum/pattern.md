# Prefix Sum - Pattern

## When to Apply This Pattern
Apply the Prefix Sum pattern when:
* You need to calculate the **sum of elements within any contiguous subarray or subsegment** of an array (or submatrix of a 2D array) **repeatedly**.
* A naive approach of summing elements for each query would lead to `O(N)` per query, resulting in `O(Q*N)` total time (where Q is number of queries), which is too slow.
* The array/matrix elements are **static** (do not change) after initial setup.

## Common Variations
* **Basic 1D Prefix Sum:**
    * `prefix_sum[i]` = `nums[0] + ... + nums[i-1]`.
    * `prefix_sum` array is usually of size `N+1`, with `prefix_sum[0] = 0`.
    * Sum of `nums[l...r]` = `prefix_sum[r+1] - prefix_sum[l]`.
* **Basic 2D Prefix Sum (Prefix Sum Matrix):**
    * `prefix_sum[r][c]` = sum of rectangle from `(0,0)` to `(r-1, c-1)`.
    * Formula for `prefix_sum[r][c] = grid[r-1][c-1] + prefix_sum[r-1][c] + prefix_sum[r][c-1] - prefix_sum[r-1][c-1]`.
    * Sum of rectangle `(r1, c1)` to `(r2, c2)` = `prefix_sum[r2+1][c2+1] - prefix_sum[r1][c2+1] - prefix_sum[r2+1][c1] + prefix_sum[r1][c1]`.
* **Subarray Sum Equals K:**
    * Iterate through the array, calculate `current_sum`.
    * Use a hash map to store `(current_sum - k) -> count`. If `current_sum - k` exists in map, it means we found a subarray.
    * This leverages `sum[i...j] = prefix_sum[j] - prefix_sum[i-1]`.
* **Finding Pivot/Equilibrium Index:** Where left sum equals right sum.
* **Running Sum for Sliding Window:** While not a full prefix sum array, the concept of maintaining a sum as a window slides is related.

## Key Implementation Insights
* **Preprocessing Step:** Calculate the `prefix_sum` array/matrix once at the beginning. This takes `O(N)` or `O(M*N)` time.
* **Array Size and Indexing:**
    * For 1D: Create `prefix_sum` array of size `N+1`. `prefix_sum[0] = 0`. `prefix_sum[i]` stores sum up to `nums[i-1]`.
    * For 2D: Create `prefix_sum` matrix of size `(M+1)x(N+1)`. `prefix_sum[0][j]` and `prefix_sum[i][0]` are `0`.
* **Range Query Formula:** Memorize the formulas for `O(1)` range sum queries.
    * 1D: `sum(l, r) = prefix_sum[r+1] - prefix_sum[l]` (for 0-indexed `nums[l...r]`).
    * 2D: `sum(r1, c1, r2, c2) = prefix_sum[r2+1][c2+1] - prefix_sum[r1][c2+1] - prefix_sum[r2+1][c1] + prefix_sum[r1][c1]` (for 0-indexed `grid[r1...r2][c1...c2]`).
* **Handling Empty/Single Element Ranges:** The formulas should naturally handle these if base cases are set up correctly.
* **Immutability:** The original array/matrix should ideally not change after the prefix sum array is built. If it changes, the prefix sum array becomes invalid.
