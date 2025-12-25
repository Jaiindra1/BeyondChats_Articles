
import { GoogleGenAI } from "@google/genai";

const getAI = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const chatWithGemini = async (messages: { role: 'user' | 'model', text: string }[], systemInstruction: string) => {
  try {
    const ai = getAI();
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // We only send the last user message to the chat API in this simplified helper
    // but the full history can be passed to chat.sendMessage if needed.
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== 'user') return "I didn't receive a question.";

    const response = await chat.sendMessage({ message: lastMessage.text });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Could not connect to AI assistant.";
  }
};

export const summarizeArticle = async (articleTitle: string, content: string) => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Please summarize the following article concisely: Title: ${articleTitle}. Content: ${content}`,
      config: {
        systemInstruction: "You are a helpful assistant that summarizes technical blog posts for busy executives.",
      }
    });
    return response.text || "Could not summarize.";
  } catch (error) {
    console.error("Gemini Summarization Error:", error);
    return "Error: Summarization failed.";
  }
};
