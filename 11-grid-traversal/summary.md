# Grid Traversal (BFS/DFS Applications) - Summary

## 💡 Core Idea
Grid traversal problems involve exploring cells in a 2D matrix (grid) to find paths, count connected components, or propagate information. These grids are essentially implicit graphs where each cell is a node and adjacent cells (horizontally, vertically, or diagonally) are connected by edges. BFS and DFS are the primary algorithms used for traversal.

## 🔁 Repeated Sub-Patterns
* **Counting Connected Components:** Identifying distinct groups of connected cells (e.g., "Number of Islands").
* **Shortest Path on Grid:** Finding the minimum number of steps to go from one cell to another in an unweighted grid (classic BFS).
* **Path Existence/All Paths:** Determining if a path exists, or finding all possible paths (often DFS/Backtracking).
* **Flood Fill/Matrix Transformation:** Changing values of connected cells (e.g., "Flood Fill", "Rotting Oranges").
* **Multi-Source BFS on Grid:** Starting BFS from multiple initial points simultaneously (e.g., "01 Matrix").
* **Maze Solving:** Finding a path through a maze.

## 📚 Common Traps
* **Incorrect Boundary Checks:** Forgetting to check `row >= 0 && row < m && col >= 0 && col < n` for `new_row`, `new_col` before accessing `grid[new_row][new_col]`. This leads to out-of-bounds errors.
* **Forgetting to Mark Visited:** Not using a `visited` 2D array (or modifying the grid itself) to prevent re-visiting cells, leading to infinite loops (especially in cyclic graphs like grids) and TLE.
* **Incorrect Direction Array:** Errors in defining `dx`, `dy` for 4-directional or 8-directional movement.
* **Passing by Value:** Passing the `grid` or `visited` matrix by value to recursive/helper functions, leading to changes not persisting.
* **Off-by-One Errors:** In loop bounds or grid dimensions (`m` vs `n`).

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** **O(M * N)**, where M is the number of rows and N is the number of columns. Each cell is visited and processed at most once.
* **Space Complexity:** **O(M * N)** for the `visited` matrix and, in the worst case, for the queue (BFS) or recursion stack (DFS) if the grid is entirely connected.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Is the input a **2D array (grid/matrix)**?
    * Does the problem involve exploring **adjacent cells** (horizontally, vertically, or diagonally)?
    * Does it ask for counting **connected components**, finding **paths**, or **propagating information** across connected cells?
    * Do you need to ensure cells are visited only once?
* **Difficulty:** Medium (basic traversal is medium, complex constraints or multi-source can be harder).
