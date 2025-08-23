import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function DocsView({ selectedFolder }) {
  const [summary, setSummary] = useState("");
  const [pattern, setPattern] = useState("");

  useEffect(() => {
    if (!selectedFolder) return;

    const baseURL =
      "https://raw.githubusercontent.com/Thanus-Kumaar/DSA-Notebook/main";

    const fetchDocs = async () => {
      const summaryRes = await fetch(`${baseURL}/${selectedFolder}/summary.md`).then(r => r.text());
      const patternRes = await fetch(`${baseURL}/${selectedFolder}/pattern.md`).then(r => r.text());

      setSummary(summaryRes);
      setPattern(patternRes);
    };

    fetchDocs();
  }, [selectedFolder]);

  if (!selectedFolder)
    return <div className="p-4">Select a topic to view summary and pattern.</div>;

  return (
    <div className="flex flex-col gap-4 overflow-auto h-full px-2">
      <div className="bg-white dark:bg-gray-800 rounded shadow">
        <div className="markdown-body">
          <ReactMarkdown
            children={summary}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded shadow">
        <div className="markdown-body">
          <ReactMarkdown
            children={pattern}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          />
        </div>
      </div>
    </div>
  );
}
