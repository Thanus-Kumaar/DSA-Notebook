# Interval Problems - Pattern

## When to Apply This Pattern
Apply the Interval Problems pattern when:
* You are given a collection of **intervals**, typically represented as `[start, end]` pairs.
* The problem requires operations based on the **relationships between these intervals**, such as:
    * Identifying overlaps.
    * Finding non-overlapping subsets.
    * Merging overlapping intervals.
    * Scheduling or resource allocation.
* The solution often involves **sorting** the intervals based on a specific criterion (start time or end time) to enable a greedy, single-pass traversal.

## Common Variations
* **Merge Intervals:**
    * **Goal:** Combine all overlapping intervals into a set of non-overlapping ones.
    * **Strategy:** Sort intervals by **start time**. Iterate, if current interval overlaps with the last merged interval, update the last merged interval's end time to `max(last_end, current_end)`. Otherwise, add current to result and make it the new last merged.
    * **Example:** `[[1,3],[2,6],[8,10],[15,18]]` -> `[[1,6],[8,10],[15,18]]`
* **Non-overlapping Intervals (Activity Selection):**
    * **Goal:** Find the maximum number of non-overlapping intervals. (Equivalent to minimum intervals to remove to make all non-overlapping).
    * **Strategy:** Sort intervals by **end time**. Greedily pick the first interval. Then, iterate through the rest, picking an interval only if its start time is greater than or equal to the end time of the previously picked interval.
    * **Example:** `[[1,3],[2,4],[3,5]]` -> `[[1,3],[3,5]]` (2 intervals)
* **Meeting Rooms II (Minimum Rooms Required):**
    * **Goal:** Determine the minimum number of rooms (resources) needed to accommodate all meetings (intervals).
    * **Strategy:** Sort intervals by **start time**. Use a **min-heap (priority queue)** to store the **end times** of currently active meetings. For each new meeting, if its start time is `>=` `heap.top()` (earliest finishing meeting), pop from heap (reuse room). Always push current meeting's end time to heap. The max size of the heap is the answer.
    * **Example:** `[[0,30],[5,10],[15,20]]` -> 2 rooms
* **Interval Intersection:** Finding the common parts between intervals.
* **Insert Interval:** Given a sorted list of non-overlapping intervals and a new interval, insert the new interval and merge if necessary.

## Key Implementation Insights
* **Crucial Sorting:** The first and most important step is often to sort the intervals. The choice of sorting key (start time vs. end time) is critical and depends on the specific problem.
    * **Sort by Start Time:** Good for merging, or when you need to process events chronologically.
    * **Sort by End Time:** Good for maximizing non-overlapping activities (greedy choice property).
* **Greedy Choice Property:** Understand *why* the chosen sorting and selection rule leads to the optimal global solution.
* **Managing Active Intervals (Heaps):** For problems like "Meeting Rooms II" where you need to track currently active intervals and find the one that finishes earliest, a min-heap is the ideal data structure.
* **Pointer/Iteration Management:** After sorting, most interval problems can be solved with a single pass using one or two pointers/variables to track the current state (e.g., `last_merged_end`, `earliest_available_room_end`).
* **Overlap Definition:** Be precise about what constitutes an overlap (`end > start` vs. `end >= start`).
* **Edge Cases:** Always test with empty lists, single intervals, and intervals that are adjacent but not overlapping.
