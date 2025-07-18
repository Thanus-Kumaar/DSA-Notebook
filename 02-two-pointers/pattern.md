# Two Pointers - Pattern

## When to Apply This Pattern
Apply the Two Pointers pattern when:
* You need to **traverse a list, array, or string** and analyze pairs of elements or sections.
* The input data is **sorted** (or can be easily sorted), which allows for efficient comparisons and movement.
* You need to perform **in-place modifications** to an array/list while preserving relative order.
* You are **merging** two or more sorted data structures into a single sorted one.
* You are looking for specific elements or patterns from **opposite ends** of a sequence.

## Common Variations
* **Palindromes:** One pointer at start, one at end, moving inwards, comparing characters (e.g., "Valid Palindrome").
* **Reversal:** One pointer at start, one at end, swapping elements as they move inwards (e.g., "Reverse String").
* **Two Sum (Sorted Array):** One pointer at start, one at end, moving inwards based on sum comparison.
* **Removing Duplicates/Moving Elements:** One "read" pointer iterates, one "write" pointer places elements (e.g., "Move Zeroes", "Remove Duplicates from Sorted Array").
* **Merging Sorted Lists/Arrays:** Pointers on each input structure, building a new sorted output by picking the smallest at each step (e.g., "Merge Two Sorted Lists").
* **Cycle Detection (Fast & Slow):** Two pointers moving at different speeds to detect cycles in linked lists or arrays (e.g., "Linked List Cycle").

## Key Implementation Insights
* **Initialization:** Carefully set initial positions of pointers (start, end, or both at start).
* **Movement Rules:** Define how each pointer advances based on comparisons or conditions (e.g., `left++`, `right--`, `slow=slow->next`, `fast=fast->next->next`).
* **Loop Termination:** Establish clear conditions for when the loop should stop (`left < right`, `ptr != nullptr`, `fast != nullptr && fast->next != nullptr`). Avoid off-by-one errors.
* **Skipping/Filtering:** If non-relevant elements exist (e.g., non-alphanumeric chars), use inner loops to advance pointers past them.
* **Dummy Node (Linked Lists):** For problems building a new list, a dummy head node simplifies initial attachment logic.
