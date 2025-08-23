import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeaderControls from "../components/HeaderControls";
import ContentArea from "../components/ContentArea";
import { prompts } from "../prompts/ModePrompts";

export default function Practice() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [language, setLanguage] = useState("cpp");
  const [mode, setMode] = useState("practice");
  const [aiResponse, setAiResponse] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  async function generateAI(apiKey) {
    if (!selectedFolder) return alert("Select a folder first.");
    if (!apiKey) return alert("Enter your Gemini API key.");

    const baseUrl =
      "https://raw.githubusercontent.com/Thanus-Kumaar/DSA-Notebook/main";

    const summary = await fetch(`${baseUrl}/${selectedFolder}/summary.md`)
      .then((r) => (r.ok ? r.text() : "# Missing summary.md"))
      .catch(() => "# Missing summary.md");

    const pattern = await fetch(`${baseUrl}/${selectedFolder}/pattern.md`)
      .then((r) => (r.ok ? r.text() : "# Missing pattern.md"))
      .catch(() => "# Missing pattern.md");

    const context = summary + "\n\n" + pattern;
    const systemPrompt = prompts[mode](language); // your prompts object
    const userPrompt = `${systemPrompt}\n\nPattern context:\n${context}`;

    setAiResponse("⏳ Generating response...");

    try {
      const resp = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": apiKey,
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userPrompt }] }],
          }),
        }
      ).then((r) => r.json());

      const text =
        resp.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response.";
      setAiResponse(text);
    } catch (err) {
      setAiResponse("⚠️ Error generating AI response.");
      console.error(err);
    }
  }

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div
      className={`flex flex-row h-full overflow-y-scroll hide-scrollbar dark`}
    >
      <Sidebar
        collapsed={sidebarCollapsed}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
      />
      <div className={`flex-1 flex flex-col min-h-0 hide-scrollbar dark`}>
        <HeaderControls
          mode={mode}
          setMode={setMode}
          language={language}
          setLanguage={setLanguage}
          toggleSidebar={toggleSidebar}
          selectedFolder={selectedFolder}
          sidebarCollapsed={sidebarCollapsed}
          generateAI={generateAI}
        />
        <ContentArea
          selectedFolder={selectedFolder}
          language={language}
          mode={mode}
          aiResponse={aiResponse}
          setAiResponse={setAiResponse}
        />
      </div>
    </div>
  );
}
