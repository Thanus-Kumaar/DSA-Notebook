import React, { useState } from "react";
import { generateAI } from "../utils/interviewer";
import InterviewAIResponse from "../components/InterviewAIResponse";

const interviewSteps = [
  {
    id: 0,
    title: "Clarifying Questions",
    description: "Ask important clarifying questions.",
  },
  {
    id: 1,
    title: "Examples",
    description: "Write base case to edge case examples.",
  },
  {
    id: 2,
    title: "Counter Examples",
    description: "Think of counter-examples for your approach.",
  },
  {
    id: 3,
    title: "Brute Force",
    description: "Draft brute-force solution here.",
  },
  {
    id: 4,
    title: "Identify Patterns",
    description: "Detect patterns to optimize solution.",
  },
  {
    id: 5,
    title: "Optimized Solution",
    description: "Finalize the optimized code here.",
  },
];

export default function InterviewPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [conversations, setConversations] = useState({});
  const [practiceNotes, setPracticeNotes] = useState({});
  const [userInput, setUserInput] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Add user message to conversation
    setConversations((prev) => ({
      ...prev,
      [stepIndex]: [
        ...(prev[stepIndex] || []),
        { role: "user", content: userInput },
      ],
    }));

    // Generate AI response with reduced token context
    const context = conversations[stepIndex] || [];
    const response = await generateAI(apiKey, interviewSteps[stepIndex].title, [
      ...context,
      { role: "user", content: userInput },
    ]);

    setConversations((prev) => ({
      ...prev,
      [stepIndex]: [
        ...(prev[stepIndex] || []),
        { role: "ai", content: response },
      ],
    }));

    setUserInput("");
  };

  const handleNextStep = async () => {
    if (stepIndex < interviewSteps.length - 1) setStepIndex(stepIndex + 1);
  };

  const handlePrevStep = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-gray-200 p-6 gap-6">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-100">
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
            onClick={handleSend}
            className="px-4 py-1 bg-gray-800 hover:bg-gray-700 rounded transition"
          >
            ✨ Send
          </button>
        </div>
      </header>

      {/* Steps Indicator */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {interviewSteps.map((step, idx) => (
          <div
            key={step.id}
            className={`flex-1 px-3 py-1 rounded-lg text-center cursor-pointer transition
              ${
                idx === stepIndex
                  ? "bg-gray-700 text-white font-semibold"
                  : "bg-gray-800 text-gray-400"
              }`}
            onClick={() => setStepIndex(idx)}
          >
            {step.title}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-6 min-h-0">
        {/* AI Chat */}
        <div className="flex-[60%] bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-y-auto min-h-0 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-gray-100">
            AI Guidance
          </h2>
          <div className="prose prose-invert max-w-none flex-1 overflow-y-auto mb-2">
            {conversations[stepIndex] && conversations[stepIndex].length > 0 ? (
              <InterviewAIResponse aiResponse={conversations[stepIndex]} />
            ) : (
              <p className="text-gray-400">
                Type your response and click Send to start the conversation.
              </p>
            )}
          </div>

          {/* User Input */}
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your response or ask clarifying questions..."
            className="w-full resize-none bg-gray-900 border border-gray-700 rounded p-2 text-gray-200 outline-none"
          />
        </div>

        {/* Practice Notes */}
        <div className="flex-[40%] bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col min-h-0">
          <h2 className="text-xl font-semibold mb-2 text-gray-100">
            ✍️ Practice Notes
          </h2>
          <textarea
            value={practiceNotes[stepIndex] || ""}
            onChange={(e) =>
              setPracticeNotes((prev) => ({
                ...prev,
                [stepIndex]: e.target.value,
              }))
            }
            placeholder="Write your notes, examples, and draft solutions here..."
            className="flex-1 resize-none bg-gray-900 border border-gray-700 rounded p-3 text-gray-200 outline-none"
          />
          <div className="flex justify-between mt-3">
            <button
              onClick={handlePrevStep}
              disabled={stepIndex === 0}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded transition disabled:opacity-50"
            >
              ← Previous
            </button>
            <button
              onClick={handleNextStep}
              disabled={stepIndex === interviewSteps.length - 1}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded transition disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
