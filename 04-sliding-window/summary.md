# Sliding Window - Summary

## 💡 Core Idea
The Sliding Window is a technique used on linear data structures (arrays, strings, linked lists) to efficiently solve problems involving contiguous sub-sequences (subarrays, substrings). It involves maintaining a "window" of elements and adjusting its size (by moving left and right pointers) to satisfy certain conditions.

## 🔁 Repeated Sub-Patterns
* **Fixed-Size Window:** The window size `k` is constant throughout the traversal (e.g., maximum sum subarray of size `k`).
* **Dynamic/Shrinking Window:** The window size changes based on conditions. Typically, the window expands from the right, and then shrinks from the left if a condition is violated, until it becomes valid again.
* **Running Aggregate (Sum/Count/Min/Max):** Maintaining an aggregate value (sum, product, character counts, etc.) within the current window as it slides.
* **Problems with `k` Changes/Replacements:** Finding the longest/shortest window by allowing at most `k` modifications to make elements uniform or unique (e.g., "Longest Repeating Character Replacement").

## 📚 Common Traps
* **Off-by-One Errors:** Incorrectly calculating window size or boundary conditions (e.g., `right - left + 1`).
* **Incorrect Initialization:** Not setting `max_length`, `min_length`, or `max_sum` variables appropriately (e.g., to 0, or `INT_MIN`/`INT_MAX`).
* **Missing Edge Cases:** Empty arrays, single-element arrays, or arrays where no valid window exists.
* **Updating Frequencies/Counts:** For dynamic windows, correctly adding elements when expanding and removing elements when shrinking is critical for hash maps/frequency arrays.
* **When to Shrink (Crucial for Dynamic Window):** Clearly define the condition that triggers the window to shrink from the left (often involves a `while` loop for `left`).
* **Incorrect `max_freq` Handling (for `k`-replacement problems):** Not correctly updating or interpreting `max_freq` when the left pointer moves. `max_freq` only needs to increase or stay the same in a robust solution; it doesn't strictly need to recalculate downwards.

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** Predominantly **O(N)**. Although there are nested loops (one for `right` pointer, one for `left` pointer), each element is typically processed (added to/removed from window) a constant number of times. This makes it highly efficient.
* **Space Complexity:** Often **O(1)** if only a few variables are needed (like in "Best Time to Buy and Sell Stock" or "Longest Repeating Character Replacement" due to fixed alphabet size). Can be **O(K)** or **O(AlphabetSize)** if a hash map/frequency array is used to store window contents (where K is the max number of distinct elements or alphabet size).

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem involve finding a subarray, substring, or contiguous segment?
    * Does it ask for the "maximum/minimum sum," "longest/shortest," or "count of subarrays/substrings" that satisfy a certain property?
    * Can the solution be found by iterating through the array/string only once?
    * Does the problem involve a constraint on the number of distinct elements, sum, or other properties within a contiguous range (e.g., at most `k` changes allowed)?
* **Difficulty:** Easy to Hard (concept is simple, but managing dynamic window conditions and specific constraints can be complex).
