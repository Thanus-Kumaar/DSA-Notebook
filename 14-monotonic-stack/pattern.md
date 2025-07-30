# Monotonic Stack - Pattern

## When to Apply This Pattern
Apply the Monotonic Stack pattern when:
* You need to find the **"next greater element"**, **"next smaller element"**, **"previous greater element"**, or **"previous smaller element"** for each element in a given array or sequence.
* A naive `O(N^2)` approach (nested loops) would be too slow.
* The problem involves finding a **bounding element** (left or right) for each item in a list, often to calculate areas, volumes, or spans.

## Common Variations
* **Next Greater Element (NGE):** For each element `x`, find the first element to its right that is greater than `x`. (e.g., "Daily Temperatures" / "Measurements problem").
* **Next Smaller Element (NSE):** For each element `x`, find the first element to its right that is smaller than `x`.
* **Previous Greater Element (PGE):** For each element `x`, find the first element to its left that is greater than `x`.
* **Previous Smaller Element (PSE):** For each element `x`, find the first element to its left that is smaller than `x`.
* **Largest Rectangle in Histogram:** Find the largest rectangle that can be formed in a histogram. A monotonic stack helps find the nearest smaller elements on both sides for each bar.
* **Trapping Rain Water:** Calculate how much water can be trapped between bars. Monotonic stack can help find bounding walls.
* **Stock Span Problem:** For each day, find the number of consecutive days before it where the price was less than or equal to the current day's price.

## Key Implementation Insights

1.  **Choose Stack Type (Increasing/Decreasing):**
    * **Monotonically Increasing Stack:** Used when you're looking for the *next smaller* or *previous greater* element. Elements are pushed such that `stack.top()` is always the smallest.
    * **Monotonically Decreasing Stack:** Used when you're looking for the *next greater* or *previous smaller* element. Elements are pushed such that `stack.top()` is always the largest.
    * **Rule of Thumb:** If you want to find the *next greater* element, you want to pop elements that are *smaller* than the current one. So, the stack should maintain a decreasing order. If you want the *next smaller*, you pop *larger* elements, so the stack maintains an increasing order.

2.  **Traversal Direction:**
    * To find **"Next"** (to the right): Iterate the array **from right to left**.
    * To find **"Previous"** (to the left): Iterate the array **from left to right**.

3.  **What to Store in Stack:**
    * Often, store **indices** (`int`) rather than values. This allows you to:
        * Calculate distances (`stack.top() - i`).
        * Access the actual value (`arr[stack.top()]`).
        * Handle duplicate values correctly if their indices matter.

4.  **Algorithm Template (General for NGE to the Right):**

    ```cpp
    // Initialize result array (e.g., with 0s or -1s)
    vector<int> result(N);
    // Initialize an empty stack (stores indices)
    stack<int> s;

    // Iterate from right to left
    for (int i = N - 1; i >= 0; --i) {
        // While stack is not empty AND current element is >= element at stack top
        // (This means elements at stack top are not the "next greater" for current element,
        // and current element might be the "next greater" for elements further left)
        while (!s.empty() && arr[i] >= arr[s.top()]) { // For strictly greater, use `>`
            s.pop(); // Pop elements that are no longer candidates
        }

        // If stack is not empty, stack.top() is the index of the next greater element
        if (!s.empty()) {
            result[i] = s.top() - i; // Or s.top() if you need the index, or arr[s.top()] for value
        } else {
            result[i] = 0; // No next greater element found (or -1, or N-i-1 depending on problem)
        }

        s.push(i); // Push current index onto the stack
    }
    return result;
    ```

5.  **Handling Equal Elements:** Be precise with `>` vs `>=` or `<` vs `<=`. If "strictly greater" is required, use `>` or `<`. If "greater than or equal to" is allowed, use `>=` or `<=`. This affects what gets popped.

6.  **Final Elements in Stack:** Elements remaining in the stack at the end of the traversal typically mean they have no "next" (or "previous") greater/smaller element in the direction of traversal.
