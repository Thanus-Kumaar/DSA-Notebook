import React, { useState, useEffect } from "react";
import DocsView from "./DocsView";
import AIResponse from "./AIResponse";
import EditorContainer from "./EditorContainer";

export default function ContentArea({
  selectedFolder,
  language,
  mode,
  aiResponse,
  setAiResponse,
}) {
  const [activeTab, setActiveTab] = useState("docs");

  return (
    <div className="flex-1 flex flex-col overflow-y-scroll gap-4">
      {/* Tabs */}
      <div className="flex gap-2 sticky top-0 z-10 bg-gray-50 dark:bg-gray-800 p-2">
        <button
          className={`flex-1 p-2 rounded ${
            activeTab === "docs"
              ? "bg-indigo-500 text-white"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
          onClick={() => setActiveTab("docs")}
        >
          📄 Docs
        </button>
        <button
          className={`flex-1 p-2 rounded ${
            activeTab === "ai"
              ? "bg-indigo-500 text-white"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
          onClick={() => setActiveTab("ai")}
        >
          🤖 AI Response
        </button>
      </div>

      <div className="flex-1 flex gap-4 min-h-0">
        {/* Left side */}
        <div className="flex-[60%] overflow-y-auto min-h-0">
          {activeTab === "docs" ? (
            <DocsView selectedFolder={selectedFolder} />
          ) : (
            <AIResponse aiResponse={aiResponse} />
          )}
        </div>

        {/* Right side */}
        <div className="flex-[40%] min-h-0">
          <EditorContainer language={language} />
        </div>
      </div>
    </div>
  );
}
