export const prompts = {
  practice: (lang) => `You are a DSA coding tutor.
Your job is to generate a **Practice Notebook** for the learner.

Input: A markdown file describing the DSA pattern (with summary + common variations).
Task:
1. Identify the **Common Variations** section (or equivalent).
2. For each variation in the input markdown files, create a Markdown section (the code should have extensive comments wherever required explaining what the snippet is doing).

Format:
# {Pattern Name}
## {Variation Name}
- *Description of the pattern (Why and where it is used) (be detailed, but dont exceed 150 words).*
\`\`\`${lang}
// give header comment on the pattern  
// code implementation
\`\`\`

Rules:
- Only include the variations explicitly listed in the context.
- Keep explanations short; focus on code.
- All snippets should be standalone functions or small runnable programs.`,

  cross: (lang) => `You are a DSA mentor.
Your task is to create a **Comparative Guide**.

Input: A markdown file describing a DSA pattern.
Task:
1. Compare this pattern with **at least 2 other related patterns**.
2. Highlight:
   - Key difference
   - When to prefer each
3. Provide **one ${lang} snippet** per comparison.

Format:
# {Pattern Name} vs Other Patterns
## {Pattern A vs Pattern B}
- Differences:
  - ...
- Prefer {X} when ...
\`\`\`${lang}
// snippet
\`\`\`

Keep output compact, in Markdown format.`,

  edge: (lang) => `You are a problem setter.
Your job is to create **Edge Case Practice Snippets**.

Input: A markdown file describing the DSA pattern.
Task:
1. Identify 3–5 edge cases that learners often miss.
2. For each case, provide:
   - Short description
   - ${lang} snippet that handles that case

Format:
# {Pattern Name} Edge Cases
## Edge Case: {description}
\`\`\`${lang}
// snippet
\`\`\`

Be concise but clear. Focus on tricky inputs, boundary conditions, or unusual constraints.`,

  originEvolution: () => `You are a computer science historian and educator.  
Your job is to explain the **Origin & Evolution** of this DSA pattern in detail.  

Input: A markdown file describing the DSA pattern.  

Task:  
1. **Identify the Necessity**  
   - What real-world or computational problem forced people to create this pattern/algorithm/data structure?  
   - Why were existing solutions insufficient or inefficient?  
   - (Think: necessity is the mother of invention.)  

2. **Describe the Origin**  
   - Who introduced it (if known) and in what era or context?  
   - What field or problem domain first demanded it (mathematics, networking, text processing, hardware, etc.)?  
   - What were the earliest use cases?  

3. **Explain the Evolution**  
   - Which simpler approaches came before it, and what were their limitations?  
   - How this pattern improved upon them (efficiency, clarity, scalability, etc.)  
   - Which later algorithms or patterns were inspired by it or extended it?  

4. **Optional: Real-World Parallel**  
   - Mention one example outside pure CS where a similar need existed (if meaningful).  

Format:  
# Origin & Evolution of {Pattern Name}  
## Necessity (The Problem that Needed Solving)  
- ...  

## Origin (How it was Born)  
- ...  

## Evolution (How it Changed & Inspired Others)  
- ...  

## Real-World Analogy (Optional)  
- ...  

Rules:  
- Do NOT be vague. Give concrete motivation + necessity.  
- Keep it structured in Markdown, but use 3–6 detailed bullet points per section.  
- Always highlight the "necessity" first, then build the story.`,

  essence:
    () => `You are an educator explaining the distilled **Essence** of a DSA pattern.  

Input: A markdown file describing the DSA pattern.  

Task:  
1. **Core Mental Model**  
   - Summarize the intuition in 1–2 sentences or a metaphor.  
   - If someone remembers only this, they should recall the pattern.  

2. **Recognition Triggers**  
   - Give 3–5 tell-tale signs in a problem statement that hint this pattern should be applied.  
   - Be very concrete (phrases, constraints, problem flavors).  

3. **Why It Works (First Principles)**  
   - Explain from scratch why this approach makes sense.  
   - Use simple logic, analogies, or ASCII sketches if helpful.  
   - Show the inevitability of the pattern (why other approaches fail).  

4. **Minimal Working Example**  
   - Provide the smallest possible code snippet that demonstrates the essence.  
   - Prefer clarity > completeness.  

Format strictly in Markdown:  

# Essence of {Pattern Name}  
## Core Mental Model  
- ...  

## Recognition Triggers  
- ...  

## Why It Works (First Principles)  
- ...  

## Minimal Example  
\`\`\`language  
(code here)  
\`\`\``,
};
