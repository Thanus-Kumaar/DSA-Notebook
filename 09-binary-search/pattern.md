# Binary Search - Pattern

## When to Apply This Pattern
Apply the Binary Search pattern when:
* You need to **efficiently search for an element** within a **sorted** collection (array, list).
* The problem involves finding a **specific value**, a **boundary**, or a **threshold** in a sorted or monotonically changing range.
* You are asked for an **O(log N)** time complexity solution on a linear data structure.
* The problem can be framed as finding a value `X` such that a property `P(X)` is true, and `P(X)` has a monotonic behavior (e.g., if `P(X)` is true, then `P(X+1)` is also true). This is known as "binary search on the answer."

## Common Variations
* **Standard Binary Search:** Find the exact index of a `target` in a sorted array.
* **Finding First/Last Occurrence:** Modify the search to continue even after finding a match, to locate the very first or very last instance of a duplicate `target`.
* **Finding Insertion Point:** Determine where an element would be inserted to maintain sorted order.
* **Search in Rotated Sorted Array:** Adapt the binary search logic to handle a sorted array that has been rotated. The key is to identify which half of the current search space is sorted and then decide if the target lies within that sorted half or the other (unsorted) half.
* **Finding Minimum/Maximum in Rotated Sorted Array:** A specific case of binary search on a rotated array to find the pivot point (which is the minimum element).
* **Binary Search on the Answer/Result:** When the possible answers to a problem form a monotonic range. You binary search on this range of *answers* (not indices), and for each `mid` value, you have a helper function to check if `mid` is a valid answer.
* **Square Root, Nth Root:** Finding integer square roots or Nth roots using binary search on the range of possible answers.

## Key Implementation Insights
* **Loop Condition (`while (left <= right)`):** This is the most common and robust condition for standard binary search. It ensures the loop continues as long as a valid search space exists, including when `left == right` (single element remaining).
* **Midpoint Calculation (`int mid = left + (right - left) / 2;`):** This calculation prevents potential integer overflow that `(left + right) / 2` might cause if `left` and `right` are very large.
* **Pointer Updates (`left = mid + 1;`, `right = mid - 1;`):**
    * If `nums[mid] == target`: Return `mid`.
    * If `nums[mid] < target`: The target must be in the right half (elements greater than `nums[mid]`). So, `left = mid + 1`.
    * If `nums[mid] > target`: The target must be in the left half (elements less than `nums[mid]`). So, `right = mid - 1`.
* **Maintaining Invariants:** Crucially, ensure that after each iteration, the `target` (if it exists) *must still be within the new `[left, right]` search space*.
* **Handling Rotated Arrays:**
    1.  First, check if `nums[mid]` is the `target`.
    2.  Then, determine which half (`[left, mid]` or `[mid, right]`) is **sorted** by comparing `nums[left]` with `nums[mid]`.
    3.  If the left half is sorted (`nums[left] <= nums[mid]`):
        * If `target` is within `[nums[left], nums[mid])`, search left: `right = mid - 1`.
        * Else, search right (target is in the unsorted part): `left = mid + 1`.
    4.  If the right half is sorted (`nums[left] > nums[mid]`):
        * If `target` is within `(nums[mid], nums[right]]`, search right: `left = mid + 1`.
        * Else, search left (target is in the unsorted part): `right = mid - 1`.
* **Edge Cases:** Always consider empty arrays, single-element arrays, and arrays where the target is the first/last element or not present.
* **Recursion vs. Iteration:** Iterative binary search is generally preferred in interviews to avoid potential stack overflow issues with very large inputs, although recursive solutions are conceptually similar.
