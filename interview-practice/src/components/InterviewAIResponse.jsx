import React from "react";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "react-code-blocks";

export default function InterviewAIResponse({ aiResponse }) {
  // Extract JSON block if present
  const jsonRegex = /```json([\s\S]*?)```/;
  const match = aiResponse.match(jsonRegex);
  const jsonBlock = match ? match[1].trim() : null;

  // Remove JSON block from markdown
  const markdown = aiResponse.replace(jsonRegex, "").trim();

  return (
    <div className="flex flex-col gap-4">
      {jsonBlock && (
        <div className="bg-gray-800 border border-gray-700 rounded p-3">
          <h3 className="text-gray-200 font-semibold mb-1">Problem Link</h3>
          <pre className="bg-gray-900 p-2 rounded text-sm text-green-400">
            {jsonBlock}
          </pre>
        </div>
      )}

      {markdown && (
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
