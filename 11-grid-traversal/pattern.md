# Grid Traversal (BFS/DFS Applications) - Pattern

## When to Apply This Pattern
Apply the Grid Traversal pattern when:
* You are given a **2D matrix or grid** representing a map, board, or similar structure.
* The problem requires **exploring connected cells** based on adjacency rules (horizontal, vertical, diagonal).
* You need to find **paths**, count **connected components**, perform **flood fill**, or solve **maze-like problems**.
* Both BFS and DFS are applicable, but the choice depends on whether you need level-by-level exploration (BFS) or deep exploration of a path (DFS).

## Common Variations
* **Counting Islands/Connected Components:** Iterate through the grid; if an unvisited 'land' cell is found, start a BFS/DFS to mark its entire connected component as visited and increment a counter. (e.g., "Number of Islands").
* **Shortest Path on Grid (BFS):** Use BFS to find the minimum number of steps. The queue stores `(row, col, distance)`. Requires a `visited` array.
* **DFS for Path Existence/All Paths:** Use recursive DFS to explore paths. Often combined with backtracking if all paths are needed.
* **Flood Fill:** Start at a given cell and change the color/value of all connected cells that match the original color. Can be done with BFS or DFS.
* **Rotting Oranges:** Multi-source BFS where all rotten oranges start the BFS simultaneously to find the time for all fresh oranges to rot.
* **Word Search:** DFS/Backtracking on a grid to find if a word can be formed by adjacent letters.
* **Border-Based Traversal / Thinking in Reverse:** (e.g., "Surrounded Regions")
    * Problems where elements on the border have a special property, and this property "propagates" inwards.
    * Strategy: Instead of directly identifying elements that satisfy a complex condition (e.g., being "surrounded"), identify elements that *violate* the condition (e.g., 'O's connected to border 'O's) and mark them. Then, in a final pass, process the unmarked elements.

## Key Implementation Insights
* **Representing the Grid as a Graph:** Understand that each cell `(r, c)` is a node, and its valid neighbors are its edges.
* **Direction Arrays:** Crucial for concisely iterating through adjacent cells.
    * **4-directional (Up, Down, Left, Right):**
        `int dr[] = {-1, 1, 0, 0};`
        `int dc[] = {0, 0, -1, 1};`
        Or `std::vector<std::pair<int, int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};`
    * **8-directional (including diagonals):** Add `{-1, -1}, {-1, 1}, {1, -1}, {1, 1}` to the 4-directional.
* **Boundary Checks:** **Always** check if `new_row` and `new_col` are within the grid boundaries (`0 <= new_row < M` and `0 <= new_col < N`) *before* accessing `grid[new_row][new_col]`.
* **Visited Matrix:** Use a `std::vector<std::vector<bool>> visited(M, std::vector<bool>(N, false));` to keep track of cells that have already been processed. This is essential to prevent infinite loops in cyclic graphs (like grids) and redundant work.
* **Mark Visited Immediately:** When using a queue (BFS) or stack (iterative DFS), mark a cell as `visited[r][c] = true` *as soon as you add it to the queue/stack*, not after popping it. This prevents adding the same cell multiple times.
* **Passing by Reference:** Pass the `grid` and `visited` matrices to your BFS/DFS helper functions by `reference (&)` to avoid expensive copying.
* **BFS vs. DFS Choice:**
    * **BFS (Queue):** Preferred for shortest path problems (unweighted graphs) and level-by-level exploration.
    * **DFS (Recursion/Stack):** Preferred for path existence, finding all paths, and problems where exploring one branch completely before another is natural. Be mindful of recursion depth limits for large grids.
* **Modifying the Grid In-Place (Visited Optimization):** Sometimes, the problem allows you to modify the grid (e.g., change '1' to '0', or 'O' to 'A') instead of using a separate `visited` array. This is an $O(1)$ auxiliary space optimization for the visited tracking.
* **Multi-Pass Approach (for Border-Based Problems):** For problems like "Surrounded Regions", a common strategy is:
    1.  Perform initial traversals (BFS/DFS) from all relevant border cells.
    2.  Mark these "special" connected cells with a temporary placeholder character.
    3.  Make a final pass through the entire grid to update cells based on whether they were marked or not.
