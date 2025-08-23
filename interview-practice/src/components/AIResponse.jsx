import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function AIResponse({ aiResponse }) {
  if (!aiResponse) {
    return (
      <div className="p-4 bg-gray-900 rounded shadow">
        <p>🤖 AI response will appear here.</p>
      </div>
    );
  }

  return (
    <div className="px-2 overflow-y-auto min-h-0 prose dark:prose-invert max-w-full">
      <div className="markdown-body">
        <ReactMarkdown
          children={aiResponse}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
    </div>
  );
}
