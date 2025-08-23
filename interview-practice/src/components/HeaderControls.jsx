import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function HeaderControls({
  mode,
  setMode,
  language,
  setLanguage,
  toggleSidebar,
  selectedFolder,
  sidebarCollapsed
}) {
  const modeOptions = [
    { value: "practice", label: "Practice Mode" },
    { value: "cross", label: "Cross-links Mode" },
    { value: "edge", label: "Edge Case Mode" },
    { value: "originEvolution", label: "Origin & Evolution Mode" },
    { value: "essence", label: "Essence Mode" },
  ];

  const languageOptions = [
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];

  return (
    <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 shadow-sm flex-wrap gap-4">
      {/* Sidebar / Folder Info */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {sidebarCollapsed ? (
            <ChevronRightIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
          ) : (
            <ChevronLeftIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
          )}
        </button>
        <span className="text-gray-800 dark:text-gray-200 font-semibold">
          {selectedFolder || "No folder selected"}
        </span>
      </div>

      {/* Mode & API */}
      <div className="flex items-center gap-3 flex-wrap">
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          Mode:
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {modeOptions.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </label>

        <input
          type="password"
          placeholder="Gemini API Key"
          className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        />

        <button className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
          ✨ Generate
        </button>
      </div>

      {/* Language & Theme */}
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          Lang:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {languageOptions.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
