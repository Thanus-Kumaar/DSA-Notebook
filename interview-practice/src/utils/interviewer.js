import { INTERVIEW_PROMPT } from "../prompts/InterviewPrompt";

export async function generateAI(apiKey, stepTitle, context = "") {
  if (!apiKey) return "⚠️ No API key provided.";

  const userPrompt = `
Step: ${stepTitle}
Context / Candidate Notes:
${context}
`;

  const body = {
    contents: [
      {
        parts: [{ text: INTERVIEW_PROMPT }, { text: userPrompt }],
      },
    ],
  };

  const resp = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey,
      },
      body: JSON.stringify(body),
    }
  ).then((r) => r.json());

  return resp.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response.";
}
