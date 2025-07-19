# Sliding Window - Summary

## 🔁 Repeated Sub-Patterns
* **Fixed-Size Window:** The window size `k` is constant throughout the traversal (e.g., maximum sum subarray of size `k`).
* **Dynamic/Shrinking Window:** The window size changes based on conditions, typically expanding until a condition is met, then shrinking from the left until the condition is no longer met or a new valid window is found (e.g., longest substring with K distinct characters, minimum window substring).
* **Running Sum/Minimum/Maximum:** Maintaining an aggregate value (sum, product, min, max) within the current window as it slides.

## 📚 Common Traps
* **Off-by-One Errors:** Incorrectly calculating window size or boundary conditions (e.g., `right - left + 1`).
* **Incorrect Initialization:** Not setting `max_length`, `min_length`, or `max_sum` variables appropriately (e.g., to 0, or `INT_MIN`/`INT_MAX`).
* **Missing Edge Cases:** Empty arrays, single-element arrays, or arrays where no valid window exists.
* **Updating Frequencies/Counts:** For dynamic windows, correctly adding elements when expanding and removing elements when shrinking is critical for hash maps/frequency arrays.
* **When to Shrink:** Clearly define the condition that triggers the window to shrink from the left.

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** Predominantly **O(N)**. Although there are nested loops (one for `right` pointer, one for `left` pointer), each element is typically processed (added to/removed from window) a constant number of times. This makes it highly efficient.
* **Space Complexity:** Often **O(1)** if only a few variables are needed (like in "Best Time to Buy and Sell Stock"). Can be **O(K)** or **O(AlphabetSize)** if a hash map/frequency array is used to store window contents (where K is the max number of distinct elements or alphabet size).

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem involve finding a subarray, substring, or contiguous segment?
    * Does it ask for the "maximum/minimum sum," "longest/shortest," or "count of subarrays/substrings" that satisfy a certain property?
    * Can the solution be found by iterating through the array/string only once?
    * Does the problem involve a constraint on the number of distinct elements, sum, or other properties within a contiguous range?
* **Difficulty:** Easy to Hard (concept is simple, but managing dynamic window conditions can be complex).
