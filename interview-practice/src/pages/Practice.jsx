import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeaderControls from "../components/HeaderControls";
import ContentArea from "../components/ContentArea";

export default function Practice() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [language, setLanguage] = useState("cpp");
  const [mode, setMode] = useState("practice");
  const [aiResponse, setAiResponse] = useState("");
  const [theme, setTheme] = useState("light");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className={`flex flex-row h-full overflow-y-scroll ${theme}`}>
      <Sidebar
        collapsed={sidebarCollapsed}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
      />
      <div className="flex-1 flex flex-col min-h-0">
        <HeaderControls
          mode={mode}
          setMode={setMode}
          language={language}
          setLanguage={setLanguage}
          toggleTheme={toggleTheme}
          toggleSidebar={toggleSidebar}
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
