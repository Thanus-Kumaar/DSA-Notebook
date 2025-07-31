# Backtracking - Pattern

## When to Apply This Pattern
Apply the Backtracking pattern when:
* You need to find **all (or sometimes just one) solutions** to a problem by exploring a **search space of choices**.
* The problem can be modeled as building a solution step-by-step, where each step involves making a **choice** from a set of options.
* Making a choice at one step might **constrain** the choices available at subsequent steps.
* You need a mechanism to **"undo" (backtrack)** a choice if it leads to a dead end or an invalid solution, allowing you to explore other alternatives.
* Problems often involve generating combinations, permutations, subsets, or solving constraint satisfaction problems (like N-Queens, Sudoku).

## Common Variations
* **Generating Combinations:** Selecting `k` items from `n` where order doesn't matter. The key is to pass a `start_index` to the recursive call to ensure elements are picked in increasing order, avoiding duplicates.
* **Generating Permutations:** Arranging `n` items in all possible sequences. Requires tracking which items have already been "used" in the current permutation (e.g., with a boolean `visited` array or a hash set).
* **Generating Subsets:** Finding all possible subsets (including the empty set) of a given set. Similar to combinations, but the target size `k` is not fixed.
* **Combination Sum / Subsets Sum:** Finding combinations of numbers from a given set that sum up to a target value. May involve allowing element reuse or handling duplicates in the input set.
* **Grid/Board Problems (N-Queens, Sudoku Solver, Word Search):** Exploring paths or placements on a grid, often involving `isValid` checks at each step and backtracking when a constraint is violated.
* **Parentheses Generation:** Generating all valid combinations of parentheses.

## Key Implementation Insights
* **Recursive Helper Function:** Backtracking is almost always implemented with a recursive helper function.
* **State Parameters:** The helper function's parameters should clearly define the "state" of the current partial solution (e.g., `current_combination`, `start_index`, `remaining_target_sum`, `visited_mask`).
* **The "Choose, Explore, Unchoose" Cycle:** This is the fundamental pattern:
    1.  **Choose:** Make a decision (e.g., add an element to `current_solution`).
    2.  **Explore:** Recursively call the helper function with the updated state.
    3.  **Unchoose (Backtrack):** Undo the decision made in step 1 (e.g., remove the element from `current_solution`). This is crucial to allow other choices to be explored from the same point in the decision tree.
* **Base Case(s):**
    * **Success Condition:** When a valid complete solution is found (e.g., `current_solution.size() == k`). Add it to the results and `return`.
    * **Failure/Pruning Condition:** When the current path is guaranteed not to lead to a solution (e.g., `current_solution.size() > k`, or not enough elements remaining). `return` early or `break` the loop.
* **Avoiding Duplicates:**
    * For **combinations**, pass a `start_index` to the recursive call, ensuring you only pick numbers strictly greater than or equal to the last picked number.
    * For **permutations** or problems with duplicate elements in the input, use a `visited` array/set or sort the input and handle duplicates carefully.
* **Pruning with Sorting:** For problems like "Combination Sum", sorting the input array allows you to prune search branches early. If `current_sum + candidates[i] > target` and the array is sorted, you can `break` the loop, as all subsequent candidates will also be too large.
* **Drawing the Decision Tree:** This is the most powerful tool for understanding and designing backtracking algorithms. Visualize the choices, the recursive calls, and the backtracking steps.
