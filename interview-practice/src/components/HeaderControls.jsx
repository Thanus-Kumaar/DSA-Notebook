import React, { useState } from "react";

export default function HeaderControls({
  mode, setMode, language, setLanguage, toggleTheme, toggleSidebar
}) {
  const [apiKey, setApiKey] = useState("");
  const modeInfoMap = {
    practice: "Practice Mode:\nGenerates 3–5 code snippets for each variation of the pattern.",
    cross: "Cross-links Mode:\nCompares this pattern with related ones and shows differences + examples.",
    edge: "Edge Case Mode:\nGenerates tricky boundary/variant cases with code snippets.",
    originEvolution: "Origin & Evolution Mode:\nExplains historical motivation, predecessors, and successors.",
    essence: "Essence Mode:\nCaptures core mental model and reasoning."
  };

  return (
    <div className="controls">
      <div className="control-group">
        <button onClick={toggleSidebar}>📂</button>
        <span id="selectedFolder">Folder: </span>
      </div>

      <div className="control-group">
        <label>
          Mode:
          <span data-info={modeInfoMap[mode]} className="modeInfo">ⓘ</span>
          <select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="practice">Practice Mode</option>
            <option value="cross">Cross-links Mode</option>
            <option value="edge">Edge Case Mode</option>
            <option value="originEvolution">Origin & Evolution Mode</option>
            <option value="essence">Essence Mode</option>
          </select>
        </label>
        <input
          type="password"
          placeholder="Gemini API Key"
          value={apiKey}
          onChange={e => setApiKey(e.target.value)}
        />
        <button>✨ Generate</button>
      </div>

      <div className="control-group">
        <label>Lang:</label>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
        <button onClick={toggleTheme}>🌙 Theme</button>
      </div>
    </div>
  );
}
