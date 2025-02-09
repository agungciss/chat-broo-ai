import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-latest",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.9,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const palembangPrompt = `Respon dio pakek bahaso palembang. Buatlah respon yang ngelawak samo mengandung roasting ringan bae untuk pengguno samo kasih pujian dikit bae untuk dio: "${prompt}"`;

  const result = await chatSession.sendMessage(palembangPrompt);
  const response = await result.response.text();
  console.log(response);

  return response;
}

export default run;