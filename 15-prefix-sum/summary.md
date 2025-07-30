# Prefix Sum - Summary

## 💡 Core Idea
The Prefix Sum (or Cumulative Sum) technique is used to efficiently calculate the sum of elements within any contiguous subarray or subsegment of an array in `O(1)` time, after an initial `O(N)` preprocessing step. It avoids repeated `O(N)` summations for each query.

## 🔁 Repeated Sub-Patterns
* **1D Prefix Sum:** For single arrays, `prefix_sum[i]` stores the sum of elements from index 0 to `i-1`.
    * Sum of `nums[l...r]` = `prefix_sum[r+1] - prefix_sum[l]`.
* **2D Prefix Sum (Prefix Sum Matrix):** For 2D arrays/matrices, `prefix_sum[r][c]` stores the sum of elements in the rectangle from `(0,0)` to `(r-1, c-1)`.
    * Sum of rectangle `(r1, c1)` to `(r2, c2)` can be found using 4 lookups.
* **Equilibrium Index/Pivot Index:** Finding an index where the sum of elements to its left equals the sum to its right.
* **Subarray Sum Equals K:** Counting subarrays that sum to a target `k` (often combined with a hash map).
* **Range Sum Queries:** Any problem requiring frequent sums over arbitrary ranges.

## 📚 Common Traps
* **Off-by-One Errors:** The most frequent trap. Careful with 0-based vs. 1-based indexing for `prefix_sum` array and range calculations.
    * `prefix_sum[0]` usually represents sum up to index -1 (i.e., 0).
    * `prefix_sum` array size: `N+1` for 1D, `(M+1)x(N+1)` for 2D.
* **Incorrect Range Calculation:** Forgetting to subtract the correct `prefix_sum` value.
* **Negative Numbers:** Prefix sums work correctly with negative numbers, but be mindful of their impact on sums.
* **Modifying Original Array:** If the original array changes, the prefix sum array must be recomputed or updated.

## 🔁 Time-Space Complexity Tradeoffs
* **Preprocessing Time:** **O(N)** for 1D, **O(M*N)** for 2D.
* **Query Time:** **O(1)** for any range sum query.
* **Space Complexity:** **O(N)** for 1D, **O(M*N)** for 2D, to store the prefix sum array/matrix. This is the tradeoff for `O(1)` query time.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem involve **sums of contiguous subarrays/subsegments**?
    * Are there **multiple queries** for range sums on an unchanging array?
    * Can the problem be simplified by knowing the sum of any range in `O(1)` time?
    * Does the problem involve finding a subarray with a specific sum (`k`) or property?
* **Difficulty:** Easy to Medium (concept is easy, but applying it to complex problems or optimizing space can be medium).
