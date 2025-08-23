import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function InterviewPage({ generateAI }) {
  const [aiResponse, setAiResponse] = useState("");
  const [practiceNotes, setPracticeNotes] = useState("");
  const [apiKey, setApiKey] = useState("");

  return (
    <div className="flex flex-col h-full bg-gray-900 text-gray-200 p-4 gap-6">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-100">
          🎯 Interview Practice
        </h1>
        <div className="flex items-center gap-3">
          <input
            type="password"
            placeholder="Gemini API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="px-2 py-1 rounded border border-gray-700 bg-gray-800 text-gray-200"
          />
          <button
            onClick={() => generateAI(apiKey, setAiResponse)}
            className="px-4 py-1 bg-gray-800 hover:bg-gray-700 rounded transition"
          >
            ✨ Generate Question
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(aiResponse)}
            className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded transition flex items-center"
          >
            Copy System Prompt
            <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex gap-6 min-h-0">
        {/* Left: AI Interview Chat */}
        <div className="flex-[60%] bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-y-auto min-h-0">
          <h2 className="text-xl font-semibold mb-2 text-gray-100">
            AI Interview Chat
          </h2>
          <div className="prose prose-invert max-w-none">
            {aiResponse ? (
              <div dangerouslySetInnerHTML={{ __html: aiResponse }} />
            ) : (
              <p className="text-gray-400">Generate a question to start the interview simulation.</p>
            )}
          </div>
        </div>

        {/* Right: Plain Text Practice */}
        <div className="flex-[40%] bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col min-h-0">
          <h2 className="text-xl font-semibold mb-2 text-gray-100">
            ✍️ Practice Notes
          </h2>
          <textarea
            value={practiceNotes}
            onChange={(e) => setPracticeNotes(e.target.value)}
            placeholder="Write your examples, brute-force solution drafts, or optimized solution here..."
            className="flex-1 resize-none bg-gray-900 border border-gray-700 rounded p-3 text-gray-200 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
