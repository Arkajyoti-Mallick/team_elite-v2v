const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/` +
  `gemini-2.5-flash:generateContent?key=${API_KEY}`;

/**
 * Ask the SafeSphere AI assistant.
 */
export async function askAI(userMessage) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `
You are SafeSphere AI.

You are a women's safety assistant.

Rules:
- Give calm, practical safety advice.
- Keep answers short and clear.
- Encourage contacting emergency services when appropriate.
- Never invent emergency phone numbers.
- If the user says they are in immediate danger, advise them to use the SOS feature and contact local emergency services.
- Do not provide legal or medical advice beyond general guidance.

User:
${userMessage}
                `,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Unable to contact the AI service.");
    }

    const data = await response.json();

    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response."
    );
  } catch (error) {
    console.error(error);

    return "The AI assistant is currently unavailable. Please try again later.";
  }
}