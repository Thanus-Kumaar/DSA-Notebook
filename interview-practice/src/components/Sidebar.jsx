import React, { useState } from "react";
import {
  ChevronDoubleDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
  "12-graphs/12-01-dijkstras-algorithm",
  "12-graphs/12-02-bellman-ford-algorithm",
  "12-graphs/12-03-minimum-spanning-tree",
  "13-greedy-algorithms",
  "14-monotonic-stack",
  "15-prefix-sum",
  "16-algorithmic-insights",
  "17-interval-problems",
  "18-tries",
  "19-dsu",
  "20-bitmasking",
];

// Convert flat folder list to tree
function buildTree(folders) {
  const root = {};
  folders.forEach((path) => {
    const parts = path.split("/");
    let current = root;
    parts.forEach((part) => {
      if (!current[part]) current[part] = {};
      current = current[part];
    });
  });
  return root;
}

export default function Sidebar({
  collapsed,
  selectedFolder,
  setSelectedFolder,
}) {
  const tree = buildTree(folders);

  const FolderNode = ({ node, path = "" }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col gap-2">
        {Object.keys(node).map((key) => {
          const fullPath = path ? `${path}/${key}` : key;
          const hasChildren = Object.keys(node[key]).length > 0;

          return (
            <div key={fullPath}>
              <button
                onClick={() => setSelectedFolder(fullPath)}
                className={`flex items-center w-full text-left px-2 py-1 rounded transition-colors duration-200 ${
                  selectedFolder === fullPath
                    ? "bg-gray-950 text-white font-medium"
                    : "hover:bg-gray-800 text-gray-200"
                }`}
              >
                {hasChildren && (
                  <span
                    className="mr-1 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(!open);
                    }}
                  >
                    {open ? (
                      <ChevronDownIcon className="h-3 w-3 text-gray-200 hover:text-gray-950" />
                    ) : (
                      <ChevronRightIcon className="h-3 w-3 text-gray-200 hover:text-gray-950" />
                    )}
                  </span>
                )}
                {key}
              </button>
              {hasChildren && open && (
                <div className="ml-4">
                  <FolderNode node={node[key]} path={fullPath} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`transition-all duration-300 overflow-scroll hide-scrollbar ${
        collapsed ? "w-0 p-0 overflow-hidden" : "w-62"
      } bg-gray-900 border-r border-gray-700`}
    >
      {!collapsed && (
        <div className="flex flex-col gap-1 pr-2 py-2">
          <h2 className="text-lg font-semibold mb-2 text-gray-100">
            📚 Patterns
          </h2>
          <FolderNode node={tree} />
        </div>
      )}
    </div>
  );
}
