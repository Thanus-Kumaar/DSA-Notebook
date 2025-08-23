import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeaderControls from "../components/HeaderControls";
import ContentArea from "../components/ContentArea";

export default function Practice() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [language, setLanguage] = useState("cpp");
  const [mode, setMode] = useState("practice");
  const [aiResponse, setAiResponse] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
