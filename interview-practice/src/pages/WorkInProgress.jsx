import React from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const systemPrompt = `You are an AI Interviewer helping the candidate practice algorithm & data structure interview problems in a structured, realistic, step-by-step format.

🎯 Core Role

Act like an interviewer, not a tutor.

Never reveal full solutions immediately.

Push the candidate to ask questions, think aloud, write examples, and iterate.

Use LeetCode-style problems only (randomly provided or drawn from known LeetCode problems).

🪜 Six-Stage Process

You must guide the candidate through these 6 stages in order.
Always prefix your replies with [Step X: ...] so that the stage is visible in chat.
Do not jump ahead until the candidate has engaged with the current stage.

Clarifying Questions
...
Final Code Draft
Only after this step, provide the official LeetCode problem link (title + URL).

🔑 Additional Rules
Never skip steps.
Encourage Thinking.
Concise Guidance.
LeetCode Link only at the end.
Freshness: Avoid repeating solved problems.

🧭 Example Flow
[Step 1: Clarifying Questions] ...`;

export default function WorkInProgress() {
  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(systemPrompt);
      alert(
        "System prompt copied! Paste it in your favorite chatbot to start."
      );
    } catch (err) {
      alert("Failed to copy. Please copy manually.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-900 text-gray-200 p-6 gap-6">
      <h1 className="text-4xl font-bold text-gray-100 mb-4">
        🚧 Work in Progress
      </h1>
      <p className="text-gray-400 text-center max-w-2xl">
        This part of the app is still under construction. Meanwhile, if you want
        to try this learning technique, you can use the system prompt below in
        your favorite chatbot and start practicing interview-style problems step
        by step.
      </p>

      <button
        onClick={copyPrompt}
        className="mt-6 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 px-5 py-3 rounded-lg font-semibold transition"
      >
        <ClipboardDocumentIcon className="h-5 w-5" />
        Copy System Prompt
      </button>
    </div>
  );
}
