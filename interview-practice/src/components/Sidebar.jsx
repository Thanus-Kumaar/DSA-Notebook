import React from "react";

const folders = [
  "01-hashing",
  "02-two-pointers",
  "03-linked-list",
  "04-sliding-window",
  "05-trees",
  "06-bfs",
  "07-backtracking",
  "08-dynamic-programming",
  "09-binary-search",
  "10-heaps-priority-queues",
  "11-grid-traversal",
  "12-graphs",
  "13-greedy-algorithms",
  "14-monotonic-stack",
  "15-prefix-sum",
  "16-algorithmic-insights",
  "17-interval-problems",
  "18-tries",
  "19-dsu",
  "20-bitmasking",
];

export default function Sidebar({
  collapsed,
  selectedFolder,
  setSelectedFolder,
}) {
  return (
    <div
      className={
        collapsed
          ? "transition-all duration-300 overflow-scroll hide-scrollbar"
          : "transition-all duration-300 overflow-scroll"
      }
    >
      {!collapsed && (
        <div
          className={`flex flex-col gap-1 p-3 overflow-scroll bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 ${
            collapsed ? "w-0 p-0 overflow-hidden" : "w-64"
          }`}
        >
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
            📚 Patterns
          </h2>
          <div className="flex flex-col gap-1">
            {folders.map((folder) => (
              <button
                key={folder}
                onClick={() => setSelectedFolder(folder)}
                className={`text-left px-3 py-2 rounded-lg transition-colors duration-200 
              ${
                selectedFolder === folder
                  ? "bg-amber-400 text-white font-medium"
                  : "hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
              >
                {folder}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
