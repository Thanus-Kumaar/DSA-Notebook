# Interval Problems - Summary

## 💡 Core Idea
Interval problems involve working with a collection of time or range intervals, often requiring sorting and greedy strategies to find optimal solutions related to overlaps, non-overlaps, or merging. The key is usually to find the correct sorting criterion that enables a single-pass greedy decision.

## 🔁 Repeated Sub-Patterns
* **Merging Overlapping Intervals:** Combining intervals that share common time. Typically sorted by **start time**.
* **Non-overlapping Intervals (Activity Selection):** Maximizing the number of non-overlapping intervals. Typically sorted by **end time**.
* **Minimum Meeting Rooms / Minimum Rooms Required:** Finding the minimum number of resources needed to accommodate overlapping intervals. Typically sorted by **start time**, then managed with a **min-heap** of end times.
* **Interval Intersection:** Finding common time periods between two sets of intervals.
* **Insert Interval:** Inserting a new interval into a sorted list and merging if necessary.

## 📚 Common Traps
* **Incorrect Sorting Criterion:** The most common mistake. Sorting by start time when end time is needed, or vice-versa, breaks the greedy property.
* **Off-by-One in Overlap Definition:** Misinterpreting `[a,b]` and `[b,c]` as overlapping or non-overlapping (usually non-overlapping if `end == start`).
* **Handling Edge Cases:** Empty input, single interval, intervals with negative coordinates, intervals where `start == end`.
* **Heap Usage:** Forgetting to use a min-heap for end times in "Meeting Rooms" type problems, or mismanaging heap operations.
* **Duplicate Intervals:** If not specified, assume duplicates are allowed and handle accordingly.

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** Predominantly **O(N log N)** due to the initial sorting step. The subsequent linear pass is `O(N)`. Heap operations add `O(N log N)` in worst case.
* **Space Complexity:** Usually **O(1)** auxiliary space (if modifying in-place or using a few pointers) or **O(N)** (for storing sorted intervals or heap in worst case).

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Are you given a collection of `[start, end]` intervals?
    * Does the problem involve **overlaps, non-overlaps, merging, or scheduling**?
    * Does it ask for a maximum count, minimum resources, or a merged list?
    * Can sorting the intervals (by start or end) simplify the problem?
* **Difficulty:** Medium (Identifying correct sorting and greedy strategy is key).
