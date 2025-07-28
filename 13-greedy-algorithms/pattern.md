# Greedy Algorithms - Pattern

## When to Apply This Pattern
Apply the Greedy Algorithms pattern when:
* You need to find an **optimal solution** (maximum or minimum) to a problem.
* The problem can be solved by making a sequence of **locally optimal choices**, where each choice appears to be the best at that moment.
* Crucially, you believe that these local choices will **lead to a globally optimal solution** without needing to reconsider or backtrack previous decisions. This is known as the **Greedy Choice Property**.
* The problem often involves picking items, making sequential decisions, or optimizing resource allocation.

## Common Variations
* **Activity Selection / Interval Scheduling:** Given a set of activities with start and end times, select the maximum number of non-overlapping activities. (Greedy choice: pick the activity that finishes earliest).
* **Knapsack Problem (Fractional):** If you can take fractions of items, pick items with the highest value-to-weight ratio. (0/1 Knapsack is typically DP).
* **Coin Change (Canonical Systems):** For standard currency systems (e.g., 1, 5, 10, 25 cents), always pick the largest coin possible. (This does *not* work for all arbitrary coin systems, where it becomes DP).
* **Jump Game / Maximum Jump Reach:** (As seen in "Jump Game") To reach the end, always try to jump to the point that offers the farthest future reach.
* **Minimum Spanning Tree (Prim's and Kruskal's):** Both are greedy algorithms. Prim's grows a tree by adding the cheapest edge from inside the tree to outside. Kruskal's adds the cheapest overall edge that doesn't form a cycle.
* **Huffman Coding:** Building a prefix code by repeatedly merging the two lowest frequency symbols.
* **Making Change:** For specific coin denominations (e.g., standard currency).

## Key Implementation Insights
* **Identify the Greedy Choice:** This is the most crucial step. What is the single best decision you can make at the current moment?
* **Sorting (Often Required):** Many greedy algorithms require the input data to be sorted based on a specific criterion (e.g., by finish time, by ratio, by ascending/descending value). This sets up the problem for making the correct local choices.
* **Iterative Approach:** Greedy algorithms are almost always implemented iteratively, with a single pass through the (often sorted) data.
* **Proof (Conceptual for Interviews):** While formal mathematical proof is difficult, in an interview, be ready to *explain* why your greedy choice is valid and doesn't lead to a suboptimal solution. Often, a "exchange argument" is used to show if an optimal solution doesn't use the greedy choice, it can be modified to use it and still be optimal or better.
* **Keep Track of State:** Maintain variables that track the progress of your greedy choices (e.g., `farthest_reach`, `current_time`, `remaining_capacity`).
* **Handle Edge Cases:** Empty inputs, single elements, all identical values, constraints that might block progress (like `0` in "Jump Game").
