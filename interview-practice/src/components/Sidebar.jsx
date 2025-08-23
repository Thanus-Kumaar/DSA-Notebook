import React from "react";

const folders = [
  "01-hashing", "02-two-pointers", "03-linked-list", "04-sliding-window",
  "05-trees", "06-bfs", "07-backtracking", "08-dynamic-programming",
  "09-binary-search", "10-heaps-priority-queues", "11-grid-traversal",
  "12-graphs", "13-greedy-algorithms", "14-monotonic-stack", "15-prefix-sum",
  "16-algorithmic-insights", "17-interval-problems", "18-tries", "19-dsu", "20-bitmasking"
];

export default function Sidebar({ collapsed, selectedFolder, setSelectedFolder }) {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <h2>📚 Patterns</h2>
      <ul>
        {folders.map(folder => (
          <li
            key={folder}
            className={selectedFolder === folder ? "active" : ""}
            onClick={() => setSelectedFolder(folder)}
          >
            {folder}
          </li>
        ))}
      </ul>
    </div>
  );
}
