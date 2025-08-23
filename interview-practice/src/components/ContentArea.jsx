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
    <div className="flex-1 flex flex-col overflow-y-scroll gap-4 hide-scrollbar">
      {/* Tabs */}
      <div className="flex gap-2 sticky top-0 z-10 bg-gray-900 p-2">
        <button
          className={`flex-1 p-2 rounded ${
            activeTab === "docs"
              ? "bg-gray-950 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("docs")}
        >
          📄 Docs
        </button>
        <button
          className={`flex-1 p-2 rounded ${
            activeTab === "ai"
              ? "bg-gray-950 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("ai")}
        >
          🤖 AI Response
        </button>
      </div>

      <div className="flex-1 flex min-h-0">
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
