# Sliding Window - Pattern

## When to Apply This Pattern
Apply the Sliding Window pattern when:
* You are given a **linear data structure** (array, string, linked list) and need to find a **contiguous sub-sequence** (subarray, substring) that satisfies a certain condition.
* The problem asks for the **maximum/minimum** of something within a range, or the **longest/shortest** sub-sequence meeting a criteria.
* A **brute-force approach** would involve nested loops (e.g., `O(N^2)` to check all subarrays), and you need to optimize it to **O(N)**.
* You can efficiently **add/remove elements from the "ends"** of a dynamic range.

## Common Variations
* **Maximum Sum Subarray of Fixed Size K:** Maintain a sum within a window of size `k`, slide it one element at a time.
* **Longest Substring Without Repeating Characters:** Expand window, use a hash set/map to track characters. If repeat, shrink from left.
* **Minimum Window Substring:** Find the smallest substring containing all characters from a target string. Uses two pointers and a frequency map.
* **Best Time to Buy and Sell Stock:** (Our recent problem!) This is an implicit sliding window. `min_price` acts as the left boundary of the window (buy day), and `current_price` acts as the right boundary (sell day). The window dynamically adjusts its left boundary (`min_price`) to always be the lowest point encountered so far.
* **Subarray Sum Equals K:** Count subarrays whose sum equals a target `k`. Often combines with a hash map for prefix sums.

## Key Implementation Insights
* **Two Pointers (Left & Right):** Use two pointers, `left` (start of window) and `right` (end of window).
* **Expand Window:** Increment `right` pointer to include new elements. Update window-specific metrics (sum, count, frequencies).
* **Shrink Window (Conditional):** If the window violates a condition (e.g., sum too large, too many distinct characters), increment `left` pointer to shrink the window. Update metrics by removing elements from the left.
* **Track Global Result:** Maintain a variable (e.g., `max_length`, `max_sum`, `min_window_size`) that stores the best result found across all valid windows.
* **Frequency Maps/Sets:** Often used with dynamic windows to efficiently track elements within the current window (e.g., `unordered_map<char, int>` for character counts, `unordered_set<char>` for unique characters).
* **Initialization:** Carefully initialize `left = 0`, `right = 0`, and any window-specific metrics (sum, counts, etc.).
* **Edge Cases:** Consider empty inputs, single-element inputs, and cases where no valid window exists.
