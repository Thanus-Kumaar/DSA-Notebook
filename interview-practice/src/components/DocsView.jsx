import React, { useEffect, useState } from "react";
import { marked } from "marked";

export default function DocsView({ selectedFolder }) {
  const [summary, setSummary] = useState("");
  const [pattern, setPattern] = useState("");

  useEffect(() => {
    if (!selectedFolder) return;

    const fetchDocs = async () => {
      const summaryRes = await fetch(`${selectedFolder}/summary.md`).then(r => r.text()).catch(() => "# Missing summary.md");
      const patternRes = await fetch(`${selectedFolder}/pattern.md`).then(r => r.text()).catch(() => "# Missing pattern.md");

      setSummary(marked.parse(summaryRes));
      setPattern(marked.parse(patternRes));
    };

    fetchDocs();
  }, [selectedFolder]);

  if (!selectedFolder) {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
        <h3>Welcome 👋</h3>
        <p>Select a topic from the sidebar to view summary and pattern.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow" dangerouslySetInnerHTML={{ __html: summary }} />
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow" dangerouslySetInnerHTML={{ __html: pattern }} />
    </div>
  );
}
