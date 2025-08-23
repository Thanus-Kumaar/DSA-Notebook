import React from "react";
import { marked } from "marked";

export default function AIResponse({ aiResponse }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow overflow-y-auto h-full">
      {aiResponse ? (
        <div dangerouslySetInnerHTML={{ __html: marked.parse(aiResponse) }} />
      ) : (
        <em>⏳ Generate a response using the controls above.</em>
      )}
    </div>
  );
}
