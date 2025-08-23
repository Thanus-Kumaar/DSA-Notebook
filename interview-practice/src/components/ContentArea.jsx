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
    <div className="flex-1 flex flex-col gap-4 overflow-hidden">
      {/* Tabs */}
      <div className="flex gap-2 sticky top-0 z-10 bg-gray-50 dark:bg-gray-900 p-2 rounded">
        <button
          className={`flex-1 p-2 rounded ${
            activeTab === "docs" ? "bg-indigo-500 text-white" : "bg-gray-300 dark:bg-gray-700"
          }`}
          onClick={() => setActiveTab("docs")}
        >
          📄 Docs
        </button>
        <button
          className={`flex-1 p-2 rounded ${
            activeTab === "ai" ? "bg-indigo-500 text-white" : "bg-gray-300 dark:bg-gray-700"
          }`}
          onClick={() => setActiveTab("ai")}
        >
          🤖 AI Response
        </button>
      </div>

      <div className="flex-1 flex gap-4 overflow-hidden">
        {/* Left side: Docs or AI */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "docs" ? (
            <DocsView selectedFolder={selectedFolder} />
          ) : (
            <AIResponse aiResponse={aiResponse} />
          )}
        </div>

        {/* Right side: Editor */}
        <div className="flex-1 h-full">
          <EditorContainer language={language} />
        </div>
      </div>
    </div>
  );
}
